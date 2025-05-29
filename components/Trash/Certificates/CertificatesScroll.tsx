'use client';

import React from 'react';
import Image from 'next/image';
import { certificates, certificatesSecondRow } from '@/Data/data';

const CertificatesScroll = () => {
  return (
    <div className="w-screen bg-black overflow-hidden space-y-12">

      {/* Row 1 - Infinite scroll left */}
      <div className="group overflow-hidden">
        <div className="flex animate-scroll-left group-hover:[animation-play-state:paused] whitespace-nowrap gap-6 w-[200%]">
          {[...certificates, ...certificates].map((item, index) => (
            <div
              key={`cert1-${index}`}
              className="w-[300px] sm:w-[340px] md:w-[400px] flex-shrink-0 flex flex-col items-center"
            >
              <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 25vw"
                />
              </div>
              <div className="p-6 flex items-center space-x-6">
                <div>
                  <h1 className="text-lg font-bold text-white">{item.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Manual scroll (not infinite) */}
      <div className="w-screen overflow-x-auto px-0 scroll-row-right">
        <div className="flex whitespace-nowrap gap-6 px-0">
          {certificatesSecondRow.map((item, index) => (
            <div
              key={`cert2-${index}`}
              className="w-[240px] sm:w-[280px] md:w-[300px] flex-shrink-0 flex flex-col items-center"
            >
              <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 25vw"
                />
              </div>
              <div className="p-4 flex items-center space-x-6">
                <div>
                  <h1 className="text-lg font-bold text-white">{item.name}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CertificatesScroll;
