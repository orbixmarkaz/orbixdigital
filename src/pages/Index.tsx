import { lazy, Suspense } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";

// Below-the-fold sections are code-split to speed up initial paint
const BrandMarquee = lazy(() => import("@/components/landing/BrandMarquee").then(m => ({ default: m.BrandMarquee })));
const ServicesSection = lazy(() => import("@/components/landing/ServicesSection").then(m => ({ default: m.ServicesSection })));
const WhyChooseUs = lazy(() => import("@/components/landing/WhyChooseUs").then(m => ({ default: m.WhyChooseUs })));
const PricingSection = lazy(() => import("@/components/landing/PricingSection").then(m => ({ default: m.PricingSection })));
const CaseStudiesSection = lazy(() => import("@/components/landing/CaseStudiesSection").then(m => ({ default: m.CaseStudiesSection })));
const ProcessSection = lazy(() => import("@/components/landing/ProcessSection").then(m => ({ default: m.ProcessSection })));
const FounderSection = lazy(() => import("@/components/landing/FounderSection").then(m => ({ default: m.FounderSection })));
const AboutSection = lazy(() => import("@/components/landing/AboutSection").then(m => ({ default: m.AboutSection })));
const TestimonialsSection = lazy(() => import("@/components/landing/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/landing/FAQSection").then(m => ({ default: m.FAQSection })));
const CTASection = lazy(() => import("@/components/landing/CTASection").then(m => ({ default: m.CTASection })));
const Footer = lazy(() => import("@/components/landing/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BrandMarquee />
        <ServicesSection />
        <WhyChooseUs />
        <PricingSection />
        <CaseStudiesSection />
        <ProcessSection />
        <FounderSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
