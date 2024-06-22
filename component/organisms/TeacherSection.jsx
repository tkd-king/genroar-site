import React from 'react'
import ImageBox from '../molecules/ImageBox';

const TeacherSection=()=> {
  return (
    <div className=' gap-[30px] 2xl:grid 2xl:grid-cols-4 2xl:mx-[30px] xl:grid xl:grid-cols-4 xl:mx-[30px] lg:grid lg:grid-cols-4 lg:mx-[30px] md:grid md:grid-cols-2 md:mx-[10px] sm:grid sm:grid-cols-1 sm:mx-[10px] grid grid-cols-1 mx-[10px]' >
        <ImageBox 
        src='/assits/image/about.jpg'
        text1="Umair Shah" 
        text2="(756) 447 5779" 
        text3="info@example.com" 
        text4="Teacher"
        />
         <ImageBox 
        src='/assits/image/about.jpg'
        text1="Umair Shah" 
        text2="(756) 447 5779" 
        text3="info@example.com" 
        text4="Teacher"
        />
         <ImageBox 
        src='/assits/image/about.jpg'
        text1="Umair Shah" 
        text2="(756) 447 5779" 
        text3="info@example.com" 
        text4="Teacher"
        />
         <ImageBox 
        src='/assits/image/about.jpg'
        text1="Umair Shah" 
        text2="(756) 447 5779" 
        text3="info@example.com" 
        text4="Teacher"
        />
        
    </div>
  );
};

export default TeacherSection;