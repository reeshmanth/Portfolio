'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Section =
  | 'home'
  | 'about'
  | 'education'
  | 'skills'        // ✅ ADD
  | 'projects'
  | 'certificates'
  | 'contact'


interface SectionContextType {
  activeSection: Section
  setActiveSection: (section: Section) => void
}

const SectionContext = createContext<SectionContextType | undefined>(undefined)

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<Section>('home')

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  )
}

export const useSection = () => {
  const context = useContext(SectionContext)
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider')
  }
  return context
}

