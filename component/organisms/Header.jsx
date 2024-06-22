"use client"; // Add this line at the top

import React, { useEffect, useState } from 'react';
import Logo from '../atom/Logo';
import Nav from '../molecules/Nav';
import Container from '../atom/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMenu, IoClose } from "react-icons/io5";
import SideBar from '../molecules/SideBar';
import '../../app/globals.css'

function Header() {
  const [hasShadow, setHasShadow] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false); // corrected camelCase

  useEffect(() => {
    AOS.init({
      duration: 1000 // slow animation duration
    });

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSideBarOpen = () => { // renamed for better readability
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div className="relative">
      <div className={`fixed relative top-0 left-0 w-full transition-shadow duration-300 z-50 ${hasShadow ? 'shadow-md' : ''}`} data-aos="fade-down">
        <Container>
          <div className='flex justify-between items-center py-[10px]'>
            <div className="h-auto overflow-hidden">
              <Logo />
            </div>
            <div className="2xl:block xl:block lg:block md:hidden sm:hidden hidden">
              <Nav />
            </div>
            <button onClick={toggleSideBarOpen} className="flex absolute top-[10px] right-[50px] items-center justify-center shadow-2xl h-[30px] w-[30px] rounded-[10px] 2xl:hidden xl:hidden lg:hidden md:block sm:block visible">
              {sideBarOpen ? <IoClose className='h-[40px] w-[40px] mt-[20px] p-[5px] rounded-[10px] shadow-xl hover:rotate-[180] absolute top-[10px] right-[20px]' /> : <IoMenu className='h-[40px] w-[40px] mt-[20px] p-[5px] bg-white border-black border-[1px] rounded-[10px] shadow-xl' />}
            </button>
          </div>
        </Container>
      </div>
      {sideBarOpen && <SideBar width='360px' closeSideBar={toggleSideBarOpen} />} {/* conditional rendering */}
    </div>
  );
}

export default Header;
