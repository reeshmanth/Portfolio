'use client'

import React, { useEffect, useRef } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import 'aos/dist/aos.css';
import Certificates from './Certificates/Certificate';
import Education from './Education/Education';
import { useSection } from '../context/SectionContext';

const Home = () => {
  const { activeSection } = useSection();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAOS = async () => {
      try {
        const AOS = (await import("aos")).default
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease-in-out',
          anchorPlacement: 'top-bottom'
        })
      } catch (error) {
        console.error('AOS initialization error:', error)
      }
    }
    initAOS()
  }, []);

  // Reset scroll position when section changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  const renderSection = () => {
  switch (activeSection) {
    case 'home':
      return <Hero />
    case 'about':
      return <About />
    case 'education':
      return <Education />
    case 'skills':                 // ✅ ADD THIS
      return <Skills />
    case 'projects':
      return <Project />
    case 'certificates':
      return <Certificates />
    case 'contact':
      return <Contact />
    default:
      return <Hero />
  }
}

  
  return (
    <div className="h-full flex flex-col overflow-hidden">
  {renderSection()}
</div>


  );
};

export default Home;

