'use client'

import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Certificates from './Certificates/Certificate';
import Education from './Education/Education';

const Home = () => {

  useEffect(() => {
    const initAOS=async()=>{
      await import("aos")
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
        anchorPlacement: 'top-bottom'
      })
    }
    initAOS()
  }, []);
  
  return (
    <div className="overflow-hidden">
      <Hero />
      <About/>
      <Education/>
      <Services/>
      <Project/>
      <Skills/>
      <Certificates/>
      <Contact/>
    </div>
  );
};

export default Home;

