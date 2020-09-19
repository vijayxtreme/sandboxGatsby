import React from "react"
//Data
import embedArr from "../fake.js"

const Social = () => {
    let embedOut = embedArr.map((node, index)=>{
        return (
            <div className="fl-l w-100 w-100-m w-third-l" key={index}><div className="mr0 mr3-l" dangerouslySetInnerHTML={{__html: node}}></div></div>
        )
    });  
    
    return (
        <section className="perspectives social container tc mb5 mb7-l">
            <h2 className="pb4-l pt4-l">Join Our Community</h2>
            <div className="cf">
                {embedOut}
            </div>
        </section>
    )
}

export default Social