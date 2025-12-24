'use client'

import Home from '@/components/Home/Home'
import ResponsiveNav from '@/components/Home/NavBar/ResponsiveNav'
import { SectionProvider } from '@/components/context/SectionContext'
import React from 'react'

const HomePage = () => {
  return (
    <SectionProvider>
      <div className="bg-[#0f0715] overflow-hidden">
  <ResponsiveNav />
  <div className="pt-[12vh] h-screen">
    <Home />
  </div>
</div>

    </SectionProvider>
  )
}

export default HomePage
