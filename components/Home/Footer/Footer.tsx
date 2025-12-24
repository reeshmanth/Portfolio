import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-8 bg-[#0f0715] border-t border-gray-800'>
      <div className='w-[80%] mx-auto'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Logo and Description */}
          <div className='text-center md:text-left'>
            <Image src="/images/logo.png" alt="logo" width={150} height={150} className='mx-auto md:mx-0 mb-4'/>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Passionate developer creating innovative web solutions with modern technologies and exceptional user experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className='text-center md:text-left'>
            <h3 className='text-white font-bold text-lg mb-4'>Quick Links</h3>
            <div className='space-y-2'>
              <a href="#home" className='block text-gray-400 hover:text-white transition-colors'>Home</a>
              <a href="#about" className='block text-gray-400 hover:text-white transition-colors'>About</a>
              <a href="#services" className='block text-gray-400 hover:text-white transition-colors'>Services</a>
              <a href="#projects" className='block text-gray-400 hover:text-white transition-colors'>Projects</a>
              <a href="#contact" className='block text-gray-400 hover:text-white transition-colors'>Contact</a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className='text-center md:text-left'>
            <h3 className='text-white font-bold text-lg mb-4'>Get In Touch</h3>
            <div className='space-y-2 text-gray-400 text-sm'>
              <p>Email: reeshmanth@gmail.com</p>
              <p>Phone: +91 9666665587</p>
              <p>Location: Dhaka, Russia</p>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className='flex justify-center space-x-6 mb-8'>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors'>
            <FaGithub className='text-2xl' />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors'>
            <FaLinkedin className='text-2xl' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors'>
            <FaTwitter className='text-2xl' />
          </a>
          <a href="mailto:reeshmanth@gmail.com" className='text-gray-400 hover:text-white transition-colors'>
            <FaEnvelope className='text-2xl' />
          </a>
        </div>
        
        {/* Copyright */}
        <div className='border-t border-gray-800 pt-6 text-center'>
          <p className='text-gray-400 text-sm'>
            © 2025 All Rights Reserved by Reeshmanth Sahoo. Made with ❤️ using Next.js
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer