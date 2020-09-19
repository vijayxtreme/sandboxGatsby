const path = require(`path`)

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
    const config = {
      resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
      },
    }

    // when building HTML, window is not defined, so Leaflet causes the build to blow up
    if (stage === "build-html") {
      config.module = {
        rules: [
          {
            test: /mapbox-gl/,
            use: loaders.null(),
          },
        ],
      }
    }

    actions.setWebpackConfig(config)
}

exports.onCreateNode = ({node, getNode, actions}) => {
    const { createNodeField } = actions

    const nodeFieldPerType = (filePath, getNodePath) => {
        if(node.internal.type === "node__page"
        || node.internal.type === "node__blog"
        || node.internal.type === "node__radiologist"
        || node.internal.type === "node__center_location"
        || node.internal.type === "node__tulsa"
        || node.internal.type === "node__prostate_mri"){
            const slug = `${node.path.alias}/`
            createNodeField({
                node,
                name: `slug`,
                value: getNodePath(slug)
            })
        }
    }
    nodeFieldPerType(``, value => `${value}`)
 }

exports.createPages = ({actions, graphql, reporter}) => {
    const { createPage } = actions
    const pageTemplate = path.resolve(`src/templates/page.js`)
    const blogListTemplate = path.resolve(`src/templates/blog.js`)
    const blogTemplate = path.resolve(`src/templates/blog-post.js`)
    const doctorTemplate = path.resolve(`src/templates/doctors.js`)
    const locationTemplate = path.resolve(`src/templates/locations.js`)
    const tulsaTemplate = path.resolve(`src/templates/tulsa.js`)
    const prostateTemplate = path.resolve(`src/templates/prostate.js`)

    return graphql(
        `{
            pages: allNodePage {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            blogs: allNodeBlog(
                sort: { fields: created, order: ASC}
                limit: 100
            ) {
                edges {
                    node {
                        created
                        fields {
                            slug
                        }
                    }
                }
            }

            doctors: allNodeRadiologist {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            locations: allNodeCenterLocation {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            tulsas: allNodeTulsa {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            prostatemris: allNodeProstateMri {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
         }
        `
    ).then(result => {
        if(result.errors){
            reporter.panicOnBuild(result.errors)
        }

        result.data.pages.edges.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: pageTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
        })

        //create blog listing pages

        const blogPosts = result.data.blogs.edges
        const blogPostsPerPage = 50
        const numPages = Math.ceil(blogPosts.length / blogPostsPerPage)

        Array.from({length: numPages}).forEach((_, i)=>{
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i+1}`,
                component: blogListTemplate,
                context: {
                    limit: blogPostsPerPage,
                    skip: i * blogPostsPerPage,
                    numPages,
                    currentPage: i + 1
                }
            })
        })

        //create blog posts
        result.data.blogs.edges.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: blogTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
        })

        const doctorPages = result.data.doctors.edges

        doctorPages.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: doctorTemplate,
                context: {
                    slug: node.fields.slug,
                    doctors: doctorPages
                }
            })
        })

        result.data.locations.edges.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: locationTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
        })



        result.data.tulsas.edges.forEach(({node}) => {
            createPage({
                path: node.fields.slug,
                component: tulsaTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
        })

        result.data.prostatemris.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: prostateTemplate,
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}
