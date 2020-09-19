//Tools
import React from "react"
import { graphql } from "gatsby"

//Components
import Layout from "../components/layout"
import Jumbo from "../components/jumbotron"
import MoreInfo from "../components/sections/moreInfo"
import ProstateInfo from "../components/sections/prostateInfo"
import Dedicated from "../components/sections/dedicatedPMRI"
import Locator from "../components/locator"
import Campaigns from "../components/campaigns"

//SEO
let title = `RadNet Prostate Program | Prostate MRI | TULSA Procedure`
let desc = `Prostate MRI is one of the most advanced techniques available to evidence-based science to screen and stage prostate cancer.`

const Index = (props) => {
    return (
        <>
            <Layout page={title} desc={desc}>
                <Jumbo />
                <MoreInfo />
                <ProstateInfo />
                <Dedicated />
                <div className="tc container-inner-xs container-inner-m container-inner mb6">
                    <h2 className="mb5-l">A Growing Network</h2>
                    <Locator data={props.data} pageName="home"/>
                </div>
                <Campaigns />
            </Layout>
        </>
        )
}

export default Index;

export const query = graphql`
    query HomeQuery {
        allNodeBlog(sort: {order: ASC, fields: created}) {
            nodes {
                title
                fields {
                    slug
                }
                relationships {
                    field_news_image {
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 300){
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
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
