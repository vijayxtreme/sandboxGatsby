import React from "react"
import { Link } from "gatsby"
import tulsaMachine from "../../images/tulsa-machine.png"

const MoreInfo = () => (
    <section className="more-info mt5-l tc-m">
        <div className="container-inner-xs container-inner-m container-inner  clearfix">
            <div className="fl w-100 w-50-l more-info-img pb4-m">

                    <img src={tulsaMachine} alt="The TULSA Procedure System" />
            </div>
            <div className="fl w-100 w-50-l more-info-text">
                <div className="container-l pl3-m pl4-l">
                    <p className="ttu text-intro">Introducing</p>
                    <h2 className="pt1 mt1 mb0 pb0">The TULSA Procedure&reg; System</h2>
                    <p className="pt0 mt1 text-summary">A Better Option for Prostate Treatment.</p>
                    <ul className="checkboxes mb4">
                        <li>Incision Free</li>
                        <li>Radiation Free</li>
                        <li>Minimal Side Effects</li>
                    </ul>
                    <p className="text-link"><Link to="/tulsa">Discover the TULSA Procedure Value <span>&rarr;</span></Link></p>
                </div>
            </div>
        </div>
    </section>
)

export default MoreInfo
