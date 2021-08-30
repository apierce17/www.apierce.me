import React from 'react'
import { DiReact } from "react-icons/di"

function ReactIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="React.js"><DiReact style={tech}/></span>
    )
}

export default ReactIcon
