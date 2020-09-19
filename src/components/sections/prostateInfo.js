import React from "react"
import { Link } from "gatsby"
import prostateInfo from "../../images/prostateInfo.png"


const ProstateInfo = () => (
    <section className="more-info mt3-l tc-m" style={{backgroundColor:`#F8F9FB`}}>
        <div className="container-inner-xs container-inner-m container-inner  clearfix">
            <div className="fl w-100 w-50-l more-info-text">
                <div className="container-l">
                    <p className="ttu text-intro">Leading</p>
                    <h2 className="pt1 mt1 mb0 pb0">Prostate <br />Imaging Specialists</h2>
                    <p className="mt1 text-summary">Under the direction of RadNet Prostate MRI medical co-directors Dr. Robert Princenthal
                    & Dr. Martin Cohen, RadNet prostate imaging specialists have combined to perform more than 4,000 prostate MRI exams.</p>
                    <p className="text-link"><Link to="/our-team">Meet Our Team of Experts <span>&rarr;</span></Link></p>
                </div>
            </div>
            <div className="fl w-100 w-50-l more-info-img pt4-m">

                    <img src={prostateInfo} alt="Prostate Imaging Specialists" />
            </div>
        </div>
    </section>
)

export default ProstateInfo
