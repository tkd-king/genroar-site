"use client"; 

import React, { useState, useEffect } from 'react';
import Banner from '@/component/molecules/Banner';
import Nav from '@/component/molecules/Nav';
import Popular from '@/component/molecules/Popular';
import Time from '@/component/molecules/Time';
import Counter from '@/component/organisms/Counter';
import Header from '@/component/organisms/Header';
import Popularboxes from '@/component/organisms/Popularboxes';
import Provide from '@/component/organisms/Provide';
import TimeAcadmy from '@/component/organisms/TimeAcadmy';
import LoadingSpinner from '@/component/atom/LoadingSpinner'; 
import TeacherSection from '@/component/organisms/TeacherSection';
import PortfolioBox from '@/component/molecules/PortfolioBox';
import TeacherBoxDetailBox from '@/component/molecules/TeacherBoxDetailBox';

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },0); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header />
          <Banner />
          <div className=''>
            <Provide />
          </div>
          <Popularboxes />
          <Counter />
          <TimeAcadmy />
          <TeacherSection/>
          <PortfolioBox />
          <TeacherBoxDetailBox/>
        </>
      )}
    </div>
  );
}

export default Page;
