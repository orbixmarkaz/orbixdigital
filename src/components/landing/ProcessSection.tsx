import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discuss Your Requirements",
    description: "We start by understanding your business, goals, and what you need from your website.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design & Planning",
    description: "Our team creates a professional design and layout tailored specifically to your brand.",
  },
  {
    icon: Code,
    step: "03",
    title: "Development & Testing",
    description: "We build your website with clean code, test everything thoroughly, and ensure it's fast and responsive.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description: "Your website goes live. We provide ongoing support to keep everything running smoothly.",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            How We{" "}
            <span className="gradient-text">Get It Done</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process from start to finish.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+30px)] right-[-calc(50%-30px)] w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="glass-card neon-border rounded-2xl p-7 text-center h-full hover:-translate-y-1 transition-all duration-300">
                <div className="text-xs font-bold text-primary tracking-widest uppercase mb-4">
                  Step {step.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
