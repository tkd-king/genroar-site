"use client"; // Add this line at the top

import React, { useEffect } from 'react';
import CustomImage from '../atom/CustomImage';
import Heading from '../atom/Heading';
import AnchorTag from '../atom/Anchortag';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Popular({ imageVariant, imageSrc, imageAlt, anchorText, anchorHref, paragraphText, containerClass }) {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className={`popular ${containerClass}`} data-aos="fade-right">
      <div className="pb-[30px]">
        <CustomImage variant={imageVariant} src={imageSrc} alt={imageAlt} />
      </div>
      <div className="p-[20px]">
        <div className="pb-[5px]">
          <AnchorTag href={anchorHref}>{anchorText}</AnchorTag>
        </div>
        <p className='text-[16px]'>
          {paragraphText}
        </p>
      </div>
    </div>
  );
}

export default Popular;
