"use client"; // Add this line at the very top

import React, { useEffect } from 'react'
import '../../app/globals.css'
import Counter1 from '../molecules/Counter1'
import Container from '../atom/Container'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Counter() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="session overflow-hidden 2xl:h-[350px] xl:h-[350px] lg:h-[350px] md:h-[550px] sm:h-[950px] h-[950px] ">
      <Container>
        <div className="py-[100px]">
          <div className=' items-center justify-center 2xl:gap-[20px] 2xl:grid 2xl:grid-cols-4 xl:grid xl:grid-cols-4 xl:gap-[20px]   lg:grid lg:grid-cols-4 lg:gap-[20px]   md:grid md:grid-cols-2 md:gap-[50px] sm:grid sm:grid-cols-1 sm:gap-[50px] grid grid-cols-1 gap-[60px] '>
            <div className="" data-aos="fade-right">  <Counter1 targetCount={36} /></div>
            <div className="" data-aos="fade-up"><Counter1 targetCount={76} /></div>
            <div className="" data-aos="fade-up"><Counter1 targetCount={129} /></div>
            <div className="" data-aos="fade-left"><Counter1 targetCount={39} /></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Counter;
