import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ProductSection from "@/components/ProductSection";
import ResearchSection from "@/components/ResearchSection";
import KnowledgeEngineSection from "@/components/KnowledgeEngineSection";
import DiscoveryLabSection from "@/components/DiscoveryLabSection";
import DiscoveryMapSection from "@/components/DiscoveryMapSection";
import TimelineSection from "@/components/TimelineSection";
import FounderSection from "@/components/FounderSection";
import ProjectsSection from "@/components/ProjectsSection";
import YouTubeSection from "@/components/YouTubeSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <ProductSection />
        <ResearchSection />
        <KnowledgeEngineSection />
        <DiscoveryMapSection />
        <DiscoveryLabSection />
        <TimelineSection />
        <FounderSection />
        <ProjectsSection />
        <YouTubeSection />
        <SocialSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
