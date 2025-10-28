"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Property {
    id: number;
    title: string;
    description: string;
    bedroom: number;
    bathroom: number;
    property: string;
    price: string;
    imageUrl: string;
}

const properties: Property[] = [
    {
        id: 0,
        title: "Seaside Serenity Villa",
        description:
            "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
        bedroom: 4,
        bathroom: 3,
        property: "Villa",
        price: "$550,000",
        imageUrl: "/seasidevilla.png",
    },
    {
        id: 1,
        title: "Rustic Cottage Retreat",
        description:
            "A cozy 3-bedroom cottage perfect for countryside living and weekend getaways",
        bedroom: 3,
        bathroom: 2,
        property: "Cottage",
        price: "$420,000",
        imageUrl: "/rusticcottage.png",
    },
    {
        id: 2,
        title: "Metropolitan Haven",
        description:
            "A stylish modern apartment located in the heart of the city with skyline views",
        bedroom: 2,
        bathroom: 2,
        property: "Apartment",
        price: "$400,000",
        imageUrl: "/metropolitanhaven.png",
    },
    {
        id: 3,
        title: "Luxury Mountain Chalet",
        description:
            "Breathtaking 5-bedroom chalet offering panoramic mountain views and tranquility",
        bedroom: 5,
        bathroom: 4,
        property: "Chalet",
        price: "$750,000",
        imageUrl: "/metropolitanhaven.png",
    },
    {
        id: 4,
        title: "Urban Studio Loft",
        description:
            "Compact yet luxurious studio ideal for young professionals in downtown",
        bedroom: 1,
        bathroom: 1,
        property: "Loft",
        price: "$250,000",
        imageUrl: "/metropolitanhaven.png",
    },
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
        if (current < totalSlides - 1) setCurrent((prev) => prev + 1);
        if (current === totalSlides -1) setCurrent(0);
    };

    const prevSlide = () => {
        if (current > 0) setCurrent((prev) => prev - 1);
        const prevToFinish = totalSlides - 1;
        if (current === 0) setCurrent(prevToFinish);
    };
    return (
        <section className="w-full h-full flex flex-col pt-10 pb-[100px] lg:pb-[100px] pl-10 pr-10 justify-center relative items-center bg-[#141414] mt-20 overflow-hidden">
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-row gap-1">
                    <Image src={"/sparkle.svg"} alt={"sparkle"} width={30} height={30} />
                    <Image src={"/sparkle.svg"} alt={"sparkle"} className="opacity-[0.5]" width={18} height={18}/>
                    <Image src={"/sparkle.svg"} alt={"sparkle"} className="opacity-[0.5]" width={8.4} height={8.4}/>
                </div>
                <h1 className="text-white text-5xl font-[600]">Featured Properties</h1>
                <div className="w-full flex justify-between flex-col lg:flex-row mt-3 gap-5 lg:gap-0">
                    <p className="max-w-[800px] text-[#999999]">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.</p>
                    <Link href={"#"} className="pt-4 pb-4 lg:pl-12 lg:pr-12 max-sm:w-full flex items-center justify-center cursor-pointer border border-[#262626] bg-[#1A1A1A] text-white rounded-lg">View All Properties</Link>
                </div>
            </div>
            <div className="w-full overflow-hidden mt-10">
                <div className="flex gap-5 transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${current * (100 / totalSlides)}%)`, width: `${(properties.length / cardsPerView) * 100}%`,}}>
                    {properties.map((property) => (
                        <div key={property.id} style={{ width: `${100 / properties.length}%` }} className="flex-shrink-0 px-0 lg:px-4">
                            <div className="w-full rounded-md border border-[#262626] flex flex-col pt-5 pb-5 gap-3 justify-center items-center bg-[#1A1A1A]">
                                <Image src={property.imageUrl} alt={property.title} width={302} height={218} className="w-[260px] h-[200px] lg:w-[302px] lg:h-[218px] mt-5 object-cover rounded"/>
                                <div className="w-full pt-5 px-6 flex flex-col">
                                    <h1 className="text-white text-[1.25rem]">{property.title}</h1>
                                    <p className="text-[#999999] text-[0.9rem]">
                                        {property.description}{" "}
                                        <Link href={"#"} className="underline text-white">Read more</Link>
                                    </p>
                                </div>
                                <div className="w-full px-5 flex flex-wrap gap-3">
                                    <div className="flex flex-row gap-3 pt-1 pb-1 pl-3 pr-3 rounded-full bg-[#141414] border border-[#262626]">
                                        <Image src={"/bedicon.svg"} alt={"bed"} width={20} height={15}/>
                                        <p className="text-white">{property.bedroom}-Bedroom</p>
                                    </div>
                                    <div className="flex flex-row gap-3 pt-1 pb-1 pl-3 pr-3 rounded-full bg-[#141414] border border-[#262626]">
                                        <Image src={"/bathicon.svg"} alt={"bath"} width={20} height={15}/>
                                        <p className="text-white">{property.bathroom}-Bathroom</p>
                                    </div>
                                    <div className="flex flex-row gap-3 pt-1 pb-1 pl-5 pr-5 rounded-full bg-[#141414] border border-[#262626]">
                                        <Image src={"/vilaicon.svg"} alt={"villa"} width={17} height={13}/>
                                        <p className="text-white">{property.property}</p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between pt-5 px-6">
                                    <div className="flex flex-col">
                                        <p className="text-[#999999] text-md">Price</p>
                                        <p className="text-white text-lg">{property.price}</p>
                                    </div>
                                    <Link href={"#"} className="pt-3 pb-3 px-6 flex items-center justify-center cursor-pointer bg-[#703BF7] text-white rounded-lg">View Property Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row items-center gap-3 absolute bottom-0 right-10">
                    <button className="w-[50px] h-[50px] cursor-pointer flex justify-center items-center rounded-full border-2 border-[#262626] hover:bg-[#703BF7] transition" onClick={prevSlide}>
                        <Image src={"/arrowleft.svg"} alt={"arrow left"} width={20} height={20}/>
                    </button>
                    <button className="w-[50px] h-[50px] cursor-pointer flex justify-center items-center rounded-full border-1 border-[#262626] bg-[#1A1A1A] hover:bg-[#703BF7] transition" onClick={nextSlide}>
                        <Image src={"/arrowright.svg"} alt={"arrow right"} width={20} height={20}/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProperties;