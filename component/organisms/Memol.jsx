"use client";

import React, { useState } from 'react';

function Memol() {
    const [value, setValue] = useState(1);
    const [factor, setFactor] = useState(360);
    const [history, setHistory] = useState([1]);

    const multiplication = value * factor;

    const handlePlusClick = () => {
        const newValue = value + 1;
        setValue(newValue);
        setHistory([...history, newValue]);
    };

    const handleMinusClick = () => {
        if (value > 1) {
            const newValue = value - 1;
            setValue(newValue);
            setHistory([...history, newValue]);
        }
    };

    const handleResetClick = () => {
        setValue(1);
        setHistory([1]);
    };

    const handleFactorChange = (e) => {
        setFactor(Number(e.target.value));
    };

    const handleInputChange = (e) => {
        const newValue = Number(e.target.value);
        if (newValue >= 1) {
            setValue(newValue);
            setHistory([...history, newValue]);
        }
    };

    return (
        <div className='memo'>
            <h1>Memo</h1>
            Multiplication: {multiplication} <br />
            <button className='bg-black p-[20px] mb-[10px] text-white' onClick={handlePlusClick}>
                Addition
            </button>
            <span className='pb-[10px]'>Value: {value}</span> <br />
            <button className='bg-black p-[20px] text-white mb-[20px]' onClick={handleMinusClick}>
                Minus
            </button> <br />
            <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className='border p-[10px] mb-[10px]'
                min="1"
            /> <br />
            <input
                type="number"
                value={factor}
                onChange={handleFactorChange}
                className='border p-[10px] mb-[10px]'
            /> <br />
          <div className='p-[20px]'>
          History: {history.join(', ')}
          </div>
            <br/>

            <button className='bg-black p-[20px] text-white mb-[20px]' onClick={handleResetClick}>
                Reset
            </button> <br />
        </div>
    );
}

export default Memol;
