import React from 'react';
import '../../App.css';
import Hero from "../Hero/Hero.js";
import Web from "../Web/Web.js"
import Design from '../Design/Design'
import About from '../About/About';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <>
     <Hero />
     <Web />
     <Design />
     <About />
     <Contact />
    </>
  );
}

export default Home;
