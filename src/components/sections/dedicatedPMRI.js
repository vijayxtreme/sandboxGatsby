import React from "react"
import {Link} from "gatsby"
import dedicated from "../../images/dedicated-prostate-mri.jpg"

const Dedicated = (props) => (
    <section className="more-info mt4-l tc-m">
        <div className="container-inner-xs container-inner-m container-inner clearfix">
            <div className="fl w-100 w-50-l more-info-text tc-m">
                <div className="container-l">
                    <p className="ttu pt0 mt0 mb0 pb0 text-intro">Dedicated</p>
                    <h2 className="pt1 mt1 ">Prostate MRI Program</h2>
                    <p className="text-summary">One of the nation’s first private practices to establish a dedicated prostate imaging program based on multiparametric MRI proto utilizing 3T MRI, RadNet’s participation in beta testing of prostate imaging technology helped to validate the use of MRI in prostate cancer detection.</p>
                    <p className="text-link"><Link to="/prostatemri">Learn More <span>&rarr;</span></Link></p>
                </div>
            </div>
            <div className="fl w-100 w-50-l more-info-img pt4-m">

                    <img src={dedicated} alt="Prostate MRI Program" />
            </div>
        </div>
    </section>
)

export default Dedicated
