import React from 'react';
import GoogleMapReact from './Map';

import "./About.css";

function About() {
    return (
        <section id="about">
            <div className="about">
                <h1>About me</h1>
                <p>Originally from St. Petersburg, Florida I now live outside of Nashville, Tennessee in a small town called Shelbyville.
                    I have always had a passion for technology and art so naturally, I have always found ways to keep expanding my knowledge of both and combining them.
                    <br/><br/>
                    In 2013 I started teaching myself graphic design using Adobe Photoshop, since then I have learned Illustrator, CorelDraw, Cinema4D, and many other programs.
                    My latest venture to combine art and tech was attending a Vanderbilt University boot camp in Full Stack Web Development, I completed the boot camp in May of 2021.
                    During my time in the boot camp, I landed my first job in Web Development at Standard Parking.
                    Before Standard Parking I worked for a company called V1 Tech where I started as an order prepper and by the time I left I had helped the company solidify their process for making product images for their website and sped up their process by 75%.
                    I am always looking for opportunities to grow and help others bring their creative ideas to life.
                </p>
                <div className="skills">
                    <ul className="coding">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>BootStrap</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>MySQL</li>
                        <li>WordPress</li>
                        <li>AWS</li>
                    </ul>
                    <ul className="software">
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>GIMP</li>
                        <li>Corel Draw</li>
                        <li>Unreal Engine 4</li>
                        <li>Cinema 4D</li>
                        <li>Sony Vegas</li>
                    </ul>
                </div>
                <a href='pdf/AshtonPierceResume.pdf' download>
                    <button id="submit" className="resume">Download Full Resume</button>
                </a>
            </div>
            <div id="map" className="google-map">
                <GoogleMapReact />
            </div>
        </section>
    )
}

export default About
