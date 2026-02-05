import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ValueProposition } from "@/components/landing/ValueProposition";
import { ExpertiseSection } from "@/components/landing/ExpertiseSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <ExpertiseSection />
      <ServicesSection />
      <TrustSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
