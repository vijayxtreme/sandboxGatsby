import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import tulsaHome from "../images/tulsa-home.png"
import tulsaHome1 from "../images/tulsa-home-1.png"
import HeroImageContainer from "../components/heroImage"
import Timeline from "../components/timeline"
import HearFromYouForm from "../components/forms/hearfromyou"

import princenthal from "../images/princenthal.jpg"

let title = `The Tulsa Procedure | Incision-free Option for Prostate Cancer`
let desc = `The Tulsa Procedure is an incision free, radiation-free solution for prostate disease. Preserves men’s functions. Available through RadNet’s dedicated prostate program. Currently available at our Liberty Pacific Imaging location in West Hills, CA.`

export const Tulsa = ({data}) => {

    return (
        <>
            <Layout page={title} desc={desc}>
                <div className="inside-page tulsa home pb6">

                    <div className="hero">
                        <div className="overlay">
                            <div className="container-inner-xs container-inner-m container-inner pt3 mt5-l pt5-l">
                                <p>The TULSA Procedure</p>
                                <h1>A Better Option for
                                <br />Prostate Treatment</h1>
                            </div>
                        </div>
                        <HeroImageContainer imageUrl={tulsaHome} />
                    </div>
                    <div className="container-outer-xs container-m container-inner pt4">
                        <h2>The Tulsa Procedure Experience</h2>
                        <p>An incision-free solution for prostate disease, the TULSA Procedure system combines real-time Magnetic Resonance Imaging (MRI) with robotically-driven directional thermal ultrasound and closed-loop temperature feedback control software, delivering transurethral prostate tissue ablation of whole-gland or partial prostate tissue. The system is designed to be customizable, physician prescribed, and predictable. In addition to being incision-free, it is also radiation-free ablation that simultaneously protects the urethra and rectum with water cooling, which preserves men’s functional abilities.</p>

                        <p>The procedure has been approved by the FDA and will be performed on an outpatient basis in a newly constructed, state-of-the-art operating room and recovery suite.</p>
                        <iframe src="https://player.vimeo.com/video/444636891" width="800" height="450" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                        <div className="flex-l mt5">
                            <div className="tc tl-l mr5-l w-25-l"><img className="circular-image" src={princenthal} alt="Princenthal" style={{width:`240px`}} /></div>
                            <div className="w-75-l">
                                <p className="">RadNet is pleased to be selected as the first west coast clinical Tulsa Pro treatment center, at our West Hills location. Tulsa Pro is a revolutionary method of focal therapy. The energy is delivered trans urethral, under MRI real time thermal mapping, for the most accurate, rapid, and effective whole gland ablation therapy. Their TACT trial has proven results of excellent PSA level reduction, lowest side effects to bowel/bladder, and over 80% cancer control, which is comparable to conventional treatments of surgery and radiation.</p>
                                <p className="" style={{fontWeight:`800`}}>Dr. Robert Princental</p>
                            </div>
                            
                        </div>
                        <h2 className="pt4">TULSA Procedure Treatment Work Flow</h2>
                        <div id="tulsa-timeline" className="timeline pb5">
                            <Timeline />
                        </div>

                        <h2>Benefits of The TULSA Procedure</h2>
                        <p>In addition to being an incision-free procedure, the TULSA Procedure offers the following benefits to patients:</p>
                        <ul>
                            <li>Radiation free.</li>
                            <li>Minimal to no pain, speedy recovery.</li>
                            <li>Real-time MRI imaging.</li>
                            <li>Outpatient procedure - requires no hospital stay.</li>
                            <li>Reduced post-operative complications and costs.</li>
                            <li>MR Suite is significantly less expensive than operating room.</li>
                            <li>Decreased risk of side effects such as urinary incontinence and erectile dysfunction.</li>
                        </ul>
                        <HearFromYouForm />
                    </div>
                </div>
            </Layout>
        </>
     )
 }

 export const query = graphql`
    query TulsaQuery {
        allNodeTulsa(sort: {order: ASC, fields: created}) {
            nodes {
                title
                fields {
                    slug
                }
            }
        }
    }
 `

 export default Tulsa
