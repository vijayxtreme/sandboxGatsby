import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

//SEO
let title = `404 Error`
let desc = `Sorry the page you were looking for wasn't found.  Return home?`

const Error404 = ()=> {
    return (
        <Layout page={title} desc={desc}>
            <div className="pt5 mb7 tc container-inner-xs container-inner-m container-inner">
                <div className="center-block" style={{maxWidth: `640`}}><h1>Page Error 404</h1>
                <h1>Sorry that page wasn't found!</h1>
                <p>Perhaps try revising the url you entered or visit the main menu above to help you find what you were looking for.</p>
                <h3 className="pt5">Return <Link to='/'>Home</Link>?</h3>
                </div>
            </div>
        </Layout>
    )
}

export default Error404
