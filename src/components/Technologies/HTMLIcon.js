import React from 'react'
import { DiHtml5 } from "react-icons/di"

function HTMLIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="HTML"><DiHtml5 style={tech}/></span>
    )
}

export default HTMLIcon
