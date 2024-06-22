'use client';
import React, { useEffect } from 'react';
import CustomImage from '../atom/CustomImage';
import Heading from '../atom/Heading';
import { CiCalendar } from "react-icons/ci";
import { IoEyeSharp } from "react-icons/io5";
import Button from '../atom/Button';
import { MdMessage } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';

function Time({ imgSrc, headingText, date, views, msg, description, buttonText }) {
  useEffect(() => {
    AOS.init({
      duration: 500
    });
  }, []);

  return (
    <div className=' hover:shadow-2xl bg-blue-50' data-aos="flip-left  ">
      <CustomImage variant='five' src={imgSrc} />
      <div className="main-text p-[20px]">
        <Heading level='3'>{headingText}</Heading>
        <div className="main flex gap-[15px] py-[10px]">
          <div className="flex gap-[5px] items-center">
            <CiCalendar />
            <Heading level='5'>{date}</Heading>
          </div>
          <div className="ayes flex items-center gap-[5px]">
            <IoEyeSharp className="text-gray-500" />
            <Heading level='5'>{views}</Heading>
          </div>
          <div className="msg flex items-center gap-[5px]">
            <MdMessage className="text-gray-500" />
            <Heading level='5'>{msg}</Heading>
          </div>
        </div>
        <p className='text-[16px] pb-[40px]'>{description}</p>
        <div className="pb-[20px]">
          <Button variant='button1'>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
}

Time.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  headingText: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  msg: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default Time;
