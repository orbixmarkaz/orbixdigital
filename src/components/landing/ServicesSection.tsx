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
    <section id="services" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            What We Deliver
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            Services Built for{" "}
            <span className="gradient-text">Brand Growth</span>{" "}
            <span className="text-foreground/80 block text-2xl md:text-3xl mt-2 font-semibold">by Orbix Digital</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From Shopify setup to marketing readiness — everything your brand needs to launch and scale.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="glass-card neon-border rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/12 flex items-center justify-center mb-4 group-hover:bg-primary/12 transition-colors">
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
