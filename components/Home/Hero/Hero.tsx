import { BaseInfo } from '@/Data/data';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/*Content*/}
            <div>
                {/*Sub Headings*/}
                <h1 data-aos="fade-left" className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
                    I am {BaseInfo.name}
                    </h1>
                    {/*Title*/}
                    <div data-aos="fade-right" data-aos-delay="100">
                    <TypeAnimation
                      sequence={BaseInfo.titles.flatMap((title) => [title, 1500])}
                        speed={60}
                        repeat={Infinity}
                        cursor={true}
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'pre',
                          borderRight: '7px solid white',
                          marginRight: '-4px',
                          animation: 'blink-cursor 0.8s step-end infinite', // 👈 blink effect
                        }}
                        className="text-bg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:leading-[2.5rem] lg:leading-[3rem] xl:leading-[3.5rem] text-white"
                      />
                        </div>
                    {/*Description*/}
                    <p data-aos="fade-left" data-aos-delay="200" className="mt-6 text-sm md:text-base text-white/60">{BaseInfo.description}</p>
                    {/*Button*/}
                    <button data-aos="zoom-in" data-aos-delay="300" className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg 
                    transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2">
                        <span>Download CV</span>
                        <FaDownload/>
                    </button>
                    
            </div>
            {/*Images Content*/}
            <div data-aos="zoom-in" data-aos-delay="400" className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden'>
                <Image src={BaseInfo.profilePic} 
                alt={BaseInfo.name} 
                width={500} 
                height={500} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
