import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import favicon from "../images/favicon.ico"

export default ({page='', desc=''}) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title,
                siteUrl,
                description,
                keywords
            }
        }
    }
    `)
   
    let capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={`${desc !== '' ? desc : data.site.siteMetadata.description}`}/>
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
            <title>{ `${capitalize(page !== '' ? page : "@")} | ${data.site.siteMetadata.title}`}</title>
            <link href='https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css' rel='stylesheet' />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <link rel="icon" href={favicon} />
            <script type="text/javascript" async="true">
                {`!function(){var t=function(){var t=document.createElement("script");t.src="https://ws.audioeye.com/ae.js",t.type="text/javascript",t.setAttribute("async",""),document.getElementsByTagName("body")[0].appendChild(t)};"complete"!==document.readyState?window.addEventListener?window.addEventListener("load",t):window.attachEvent&&window.attachEvent("onload",t):t()}()`}
            </script>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-40075747-3"></script>
            <script>{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-40075747-3');`}</script>
        </Helmet>
    )
}
