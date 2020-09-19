import React from "react"
import Layout from "../components/layout"
import Locator from "../components/locator"
import { graphql } from "gatsby"

//SEO
let title = `Locations | Prostate & Tulsa`
let desc = `View locations for Prostate and Tulsa centers offered by Radnet.com`

export default ({data}) => {

    return (
        <>
            <Layout page={title} desc={desc}>
                <div className="inside-page">
                    <div className="locations-page">
                    <Locator data={data} center={[-117.377751, 33.9724358]} zoom="10" mapHeight="calc(100vh + 44px)" colHeight="100vh" />
                    </div>
                </div>
            </Layout>
        </>
     )
 }

export const query = graphql`
 {
        allNodeCenterLocation(sort: {order: ASC, fields: title}) {
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
