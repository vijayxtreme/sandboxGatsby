import React from "react"
import Layout from "../../components/layout"
import Locator from "../../components/locator"
import hospitality from "../../images/hospitality.png"
import {useStaticQuery, graphql} from "gatsby"
import HearFromYouForm from "../../components/forms/hearfromyou"

//SEO
let title = `The Tulsa Procedure | West Hills Location`
let desc = `The Tulsa Procedure is currently offered at RadNet’s Liberty Pacific Imaging located in West Hills, CA. This location is in the San Fernando Valley, with a variety of hotel accommodations and fine dining.`

const formatPhone = num => {
    let re = /(\d{3})(\d{3})(\d{4})/
    let m = num.match(re)
    return `(${m[1]}) ${m[2]}-${m[3]}`
}

const HospitalityTemplate = (props)=>{
    let {name, phone, address, city, state} = props.item
    return (
        <div className={`w-100 w-25-l`}>
            <div className={`pa1`}>
                <h3 className="mb0">{name}</h3>
                <p className="mt0 pt1">{address}<br />
                {city}, {state}</p>
                <p><a href={`tel:+1${phone}`}>{formatPhone(phone)}</a></p>
            </div>
        </div>
    )
}


const Hospitality = () => {
    const hotels = [
        {
            name: "The Hilton Woodland Hills",
            phone: "8185951000",
            address: "6360 Canoga Ave",
            city: "Woodland Hills",
            state: "CA"
        },
        {
            name: "Warner Center Marriot Woodland Hills",
            phone: "8188874800",
            address: "21850 Oxnard Street",
            city: "Woodland Hills",
            state: "CA"
        },
        {
            name: "The Four Seasons Hotel Westlake Village",
            phone: "8185753000",
            address: "2 Dole Drive",
            city: "Westlake Village",
            state: "CA"
        },
        {
            name: "Hilton Garden Inn Calabasas",
            phone: "8185912300",
            address: "24150 Park Sorrento",
            city: "Calabasas",
            state: "CA"
        }
    ]

    const hotelsOut = hotels.map((node, index)=>{
        return (
            <HospitalityTemplate key={index} item={node} />
        )
    })


    const restaurants = [
        {
            name: "JOEY Woodland Hills",
            phone: "8183405639",
            address: "6344 Topanga Canyon Blvd",
            city: "Woodland Hills",
            state: "CA"
        },
        {
            name: "The Cheesecake Factory",
            phone: "8188839900",
            address: "6600 Topanga Canyon Blvd",
            city: "Canoga Park",
            state: "CA"
        },
        {
            name: "Blu Jam Café",
            phone: "8182221044",
            address: "23311 Mulholland Dr",
            city: "Woodland Hills",
            state: "CA"
        },
        {
            name: "Sushi Katsu Ya Woodland Hills",
            phone: "8187041213",
            address: "6220 N Topanga Canyon Blvd",
            city: "Woodland Hills",
            state: "CA"
        },
        {
            name: "Larsen's Steakhouse",
            phone: "8187041226",
            address: "6256 Topanga Canyon Blvd",
            city: "Woodland Hills",
            state: "CA"
        },
        {
            name: "Fleming's Prime Steakhouse & Wine Bar Woodland Hills",
            phone: "8183461005",
            address: "6373 Topanga Canyon Blvd",
            city: "Woodland Hills",
            state: "CA"
        }
    ]

    const restaurantsOut = restaurants.map((node, index)=>{
        return (
            <HospitalityTemplate key={index} item={node} />
        )
    })


    const data = useStaticQuery(
        graphql`
            query {
                allNodeCenterLocation {
                    nodes {
                        title
                        field_location_address {
                            address_line1
                            address_line2
                            administrative_area
                            country_code
                            langcode
                            locality
                            postal_code
                        }
                        field_location_geofield {
                            lat
                            lon
                        }
                        fields {
                            slug
                        }
                        field_location_procedures
                        field_locations_capabilities
                    }
                }
            }
        `
    )
    return (
    <Layout page={title} desc={desc}>
        <div className="inside-page tulsa mb5 pt6 mb7-l">
          <div className="container-xs container-m container">
            <p><img src={hospitality} alt="Hospitality at Tulsa" /></p>
            <h2 className="mt5">Hospitality</h2>


            <p className="mb5" style={{maxWidth:`980px`}}>Liberty Pacific Imaging West Hills is located in the Western San Fernando Valley region of Los Angeles, California. It’s a buzzing suburb adjacent to Woodland Hills and Canoga Park, within a stone’s throw from a range of hotel accommodations and some of the valley’s finest restaurants.</p>

            <Locator data={data} />

            <h2 className="mt5" style={{color:`#66CCFF`, fontWeight:`500`}}>Hotels</h2>
            <div className={`flex-l flex-wrap clearfix`}>
                {hotelsOut}
            </div>
            <h2 className="mt5" style={{color:`#66CCFF`, fontWeight:`500`}}>Restaurants</h2>
            <div className={`flex-l flex-wrap clearfix`}>
                {restaurantsOut}
            </div>
            <p className="mt5">There are many, many other great selections –  as well as shopping malls, parks and movie theaters!</p>
            <HearFromYouForm />
            </div>
        </div>
    </Layout>
    )
}

export default Hospitality
