"use client"
import React, { useState, useEffect } from 'react';
import '../../app/globals.css';

const Counter3 = ({ targetCount }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let counter = 0;
        const interval = setInterval(() => {
            counter += 1;
            setCount(counter);
            if (counter === targetCount) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [targetCount]);

    return (
        <div className='session-container session-counter  flex-col gap-[10px]' data-aos="fade-up">
            <span className='font-black text-yellow-500 text-4xl'>{count}+</span>
            <h2 className='font-normal text-white text-xl pt-[5px]'>Teacher</h2>
        </div>
    );
};

export default Counter3;
