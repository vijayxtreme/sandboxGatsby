import React from "react"
import { Link } from "gatsby"

const ScheduleAppt = () => ( <
    div className = "container-outer-xs container-inner-m container-inner form-blue schedule-bg tc mt4 pa4" >
    <
    h2 > Schedule an Appointment < /h2> <
    p className = "center-block"
    style = {
        { maxWidth: `804px` } } > RadNet radiologists and the rest of the RadNet team are committed to ensuring that patients receive the best care possible.To achieve this, RadNet is committed to ensuring patients receive high - quality prostate imaging exams performed by expert radiologists with advanced training in this area. < /p> <
    Link to = "/locations"
    className = "mt3 button cta" > Find A Location < /Link> <
    /div>
)

export default ScheduleAppt