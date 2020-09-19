import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { fixHTMLContent, tryFn } from "../utils/utils"

export default ({data}) => {
    const post = data.blog
    let content = tryFn(() => post.body.value)
    let featuredImage = tryFn(() => post.relationships.field_news_image.uri.url)
    let title = tryFn(()=>post.title)
    const desc = tryFn(()=>post.field_metatags.description) || ''

    return (
        <Layout page={title} desc={desc}>
        <div className="inside-page mb5 mb7-l pt6-l blog-post">
            <div className="container-inner-xs container-inner-m container-inner">
                <h1 className="mt0">{post.title}</h1>
                <img src={fixHTMLContent(featuredImage)} alt={post.title} />
                <div dangerouslySetInnerHTML={{__html: fixHTMLContent(content) }}></div>
            </div>
         </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        blog: nodeBlog(
            fields: { slug: { eq: $slug }  }
         ){
            title
            body {
                value
            }
            relationships {
                field_news_image {
                    uri {
                        url
                    }
                }
            }
            field_metatags {
              title
              description
            }
        }
    }
`
