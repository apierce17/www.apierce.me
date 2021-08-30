import React from 'react'
import { DiPhotoshop } from "react-icons/di"

function PhotoshopIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="Photoshop"><DiPhotoshop style={tech}/></span>
    )
}

export default PhotoshopIcon
