import React from 'react';
import "./Hero.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import heroVideo from "../../assets/Videos/hero.mp4";
import { Link, animateScroll as scroll } from "react-scroll";
import SliderBtn from '../sliderBtn/sliderBtn';

function Hero() {

    return (
        <section id="home" className="nav-space">
            <video autoPlay muted loop disableRemotePlayback>
                <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="hero-main hero-bg">
            <div className="hero-text-box">
                <h1>Ashton Pierce</h1>
                <p><Link activeClass="active" to="web-work" spy={true} smooth={true} offset={-85} duration={50}>Web Developer</Link> | <Link activeClass="active" to="design-work" spy={true} smooth={true} offset={-85} duration={50}>Graphic Designer</Link></p>
            </div>
            <div className="border" />
            <div className="cta-box">
                <h2>Your digital needs done right</h2>
                <SliderBtn 
                    scrollTo="contact"
                    btnText="Contact Me"
                />
            </div>
            </div>
            <Link activeClass="active" to="web-work" spy={true} smooth={true} offset={-85} duration={50}>
                <div className="scroll-icon-box scroll-down">
                    <p className="scroll-icon-text">Scroll Down</p>
                    <BsChevronDoubleDown size="36" className="scroll-icon" />
                </div>
            </Link>
        </section>
    )
}

export default Hero
