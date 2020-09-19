import React from "react"

const Timeline = () => {

    let timelineData = [
        {
            left: `-0.30`,
            h: `Begin anesthesia`,
            p: `Anesthesiologist`,
            classes: [`pb0`]
        },
        {
            left: ``,
            h: `Patient prep & guidewire insertion`,
            p: `Nurse, Urologist`,
            classes: [`pb0`]
        },
        {
            left: `Start of \nMRI TIME`,
            h: `Equipment QC`,
            p: `MRI Technician`,
            classes: [`pb0`]
        },
        {
            left: ``,
            h: `Move pt. in`,
            p: `Anesthesiologist, Nurse, Urologist, MRI Technician`,
            classes: [`pb0`]
        },
        {
            left: ``,
            h: `Device insertion`,
            p: `Nurse, Urologist`,
            classes: [`pb0`]
        },
        {
            left: `0:30`,
            h: `Treatment planning`,
            p: `MRI Technician, Radiologist`,
            classes: [`pb0`]
        },
        {
            left: `1:00`,
            h: ``,
            p: ``,
            classes: [`pb0`]
        },
        {
            left: ``,
            h: `Ultrasound ablation`,
            p: `MRI Technician, Radiologist`,
            classes: [`pb0`]
        },
        {
            left: `1:30`,
            h: ``,
            p: ``,
            classes: [`pb0`]
        },
        {
            left: `2:00`,
            h:`Post-treatment imaging`,
            p:`MRI Technician, Radiologist`,
            classes: [`pb0`]
        },
        {
            left: ``,
            h:`Device removal`,
            p:`Nurse, Urologist`,
            classes: [`pb0`]
        },
        {
            left: ``,
            h:`Move pt.out`,
            p:`Anesthesiologist, Nurse, Urologist, MRI Technician`,
            classes: [`pb0`]
        },
        {
            left: `2:30`,
            h:`End anesthesia`,
            p:`Anesthesiologist`,
            classes: [`pb0`]
        }
    ]

    let items = timelineData.length
    let stop = items/2
    let start = stop + 1 

    let renderOut = (item, key)=> {
    let { left, h, p, classes } = item
    classes = classes.join(' ').toString()
    let timecircle = ``
    if (h !== ``) {
        timecircle = (<div className="timecircle"></div>)
    }
    return (
        //Returns back a timeline item
        <div key={key} className={`${classes}`}>
            <div className={`fl`}>
                <p style={{ maxWidth: `70px`, whiteSpace: `pre-wrap` }}>{left}</p>
            </div>
            <div className="fl" ></div>
            <div className="pl4" style={{
                marginLeft: `100px`, whiteSpace: `pre-wrap`, borderLeft: `2px solid #CED5DB`, position: `relative`
            }}>
                {timecircle}
                <h3 style={{ paddingTop: `20px` }}>{h !== '' ? h : `\n`}</h3>
                <p className="subtitle" style={{ paddingBottom: `20px` }}>{p !== '' ? p : `\n`}</p>
            </div>
        </div>

    )}


    let timelineOut1 = timelineData.slice(0,stop).map(renderOut)

    let timelineOut2 = timelineData.slice(start, items).map(renderOut)



    return (
        <div className="flex-l">
            <div className="w-100 w-50-l">{timelineOut1}</div>
            <div className="w-100 w-50-l">{timelineOut2}</div>
        </div>
    )
}

export default Timeline