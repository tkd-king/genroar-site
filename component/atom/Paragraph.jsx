import React from 'react'

function Paragraph({para, style}) {
  return (
    <div className='2xl:flex 2xl:flex-col 2xl:items-start 2xl:justify-start 2xl:text-start xl:flex xl:flex-col xl:items-start xl:justify-start xl:text-start lg:flex lg:flex-col lg:items-start lg:justify-start lg:text-start md:flex md:flex-col md:items-start md:justify-center md:text-start sm:flex sm:flex-col sm:items-center sm:justify-center sm:text:center flex flex-col items-center justify-center text-center'><p style={style}  className='text-14px text-white 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[100%] sm:w-[100%] w-[100%] '>{para}</p></div>
  )
}

export default Paragraph