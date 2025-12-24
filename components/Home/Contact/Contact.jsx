'use client'

import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#050709] py-6 custom-scrollbar">

      {/* ✅ Section Heading (same as Skills / Projects) */}
      <SectionHeading>Contact Me</SectionHeading>

      {/* ✅ Content Wrapper */}
      <div className="w-[90%] sm:w-[80%] mx-auto mt-10">
        <div className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-10
          items-center
        ">

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-anchor-placement="top-center">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
            className="xl:mx-auto"
          >
            <ContactInfo />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact
