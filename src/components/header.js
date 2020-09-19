import React from "react"
import Nav from "./navigation"

export default ({sticky, page, setOverlay}) => {

    return(
        <header className={`${!sticky && page === 'Home' ?  '' : 'sticky'}`}>
            <Nav handleOverlay={val => setOverlay(val)} />
        </header>
    )
}
