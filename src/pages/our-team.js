import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { tryFn } from "../utils/utils.js"
import ScheduleAppt from "../components/scheduleappt"


//SEO
let title = `Team of Specialists | Dedicated Prostate Radiologists`
let desc = `Our team of dedicated prostate radiologists are all board-certified with advanced training in this area. We are committed to ensuring patients receive the most informed, high-quality prostate imaging exams available.`

export default ({data}) => {

    const nodes = data.allNodeRadiologist.nodes
    const specialDoctors = nodes.filter(node => node.title === 'Robert Princenthal, MD' || node.title === 'Martin Cohen, MD').sort(function(a, b){
        if(a.title < b.title) return 1
        if(a.title > b.title) return -1
        return 0
    })
    const specialDoctorsOut = specialDoctors.map((node, index) => {
        let image = tryFn(()=>node.relationships.field_image_home.localFile.childImageSharp.sizes)
        let position = tryFn(() => node.field_radiologist_position.value)
        return (
            <div key={index} className="w-100-xs w-100-m w-50-l mb4">
                <Link className="" to={node.fields.slug}>
                    <div className="ma3 grow">
                        <Img sizes={image} />
                    </div>
                    <p className="tl mt2 ml3 mb0 doctor-name">{node.title}</p>
                    <p className={`${position ? 'show' : 'hide'} ml3 mt0 pt0`}>{position}</p>
                </Link>
            </div>
        )
    })


    const out = nodes.filter(node=>{
        /* Because these doctors get special treatment */
        return (node.title !== 'Robert Princenthal, MD' && node.title !== 'Martin Cohen, MD')
    }).map((node, index)=>{
        let image = tryFn(()=>node.relationships.field_image_home.localFile.childImageSharp.sizes)
        let position = tryFn(() => node.field_radiologist_position.value)
        return (
            <div key={index} className="w-100-xs w-100-m w-third-l mb4">
                <Link className="" to={node.fields.slug}>
                    <div className="ma3 grow">
                        <Img sizes={image} />
                    </div>
                    <span className="tl mt2 ml3 mb0 doctor-name">{node.title}</span>
                    <p className={`${position ? 'show' : 'hide'} ml3 mt0 pt0`}>{position}</p>
                </Link>
            </div>
        )
    })


    return (
        <>
            <Layout page={title} desc={desc}>
                <div className="inside-page blog mb6">
                    <div className="container-xs container-m container pt6-l">
                        <h1 className="tc">Prostate Imaging Specialists</h1>
                        <div className="container-inner-xs container-inner-m container-inner tc">
                        <p>Our Radiologists have the experience and knowledge base required to provide an accurate and relevant prostate MRI report, that answers the clinical question.</p>
                        </div>
                        <div className="container-inner flex-l flex-wrap clearfix">
                            {specialDoctorsOut}
                        </div>
                        <div className="flex-l flex-wrap-l clearfix blogroll mt4 mb4">
                            {out}
                        </div>
                        <div className="container-inner-xs container-inner-m container-inner tc">
                            <p>When considering a center for a prostate imaging procedure it is important to learn about the radiologists who might read your study. Although prostate MRI is increasingly recognized by the medical community as an important prostate cancer screening and staging tool only a few centers in the world have dedicated prostate MRI programs.</p>
                        </div>
                    </div>
                   <ScheduleAppt />
                </div>
            </Layout>
        </>
     )
 }

export const query = graphql`
 {
        allNodeRadiologist(sort: {order: ASC, fields: title}) {
            nodes {
                title
                field_radiologist_position {
                    value
                }
                fields {
                    slug
                }
                relationships {
                field_image_home {
                    localFile {
                        childImageSharp {
                            sizes(maxWidth: 1000){
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
            }
            }
        }
    }
`
