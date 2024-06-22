import React from 'react'
import Heading from '../atom/Heading'
import CustomImage from '../atom/CustomImage'

function ProductHeading() {
  return (
    <div className='text-center flex flex-col gap-[15px] py-[40px]'>
        <Heading level='2'>READY TO WEAR</Heading>  
        <Heading level='5'>Currently only black paint is available and <br/>
        all other products are out of stock.</Heading>  
        <div className='flex items-center justify-center gap-[40px]'>
          <div className="image-left">
            <CustomImage src='/assits/image/leftarrow.png'>
            </CustomImage>
          </div>
          <Heading level='6' className='text-blue-950'>LATEST PRODUCTS</Heading>
          <div className="image-right">
            <CustomImage src='/assits/image/rightlayer.png'></CustomImage>
          </div>
        </div>    
    </div>
  )
}

export default ProductHeading;