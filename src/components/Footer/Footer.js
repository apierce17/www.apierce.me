import React from 'react'
import './Footer.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { MdCopyright } from 'react-icons/md';

function Footer() {

    return (
        <footer id="footer">
            <div className="sitemap">
                <ul id="footer-list" className="footer-nav">
            <li className="footer-links"><Link activeClass="active" to="home" spy={true} smooth={true} offset={-85} duration={50}>Home</Link></li>
            <li className="footer-links footer-divider"><Link activeClass="active" to="web-work" spy={true} smooth={true} offset={-85} duration={50}>Web</Link></li>
            <li className="footer-links footer-divider"><Link activeClass="active" to="design-work" spy={true} smooth={true} offset={-85} duration={50}>Graphic Design</Link></li>
            <li className="footer-links footer-divider"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-85} duration={50}>About</Link></li>
            <li className="footer-links footer-divider"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-42} duration={50}>Contact</Link></li>
                </ul>
            </div>
            <div className="legal">
            <p><MdCopyright /> Ashton Pierce </p>
            <a href="/privacy-policy"> Privacy Policy</a>
            </div>
        </footer>
    )
}

export default Footer
