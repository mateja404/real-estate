import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SubHeroSection from "@/components/SubHeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Prefooter from "@/components/Prefooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#141414]">
        <Header/>
        <Navbar/>
        <HeroSection/>
        <SubHeroSection/>
        <FeaturedProperties/>
        <Testimonials/>
        <Faq/>
        <Prefooter/>
        <Footer/>
    </div>
  );
}
