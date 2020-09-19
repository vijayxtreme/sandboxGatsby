import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { fixHTMLContent, tryFn } from "../utils/utils"
import HearFromYouForm from "../components/forms/hearfromyou"

export default ({data}) => {
    const post = data.tulsa

    //let featuredImage = tryFn(() => post.relationships.field_tulsa_featured_image.uri.url)
    let content = tryFn(() => post.body.value)
    let title = tryFn(()=>post.field_metatags.title)
    let desc = tryFn(()=>post.field_metatags.description) || ''
    return (
        <Layout page={title} desc={desc}>
            <div className="inside-page tulsa mb5 pt6 mb7">
                 <div className="container-m container" dangerouslySetInnerHTML={{__html: fixHTMLContent(content) }} style={{maxWidth:`1000px`}}></div>
                <div className="container-inner"><HearFromYouForm /></div>
            </div>

        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        tulsa: nodeTulsa(
            fields: { slug: { eq: $slug }  }
         ){
            title
            body {
                value
            }
            field_metatags {
                description
                title
            }
        }
    }
`
