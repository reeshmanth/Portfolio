'use client';
import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import CertificatesScroll from './CertificatesScroll';

const Certificates = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709] overflow-hidden">
      <SectionHeading>Certificates</SectionHeading>
        <CertificatesScroll />
    </div>
  );
};

export default Certificates;
