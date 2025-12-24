import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import EducationItem from './EducationItem'
import { educationData } from '@/Data/data'

const Education = () => {
  return (
    <div className="flex-1 overflow-y-auto py-6 custom-scrollbar">

      <SectionHeading>Education</SectionHeading>

      {/* Timeline wrapper */}
      <div className="relative mt-14 w-[85%] mx-auto">

        {/* Vertical line (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

        {/* Timeline items */}
        <div className="flex flex-col gap-0">
          {educationData.map((item, index) => (
            <EducationItem
              key={item.id}
              title={item.title}
              institution={item.institution}
              year={item.year}
              score={item.score}
              description={item.description}
              current={item.current}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

      </div>

    </div>
  )
}

export default Education
