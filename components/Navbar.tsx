"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isSidebarOpen]);

    function toggleMenu() {
        setIsActive(prevState => !prevState);
        setIsSidebarOpen(prevState => !prevState);
    }
    return (
        <nav className="w-full bg-[#1A1A1A] relative flex flex-col lg:flex-row items-center gap-10 lg:pl-25 lg:pr-55 pt-5 pb-5">
            <div className="flex items-center justify-center flex-row pl-5 pr-5 gap-3 z-101">
                <Image src={logo} alt={"logo"} width={48} height={48} className="w-[28px] h-[28px] lg:w-[48px] lg:h-[48px]"/>
                <h3 className="text-white text-xl font-[500]">Estatein</h3>
            </div>
            <ul className="hidden lg:flex flex-row gap-10 items-center justify-center w-full h-full text-center text-white">
                <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-[#141414] border-1 border-transparent cursor-pointer hover:border-[#262626] rounded-lg"><Link href={"#"}>Home</Link></li>
                <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-[#141414] border-1 border-transparent cursor-pointer hover:border-[#262626] rounded-lg"><Link href={"#"}>About Us</Link></li>
                <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-[#141414] border-1 border-transparent cursor-pointer hover:border-[#262626] rounded-lg"><Link href={"#"}>Properties</Link></li>
                <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-[#141414] border-1 border-transparent cursor-pointer hover:border-[#262626] rounded-lg"><Link href={"#"}>Services</Link></li>
            </ul>
            <ul className="hidden lg:flex text-white">
                <li className="absolute top-[25%] right-20 pt-3 pb-3 pl-5 pr-5 hover:bg-[#141414] border-1 border-transparent cursor-pointer hover:border-[#262626] rounded-lg"><Link href={"#"}>Contact Us</Link></li>
            </ul>
            <button onClick={() => toggleMenu()} className="lg:hidden absolute z-200 right-5 w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200 border border-gray-300/65 group" aria-label="Toggle menu">
                <div className="relative flex flex-col items-center justify-center w-4 h-4 overflow-hidden">
                    <span className={`absolute w-4 h-[1.5px] bg-gray-300/70 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "rotate-45" : "-translate-y-1.5"}`}></span>
                    <span className={`absolute w-4 h-[1.5px] bg-gray-300/70 rounded-full transform transition-all duration-200 ease-in-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`absolute w-4 h-[1.5px] bg-gray-300/70 rounded-full transform transition-transform duration-300 ease-in-out ${isActive ? "-rotate-45" : "translate-y-1.5"}`}></span>
                </div>
            </button>
            <div className={isSidebarOpen ? "w-full min-h-screen bg-[#1A1A1A] flex relative z-100" : "hidden"}>
                <ul className="flex lg:hidden flex-col gap-10 items-center my-20 w-full min-h-screen text-center text-white">
                    <li className="hover:bg-[#141414] border-1 border-transparent cursor-pointer hover:border-[#262626] rounded-lg"><Link href={"#"}>Home</Link></li>
                    <li className="hover:bg-[#141414] border-1 border-transparent cursor-pointer hover:border-[#262626] rounded-lg"><Link href={"#"}>About Us</Link></li>
                    <li className="hover:bg-[#141414] border-1 border-transparent cursor-pointer hover:border-[#262626] rounded-lg"><Link href={"#"}>Properties</Link></li>
                    <li className="hover:bg-[#141414] border-1 border-transparent cursor-pointer hover:border-[#262626] rounded-lg"><Link href={"#"}>Services</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;