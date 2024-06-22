import React from 'react';
import CustomImage from './CustomImage';
import Heading from './Heading';
import { FaRegStar } from 'react-icons/fa6';
import Button from './Button';

function Box({ imageUrl, title, price1, price2 }) {
  return (
    <div className='w-[25%] product-box shadow'>
      <CustomImage src={imageUrl} variant='prime' ></CustomImage>
      <div className='box-text px-[10px]'>
        <Heading level='4' className='capitalize pt-[30px]'>
          {title}
        </Heading>
        <div className='icon flex py-[10px] text-gray-400'>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <div className='Rs flex items-center gap-[5px]'>
          <Heading className='line-through text-gray-400' level='4'>{price1}</Heading>
          <Heading className='underline' level='3'>{price2}</Heading>
        </div>
        <div className='btn-box py-[30px]'>
          <Button variant='button1'>uamir</Button>
        </div>
      </div>
    </div>
  );
}

export default Box;
