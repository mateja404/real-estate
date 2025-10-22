import React from 'react';
import Image from "next/image";
import hero_abstract from "../public/heroabstract.svg";
import hero_building from "../public/herobuilding.svg";
import herocenter from "../public/herocenter.png";
import Link from "next/link";

function HeroSection() {
    return (
        <main className="w-full  pt-5 pb-5 bg-[#141414]">
            <section className="w-full lg:h-[65%] flex flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-1/2 pt-13 pb-13 pl-7 pr-7 lg:pt-20 lg:pb-20 lg:pl-13 lg:pr-13 flex flex-col gap-10">
                    <h1 className="text-white text-[28px] md:text-[46px] lg:text-[60px] lg:text-6xl">Discover Your Dream Property with Estatein</h1>
                    <p className="text-[18px] text-[#999999]">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                    <div className="w-full flex flex-col lg:flex-row gap-3">
                        <Link href={"#"} className="pt-5 pb-5 lg:pl-12 lg:pr-12 max-sm:w-full flex items-center justify-center cursor-pointer border-1 border-[#262626] text-white rounded-lg">Learn More</Link>
                        <Link href={"#"} className="pt-5 pb-5 lg:pl-12 lg:pr-12 max-sm:w-full flex items-center justify-center cursor-pointer bg-[#703BF7] text-white rounded-lg">Browse Properties</Link>
                    </div>
                    <div className="w-full flex flex-wrap gap-3">
                        <div className="pt-5 pb-5 pl-10 pr-10 bg-[#262626] w-[230px] rounded-lg">
                            <h2 className="text-white font-bold text-3xl">200+</h2>
                            <p className="text-[#999999] text-[1rem]">Happy Customers</p>
                        </div>
                        <div className="pt-5 pb-5 pl-10 pr-10 bg-[#262626] w-[230px] rounded-lg">
                            <h2 className="text-white font-bold text-3xl">10k+</h2>
                            <p className="text-[#999999] text-[1rem]">Properties For Clients</p>
                        </div>
                        <div className="pt-5 pb-5 pl-10 pr-10 bg-[#262626] w-[230px] rounded-lg">
                            <h2 className="text-white font-bold text-3xl">16+</h2>
                            <p className="text-[#999999] text-[1rem]">Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 h-[30dvh] lg:h-[75dvh] flex">
                    <div className="w-[90%] h-full rounded-xl mx-auto lg:w-full bg-gradient-to-tr from-[#1A1A1A] via-[#191919] to-[#2A213F] relative">
                        <Image src={herocenter} alt={"hero center"} className="text-center absolute lg:-mx-12 lg:mt-15 mt-33 mx-5 z-5" width={100} height={100}/>
                        <Image src={hero_building} alt={"hero building"} width={1920} height={1080} className="w-[95%] h-[95%] absolute bottom-0 z-2"/>
                        <Image src={hero_abstract} alt={"hero abstract shapes"} width={1920} height={1080} className="w-full h-full object-cover flex absolute inset-0 z-0"/>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HeroSection;