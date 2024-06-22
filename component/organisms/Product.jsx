import React from 'react'
import ProductHeading from '../molecules/ProductHeading'
import Box from '../atom/Box'
import Header from './Header'

function Product() {
  return (
    <div className='flex flex-col gap-[20px]'>
      <ProductHeading />
        <div className="box-product flex w-[100%] py-[50px] gap-[20px] px-[10px]">
        <Box title='INFINITY FLEX CONTOUR BLEND TAILORED-FIT PANT' price1='AED 300' price2='AED 200' imageUrl='/assits/image/4-4-300x300.png' />
        <Box title='INFINITY FLEX CONTOUR BLEND TAILORED-FIT PANT' price1='AED 300' price2='AED 200' imageUrl='/assits/image/product.png' />
        <Box title='INFINITY FLEX CONTOUR BLEND TAILORED-FIT PANT' price1='AED 300' price2='AED 200' imageUrl='/assits/image/product3.png' />
        <Box title='INFINITY FLEX CONTOUR BLEND TAILORED-FIT PANT' price1='AED 300' price2='AED 200' imageUrl='/assits/image/product4.png' />
      </div>

    </div>
  )
}


export default Product