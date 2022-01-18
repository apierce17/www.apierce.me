import React from 'react'
import { DiWordpress } from "react-icons/di"

function WordPressIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="WordPress"><DiWordpress style={tech}/></span>
    )
}

export default WordPressIcon
