"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Faq {
    id: number;
    question: string;
    answer: string;
}

const faqs: Faq[] = [
    {
        id: 0,
        question: "How do I search for properties on Estatein?",
        answer: "Learn how to use our user-friendly search tools to find properties that match your criteria."
    },
    {
        id: 1,
        question: "What documents do I need to sell my property through Estatein?",
        answer: "Find out about the necessary documentation for listing your property with us."
    },
    {
        id: 2,
        question: "How can I contact an Estatein agent? ",
        answer: "Discover the different ways you can get in touch with our experienced agents."
    }
];

function Faq() {
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

    const totalSlides = Math.ceil(faqs.length / cardsPerView);

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
                <h1 className="text-white text-5xl font-[600]">Frequently Asked Questions</h1>
                <div className="w-full flex justify-between flex-col lg:flex-row mt-3 gap-5 lg:gap-0">
                    <p className="max-w-[800px] text-[#999999]">Find answers to common questions about Estatein&apos;s services, property listings, and the real estate process. We&apos;re here to provide clarity and assist you every step of the way.</p>
                    <Link href={"#"} className="pt-4 pb-4 lg:pl-12 lg:pr-12 max-sm:w-full flex items-center justify-center cursor-pointer border border-[#262626] bg-[#1A1A1A] text-white rounded-lg">View All FAQs</Link>
                </div>
            </div>
            <div className="w-full mx-auto mt-10">
                <div className="flex transition-transform gap-5 duration-500 ease-in-out justify-center items-center" style={{transform: `translateX(-${current * (100 / totalSlides)}%)`, width: `${(faqs.length / cardsPerView) * 100}%`,}}>
                    {faqs.map((faq) => (
                        <div key={faq.id} style={{ width: `${100 / faqs.length}%` }} className="flex-shrink-0 px-0 lg:px-4 relative">
                            <div className="w-full min-h-[250px] rounded-md border border-[#262626] flex flex-col pt-10 pb-15 pl-10 pr-10 gap-5 bg-[#141414] relative">
                                <h2 className="text-start text-white text-[1.1rem]">{faq.question}</h2>
                                <p className="text-start text-[#999999] text-[1rem]">{faq.answer}</p>
                                <Link href={"#"} className="pt-4 pb-4 pl-4 pr-4 lg:w-[120px] max-sm:w-full flex items-center justify-center cursor-pointer lg:absolute lg:bottom-3 border border-[#262626] bg-[#1A1A1A] text-white rounded-lg">Read More</Link>
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

export default Faq;