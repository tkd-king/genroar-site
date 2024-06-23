import React from 'react'
import "../../app/globals.css"

const PortfolioBox=({AddSomeText, Alt, AddSomeIcon ,ImagePath})=> {
  return (
    <div className='box relative overflow-hidden my-[100px] w-[200px] ml-[400px] hover:transition duration-[0.5] ease-right-in'>
        <div className="uper-box absolute top-[-237px] left-[-237px] opacity-0 h-[300px] w-[270px] bg-white rotate-[45deg] text-center hover:ease-in-out duration-500"><p className='rotate-[-45deg] font-black text-black mt-[150px] ml-[40px] opacity-[100%]'>{AddSomeText}</p></div>
        <div className=" h-[200px] w-[200px] bg-red-900 hover:cursor-pointer "><img className='w-[100%] bg-cover' src={ImagePath} alt={Alt} /></div>
        <div className="lower-box absolute left-[185px] bottom-[-85px] h-[100px] w-[100px] bg-black rotate-[45deg] hover:ease-in-out duration-500 ">{AddSomeIcon}</div>
    </div>
  );
};

export default PortfolioBox;