import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  
    return (
        <section className="hero">
            <div className="overlay">
                <h1 style={{paddingTop: `3rem`}}>A New Way Of Looking <br />at Prostate Cancer</h1>
                <p>A new option in prostate cancer detection, Prostate<br />
                MRI offers some of the most detailed visualizations<br /> 
                of the prostate gland available.</p>
                <Link to="locations" className="button cta grow">Find A Location</Link>
            </div>
            <video className="tulsa-video" muted autoPlay loop>
                    <source src="https://cdnwest.radnet.com/videos/RadNet-Prostate-Banner.mp4" type="video/mp4" />
            </video>
        </section>
    )
}

export default Hero