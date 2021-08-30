import React from 'react'
import { FaNodeJs } from "react-icons/fa"

function NodeIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="Node.js"><FaNodeJs style={tech}/></span>
    )
}

export default NodeIcon
