import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { fixHTMLContent, tryFn } from "../utils/utils"

export default ({ data }) => {
    const post = data.page
    const content = tryFn(() => post.body.value)
    const title = tryFn(() => post.title)
    const desc = tryFn(() => post.field_metatags.description) || ''
    return (
        <Layout page={title} desc={desc}>
            <div className="inside-page pt6 mb7">
                <div className="container-xs container-m container-inner clearfix">
                    <h1 className="tc mb4-l">{post.title}</h1>
                    <div className="mt3 mt5-l basic-page" dangerouslySetInnerHTML={{ __html: fixHTMLContent(content) }}></div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        page: nodeProstateMri(fields: { slug: { eq: $slug }}) {
            title
            body {
                value
            }
            field_metatags {
              title
              description
            }
        }
    }
`
