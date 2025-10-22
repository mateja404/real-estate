import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#141414]">
        <Header/>
        <Navbar/>
        <HeroSection/>
    </div>
  );
}
