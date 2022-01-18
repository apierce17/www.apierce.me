import React from 'react'
import { SiPhp } from "react-icons/si"

function PhpIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="PHP"><SiPhp style={tech}/></span>
    )
}

export default PhpIcon
