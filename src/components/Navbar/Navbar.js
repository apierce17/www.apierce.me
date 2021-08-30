import React, {useState, useEffect} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './hamburger.css';
import './Navbar.css';
import logo from '../../assets/images/Logo.svg';


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState
  (window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    var hamburger = document.getElementById("hamburger");
    hamburger.classList.toggle("is-active");
    setTimeout(function(){
      var navList = document.getElementById("nav-list")
      if (navList) {
      navList.classList.add("mobile-nav-active");}
      else;
      document.body.classList.toggle("no-scroll");
    },100);
    

    if ( screenWidth > 900 ) {
    hamburger.classList.remove("nav-hide");
    document.getElementById("navbar-logo").disabled = true; }
    else {
    hamburger.classList.add("nav-hide");
    document.getElementById("navbar-logo").disabled = false; };

    if ( screenWidth > 900 ) {
      document.body.classList.toggle("no-scroll")
    }
  }



  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav id='navbar' className="navbar">
        <div className="navbar-logo" id="navbar-logo"><img src={logo} alt="foxcrxft logo" width="75px"/></div>
          {(toggleMenu || screenWidth > 900 ) && (
            <ul id="nav-list" className="list">
              <li className="items"><Link activeClass="active" to="home" spy={true} smooth={true} offset={-85} duration={50} onClick={toggleNav}>Home</Link></li>
              <li className="items nav-divider"><Link activeClass="active" to="web-work" spy={true} smooth={true} offset={-85} duration={50} onClick={toggleNav}>Web</Link></li>
              <li className="items nav-divider"><Link activeClass="active" to="design-work" spy={true} smooth={true} offset={-85} duration={50} onClick={toggleNav}>Graphic Design</Link></li>
              <li className="items nav-divider"><Link activeClass="active" to="about" spy={true} smooth={true} offset={-85} duration={50} onClick={toggleNav}>About</Link></li>
              <li className="items nav-divider"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-42} duration={50} onClick={toggleNav}>Contact</Link></li>
              <li className="items close-nav" onClick={toggleNav}></li>
            </ul>
          )}
          <button id="hamburger" onClick={toggleNav} className="btn hamburger hamburger--squeeze" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
    </nav>
  )
}
