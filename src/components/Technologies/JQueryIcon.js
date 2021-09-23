import React from 'react'
import { DiJqueryLogo } from "react-icons/di"

function JQueryIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="JQuery"><DiJqueryLogo style={tech}/></span>
    )
}

export default JQueryIcon
