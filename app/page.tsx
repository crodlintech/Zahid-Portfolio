import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhySection } from "@/components/why-section";
import { ToolsSection } from "@/components/tools-section";
import { WorkSection } from "@/components/work-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <ToolsSection />
      <WorkSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
