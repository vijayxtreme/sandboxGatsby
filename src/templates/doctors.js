import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { fixHTMLContent, tryFn } from "../utils/utils"
import ScheduleAppt from "../components/scheduleappt"
import arrowLeftD from "../images/arrow-left-d.svg"
import arrowRightD from "../images/arrow-right-d.svg"

export default ({data, pageContext}) => {
    const post = data.doctor
    const {doctors, slug} = pageContext

    //find index of currentDoctor, get the next index, get link, make a Link
    let idx = 0
    doctors.find((element, index) => {
      if(element.node.fields.slug == slug){
        idx = index
      }
    })
    let next = (idx+1 <= doctors.length-1) ? doctors[idx+1].node.fields.slug : doctors[0].node.fields.slug
    let prev = (idx-1 > 0) ? doctors[idx-1].node.fields.slug : doctors[doctors.length-1].node.fields.slug

    let featuredImage = tryFn(() => post.relationships.field_radiologist_image.localFile.childImageSharp.fluid.originalImg)
    let mobileImage = tryFn(() => post.relationships.field_image_home.localFile.childImageSharp.fluid.originalImg)
    let content = tryFn(() => post.body.value)
    let position = tryFn(()=> post.field_radiologist_position.value)
    let medicalSchool = tryFn(()=> post.field_radiologist_medical_school.value)
    let internship = tryFn(()=> post.field_radiologist_internship.value)
    let residency = tryFn(()=> post.field_radiologist_residency.value)
    let fellowship = tryFn(()=> post.field_radiologist_fellowship.value)
    let title = tryFn(()=>post.field_metatags.title)
    let desc = tryFn(()=>post.field_metatags.description) || ''


    return (
        <Layout page={title} desc={desc}>
        <div className="inside-page radiologist mb5 pt6-l mb7-l">
            <div className="container-xs container-m container">
                <div className="cf form-blue mt4 mt2-l">
                    <div className="pl2 pr2 pt4 fl-l w-100 doctor-image tablet mobile">
                        <div className={`doctor-bg`} style={{ backgroundImage: `url(${mobileImage})` }}></div>
                    </div>
                        <div className="fl-l w-100 w-50-l tc tl-l pl4 pr4 pl4-l">
                        <h1 className="mb0">{post.title}</h1>
                        <p className="mt0">{position}</p>
                        <div className={`${medicalSchool ? 'show':'hide'}`}>
                            <h3 className="mb0">Medical School</h3>
                            <p className="mt0">{medicalSchool}</p>
                        </div>
                        <div className={`${internship ? 'show':'hide'}`}>
                            <h3 className="mb0">Internship</h3>
                            <p className="mt0">{internship}</p>
                        </div>
                        <div className={`${residency ? 'show':'hide'}`}>
                            <h3 className="mb0">Residency</h3>
                            <p className="mt0">{residency}</p>
                        </div>
                        <div className={`${fellowship ? 'show':'hide'}`}>
                            <h3 className="mb0">Fellowship</h3>
                            <p className="mt0">{fellowship}</p>
                        </div>
                        <div className="pt4">
                          <Link to={prev}><img className={`arrow arrow-left pr4`} src={arrowLeftD} alt="Previous Doctor" /></Link>
                          <Link to={next}><img className={`arrow arrow-right`} src={arrowRightD} alt="Next Doctor" /></Link>
                        </div>
                    </div>
                    <div className="fl w-50-l doctor-image desktop">
                       <div className={`doctor-bg`} style={{backgroundImage: `url(${featuredImage})`}}></div>
                    </div>
                </div>
             </div>
             <div className="doctors-inner container-inner-xs container-inner-m container-inner tj">
                <div className="mt4 mt5-l" dangerouslySetInnerHTML={{__html: fixHTMLContent(content) }}></div>
             </div>
             <ScheduleAppt />
         </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        doctor: nodeRadiologist(
            fields: { slug: { eq: $slug }  }
         ){
            title
            body {
                value
            }
            field_radiologist_position {
                value
            }
            field_radiologist_medical_school {
                value
            }
            field_radiologist_internship {
                value
            }
            field_radiologist_residency {
                value
            }
            field_radiologist_fellowship {
                value
            }
            field_metatags {
              title
              description
            }
            relationships {
                field_image_home {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1000){
                                originalImg

                            }
                        }
                    }
                }
                field_radiologist_image {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 1000){
                                originalImg

                            }
                        }
                    }
                }
            }
        }
    }
`
