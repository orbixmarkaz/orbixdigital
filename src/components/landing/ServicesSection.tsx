import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, Palette, Package, Globe, Share2, Target, Activity, Rocket, ArrowRight } from "lucide-react";

const services = [
  { icon: ShoppingBag, title: "Shopify Store Setup", description: "Premium theme-based Shopify store configuration tailored to your brand and niche." },
  { icon: Palette, title: "Store Branding & Presentation", description: "Professional store design polish, branding alignment, and conversion-focused layout." },
  { icon: Package, title: "Product Uploading", description: "Organized product listings with clean descriptions, images, and variant management." },
  { icon: Globe, title: "Domain Connection & Technical Setup", description: "Domain linking, SSL, essential technical configurations for a smooth launch." },
  { icon: Share2, title: "Social Media & Business Setup", description: "Create and connect social media accounts and key business assets." },
  { icon: Target, title: "Meta Pixel & Event Setup", description: "Meta pixel integration, event tracking, and ad-readiness configuration." },
  { icon: Activity, title: "Performance Marketing Readiness", description: "Prepare your store for high-performing ad campaigns with tracking and optimization." },
  { icon: Rocket, title: "Launch & Growth Support", description: "End-to-end launch support with post-launch guidance for scaling your brand." },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-x-0 top-0 divider-fade" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="section-header-asym"
        >
          <div>
            <span className="eyebrow mb-8"><span className="eyebrow-dot" /> Premium E-commerce Agency</span>
            <h2 className="text-[2.5rem] md:text-6xl lg:text-7xl font-display leading-[1.02] tracking-tight mt-6">
              Shopify theme customization,{" "}
              <span className="font-serif-accent gradient-text">engineered for growth.</span>
            </h2>
          </div>
          <div className="lg:pb-3">
            <div className="hairline mb-6 max-w-[6rem]" />
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-light">
              A premium e-commerce digital marketing agency delivering expert Shopify theme
              customization, high-converting store design, and launch-ready performance systems —
              everything a modern brand needs to scale with confidence.
            </p>
          </div>
        </motion.div>


        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              className={`group relative ${index % 3 === 1 ? "lg:mt-14" : ""} ${index % 3 === 2 ? "lg:mt-6" : ""}`}
            >
              <div className="pt-8 border-t border-border/60 group-hover:border-primary/40 transition-colors duration-1000">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <span className="rail-num text-3xl md:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <service.icon className="w-5 h-5 text-primary/70 mt-2 group-hover:text-primary transition-colors duration-700" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-medium mb-4 text-foreground leading-snug">
                  {service.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-[1.85] font-light mb-6">
                  {service.description}
                </p>
                <div className="inline-flex items-center text-primary text-xs uppercase tracking-[0.2em] track-x opacity-70 group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="w-3 h-3 ml-2" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
