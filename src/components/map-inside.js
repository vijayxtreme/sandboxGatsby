import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import {tryFn, breakWordReturnThree} from '../utils/utils'

//Hide API Key in Node
mapboxgl.accessToken = `pk.eyJ1IjoidmlqYXlyYWRuZXQiLCJhIjoiY2s1eWs2OHo3MmhtODNlbWpmcjYzcHJuayJ9.pp4YO_NmgZbILRLZCxTWBQ`


class MapInside extends Component {
    componentDidMount(){
      let post = this.props.data
      let geo = tryFn(()=> post.field_location_geofield)
      let content = tryFn(()=> post.field_location_description.value)
      let title = tryFn(()=>post.field_metatags.title)
      let desc = tryFn(()=>post.field_metatags.description) || ''
      let services = tryFn(()=>post.field_location_procedures)
      let capabilities = tryFn(()=>post.field_locations_capabilities)

      let {address_line1, address_line2, locality, administrative_area, postal_code} = post.field_location_address
      let servicesOut = ""
      services.forEach(item =>{
        servicesOut += "<li>"+item+"</li>"
      })
      let capabilitiesOut = ""
      capabilities.forEach(item =>{
        capabilitiesOut += "<li>"+item+"</li>"
      })

      let address = (
              <p>{tryFn(()=> post.field_location_address.address_line1)}&nbsp;{tryFn(()=> post.field_location_address.address_line2)} {`${tryFn(()=> post.field_location_address.locality)}, ${tryFn(()=> post.field_location_address.administrative_area)}, ${tryFn(()=> post.field_location_address.postal_code)}`}
              </p>)


        const lat = geo.lat
        const lon = geo.lon
        const coords = [lon,lat]
        let geojson = {
            'type': 'FeatureCollection',
            'features': [{
                    'type': 'Feature',
                    'properties': {
                        'message': this.centerName,
                        'iconSize': [50, 70]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': coords
                    }
                },
            ]
        }

        let html = `<h5 style="white-space:pre-wrap;word-break: break-all;">${' ' + breakWordReturnThree(title)}</h5>
      <p style="white-space: pre-wrap;">${' ' + address_line1 + '\n'} ${address_line2 ? address_line2 + '\n' : ''} ${locality}, ${administrative_area} ${postal_code}</p>
      <div class="${servicesOut.length > 0 ? 'show':'hide'}">
        <h6>Services Offered</h6>
        <ul>${servicesOut}</ul>
      </div>
      <div class="${capabilitiesOut.length > 0 ? 'show':'hide'}">
        <h6>Capabilities</h6>
        <ul>${capabilitiesOut}</ul>
      </div>`

      // create a DOM element for the marker
      let el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage =
          'url(https://cdnwest.radnet.com/maps/radnet-marker.png)';
      el.style.width = '50px';
      el.style.height = '70px';


        const map = new mapboxgl.Map({
            container: 'map-inside',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lon, lat],
            zoom: 9
        })

        let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(html);
        new mapboxgl.Marker(el)
            .setLngLat(coords)
            .setPopup(popup)
            .addTo(map);
    }
    render(){
        return (
            <div id="map-inside" className="map" style={{maxHeight:`50vh`}}></div>
        )
    }
}


export default MapInside;
