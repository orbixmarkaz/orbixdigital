import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Code, ShoppingBag, Search, Palette, PenTool, Smartphone, BarChart3, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Design", description: "Custom, professional website designs tailored to your brand identity and business goals." },
  { icon: Code, title: "Web Development", description: "Fast, responsive, and SEO-friendly websites built with modern technologies." },
  { icon: ShoppingBag, title: "E-Commerce Solutions", description: "Complete online store setup with product uploading, payment, and inventory management." },
  { icon: Search, title: "SEO Optimization", description: "Improve your search engine rankings and drive organic traffic to your website." },
  { icon: Palette, title: "Graphic Design", description: "Professional branding, logos, and marketing visuals that make your business stand out." },
  { icon: PenTool, title: "Content Writing", description: "Persuasive, SEO-optimized website copy that engages visitors and drives conversions." },
  { icon: Smartphone, title: "Social Media Marketing", description: "Strategic social media management to grow your audience and build brand awareness." },
  { icon: BarChart3, title: "Digital Marketing", description: "Data-driven marketing campaigns that deliver measurable results and real ROI." },
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
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            Services Built for{" "}
            <span className="gradient-text">Your Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business succeed online.
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
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
