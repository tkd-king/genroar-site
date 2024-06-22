'use client'; // Ensure this is at the top

import React, { useEffect } from 'react';
import Time from '../molecules/Time';
import Container from '../atom/Container';
import Heading from '../atom/Heading';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TimeAcadmy() {
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

  return (
    <div className=" overflow-hidden">
      <div className="py-[100px] text-center">
        <Heading level='2'>Latest News</Heading>
        <p className='text-[16px]'>There are many variations of passages</p>
      </div>
      <Container>
        <div className='w-full 2xl:gap-[30px] 2xl:grid 2xl:grid-cols-3 xl:grid xl:grid-cols-3 xl:gap-[30px] lg:grid lg:grid-cols-3 lg:gap-[30px] md:grid md:grid-cols-2 md:gap-[50px] sm:grid sm:grid-cols-1 sm:gap-[50px] grid grid-cols-1 gap-[50px]'>
          <div className=" " data-aos="fade-right">
            <Time 
              imgSrc='/assits/image/box.jpg' 
              headingText='Learn English in ease' 
              date='15 jun 2024' 
              views={59} 
              description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
              msg='19' 
              buttonText='READ MORE' 
            />  
          </div>
          <div className="" data-aos="fade-up">
            <Time 
              imgSrc='/assits/image/box.jpg' 
              headingText='Learn English in ease' 
              date='15 jun 2024' 
              views={59} 
              description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
              msg='19' 
              buttonText='READ MORE'
            />
          </div>
          <div className="" data-aos="fade-left">
            <Time 
              imgSrc='/assits/image/box.jpg' 
              headingText='Learn English in ease' 
              date='15 jun 2024' 
              views={59} 
              description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
              msg='19' 
              buttonText='READ MORE'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TimeAcadmy;
