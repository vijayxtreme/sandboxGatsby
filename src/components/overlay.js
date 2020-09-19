import React from "react"
import HearFromYouForm from "./forms/hearfromyou"

const Overlay = ({setOverlay, overlay}) => {
    return (
        <div className={`rdnt-overlay ${overlay ? 'show' : 'hide' }`}>
            <div className="container rdnt-overlay-inner pt1 pb1">
                <HearFromYouForm />
                <div className="rdnt-overlay-close">
                <button className="close-btn" onClick={() => setOverlay(false)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default Overlay