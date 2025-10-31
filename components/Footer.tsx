import React from 'react';
import Image, { StaticImageData } from "next/image";
import logo from "@/public/logo.svg";
import { InputGroup,  InputGroupAddon,  InputGroupButton,  InputGroupInput } from "@/components/ui/input-group";
import footeremailicon from "@/public/footeremailicon.png";
import footeremailsendicon from "@/public/footersendemail.png";
import Link from "next/link";
import facebook_icon from "@/public/facebook.svg";
import twitter_icon from "@/public/twitter.svg";
import linkedin_icon from "@/public/linkedin.svg";
import youtube_icon from "@/public/youtube.svg";

interface Icons {
    id: number;
    icon: StaticImageData;
    alt: string;
    width: number;
    height: number;
}

const icons: Icons[] = [
    {
        id: 0,
        icon: facebook_icon,
        alt: "facebook icon",
        width: 13,
        height: 13
    },
    {
        id: 1,
        icon: twitter_icon,
        alt: "twitter icon",
        width: 20,
        height: 20
    },
    {
        id: 2,
        icon: linkedin_icon,
        alt: "linkedin icon",
        width: 20,
        height: 20
    },
    {
        id: 3,
        icon: youtube_icon,
        alt: "youtube icon",
        width: 20,
        height: 20
    }
];

function Footer() {
    return (
        <footer className="w-full lg:h-[60dvh] flex flex-col pt-10">
            <div className="w-full h-full flex flex-col lg:flex-row pt-0 pb-0 pl-20 pr-20 lg:gap-25">
                <div className="flex flex-col items-center justify-center gap-5">
                    <div className="w-full flex flex-row items-center gap-3">
                        <Image src={logo} alt={"logo"} width={48} height={48} className="w-[28px] h-[28px] lg:w-[37px] lg:h-[37px]"/>
                        <h3 className="text-white text-xl font-[500]">Estatein</h3>
                    </div>
                    <div className="flex flex-col w-full">
                        <InputGroup className="border-1 border-[#262626]">
                            <InputGroupInput className="text-white placeholder:text-[#999999]" placeholder="Enter Your Email" />
                            <InputGroupAddon>
                                <Image src={footeremailicon} alt={"footer email icon"} width={15} height={15} />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                <InputGroupButton className="hover:bg-transparent cursor-pointer"><Image src={footeremailsendicon} alt={"footer email send icon"} width={15} height={15}/></InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-10 pb-10">
                    <div className="flex flex-row justify-between gap-20 lg:w-[300px]">
                        <div className="pt-10 pb-10 w-1/4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-md text-[#999999]">Home</h2>
                                <ul className="flex flex-col gap-2">
                                    <li><Link href={"#"} className="text-sm text-white">Hero section</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Features</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Properties</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Testimonials</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">FAQ&apos;s</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-10 pb-10 w-1/2 lg:w-[300px]">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-md text-[#999999]">About us</h2>
                                <ul className="flex flex-col gap-2">
                                    <li><Link href={"#"} className="text-sm text-white">Our Story</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Our Works</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">How It Works</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Our Team</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Our Clients</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between -mt-10 lg:mt-0 gap-20 lg:w-[300px]">
                        <div className="pt-10 pb-10 w-1/4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-md text-[#999999]">Properties</h2>
                                <ul className="flex flex-col gap-2">
                                    <li><Link href={"#"} className="text-sm text-white">Portfolio</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Categories</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-10 pb-10 w-1/2 lg:w-auto">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-md text-[#999999]">Services</h2>
                                <ul className="flex flex-col gap-2">
                                    <li><Link href={"#"} className="text-sm text-white">Valuation Mastery</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Strategic Marketing</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Negotiation Wizardry</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Closing Success</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Property Management</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row justify-between -mt-60 lg:mt-0 gap-20">
                        <div className="w-full pt-10 pb-10 lg:w-auto">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-md text-[#999999]">Contact us</h2>
                                <ul className="flex flex-col gap-2">
                                    <li><Link href={"#"} className="text-sm text-white">Contact Form</Link></li>
                                    <li><Link href={"#"} className="text-sm text-white">Our Offices</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pt-10 pb-10 pl-10 pr-10 bg-[#1A1A1A] flex flex-col-reverse lg:flex-row items-center justify-between gap-5 lg:gap-0">
                <div className="flex flex-col lg:flex-row text-center gap-2">
                    <h5 className="text-sm text-white">&copy; 2023 Estatein. All Rights Reserved.</h5>
                    <Link href={"#"} className="text-sm text-white hover:underline">Terms & Conditions</Link>
                </div>
                <div className="flex flex-row gap-2">
                    {icons.map((icon) => (
                        <div key={icon.id} className="w-[50px] h-[50px] cursor-pointer flex justify-center items-center rounded-full bg-[#141414]">
                            <Image src={icon.icon} alt={icon.alt} width={icon.width} height={icon.height}/>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;