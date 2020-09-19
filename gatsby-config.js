/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 const path = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `RadNet Prostate Program`,
    siteUrl: `https://mri.rcg.ninja`,
    description: `Future home of Prostate RadNet.com`,
    keywords: `MRI, Prostate, Prostate MRI, RadNet`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-htaccess`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://mrid8.rcg.ninja`,
        apiBase: `jsonapi`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    }
  ]
}
