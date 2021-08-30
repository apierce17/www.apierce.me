import React from 'react'
import { DiBootstrap } from "react-icons/di"

function BootstrapIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="Bootstrap"><DiBootstrap style={tech}/></span>
    )
}

export default BootstrapIcon
