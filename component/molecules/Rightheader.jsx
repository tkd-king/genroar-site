"use client"
import React, { useState } from 'react';
import { IoHeart, IoClose } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import '../../app/globals.css'; // Import your CSS file for custom styles

function Rightheader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleHeartClick = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const handleCloseClick = () => {
    setIsClosing(true);
    setTimeout(() => setIsOpen(false), 300); // Match the timeout duration with the animation duration
  };

  return (
    <div className='flex gap-[40px] items-center'>
      <div className='log'>
        <a className='underline' href="#">login</a>
      </div>
      <div className='flex gap-[20px]'>
        <FiSearch className='text-[20px]' />
        <div className='flex relative'>
          <IoHeart className='text-[20px]' onClick={handleHeartClick} />
          <div className='bg-red-600 w-[18px] h-[18px] top-[-7px] left-[60%] items-center justify-center text-[10px] font-extrabold text-white flex rounded-[100%] absolute'><button>0</button></div>
        </div>
        <div className="flex relative">
          <FaShoppingCart className='text-[20px]' onClick={handleHeartClick}/>
          <div className='bg-red-600 w-[18px] h-[18px] top-[-7px] left-[60%] items-center justify-center text-[10px] font-extrabold text-white flex rounded-[100%] absolute'><button>0</button></div>
        </div>
      </div>
      {isOpen && (
        <div className={`slide-in-panel ${isClosing ? 'slide-out' : ''}`}>
          <div className="flex justify-end  p-4">
            <IoClose className='text-[20px] hover:rotate-[90deg] transition-transform duration-500' onClick={handleCloseClick} />
          </div>
          {/* Add your slide-in content here */}
          <p>This is the slide-in content!</p>
        </div>
      )}
    </div>
  );
}

export default Rightheader;
