import React from 'react';
import "./Web.css";
import WebCard from "../Web/WebCard";

import ShopifyIcon from '../Technologies/ShopifyIcon';
import HTMLIcon from '../Technologies/HTMLIcon'
import CSSIcon from '../Technologies/CSSIcon'
import BootstrapIcon from '../Technologies/BootstrapIcon'
import JavascriptIcon from '../Technologies/JavascriptIcon'
import PhotoshopIcon from '../Technologies/PhotoshopIcon'
import MySQLIcon from '../Technologies/MySQLIcon'
// import ReactIcon from '../Technologies/ReactIcon'
// import NodeIcon from '../Technologies/NodeIcon'

import upsidexdown from '../../assets/images/upsidexdown.webp';
import musicalmecca from '../../assets/images/MusicalMecca.webp';
import NME from '../../assets/images/NME.webp';
import MIBR from '../../assets/images/MIBR.webp';

function Web() {

    return (
        <section id="web-work">
            <div className="web-info">
                <h1>Web Development</h1>
                <p>Various web development projects I have worked on! <br /> <i>Maybe your next site will be here?</i></p>
            </div>
            <div className="projects">
                <div className="project-spotlight">
                    <WebCard 
                    src={upsidexdown}
                    text="Upside x Down"
                    github="https://github.com/apierce17/UpsideDown"
                    url="https://www.upsidexdown.com/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<BootstrapIcon />}
                    techfour= {<JavascriptIcon />}
                    techfive= {<ShopifyIcon />}
                    techsix= {<PhotoshopIcon />}
                    />
                </div>
                <div className="project-row">
                <WebCard 
                    src={musicalmecca}
                    text="Musical Mecca"
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
                    github="https://github.com/apierce17/NashvilleMusicEvents"
                    url="https://apierce17.github.io/NashvilleMusicEvents/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<BootstrapIcon />}
                    techfour= {<JavascriptIcon />}
                    techfive= {<PhotoshopIcon />}
                    />
                <WebCard 
                    src={MIBR}
                    text="MIBR"
                    github="https://github.com/apierce17/mibr"
                    url="https://apierce17.github.io/mibr/"
                    techone= {<HTMLIcon />}
                    techtwo= {<CSSIcon />}
                    techthree= {<BootstrapIcon />}
                    techsix= {<PhotoshopIcon />}
                    />
                </div>
            </div>
        </section>
    )
}

export default Web
