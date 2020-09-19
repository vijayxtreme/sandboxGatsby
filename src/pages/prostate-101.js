import React, {useState} from "react"
import Layout from "../components/layout"
import HeroImageContainer from "../components/heroImage"

import prostate101Banner from "../images/prostate-101-banner.png"
import normalProstate from "../images/normal-prostate.svg"
import enlargedProstate from "../images/enlarged-prostate.svg"

import prostateRisks from "../images/prostate-risks.png"
import prostateSigns from "../images/prostate-signs.png"

import prostateAge from "../images/prostate-age.svg"
import prostateRaceEth from "../images/prostate-race-eth.svg"
import prostateGeo from "../images/prostate-geo.svg"
import prostateFamHistory from "../images/prostate-fam-history.svg"

let title = `What is Prostate Cancer? | What you need to know about Prostate Cancer`
let desc = `Prostate cancer is the second most common cancer in men, but it is highly treatable if detected early. Learn the risks, symptoms, signs and treatment options.`

const Prostate101 = () => {
    let stats = [
        {
            headline: `1 in 9`,
            body: `men will be diagnosed with prostate cancer during his lifetime`
        },
        {
            headline: `191,930`,
            body: `the estimated number of new prostate cancer cases amongst American men in 2020`
        },
        {
            headline: `33,330`,
            body: `an estimate on the number of American men who will die of prostate cancer in 2020`
        },
        {
            headline: `66`,
            body: `average age of a prostate cancer diagnosis in America`
        },
        {
            headline: `3.1`,
            body: `million men in the United States who have been diagnosed with prostate cancer are still alive today`
        },
        {
            headline: `#2`,
            body: `after skin cancer more American men are diagnosed with prostate cancer than any other type of cancer.`
        }
    ]

    let statsOut = stats.map((item, key)=>{
        let {headline, body} = item
        return (
            <div key={key} className="w-100 tc tl-l w-third-l pa2">
                <h4 className="mb0 tc tl-l" style={{color: `#66CCFF`, fontSize: `3rem`}}>{headline}</h4>
                <p className="mt2 mt0-l tc tl-l" style={{color: `#616871`, fontWeight: `300`}}>{body}</p>
            </div>
        )
    })


    let risks = [
        {
            icon: prostateAge,
            headline: `Age`,
            body: `The chance of having prostate cancer rises rapidly after the age of 50. About 6 out of 10 cases of prostate cancer are found in men older than 65.`
        },
        {
            icon: prostateRaceEth,
            headline: `Race/Ethnicity`,
            body: ` While the reasons are unclear, prostate cancer seems to develop more often in African-American men and in Caribbean men of African ancestry than in men of other races. And when it does develop in these men, they tend to be younger. Prostate cancer also occurs less often in Asian-American and Hispanic/Latino men than in Non- Hispanic whites.`
        },
        {
            icon: prostateGeo,
            headline: `Geography`,
            body: `Again it is unclear as to why, but prostate cancer is most common in North America, northwestern Europe, Australia, and on Caribbean Islands. Reasons for this may be due to lifestyle and diet, or because more intensive screening methods exist in these areas.`
        },
        {
            icon: prostateFamHistory,
            headline: `Family History`,
            body: `Prostate cancer seems to run in some families, although many people do get it without any family history. Nonetheless, having a father or brother with prostate cancer more than doubles a man’s risk of developing the disease.`
        }

    ]

    let risksOut = risks.map((item, key)=>{
        let {icon, headline, body} = item
        return (
            <div key={key} className="flex flex-wrap">
                <div className={`w-100 tc tr-l w-25-l pr4-l`}>
                    <p><img src={icon} alt={headline} style={{height:`58px`,width:`auto`}} /></p>
                </div>
                <div className={`w-100 tj tl-l w-75-l`}>
                    <h3 className="tc tl-l">{headline}</h3>
                    <p>{body}</p>
                </div>
            </div>
        )
    })

    let [normalActive, setNormalActive] = useState(true)
    let [enlargedActive, setEnlargedActive] = useState(false)


    return (
        <Layout page={title} desc={desc}>
            <div className="">
                <HeroImageContainer imageUrl={prostate101Banner} />
                <div className="mt3 pb6 container-inner-xs container-inner-m container-inner">
                    <div className="tc center-block" style={{maxWidth: `640px`}}>
                        <h1>What is Prostate Cancer?</h1>
                        <p>Prostate cancer begins when cells in the prostate gland start to grow out of control.  Some prostate cancers grow and spread quickly, but most grow slowly.</p>

                        <div className="button-set">
                            <button className={`${normalActive ? 'cta':''}`} onClick={()=>{
                                setNormalActive(true)
                                setEnlargedActive(false)
                            }}>Normal Prostate</button><button className={`${enlargedActive ? 'cta': ''}`} onClick={()=>{
                                setEnlargedActive(true)
                                setNormalActive(false)
                            }}>Enlarged Prostate</button>
                        </div>
                        <p className={`${normalActive ? 'show': 'hide'} mt4`}><img className='prostate-diagram' src={normalProstate} alt="Diagram" /></p>
                        <p className={`${enlargedActive ? 'show' : 'hide'} mt4`}><img className='prostate-diagram' src={enlargedProstate} alt="Diagram" /></p>
                    </div>

                    <h2>By the Numbers</h2>
                    <p>Prostate cancer is the second most common cancer in men, affecting 1 in 7 men. Despite the prevalence of prostate cancer, it is highly treatable if detected early. Today, 3.1 million men living in the United States have been diagnosed with prostate cancer at some point.</p>
                    <div className="flex flex-wrap">
                        {statsOut}
                    </div>
                    <p className="tr pt4 pb4" style={{color:`#2A5BAA`, fontSize:`13px`}}>According to the American Cancer Society</p>

                    <p><img src={prostateRisks} alt="Risks" style={{width: `100%`}} /></p>
                    <h2>What are the Causes/Risks of Prostate Cancer?</h2>
                    <p>While there is no known cause for Prostate Cancer, there are several risk factors that researchers have identified. Having a risk factor, or even several risk factors, does not mean that you will get the disease. Many people with one or several risk factors never get cancer, while others who are diagnosed with prostate cancer may have had few or no known risk factors. </p>
                    <p>These risk factors include:</p>
                    <div>
                        {risksOut}
                    </div>


                    <p className="tr pt4 pb4" style={{color:`#2A5BAA`, fontSize:`13px`}}>According to the American Cancer Society</p>
                    <p>There are other factors with a less clear effect on the risk for prostate cancer, but should be considered regardless. These include smoking, diet and obesity, all of which have been shown to contribute to the risk for various cancers.</p>

                    <p><img src={prostateSigns} alt="Symptoms" style={{width:`100%`}} /></p>
                    <h2>What are the Signs/Symptoms of Prostate Cancer?</h2>
                    <p>In its early stages, there are generally no signs of prostate cancer. The most effective way to find it early is through regular screening with your physician who will test your prostate specific antigen (PSA) levels. If these levels are high, it often indicates a potential for prostate cancer.</p>
                    <h2>What are Treatment Options for Prostate Cancer?</h2>
                    <p>Treatment of prostate cancer varies depending on the type of cancer with which a patient has been diagnosed.
                    Some prostate cancers are small in size and slow-growing. These only need to be carefully monitored – they are under “active surveillance.”</p>

                    <p>If a prostate cancer requires additional treatment, there are several options available including the following:</p>
                    <ul>
                        <li>Radiation</li>
                        <li>Robotic Prostatectomy</li>
                        <li>Complete gland removal</li>
                        <li>Chemotherapy/hormone therapy</li>
                    </ul>

                    <p>Most of these therapies carry potential negative side effects, primarily urinary incontinence and erectile dysfunction. However, TULSA PRO offers an incision-free alternative to treating prostate cancer, without the risk for adverse side effects.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Prostate101
