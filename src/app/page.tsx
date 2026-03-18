import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyItWorks from "@/components/WhyItWorks";
import Tools from "@/components/Tools";
import WhatIReallyDo from "@/components/WhatIReallyDo";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <WhyItWorks />
        <Tools />
        <WhatIReallyDo />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
