import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#050709] py-6 custom-scrollbar">

      <SectionHeading>About Me</SectionHeading>

      <div className="w-[80%] mx-auto mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-8">
          <h1 className="text-bg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>

          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 bg-blue-800 flex items-center justify-center shrink-0">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                CGPA: 9.84 / 10 in Computer Science & Engineering (Cyber Security)
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 bg-orange-800 flex items-center justify-center shrink-0">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Mentored 1,500+ students over 1.6 years, guiding academics and technical growth
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 bg-green-800 flex items-center justify-center shrink-0">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Hands-on experience in AI/ML, GenAI tools, and cloud-based solutions
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-7 h-7 bg-yellow-800 flex items-center justify-center shrink-0">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Strong DSA and problem-solving mindset, active on CodeChef & LeetCode
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-12">
          <div>
            <Image src="/images/experience.png" alt="image" width={80} height={80} className="mx-auto" />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.client}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">CGPA</p>
          </div>

          <div>
            <Image src="/images/customer.png" alt="image" width={80} height={80} className="mx-auto" />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.experience}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Students Mentored</p>
          </div>

          <div>
            <Image src="/images/completed.png" alt="image" width={80} height={80} className="mx-auto" />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.project}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Global Certifications</p>
          </div>

          <div>
            <Image src="/images/rocket.png" alt="image" width={80} height={80} className="mx-auto" />
            <p className="mt-3 font-bold text-xl text-white text-center">{aboutInfo.website}</p>
            <p className="text-base sm:text-lg text-gray-400 text-center">Projects Built</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
