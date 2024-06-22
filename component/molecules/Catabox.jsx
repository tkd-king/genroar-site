import React from 'react'
import CustomImage from '../atom/CustomImage'
import Heading from '../atom/Heading'

function Catabox() {
  return (
    <div className='text-center w-[18%]'>
        <CustomImage variant='five'v src='/assits/image/image1.bmp'></CustomImage>
        <Heading level='4'>Accessrios</Heading>
    </div>
  )
}

export default Catabox