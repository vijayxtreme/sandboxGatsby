import React from "react"
import Layout from "../../components/layout"
import ListItem from "../../components/lists/listItem"
import HearFromYouForm from "../../components/forms/hearfromyou"

//SEO
let title = `TULSA Procedure | FAQ’s about The Tulsa Procedure Treatment`
let desc = `Every TULSA Procedure patient works with a designated Care Coordinator who schedules all appointments, sets up a calendar, answers any questions, and guides you through the entire treatment process.`

const questions = [
    {
        q:"Is the TULSA Procedure an inpatient or outpatient procedure?",
        a:"The TULSA Procedure is an outpatient procedure.  You will go home the same day you have your treatment."
    },
    {
        q: "How long does the procedure take?",
        a: "The TULSA Procedure is performed in a single session that takes a few hours. You will be under general anesthesia during your treatment but usually, the entire process takes about 5 hours."
    },
    {
        q: "How do I know I am eligible for TULSA Procedure?",
        a: `To make sure you qualify for TULSA Procedure, our team of Radiologists and Urologists will need to review all recent biopsy and MRI reports as well as your clinical history.\nThey will need to see your MRI images as well, which you will need to mail in on a CD to the following address:\n\nRolling Oaks Radiology – Attn: TULSA Program Care Coordinator\n\n415 Rolling\nOaks Drive, Suite 160\nThousand Oaks, CA 91361.\n\nOur Care Coordinator will reach out to you within one week to let you know your status.
`
    },
    {
        q: "What exactly is the TULSA Procedure?",
        a: "TULSA Procedure is a transurethral prostate tissue ablation system that combines real-time Magnetic Resonance Imaging (MRI) with robotically-driven directional thermal ultrasound to deliver predictable physician-prescribed ablation of whole-gland or partial prostate tissue.\nIt is incision free and radiation free."
    },
    {
        q: "Is the TUSLA Procedure painful?",
        a: "The TULSA Procedure is a minimally invasive procedure and requires no incision. Most patients recover quickly and can return to their everyday life after a few days."
    },
    {
        q: "What happens to the prostate after the TULSA Procedure?",
        a: "Following the TULSA Procedure treatment, the prostate shrinks and can continue to shrink for 12 months thereafter."
    },
    {
        q: "During the TULSA Procedure treatment, is the entire prostate destroyed?",
        a: "The TULSA Procedure is a transurethral prostate tissue ablation system that combines real-time Magnetic Resonance Imaging (MRI) with robotically-driven directional thermal ultrasound to deliver predictable physician-prescribed ablation of whole-gland or partial prostate tissue. The amount of prostate ablated is up to the discretion of the treating physician and is fully customizable to your individual needs."
    },
    {
        q: "Is there a chance the cancer could return at some point after treatment?",
        a: "As with many cancers and treatments, there is a possibility of recurrence. If your cancer were to return, TULSA Procedure treatment is repeatable."
    },
    {
        q: "What is the recovery time following TULSA Procedure treatment?",
        a: "Patients typically return to their daily activities (including work) within a couple of days following treatment, and then back to baseline (urinary/bowel) quality of life within three months."
    },
    {
        q: "What is my follow up after TULSA Procedure treatment?",
        a: "A few days after your TULSA Procedure treatment, you will see your urologist in his/her office for a follow-up visit. At this appointment, your catheter will be removed and various labs will be performed. You will have a second follow-up appointment 6 weeks later for a general prostate and wellness check."
    },
    {
        q: "Will my private insurance or Medicare cover the cost of treatment?",
        a: `The TULSA Procedure is currently not covered by health insurers or Medicare.\nPatients are responsible for the entire cost of treatment.\n\nWe are sensitive to the financial cost involved and offer an all-inclusive price for the procedure (not including lab fees).\n\nWe do not add any undisclosed costs and will go over all financials in detail ahead of time.`
    }
]


export const Faqs　= () => {

    let faqList = questions.map((item, idx) => {
        return (
            <ListItem key={idx} q={item.q} a={item.a} />
        )
    })

    return (
        <>
            <Layout page={title} desc={desc}>
                <div className="inside-page tulsa faqs pt6-l pb6">
                    <div className="container-outer-xs container-outer-m container">
                        <h1>Frequently Asked Questions</h1>
                        <div>
                            {faqList}
                        </div>
                        <HearFromYouForm />
                    </div>
                </div>
            </Layout>
        </>
     )
 }


 export default Faqs
