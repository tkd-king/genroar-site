import React from 'react'
import Heading from '../atom/TextStyleForTeacherBox';
import Heading1 from '../atom/TextStyleForTeacherBox';

const TeacherBoxDetailBox=()=> {
  return (
    <div className='w-[100%] my-[200px] px-[50px] gap-[30px] flex justify-between'>
        <div className="w-[463px] h-[464px]">
            <img className='w-[100%]' src='/assits/image/khanbhi.png' alt='image' />
        </div>
        <div className="w-[60%] flex flex-col gap-[30px]">
          <div className="name1 flex flex-col gap-[20px]">
            <Heading
            level='1' 
            text="M KHAN"
            />
            <Heading
            level='3' 
            text="Donald Palmer is a Specialist Real Estate Agent with 8 years of Experience in Real Estate field. He achive success with his honesty,determination, hardwork and commetment. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, totam?"
            />
            <div className="left flex justify-between gap-[40px]">
            <div className="w-[50%] flex flex-col gap-[20px]">
              <Heading1
               level='2' 
               text="Persoanl Info" 
              />
              <div className="1  flex gap-[10px] text-center">
                <img className='w-[8%]' src="/assits/image/home.png" alt="" />
              <Heading 
              level='3' 
              text="256, 1st AVE, Manchester 125 , Noth England"
              />
              </div>
              <div className="2 flex gap-[10px] text-center">
                <img className='w-[30px]' src="/assits/image/phone2.png" alt="" />
              <Heading 
              level='6' 
              text="(756) 447 5779"
              />
              </div>
              <div className="1 flex gap-[10px] text-center">
                <img className='w-[20px]' src="/assits/image/mail.png" alt="" />
              <Heading 
              level='6' 
              text="info@example.com"
              />
              </div>
              <div className="1 flex gap-[10px] text-center">
                <img className='w-[20px]' src="/assits/image/com.png" alt="" />
              <Heading 
              level='6' 
              text="www.example.com"
              />
              </div>
              <div className="1 ml-[-10px] flex  text-center items-center justify-start">
                <img className='w-[40px]' src="/assits/image/research.png" alt="phone" />
              <Heading 
              level='3' 
              text="5 Research Published"
              />
              </div>
              <div className="social3 flex gap-[10px]">
          <div className="h-[30px] w-[30px] rounded-[100%] bg-[#526ca6] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width='10px' viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></div>
      <div className="h-[30px] h-[30px] w-[30px] rounded-[100%] bg-[#229be2] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width='15px' viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></div>
      <div className="h-[30px]  h-[30px] w-[30px] rounded-[100%] bg-[#0575a9] flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="white" width='13px' viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></div>
      <div className="h-[30px] h-[30px] w-[30px] rounded-[100%] bg-[#d25244] flex items-center justify-center "><svg xmlns="http://www.w3.org/2000/svg" fill="white" width='18px' viewBox="0 0 640 512"><path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"/></svg></div>
     
          </div>
              </div>
            <div className="right w-[50%] flex flex-col gap-[10px]">
            <Heading1
               level='2' 
               text="Teacher Info" 
              />
              <div className="flex gap-[10px]">
                <Heading1 
              level='5' 
              text="Degrees:
"
              />
              <Heading1 
              level='6' 
              text="BSC IN CSE MSC IN EEE"
              />
              </div>
              <div className="flex gap-[10px]">
                <Heading1 
              level='5' 
              text="Institute:
"
              />
              <Heading1 
              level='3' 
              text="BPI"
              />
              </div>
              <div className="flex gap-[10px]">
                <Heading1 
              level='5' 
              text="Teachers Id:
"
              />
              <Heading1 
              level='3' 
              text="AB7876A6"
              />
              </div>
              <div className="flex gap-[10px]">
                <Heading1 
              level='5' 
              text="Number:
"
              />
              <Heading1 
              level='6' 
              text="(756) 447 5744"
              />
              </div>
              <div className="flex gap-[10px]">
                <Heading1 
              level='5' 
              text="Address:"
              />
              <Heading1 
              level='3' 
              text="246, 2st AVE, Manchester 126 , Noth England"
              />
              </div>
              
            </div>
          </div>
         
        </div>
    </div>
    </div>
  );
};

export default TeacherBoxDetailBox;