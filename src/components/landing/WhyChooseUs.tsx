import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, LayoutGrid, Zap, MessageSquare, Layers } from "lucide-react";

const reasons = [
  {
    icon: Palette,
    title: "Professional & Modern Design",
    description: "Every website we build is custom-designed to reflect your brand and impress your visitors.",
  },
  {
    icon: LayoutGrid,
    title: "Business-Focused Layouts",
    description: "Layouts designed to convert visitors into customers with clear navigation and strong CTAs.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable Service",
    description: "We deliver on time, every time. Your website will be ready when you need it.",
  },
  {
    icon: MessageSquare,
    title: "Easy Communication & Support",
    description: "Direct communication through WhatsApp and dedicated support throughout the project.",
  },
  {
    icon: Layers,
    title: "Scalable Website Solutions",
    description: "We build websites that grow with your business — from startup to established brand.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Why Orbix
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            Why Businesses{" "}
            <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver quality, reliability, and results that speak for themselves.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${index === 4 ? "lg:col-start-2" : ""}`}
            >
              <div className="glass-card neon-border rounded-2xl p-7 h-full hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
