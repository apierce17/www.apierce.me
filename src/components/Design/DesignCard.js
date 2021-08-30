import React from 'react'

import "./Design.css";

function WebCard(props) {
    return (
        <div className="design-card">
        <div className="design-img">
            <img className="main" src={props.srcOne} alt={props.text + " thumbnail"}/>
            <img className="hover" src={props.srcTwo} alt={props.text + " thumbnail"}/>
        </div>
        <div className="design-project-info">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
        </div>
    )
}

export default WebCard
