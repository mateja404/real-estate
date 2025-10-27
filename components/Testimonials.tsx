"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Testimonials {
    id: number;
    title: string;
    description: string;
    name: string;
    location: string;
    img: string;
}

const testimonials: Testimonials[] = [
    {
        id: 0,
        title: "Exceptional Service!",
        description: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        name: "Wade Warren",
        location: "USA, California",
        img: "/wadewarren.png"
    },
    {
        id: 1,
        title: "Exceptional Service!",
        description: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        name: "Wade Warren",
        location: "USA, California",
        img: "/emeliethomson.png"
    },
    {
        id: 2,
        title: "Exceptional Service!",
        description: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        name: "Wade Warren",
        location: "USA, California",
        img: "/emeliethomson.png"
    }
];

function Testimonials() {
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

    const totalSlides = Math.ceil(testimonials.length / cardsPerView);

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
                <h1 className="text-white text-5xl font-[600]">What Our Clients Say</h1>
                <div className="w-full flex justify-between flex-col lg:flex-row mt-3 gap-5 lg:gap-0">
                    <p className="max-w-[800px] text-[#999999]">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                    <Link href={"#"} className="pt-4 pb-4 lg:pl-12 lg:pr-12 max-sm:w-full flex items-center justify-center cursor-pointer border border-[#262626] text-white rounded-lg">View All Testimonials</Link>
                </div>
            </div>
            <div className="w-full overflow-hidden mt-10">
                <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${current * (100 / totalSlides)}%)`, width: `${(testimonials.length / cardsPerView) * 100}%`,}}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} style={{ width: `${100 / testimonials.length}%` }} className="flex-shrink-0 px-0 lg:px-4">
                            <div className="w-full h-full flex flex-col gap-5 p-10 bg-[#141414] border-1 border-[#262626] rounded-md">
                                <div className="flex flex-row gap-3">
                                    <Image src={"/star.svg"} alt="star" width={30} height={30} className="p-2 bg-[#1A1A1A] border-1 border-[#262626] rounded-full"/>
                                    <Image src={"/star.svg"} alt="star" width={30} height={30} className="p-2 bg-[#1A1A1A] border-1 border-[#262626] rounded-full"/>
                                    <Image src={"/star.svg"} alt="star" width={30} height={30} className="p-2 bg-[#1A1A1A] border-1 border-[#262626] rounded-full"/>
                                    <Image src={"/star.svg"} alt="star" width={30} height={30} className="p-2 bg-[#1A1A1A] border-1 border-[#262626] rounded-full"/>
                                    <Image src={"/star.svg"} alt="star" width={30} height={30} className="p-2 bg-[#1A1A1A] border-1 border-[#262626] rounded-full"/>
                                </div>
                                <h2 className="text-white text-[1.5rem]">{testimonial.title}</h2>
                                <p className="text-white text-[1rem]">{testimonial.description}</p>
                                <div className="w-full flex flex-row gap-3">
                                    <div className="flex justify-center items-center">
                                        <Image src={testimonial.img} alt={testimonial.title} width={50} height={50}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-white text-[1.25rem]">{testimonial.name}</h3>
                                        <p className="text-[#999999] text-[1rem]">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row items-center gap-3 absolute bottom-0 right-10">
                    <button className="w-[50px] h-[50px] flex cursor-pointer justify-center items-center rounded-full border-2 border-[#262626] hover:bg-[#703BF7] transition" onClick={prevSlide}>
                        <Image src={"/arrowleft.svg"} alt={"arrow left"} width={20} height={20}/>
                    </button>
                    <button className="w-[50px] h-[50px] flex cursor-pointer justify-center items-center rounded-full border-1 border-[#262626] bg-[#1A1A1A] hover:bg-[#703BF7] transition" onClick={nextSlide}>
                        <Image src={"/arrowright.svg"} alt={"arrow right"} width={20} height={20}/>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;