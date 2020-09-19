import React, {useState} from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { tryFn } from "../utils/utils"

let title = `Blog | Prostate Health News & Research`
let desc = `Learn about new technologies and developments in the detection and treatment of prostate cancer and the best ways to keep your prostate healthy.`

export const Blog = ({data, pageContext}) => {

    //pagination
    const {currentPage, numPages} = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const previousPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    //blog
    const allPosts = data.allNodeBlog.nodes
    const emptyQuery = ""

    //filtering data
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery
    })
    const myRef = React.createRef()

    //Display as list or grid
    const [view, setView] = useState({
        value: 'grid'
    })

    //Set ordering
    const [order, setOrder] = useState('ASC')


    //Search bar
    const handleInputChange = () => {
        let search = myRef.current.value
        let posts = data.allNodeBlog.nodes || []
        const filteredData = posts.filter(node =>{
            const {title} = node
            return (
                title.toLowerCase().includes(search.toLowerCase())
            )
        })

        setState({
            search,
            filteredData
        })
    }

    const {filteredData, query} = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : allPosts

    if(order === 'ASC'){
        posts.sort((a,b)=>{
            const titleA = a.title.toLowerCase()
            const titleB = b.title.toLowerCase()
            let comparison = 0
            if(titleA > titleB){
                comparison = 1
            }else {
                comparison = -1
            }
            return comparison
        })
    }else {
        posts.sort((a,b)=>{
            const titleA = a.title.toLowerCase()
            const titleB = b.title.toLowerCase()
            let comparison = 0
            if(titleA > titleB){
                comparison = -1
            }else {
                comparison = 1
            }
            return comparison
        })
    }

    //output formatting
    let out = posts.map((node, index)=>{
       return drawView(node, index)
    })
    let output = ""
    if(view.value === 'list'){
        output = <ul>{out}</ul>
    }else {
        output = <div className="flex flex-wrap clearfix blogroll mt4 mb4">{out}</div>
    }

    function drawView(node, index){

        if(view.value === 'list'){
            return (
                <li key={index}>
                <Link to={node.fields.slug}>{node.title}</Link></li>
            )
        }else {
            let blogPic = tryFn(()=>node.relationships.field_news_image.localFile.childImageSharp.fluid.originalImg)
                return (
                     <div key={index} className="w-100 w-25-l blog-item tc" >

                        <Link to={node.fields.slug} className="blogroll-item grow">

                            <div className="tc pa0 ma2 pa3-l ma2-l blogroll-title" style={{backgroundImage:`url(${blogPic})`}}></div>
                        </Link>
                        <h4><Link to={node.fields.slug} className="pa2 tc">{node.title}</Link></h4>
                    </div>
                )
        }
    }

    return (
        <>
            <Layout page={title} desc={desc}>
                <div>
                    <div className="inside-page blog pt6 mb7">
                        <div className="container-xs container-m container clearfix">
                            <div className="blog-menu">
                                <h1 className="mt0 pt6-l">News & Articles</h1>
                                <input ref={myRef} type="textarea" className="search" placeholder="Search for an article" onChange={handleInputChange} />
                                <div className="mt3 mb3">
                                <select value={order} onChange={e => setOrder(e.target.value)}>
                                    <option value='ASC'>Sort Ascending</option>
                                    <option value='DESC'>Sort Descending</option>
                                </select>
                                <select value={view.value} onChange={e => setView({value:e.target.value})}>
                                    <option value="grid">View As Grid</option>
                                    <option value="list">View As List</option>
                                </select>
                                </div>
                            </div>
                            {output}
                            {
                                !isFirst && (
                                    <Link className="button cta" to={`/blog/${previousPage}`} rel="prev">
                                    &larr; Previous Page
                                    </Link>
                                )
                            }
                            &nbsp;
                            {
                                !isLast && (
                                    <Link className="button cta" to={`/blog/${nextPage}`} rel="next">
                                    &rarr; Next
                                    </Link>
                                )
                            }

                        </div>

                    </div>
                </div>
            </Layout>
        </>
     )
 }

 export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!) {
        allNodeBlog(
            sort: {order: ASC, fields: title}
            limit: $limit
            skip: $skip
            ) {
            nodes {
                title
                created
                fields {
                    slug
                }
                relationships {
                    field_news_image {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth:1000){
                                    originalImg
                                }
                            }
                        }
                    }
                }
            }
        }
    }
 `

 export default Blog
