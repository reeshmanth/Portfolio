
"use client"

import React from 'react'
import { navLinks } from '../../constant/constant';
import { sectionMap } from '../../constant/sectionMap';
import { CgClose } from 'react-icons/cg';
import { useSection } from '../../context/SectionContext';

// Props Type
type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const { activeSection, setActiveSection } = useSection()
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = sectionMap[sectionId]
    if (section) {
      setActiveSection(section)
      closeNav() // Close the mobile menu
    }
  }

  return (
    <div>
      {/* Overlay - now clickable to close */}
      <div 
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        onClick={closeNav} // <-- Close when clicking overlay
      ></div>

      {/* NavLinks (side menu) */}
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}>
        {navLinks.map((navlink) => {
          const isActive = sectionMap[navlink.url] === activeSection
          return (
            <a 
              key={navlink.id} 
              href={navlink.url}
              onClick={(e) => handleNavClick(e, navlink.url)}
              className={`nav__link text-[20px] ml-12 sm:text-[30px] cursor-pointer ${isActive ? 'text-blue-400 font-semibold' : ''}`}
            >
              {navlink.label}
            </a>
          )
        })}
        {/* Close Button */}
        <CgClose 
          onClick={closeNav} 
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </div>
  )
}

export default MobileNav
