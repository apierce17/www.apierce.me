import React from 'react'
import { DiJavascript1 } from "react-icons/di"

function JavascriptIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="JavaScript"><DiJavascript1 style={tech}/></span>
    )
}

export default JavascriptIcon
