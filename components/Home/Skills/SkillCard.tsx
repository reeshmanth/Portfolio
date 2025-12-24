import React from 'react'
import Image from 'next/image';

//Define the props type

type Props={
    skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    }
}

const SkillCard = ({skill}:Props) => {
    const {image,percent,title} =skill
    const percentage = parseInt(percent.replace('%', ''))
    
  return (
    <div className='p-6 hover:bg-gradient-to-br hover:from-blue-900/50 hover:to-purple-900/50 duration-300 transition-all cursor-pointer text-center rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 group'>
        <div className='relative mb-4'>
          <Image 
            src={image} 
            alt={title} 
            width={60} 
            height={60} 
            className='object-cover mx-auto group-hover:scale-110 transition-transform duration-300'
          />
        </div>
        <h3 className='text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors'>
          {title}
        </h3>
        <div className='space-y-2'>
          <div className='flex justify-between text-sm text-gray-300'>
            <span>Proficiency</span>
            <span className='text-blue-400 font-medium'>{percent}</span>
          </div>
          <div className='w-full bg-gray-700 rounded-full h-2'>
            <div 
              className='bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out'
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
    </div>
  )
}

export default SkillCard