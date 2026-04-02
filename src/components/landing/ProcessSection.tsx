import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Target, Palette, LayoutGrid, Package, Globe, Share2, Activity, FlaskConical, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery & Brand Understanding",
    description: "Understand your business, niche, audience, goals, and desired store direction.",
  },
  {
    icon: Target,
    step: "02",
    title: "Strategy & Planning",
    description: "Define store direction, offer positioning, design tone, and launch goals.",
  },
  {
    icon: Palette,
    step: "03",
    title: "Premium Theme Selection & Setup",
    description: "Choose and set up a premium-ready Shopify theme based on your brand's niche.",
  },
  {
    icon: LayoutGrid,
    step: "04",
    title: "Store Structure & Configuration",
    description: "Set up navigation, collections, product flow, and core storefront structure.",
  },
  {
    icon: Package,
    step: "05",
    title: "Product Uploading & Content",
    description: "Upload products, organize listings, and ensure the store looks conversion-ready.",
  },
  {
    icon: Globe,
    step: "06",
    title: "Domain & Technical Setup",
    description: "Connect the domain and complete important technical setup before launch.",
  },
  {
    icon: Share2,
    step: "07",
    title: "Social Media & Business Assets",
    description: "Create or connect relevant social media accounts and business assets.",
  },
  {
    icon: Activity,
    step: "08",
    title: "Meta Integration",
    description: "Set up Meta business connections, pixel connection, and ad-readiness foundations.",
  },
  {
    icon: FlaskConical,
    step: "09",
    title: "Pixel & Event Testing",
    description: "Test pixel tracking, events, and key user actions for marketing readiness.",
  },
  {
    icon: Rocket,
    step: "10",
    title: "Final Review, Launch & Support",
    description: "Perform final checks, confirm readiness, and support through launch.",
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
            A real 10-step agency workflow — from discovery to launch.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group"
            >
              <div className="glass-card neon-border rounded-2xl p-5 text-center h-full hover:-translate-y-1 transition-all duration-300">
                <div className="text-[10px] font-bold text-primary tracking-widest uppercase mb-3">
                  Step {step.step}
                </div>
                <div className="w-11 h-11 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/12 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-2 text-foreground leading-snug">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
