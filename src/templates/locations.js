import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MapInside from "../components/map-inside"
import {fixHTMLContent, tryFn } from "../utils/utils"


export default ({data}) => {
    const post = data.locations
    let geo = tryFn(()=> post.field_location_geofield)
    let content = tryFn(()=> post.field_location_description.value)
    let title = tryFn(()=>post.field_metatags.title)
    let desc = tryFn(()=>post.field_metatags.description) || ''
    let services = tryFn(()=>post.field_location_procedures)
    let capabilities = tryFn(()=>post.field_locations_capabilities)
    let address = (
            <p>{tryFn(()=> post.field_location_address.address_line1)}&nbsp;{tryFn(()=> post.field_location_address.address_line2)} {`${tryFn(()=> post.field_location_address.locality)}, ${tryFn(()=> post.field_location_address.administrative_area)}, ${tryFn(()=> post.field_location_address.postal_code)}`}
            </p>)

    return (
        <Layout page={`${title} ${post.field_location_address.locality} ${post.field_location_address.administrative_area}`} desc={`${desc}`}>
        <div className="inside-page location mb7">
            <h1 className="mt0 pt6 tc">{post.title}</h1>
            <MapInside data={post} />
            <div className="container-inner-xs container-inner-m container-inner">
                <h2 className={`${content ? 'show':'hide'} tl`}>About Center</h2>

                <div className="center-details" dangerouslySetInnerHTML={{__html: fixHTMLContent(content) }}></div>
                <h3 className="tl">Address</h3>
                    {address}
                <h3 className={`${services.length > 0 ? 'show':'hide'} tl`}>Services Offered</h3>
                <ul>{services.map((item, id)=>{
                  return (
                    <li key={id}>{item}</li>
                  )
                })}</ul>
                <h3 className={`${capabilities.length > 0 ? 'show':'hide'}`}>Capabilities: </h3>
                  <ul>{capabilities.map((item, id)=>{
                    return (
                      <li key={id}>{item}</li>
                    )
                  })}</ul>
            </div>
         </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        locations: nodeCenterLocation(
            fields: { slug: { eq: $slug }  }
         ){
            title
            field_location_description {
                value
            }
            field_location_address {
                address_line1
                address_line2
                administrative_area
                locality
                postal_code
            }
            field_location_geofield {
                lat
                lon
            }
            field_metatags {
              title
              description
            }
            field_location_procedures
            field_locations_capabilities
        }
    }
`
