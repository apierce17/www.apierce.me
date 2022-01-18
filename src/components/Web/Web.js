import React from 'react';
import "./Web.css";
import WebCard from "../Web/WebCard";

import { RiGithubLine } from "react-icons/ri";

// import ShopifyIcon from '../Technologies/ShopifyIcon';
import HTMLIcon from '../Technologies/HTMLIcon'
import CSSIcon from '../Technologies/CSSIcon'
import BootstrapIcon from '../Technologies/BootstrapIcon'
import JavascriptIcon from '../Technologies/JavascriptIcon'
import PhotoshopIcon from '../Technologies/PhotoshopIcon'
import MySQLIcon from '../Technologies/MySQLIcon'
import JQueryIcon from '../Technologies/JQueryIcon'
import WordPressIcon from '../Technologies/WordPressIcon'
import PhpIcon from '../Technologies/PhpIcon'
// import NodeIcon from '../Technologies/NodeIcon'

import Eyeris from '../../assets/images/Eyeris.webp';
import SeventyFive from '../../assets/images/75StateStreet.webp';
import Mercantile from '../../assets/images/Mercantile.webp';
import SteamTools  from '../../assets/images/SteamTools.webp';
import SoldierField from '../../assets/images/SoldierField.webp';
import MusicalMecca from '../../assets/images/MusicalMecca.webp';
import NME from '../../assets/images/NME.webp';

const links = {fontSize: "1.5rem",color: "var(--primary"}

function Web() {

    return (
        <section id="web-work">
            <div className="web-info">
                <h1>Web Development</h1>
                <p>Various web development projects I have worked on!</p>
            </div>
            <div className="projects">
                <div className="project-spotlight">
                    <WebCard 
                    src={Eyeris}
                    text="Eyeris"
                    desc1="This is the site I work as a front end developer!"
                    desc2="I do anything from designing the UI to building out various pages!"
                    githubIcon=""
                    github="https://www.google.com"
                    url="https://myeyeris.com/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<WordPressIcon />}
                    techfour= {<JavascriptIcon />}
                    techsix= {<PhotoshopIcon />}
                    />
                </div>
                <div className="project-row">
                <WebCard 
                    src={SeventyFive}
                    text="75 State Street Garage"
                    desc1="This was one of my final projects at SP+!"
                    desc2="I was tasked with building out the site and implementing our API!"
                    githubIcon=""
                    github=""
                    url="https://www.75statestreetgarage.com/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<PhpIcon />}
                    techfour= {<JavascriptIcon />}
                    techfive= {<WordPressIcon />}
                    techsix= {<PhotoshopIcon />}
                    />
                <WebCard 
                    src={Mercantile}
                    text="Mercantile Center Garage"
                    desc1="This project I was tasked with styling components to match a mockup given to me!"
                    desc2="I also connected our API to the front end to display parking rates dynamically!"
                    githubIcon=""
                    github=""
                    url="https://www.mercantilecentergarage.com/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<PhpIcon />}
                    techfour= {<JavascriptIcon />}
                    techfive= {<WordPressIcon />}
                    techsix= {<PhotoshopIcon />}
                    />
                <WebCard 
                    src={SoldierField}
                    text="Soldier Field Garage"
                    desc1="This was a site I worked on while at SP+"
                    desc2="On this project I was tasked with implementing our API and helping with front end development!"
                    githubIcon= ""
                    github=""
                    url="https://www.soldierfieldparking.com/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<PhpIcon />}
                    techfour= {<JavascriptIcon />}
                    techfive= {<WordPressIcon />}
                    techsix= {<PhotoshopIcon />}
                />
                </div>
                <div className="project-row">
                <WebCard 
                    src={SteamTools}
                    text="Steam Tools"
                    desc1="This is a personal project of mine!"
                    desc2="The goal was to allow users to compare game libaries with their Steam friends! I ended up adding a few more features for fun!"
                    githubIcon={<RiGithubLine style={links}/>}
                    github="https://github.com/apierce17/steam-tools"
                    url="https://apierce17.github.io/steam-tools/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<JavascriptIcon />}
                    techfour= {<JQueryIcon />}
                    techfive= {<PhotoshopIcon />}
                />
                <WebCard 
                    src={MusicalMecca}
                    text="Musicians Mecca"
                    desc1="This was my second project during bootcamp!"
                    desc2="For this project I built the database and designed the layout!"
                    githubIcon={<RiGithubLine style={links}/>}
                    github="https://github.com/apierce17/musicians-mecca"
                    url="https://musicians-mecca.herokuapp.com/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<BootstrapIcon />}
                    techfour= {<JavascriptIcon />}
                    techfive= {<MySQLIcon />}
                    techsix= {<PhotoshopIcon />}
                    />
                <WebCard 
                    src={NME}
                    text="Nashville Music Events"
                    desc1="This was my first project during bootcamp!"
                    desc2="For this project we had to utilize APIs and make an interactive site!"
                    githubIcon={<RiGithubLine style={links}/>}
                    github="https://github.com/apierce17/NashvilleMusicEvents"
                    url="https://apierce17.github.io/NashvilleMusicEvents/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<JavascriptIcon />}
                    techfour= {<PhotoshopIcon />}
                    />
                </div>
            </div>
        </section>
    )
}

export default Web
