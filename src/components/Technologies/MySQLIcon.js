import React from 'react'
import { DiMysql } from "react-icons/di"

function MySQLIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="MySQL"><DiMysql style={tech}/></span>
    )
}

export default MySQLIcon
