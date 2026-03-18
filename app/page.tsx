import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WhySection } from "@/components/sections/why";
import { ToolsSection } from "@/components/sections/tools";
import { ServicesSection } from "@/components/sections/services";
import { BlogSection } from "@/components/sections/blog";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ToolsSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
