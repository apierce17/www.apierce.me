import React from 'react'
import { DiCss3 } from "react-icons/di"

function CSSIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="CSS"><DiCss3 style={tech}/></span>
    )
}

export default CSSIcon
