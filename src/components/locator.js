import React, { Component } from "react"
// import { Link } from "gatsby"
import {breakWordReturnThree} from "../utils/utils"
import mapboxgl from 'mapbox-gl'
import { tryFn } from "../utils/utils"
import _ from "lodash-es"

//Hide API Key in Node
mapboxgl.accessToken = `pk.eyJ1IjoidmlqYXlyYWRuZXQiLCJhIjoiY2s1eWs2OHo3MmhtODNlbWpmcjYzcHJuayJ9.pp4YO_NmgZbILRLZCxTWBQ`

class Locator extends Component {
    constructor(props){
        super(props)
        this.state = {
            map: undefined,
            matches: [],
            mapLoaded: false,
            locations: this.props.data.allNodeCenterLocation.nodes
        }
        this.initMap = this.initMap.bind(this);
        this.changeMap = this.changeMap.bind(this);
        this.searchPlaces = this.searchPlaces.bind(this);
        this.setMap = this.setMap.bind(this);

    }


    componentDidMount(){
        this.initMap()
         //refactor
         //refactor
         document.onclick = (e) => {
           let itemToHide = document.getElementById("search-matches")
           if(e.target.id !== itemToHide){
                 try {
                     if(itemToHide.style.display !== 'none')
                         itemToHide.style.display = 'none'
                 }catch(e){

                 }
           }
         };

         (function(){
             let my = this;
             const searchBox = document.getElementById('search-matches');
             let list = [], item, active;

             function scrollListUp(){
                 if(!active){
                     active = list[0]
                     item = active
                     item.classList.add('active');
                     searchBox.scrollTop = 0;
                 }else {
                     active = searchBox.querySelector('.active');
                     try {
                       if(active.previousSibling){
                         list.forEach(item => item.classList.remove('active'));
                         active.previousSibling.classList.add('active')
                         searchBox.scrollTop -= 60;
                       }
                     }catch(e){

                       }
                 }
             }


             function scrollListDown(){
                 if(!active){
                     active = list[0]
                     item = active
                     item.classList.add('active');
                     searchBox.scrollTop = 0;
                 }else {
                     active = searchBox.querySelector('.active');
                     try{
                       if(active.nextSibling){
                         list.forEach(item => item.classList.remove('active'));
                         active.nextSibling.classList.add('active');
                         searchBox.scrollTop += 60;
                       }
                     }catch(e){

                     }
                 }
             }

             function clean(){
                 if(searchBox.style.display !== 'none'){
                     searchBox.style.display = 'none';
                     let input = document.getElementById('search-places');
                     input.value = "";
                     active = null;
                     list = [];
                     item = null;
                 }
             }

             function selected(){

                 if(active){
                   active = searchBox.querySelector('.active');
                   let geo = active.getAttribute('data-geo');
                   let prepMap = () => {
                     let l = JSON.parse(geo)
                     my.setMap(l);
                     clean();
                   }
                   prepMap(geo);

                 }else {
                   //if searchbox open
                   if(searchBox.style.display === 'block'){
                     active = searchBox.children[0]; //get first el
                     let geo = active.getAttribute('data-geo');
                     let prepMap = () => {
                       let l = JSON.parse(geo)
                       my.setMap(l);
                       clean();
                     }
                     prepMap(geo);

                   }
                 }

             }




             document.onkeydown = e => {
                 if(searchBox.style.display === "block"){
                     list = [].slice.call(searchBox.children);

                     let key = e.keyCode
                     switch(key){
                         case 27:
                            clean();
                            break;
                         case 13:
                            selected();
                            break;
                         case 38:
                             scrollListUp();
                             break;
                         case 40:
                             scrollListDown();
                             break;
                         default:
                             break;
                     }
                 }
             }
         }).bind(this)()

     }

     getCurrentPosition = (options={maximumAge:60000, timeout:5000, enableHighAccuracy:true}) => {
        
        return new Promise(function(resolve, reject){
          window.navigator.geolocation.getCurrentPosition(resolve, reject, options)
        })
     }

