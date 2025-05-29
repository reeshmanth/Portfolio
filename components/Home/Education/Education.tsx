// components/Education/Education.tsx
import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import EducationItem from './EducationItem';
import { educationData } from '@/data/data'; // Adjust the path if needed

const Education = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Education</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-[80%] mx-auto mt-20">
        {educationData.map((item) => (
          <EducationItem
            key={item.id}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
