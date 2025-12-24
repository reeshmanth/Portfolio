"use client";

import { navLinks } from '../../constant/constant'
import { sectionMap } from '../../constant/sectionMap'
import Image from 'next/image'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useSection } from '../../context/SectionContext'

//define props type
type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  const { activeSection, setActiveSection } = useSection()

  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string
) => {
  e.preventDefault()

  const section = sectionMap[sectionId]
  if (!section) return

  // ✅ SCROLL TO SECTION
  const element = document.getElementById(section)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  // ✅ UPDATE ACTIVE STATE
  setActiveSection(section)
}


  return (
    <div className={`fixed bg-[#240b39] h-[12vh] z-[10] w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <div onClick={() => setActiveSection('home')} className="cursor-pointer">
          <Image src="/images/logo.png" alt="LOGO" width={170} height={170} className="ml-[-1.5rem] sm:ml-0" />
        </div>
        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => {
              const isActive = sectionMap[navlink.url] === activeSection
              return (
                <a 
                  key={navlink.id} 
                  href={navlink.url}
                  onClick={(e) => handleNavClick(e, navlink.url)}
                  className={`nav__link cursor-pointer ${isActive ? 'text-blue-400 font-semibold' : ''}`}
                >
                  {navlink.label}
                </a>
              )
            })}
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            {/* Burger */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