     template = (marker, myMap, setting='') => {
       let coords = [marker.field_location_geofield.lon, marker.field_location_geofield.lat]

       let {address_line1, address_line2, locality, administrative_area, postal_code} = marker.field_location_address
       let { slug } = marker.fields
       let services = tryFn(()=>marker.field_location_procedures)
       let capabilities = tryFn(()=>marker.field_locations_capabilities)
       let servicesOut = ""
       services.forEach(item =>{
         servicesOut += "<li>"+item+"</li>"
       })
       let capabilitiesOut = ""
       capabilities.forEach(item =>{
         capabilitiesOut += "<li>"+item+"</li>"
       })

       // create a DOM element for the marker
       let el = document.createElement('div');
       el.className = 'marker';
       el.style.backgroundImage =
           'url(https://cdnwest.radnet.com/maps/radnet-marker.png)';
       el.style.width = '50px';
       el.style.height = '70px';

       let html = `<h5 style="white-space:pre-wrap;word-break: break-all;"><a rel='noreferrer' target='_blank' href="${slug}">${' ' + breakWordReturnThree(marker.title)}</a></h5>
       <p style="white-space: pre-wrap;">${' ' + address_line1 + '\n'} ${address_line2 ? address_line2 + '\n' : ''} ${locality}, ${administrative_area} ${postal_code}</p>
       <div class="${servicesOut.length > 0 ? 'show':'hide'}">
       <h6>Services Offered</h6>
       <ul>${servicesOut}</ul>
       </div>
       <div class="${capabilitiesOut.length > 0 ? 'show':'hide'}">
       <h6>Capabilities</h6>
       <ul>${capabilitiesOut}</ul>
       </div>`



       if(setting == 'init'){
         let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(html);
         new mapboxgl.Marker(el)
             .setLngLat(coords)
             .setPopup(popup)
             .addTo(myMap);
       }else {
         new mapboxgl.Popup()
         .setHTML(html)
         .setLngLat(coords)
         .addTo(this.state.map);
         this.state.map.flyTo({center: coords, speed:1})

       }

     }
     initMap(){

        let lon, lat, myMap
        let { zoom = 10 } = this.props
        let center = []

        let myLocation = this.getCurrentPosition()

        myLocation.then(pos => {
          lon = pos.coords.longitude
          lat = pos.coords.latitude
          center = [lon, lat]
          //Base Case
          let { zoom = 10 } = this.props
          myMap = new mapboxgl.Map({
              container: 'map-me',
              style: 'mapbox://styles/mapbox/streets-v11',
              center: center,
              zoom: zoom
          })


          let geo = this.state.locations.map(obj => tryFn(()=>obj))


           geo.forEach((marker)=>{
             let setting = 'init'
             this.template(marker, myMap, setting)
           });
           this.setState({map: myMap, mapLoaded: true});

           myMap.flyTo({center: center, speed:10})
        }).catch(err => {
          lon = this.state.locations[0].field_location_geofield.lon
          lat = this.state.locations[0].field_location_geofield.lat
          center = [lon, lat]
          //Base Case

          myMap = new mapboxgl.Map({
              container: 'map-me',
              style: 'mapbox://styles/mapbox/streets-v11',
              center: center,
              zoom: zoom
          })


          let geo = this.state.locations.map(obj => tryFn(()=>obj))


           geo.forEach((marker)=>{
             let setting = 'init'
             this.template(marker, myMap, setting)
           });
          this.setState({map: myMap, mapLoaded: true});


        })

     }

     searchPlacesDebounce = _.debounce(term => {
         //Map needs to search by zip, city and term --> more work needed
         //Instead of search by term, search by city or zip, and just recenter map
         //after getting coords
         if(term !== ""){

             let locations = this.state.locations
             let selected = undefined

             let match = new RegExp(term,'gi')
             let resCities = locations.filter(item => {
                 //console.log(item.field_location_address)
                 return match.exec(item.field_location_address.locality)
             })
             let resLocations = locations.filter(item => {
               return match.exec(item.title)
             })
             let zipLocations = locations.filter(item => {
               let t = term.substring(0,3) //as long as close to zip, good
               let m = new RegExp(t)
               return m.exec(item.field_location_address.postal_code)
             })
             let serviceLocations = locations.filter(item => {
               if(item.field_location_procedures.length > 0){
                  for(let i=0; i<item.field_location_procedures.length; i++){
                    if(match.exec(item.field_location_procedures[i])){
                      return item;
                    }
                  }
               }
               return undefined
             })
             let capabilityLocations = locations.filter(item => {
               if(item.field_locations_capabilities.length > 0){

                  for(let i=0; i<item.field_locations_capabilities.length; i++){
                    if(match.exec(item.field_locations_capabilities[i])){
                      return item
                    }
                  }
               }
               return undefined
             })

             //start with city by default
             if(resCities.length > 0){
               selected = 'city'
             }

             //if term looks more like a service or capability
             //use that
             if(serviceLocations.length > 0 || capabilityLocations.length > 0 ){
               selected = 'service'
             }

             //if term looks like a zip
             if(zipLocations.length > 0){
               selected = 'zip'
             }

             let res = []

             //choose something on what they probably meant...
             switch(selected){
               case 'zip':
                  res = zipLocations
               break;
               case 'service':
                  res = [...serviceLocations, ...capabilityLocations]
               break;
               case 'city':
                res = resCities
               break;
               default:
                  res = resLocations
               //use name
               break;
             }

             //remove dups
             res = [...new Set(res)]

             let matchedOutput = res.map((item, idx)=>{
                 let addy = item.field_location_address
                 let address = `${' ' + addy.address_line1 + '\n'} ${addy.address_line2 ? addy.address_line2 + '\n' : ''} ${addy.locality}, ${addy.administrative_area} ${addy.country_code} ${addy.postal_code}`

                 let location = {
                   title: item.title
                 }

                 let prepMap = (e) => {
                     let l = JSON.parse(e.target.dataset.geo)
                     this.setMap(l)
                 }

                 return (
                     <li onClick={prepMap} key={idx} data-geo={JSON.stringify(location)} data-idx={idx}>{item.title}</li>
                 )
             })
             document.getElementById('search-matches').style.display = "block";
             document.getElementById('search-matches').scrollTop = 0;

             this.setState({matches: matchedOutput})
         }else {
             this.setState({matches: []})
         }

     }, 50)
     searchPlaces(e){
         let term = e.target.value
         this.searchPlacesDebounce(term)
     }
     setMap(location){
         //find in cache this object
         let find = this.state.locations.filter(item => {
           if(item['title'] === location.title){
             return item
           }
         })
      //   let node = this.state.locations[]
        find = find[0] //like marker

         let popUps = document.getElementsByClassName('mapboxgl-popup');
         if (popUps[0]) popUps[0].remove();
         this.template(find)

     }
     changeMap(e){
         let el = {title:''}
         let parent = e.target.closest('.locator-listing')
          //get the input value
          el = JSON.parse(parent.children[0].value)
          this.setMap(el)
     }

    render(){
        let {colHeight=`504px`, mapHeight=`544px`, pageName } = this.props
        let geo = this.state.locations.map(obj => tryFn(()=>obj))

        let locatorListings = geo.map((listing, idx) => {
            let item = listing.title
            let addy = listing.field_location_address
            let geo = listing.field_location_geofield
            let url = listing.fields.slug
            let address = `${' ' + addy.address_line1}\n${addy.address_line2 ? addy.address_line2 + '\n' : ''}${addy.locality}, ${addy.administrative_area} ${addy.country_code} ${addy.postal_code}`
            let services = listing.field_location_procedures
            let procedures = listing.field_locations_capabilities
            let servicesOut = services.map((item, id)=>{
              let re = new RegExp(/Tulsa/i);
              if(re.test(item)){
                return (
                  <li className="tulsa-item" key={id}>{item}</li>
                )
              }
            })
            let proceduresOut = procedures.map((item, id)=>{
              return (
                <li key={id}>{item}</li>
              )
            })

            return (
                <li onClick={this.changeMap} key={idx}>
                    <div className="locator-listing">
                        <input className="json" type="hidden" value={JSON.stringify({ title:listing.title})} />
                        <h5 style={{whiteSpace:`pre-wrap`}}>{item}</h5>
                        <p style={{whiteSpace: `pre-wrap`}}>{address}</p>
                        <div className={`${servicesOut.length > 0 ? 'show':'hide'} category-block`}>
                          <h6>Services Offered</h6>
                          <ul>{servicesOut}</ul>
                        </div>
                        <div className={`${proceduresOut.length > 0 ? 'show':'hide'} category-block`}>
                          <h6>Capabilities</h6>
                          <ul>{proceduresOut}</ul>
                        </div>
                    </div>
                </li>
            )
        })

        return (
            <div className="tc">
                <section className="find-a-center cf" style={{position:`relative`}}>
                  <div id="loading-map" className={`${this.state.mapLoaded ? 'hide' : 'show'}`}>Loading Map Based On Your Location</div>
                    <div className={`fl w-100 ${pageName === 'home' ? 'w-30-l' : 'w-25-l'}  locator`} style={{height:`${colHeight}`}}>
                        <div className="locator-inner">
                            <div id="search-locator">
                                <input id="search-places" type="text" className="pl3-l w-100" placeholder="Type Something" onChange={this.searchPlaces} />
                                <i className="search-locator fas fa-search"></i>
                                <ul id="search-matches" className="search-matches tl" style={{display:`${this.state.matches.length > 0 ? `block`:`none`}`}}>{this.state.matches}</ul>
                            </div>
                            <div>
                                <ul className="locator-listings tl" style={{height:`${colHeight}`}}>
                                {locatorListings}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`fl w-100 ${pageName === 'home' ? 'w-70-l' : 'w-75-l'}`}>
                        <div className="mr0">
                            <div id="map-me" className="map" style={{height:`${mapHeight}`}}></div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }

}

export default Locator
