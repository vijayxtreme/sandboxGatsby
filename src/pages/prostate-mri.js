import React from "react"
import Layout from "../components/layout"
import prostateMRI from "../images/prostatemri.png"
import HeroImageContainer from '../components/heroImage'

let title = `Prostate MRI | Advanced Detection for Prostate Cancer`
let desc = `Prostate MRI is one of the most advanced techniques available to screen and stage prostate cancer. At RadNet, our Prostate MRI Program is a leader in the U.S. in prostate cancer detection.`

const ProstateMRI = () => {
    return (
        <Layout page={title} desc={desc}>
            <section className="mb7">
                <HeroImageContainer imageUrl={prostateMRI} />
                <div className="container-inner-xs container-inner-m container-inner mt5">
                    <p>Prostate MRI is one of the most advanced techniques available to evidence-based science to screen and stage prostate cancer. If you or a loved one are concerned about the risk of developing prostate cancer we encourage you to talk to your doctor about Prostate MRI screening and staging.</p>
                    <h2>RadNet Prostate MRI Program</h2>
                    <p>If you, a friend or loved one has an elevated PSA, has had a negative ultrasound directed prostate biopsy and/or are curious about prostate MRI please feel free to contact us. Our Prostate MRI Program is among the most advanced prostate cancer detection programs offered in America.</p>

                    <p>Drs. Robert Princenthal and Martin Cohen are the co-directors of this program. They look forward to helping men, and their loved ones, gain greater clarity on prostate cancer screening and staging.</p>
                    <h2>Pathways to be a Candidate for Prostate MRI</h2>
                    <div className="cf">
                        <div className="fl pathways-step">01</div>
                        <div style={{marginLeft:`80px`}}>
                            <p>The first pathway access is for patients who have an unexplained serum PSA, and have had at least one negative TRUS biopsy performed by a Urologist. For these men, we offer a prostate cancer detection screen on a 3T magnet. T-2, DCE and DWI sequences are used to image the prostate. We do not feel the need to use an endorectal coil with our superior equipment to evaluate whether a patient’s prostate gland has a hidden cancer, or is normal.</p>
                        </div>
                    </div>
                    <div className="cf">
                        <div className="fl pathways-step">02</div>
                        <div style={{marginLeft:`80px`}}>
                            <p>The second pathway is for men who have had a positive TRUS biopsy and know they have prostate cancer. We offer a STAGING protocol for them. This includes the above protocols, but also uses an endorectal coil for even more improved resolution, and we also add MRI spectroscopy. We can accurately measure the size, extent, and activity of the tumor.</p>

                            <p>We also determine and describe whether the cancer is contained the gland, or whether there is extension beyond the capsule of the gland. If the tumor has spread significantly beyond the capsule of the gland, most of these men are no longer appropriate candidates for radical prostatectomy surgery or robotic surgery and are best treated with Radiation Therapy.</p>

                            <p>Instead of having men also sent for staging CT scans of their abdomen and pelvis looking for spread of disease (metastasis) and a bone scan we feel we can improve our sensitivity with a better and a different strategy. We also perform a “Bones and Lymph Node” staging MRI of the pelvis, lumbar spine and thoracic spine. We do not perform the CT scan and bone scan. However, if a patient has a high grade Gleason score prostate cancer and large volume disease, we would also recommend a bone scan.</p>
                        </div>
                    </div>
                    <div className="cf">
                        <div className="fl pathways-step">03</div>
                        <div style={{marginLeft:`80px`}}>
                            <p>The third pathway is for men who have been previously treated for prostate cancer with either surgery or radiation and have a PSA relapse. Prostate MRI is useful to help identify where and how big a recurrent or metastatic focus of prostate cancer they may have.</p>
                        </div>
                    </div>
                    <h2>Prostate MRI Background</h2>
                    <p>MRI (magnetic resonance imaging) is a medical imaging technique that allows doctors to view detailed information on tissue and blood patterns found in the human body. Through the utilization of high-powered magnets a MRI machine can cause tissues in the body, include the prostate, to assume different appearances, thus revealing abnormal tissue.</p>
                    <p>Due to the use of high-powered magnets it is imperative for Prostate MRI patients to remove all metal from their pockets and clothing. If you have medical implants please inform your medical team. A Prostate MRI procedure is not appropriate for patients with metal implants, such as an aneurysm clip in the brain. There is no evidence being exposed to magnetic fields of strength found in MRI machines used in our Prostate MRI Program present a medical hazard to patients without metallic implants.</p>
                    <p>Prostate MRI has been utilized since the early 1990’s. However, due to a range of factors, including the lack of understanding of prostate disease and different imaging protocols, the accuracy in the 1990’s was often poor and it fell out of favor.</p>
                    <h2>What has changed with Prostate MRI?</h2>
                    <p>Our dedicated Prostate MRI Program, using a multi-parametric approach to imaging, has shown increased sensitivity and specificity for cancer detection (around 85 – 90 percent).</p>
                    <ul>
                        <li>These improved results are based by critical analysis of four (4) specific imaging sequences.</li>
                        <li>These include high anatomic quality T-2 weighted imaging and three functional sequences.</li>
                    </ul>
                    <p>The functional sequences include:</p>
                    <ul>
                        <li>DWI (diffusion weighted imaging) analyzes the restriction of movement of water molecules seen with prostate cancer. DWI is quite accurate and correlates when positive to a specific Gleason Score upon a positive biopsy result.</li>
                        <li>DCE (dynamic contrast enhancement), where a small amount of IV agent is injected to evaluate increased and abnormal blood vessels seen with prostate cancer. These DCE images are obtained rapidly and analyzed with computer generated curves which look for increased flow and rapid washout.
                        </li>
                        <li>Images are obtained rapidly, 3 seconds per acquisition and reviewed to generate time function curves.</li>
                    </ul>
                    <p>Cancers, including prostate cancer, tend to have a rapid period of enhancement of this medicine. They also have a rapid period of washout. MRI spectroscopy can also be performed as a final functional exam. MRI spectroscopy looks for the change in the chemical components seen with prostate cancer, with a decrease in the normal citrate and an increase in choline molecules.</p>
                </div>
            </section>
        </Layout>
    )
}

export default ProstateMRI
