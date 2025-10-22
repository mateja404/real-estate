import React from 'react';
import Image from "next/image";
import headersvg from "../public/headerabstract.svg";
import Link from "next/link";

function Header() {
    return (
        <header className="w-full h-[63px] bg-[#1A1A1A] flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:gap-3 sm:p-5 md:p-0 z-10 w-full h-full relative items-center justify-center">
                <h4 className="text-white text-center z-3 flex text-[0.9rem]">✨Discover Your Dream Property with Estatein</h4>
                <Link href={"/"} className="text-white text-center underline underline-offset-1 text-[0.9rem]">Learn more</Link>
            </div>
            <Image src={headersvg} alt={"header abstract design"} width={1920} height={63} className="w-full h-full absolute top-0 left-0 object-cover flex z-0 opacity-[0.3]"/>
        </header>
    );
}

export default Header;