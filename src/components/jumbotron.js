import React from "react"
import { Link } from "gatsby"

const Jumbo = () => {

    return (
        <section className="tc tl-l jumbotron">
            <div className="overlay">
                <div className="container-outer-xs container-outer-m container-outer tc-l">
                    <h1 className="pt0 pt4-l">A New Way of Looking At<br />Prostate Cancer</h1>
                    <p className="desktop hide">Incision-Free. Radiation Free.</p>
                    <p className="pt3">Minimal side effects. MRI offers some of the most detailed visualizations <br className="desktop" /> of the prostate gland available.</p>
                    <p className="mobile hide">A new option in prostate cancer detection, Prostate
                    MRI offers some of the most detailed visualizations of the prostate gland available.</p>
                    <Link to="locations" className="button cta grow">Find A Location</Link>
                </div>
            </div>
            <video className="tulsa-video" muted autoPlay loop>
                    <source src="https://cdnwest.radnet.com/videos/RadNet-Prostate-Banner.mp4" type="video/mp4" />
            </video>
        </section>
    )
}

export default Jumbo
