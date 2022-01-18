import React from 'react'
import { RiGithubLine } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";

import "./Web.css";

const links = {fontSize: "1.5rem",color: "var(--primary"}

function WebCard(props) {
    return (
        <div className="card">
        <div className="web-img">
            <div className='web-project-desc'>
                <p>{props.desc1}</p>
                <p>{props.desc2}</p>
            </div>
            <a href={props.url} alt={"link to " + props.text} target="_blank" rel="noopener noreferrer" ><img className='web-card-img' src={props.src} alt={props.text + " thumbnail"}/></a>
        </div>
        <div className="project-info">
            <h4>{props.text}</h4>

            
            <div className="icon-row">
                <div className="link-row">
                    <ul>
                        <li><span title="Link to project github"><a href={props.github} target="_blank" rel="noopener noreferrer" >{props.githubIcon}</a></span></li>
                        <li><span title="Link to deployed site"><a href={props.url} target="_blank" rel="noopener noreferrer" ><FiGlobe style={links}/></a></span></li>
                    </ul>
                </div>
                <div className="tech-row">
                    <ul>
                        <li>{props.techone}</li>
                        <li>{props.techtwo}</li>
                        <li>{props.techthree}</li>
                        <li>{props.techfour}</li>
                        <li>{props.techfive}</li>
                        <li>{props.techsix}</li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
    )
}

export default WebCard
