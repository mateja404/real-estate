import React from 'react';
import Image from "next/image";
import blockgrid from "../public/blockgrid.svg";

function Prefooter() {
    return (
        <section className="w-full h-full flex flex-row pt-10 pb-[100px] lg:pb-[100px] pl-10 pr-10 justify-center relative items-center bg-[#141414] mt-20 border-1 border-t-[#262626] border-b-[#262626] border-l-transparent border-r-transparent">
            <div className="relative left-0 bottom-0 flex justify-start items-center w-1/2 h-full">
                <Image src={blockgrid} alt={"block grid"} className="" width={400} height={200}/>
            </div>
            <div className="relative right-0 top-0 bg-red-500 flex justify-end items-center w-1/2 h-full">
                <Image src={blockgrid} alt={"block grid"} className="rotate-[180deg] absolute right-0 top-0" width={400} height={200}/>
            </div>
        </section>
    );
}

export default Prefooter;