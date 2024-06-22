"use client"
import React, { useEffect } from 'react';
import Heading from '../atom/Heading';
import Paragraph from '../atom/Paragraph';
import Button from '../atom/Button';
import Container from '../atom/Container';
import '../../app/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
  useEffect(() => {
    AOS.init({
        duration: 1000
    });
  }, []);

  return (
    <div className='banner w-[100vw] py-[50px] mt-[100px] justify-center items-center flex'>
      <Container>
        <div className='pt-[70px] 2xl:flex 2xl:flex-col 2xl:items-start 2xl:justify-start xl:flex xl:flex-col xl:items-start xl:justify-start lg:flex lg:flex-col lg:items-start lg:justify-start md:flex md:flex-col md:items-start md:justify-start sm:flex sm:flex-col sm:items-center sm:justify-center flex flex-col items-center justify-center'>
          <div className='pb-[20px] ' data-aos="fade-up" data-aos-duration="1000">
            <Heading level='1'>Education Needs <br /> Complete Solution</Heading>
          </div>
          <div className='pb-[50px] text-[14px] leading-[20px] ' data-aos="fade-up" data-aos-duration="1000">
            <Paragraph para='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum saepe impedit, deserunt ratione sunt temporibus eos officia earum sequi magnam, necessitatibus labore dolore esse odio est perferendis repellendus beatae distinctio.' />
          </div>
          <div className="" data-aos="fade-right">
          <Button variant='button1'>VIEW COURSES</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
