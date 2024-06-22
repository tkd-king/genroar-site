
import Nav from './Nav';
import React from 'react';
import { IoClose } from "react-icons/io5";
import '../../app/globals.css'

function SideBar({ isOpen, closeSideBar, width }) {
    return (
        <div
            className={`sidebar ${isOpen ? 'open' : ''}`}
            style={{ width: width || '360px' }} // Use inline style for width
        >
            <button onClick={closeSideBar} className="flex items-center justify-center shadow-2xl h-[30px] w-[30px] rounded-[10px] m-4">
                <IoClose  />
            </button>
            <Nav />
        </div>
    );
}

export default SideBar;
