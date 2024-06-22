import React from 'react'
import { IoIosSearch } from "react-icons/io";
function Nav() {
  return (
    <div>
      <ul className='2xl:flex 2xl:flex-row 2xl:items-center xl:flex xl:flex-row xl:items-center lg:flex lg:flex-row lg:items-center md:flex md:flex-col md:gap-[20px] sm:gap-[20px] sm:flex sm:flex-col  flex flex-col gap-[20px]'>
        <li><a className='p-[20px] text-[16px] hover:text-yellow-500' href="#">HOME</a></li>
        <li><a className='p-[20px] text-[16px] hover:text-yellow-500' href="#">ABOUT</a></li>
        <li><a className='p-[20px] text-[16px] hover:text-yellow-500' href="#">GALLERY</a></li>
        <li><a className='p-[20px] text-[16px] hover:text-yellow-500' href="">COURSES</a></li>
        <li><a className='p-[20px] text-[16px] hover:text-yellow-500' href="">FEATURES</a></li>
        <li><a className='p-[20px] text-[16px] hover:text-yellow-500 ' href="">CONTENT</a></li>
        <li><a className=' text-[16px] hover:text-yellow-500 2xl:block xl:block lg:block md:hidden sm:hidden hidden' href="#"><IoIosSearch className='text-[25px]' /></a></li>
      </ul>
      
    </div>
  )
}

export default Nav