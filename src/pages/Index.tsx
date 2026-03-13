import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ProductSection from "@/components/ProductSection";
import ResearchSection from "@/components/ResearchSection";
import TechApproachSection from "@/components/TechApproachSection";
import FounderSection from "@/components/FounderSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <ProductSection />
        <ResearchSection />
        <TechApproachSection />
        <FounderSection />
        <ProjectsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
