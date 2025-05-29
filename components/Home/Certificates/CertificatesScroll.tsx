'use client';

import React from 'react';
import Image from 'next/image';
import { certificates, certificatesSecondRow } from '@/Data/data';

const CertificatesScroll = () => {
  return (
    <div className="w-screen bg-black overflow-hidden space-y-12 pt-24">
      {/* ✅ Row 1 - smooth left roll */}
      <div className="overflow-hidden">
        <div className="flex w-max whitespace-nowrap animate-scroll-left-roll hover:[animation-play-state:paused]">
          {[...certificates, ...certificates].map((item, index) => (
            <div
              key={`cert1-${index}`}
              className="w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 flex flex-col items-center mx-3"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={210}
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="pt-2 flex items-center space-x-6">
                <h1 className="text-sm sm:text-base font-bold text-white text-center">
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Row 2 - smooth right roll */}
      <div className="overflow-hidden">
        <div className="flex w-max whitespace-nowrap animate-scroll-right-roll hover:[animation-play-state:paused]">
          {[...certificatesSecondRow, ...certificatesSecondRow].map((item, index) => (
            <div
              key={`cert2-${index}`}
              className="w-[220px] sm:w-[240px] md:w-[260px] flex-shrink-0 flex flex-col items-center mx-3"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={260}
                  height={180}
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="pt-2 flex items-center space-x-6">
                <h1 className="text-sm sm:text-base font-bold text-white text-center">
                  {item.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesScroll;
