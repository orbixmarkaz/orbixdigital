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
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="eyebrow mb-6"><span className="eyebrow-dot" /> What We Deliver</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 tracking-tight leading-[1.05]">
            Services engineered for{" "}
            <span className="gradient-text">measurable brand growth</span>{" "}
            <span className="font-serif-accent text-foreground/70 block text-2xl md:text-3xl mt-3">by Orbix Digital</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.75] tracking-[-0.005em]">
            A results-driven e-commerce digital marketing agency delivering premium Shopify theme
            customization, high-converting storefront design, and launch-ready performance systems —
            everything a modern brand needs to scale with confidence.
          </p>
        </motion.div>


        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: index * 0.07, ease: [0.2, 0.7, 0.2, 1] }}
              className="group"
            >
              <div className="glass-card ring-gradient card-lift rounded-2xl p-7 h-full relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-cyan/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-6 h-6 text-primary" />

                  </div>

                  <h3 className="text-base font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>

                  <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
