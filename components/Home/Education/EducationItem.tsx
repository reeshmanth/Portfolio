// components/Education/EducationItem.tsx
import React from 'react';

interface Props {
  title: string;
  year: string;
  description: string;
}

const EducationItem = ({ title, year, description }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <h1 className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5] inline-block">
        {year}
      </h1>
      <h2 className="text-white text-[22px] font-bold mt-6">{title}</h2>
      <p className="text-white/70 text-[15px] leading-7 mt-4">{description}</p>
    </div>
  );
};

export default EducationItem;
