"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

interface Properties {
    id: number;
    title: string;
    description: string;
    bedroom: number;
    bathroom: number;
    property: string;
    price: string;
    imageUrl: string;
}

const properties: Properties[] = [
    {
        id: 0,
        title: "Seaside Serenity Villa",
        description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
        bedroom: 4,
        bathroom: 3,
        property: "Villa",
        price: "$550,000",
        imageUrl: "/seasidevilla.png"
    }
];

function FeaturedProperties() {
    const [current, setCurrent] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setCardsPerView(1);
            else if (window.innerWidth < 1024) setCardsPerView(2);
            else setCardsPerView(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalSlides = Math.ceil(properties.length / cardsPerView);

    const nextSlide = () => {
        if (current < totalSlides - 1) setCurrent(current + 1);
    };

    const prevSlide = () => {
        if (current > 0) setCurrent(current - 1);
    };
    return (
        <section className="w-full flex flex-col p-10 justify-center items-center bg-[#141414] mt-20">
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-row gap-1">
                    <Image src={"/sparkle.svg"} alt={"sparkle"} width={30} height={30}/>
                    <Image src={"/sparkle.svg"} alt={"sparkle"} className="opacity-[0.5]" width={18} height={18}/>
                    <Image src={"/sparkle.svg"} alt={"sparkle"} className="opacity-[0.5]" width={8.4} height={8.4}/>
                </div>
                <h1 className="text-white text-5xl font-[600]">Featured Properties</h1>
                <div className="w-full flex justify-between flex-col lg:flex-row mt-3 gap-5 lg:gap-0">
                    <p className="max-w-[800px] text-[#999999]">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click &quot;View Details&quot; for more information.</p>
                    <Link href={"#"} className="pt-4 pb-4 lg:pl-12 lg:pr-12 max-sm:w-full flex items-center justify-center cursor-pointer border-1 border-[#262626] text-white rounded-lg">View All Properties</Link>
                </div>
            </div>
            <div className="w-full h-full pt-10 lg:p-10 flex justify-center items-center">
                <div className="w-[100%] lg:w-[450px] lg:h-[500px] rounded-md border-1 border-[#262626] flex flex-col gap-3 justify-center items-center pt-5 pb-5">
                    <Image src={"/rusticcottage.png"} alt={"sea side"} width={100} height={100} className="w-[260px] h-[200px] lg:w-[332px] lg:h-[218px]"/>
                    <div className="w-full pt-5 pl-5 pr-5 lg:pl-10 lg:pr-10 flex flex-col">
                        <h1 className="text-white text-[1.25rem]">Seaside Serenity Villa</h1>
                        <p className="text-[#999999] text-[0.9rem]">A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... <Link href={"#"} className="underline text-white">Read more</Link></p>
                    </div>
                    <div className="w-full pl-5 pr-5 flex flex-wrap gap-3">
                        <div className="flex flex-row gap-3 pt-1 pb-1 pl-3 pr-3 rounded-full bg-[#1A1A1A] border-1 border-[#262626]">
                            <Image src={"/bedicon.svg"} alt={"bathicon"} width={20} height={15}/>
                            <p className="text-white">4-Bedroom</p>
                        </div>
                        <div className="flex flex-row gap-3 pt-1 pb-1 pl-3 pr-3 rounded-full bg-[#1A1A1A] border-1 border-[#262626]">
                            <Image src={"/bathicon.svg"} alt={"bathicon"} width={20} height={15}/>
                            <p className="text-white">3-Bathroom</p>
                        </div>
                        <div className="flex flex-row gap-3 pt-1 pb-1 pl-5 pr-5 rounded-full bg-[#1A1A1A] border-1 border-[#262626]">
                            <Image src={"/vilaicon.svg"} alt={"bathicon"} width={20} height={15}/>
                            <p className="text-white">Villa</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default FeaturedProperties;