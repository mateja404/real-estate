import React from 'react';
import Image from "next/image";
import icon_one from "../public/icon1.svg";
import icon_two from "../public/icon2.svg";
import icon_three from "../public/icon3.svg";
import icon_four from "../public/icon4.svg";
import arrow from "../public/arrow.svg";

const cards = [
    {
        id: 0,
        icon: icon_one,
        title: "Find Your Dream Home"
    },
    {
        id: 1,
        icon: icon_two,
        title: "Unlock Property Value"
    },
    {
        id: 2,
        icon: icon_three,
        title: "Effortless Property Management"
    },
    {
        id: 3,
        icon: icon_four,
        title: "Smart Investments"
    },
];

function SubHeroSection() {
    return (
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-7 bg-[#141414]">
            {cards.map((card) => (
                <div key={card.id} className="w-[90%] lg:w-[330px] pl-15 pr-15 flex flex-col justify-center items-center gap-3 border-1 border-[#262626] p-5 rounded-lg">
                    <div className="w-full h-full relative">
                        <Image src={arrow} alt="arrow" width={20} height={20} className="absolute right-0"/>
                    </div>
                    <Image src={card.icon} alt={card.title} width={50} height={50}/>
                    <h2 className="text-white text-[0.875rem]">{card.title}</h2>
                </div>
            ))}
        </div>
    );
}

export default SubHeroSection;