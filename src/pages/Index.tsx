import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { BrandMarquee } from "@/components/landing/BrandMarquee";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { PricingSection } from "@/components/landing/PricingSection";
import { CaseStudiesSection } from "@/components/landing/CaseStudiesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { FounderSection } from "@/components/landing/FounderSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BrandMarquee />
      <ServicesSection />
      <WhyChooseUs />
      <PricingSection />
      <CaseStudiesSection />
      <ProcessSection />
      <FounderSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
