import React from 'react';
import Image from "next/image";
import blockgrid from "../public/blockgrid.png";
import Link from "next/link";

function Prefooter() {
    return (
        <section className="w-full h-[70dvh] lg:h-[50dvh] overflow-hidden flex flex-row pt-[100px] pl-10 pr-10 lg:pt-10 pb-[100px] lg:pb-[100px] lg:pl-10 lg:pr-10 justify-center relative items-center bg-[#141414] mt-20 border-1 border-t-[#262626] border-b-[#262626] border-l-transparent border-r-transparent">
            <Image src={blockgrid} alt={"block grid"} className="absolute bottom-0 left-0 rotate-[180deg]" width={700} height={500}/>
            <Image src={blockgrid} alt={"block grid"} className="absolute bottom-0 right-0 rotate-[-360deg] hidden lg:block" width={500} height={500}/>
            <div className="w-full flex flex-col gap-y-5 lg:gap-0 lg:flex-row z-10 items-center justify-between">
                <div className="flex flex-col gap-y-3 w-full lg:w-[60%]">
                    <h1 className="text-white text-4xl md:text-[38px] lg:text-[48px]">Start Your Real Estate Journey Today</h1>
                    <p className="text-[#999999] lg:text-md text-sm">Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <Link href={"#"} className="text-white font-[600] pt-4 pb-4 max-sm:w-full lg:w-auto text-center lg:pl-7 lg:pr-7 rounded-md bg-[#703BF7]">Explore Properties</Link>
            </div>
        </section>
    );
}

export default Prefooter;