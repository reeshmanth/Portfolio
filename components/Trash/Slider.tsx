"use client";
import { certificates } from '@/Data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CertificateCard from './CertificateCard'; // ✅ Fixed typo (was CertificateCarad)



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const Slider = () => {
  return <Carousel arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite responsive={responsive}>
    {certificates.map((certificate) =>{
        return <div key={certificate.image}>
            {/* Certificate Card */}
            <CertificateCard certificate={certificate}/>
        </div>
    })}

  </Carousel>
}

export default Slider