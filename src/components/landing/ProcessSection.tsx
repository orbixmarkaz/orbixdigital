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
    <section id="process" className="section-y relative overflow-hidden">
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
            <span className="eyebrow mb-8"><span className="eyebrow-dot" /> Our Process</span>
            <h2 className="text-[2.5rem] md:text-6xl lg:text-7xl font-display leading-[1.02] tracking-tight mt-6">
              A disciplined workflow,{" "}
              <span className="font-serif-accent gradient-text">engineered for launch day.</span>
            </h2>
          </div>
          <div className="lg:pb-3">
            <div className="hairline mb-6 max-w-[6rem]" />
            <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-light">
              A refined 10-step agency process — from discovery to launch — designed for clarity,
              confidence, and measurable outcomes.
            </p>
          </div>
        </motion.div>


        <div ref={ref} className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[7rem_1fr_auto] gap-6 md:gap-10 items-start py-8 border-t border-border/60 hover:border-primary/40 transition-colors duration-1000"
            >
              <div className="rail-num text-4xl md:text-5xl leading-none pt-1">
                {step.step}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-display font-medium mb-3 text-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-[1.85] font-light max-w-2xl">
                  {step.description}
                </p>
              </div>
              <div className="hidden md:flex w-11 h-11 rounded-full border border-border/60 items-center justify-center text-primary/70 group-hover:border-primary/40 group-hover:text-primary transition-all duration-1000">
                <step.icon className="w-4 h-4" strokeWidth={1.25} />
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border/60" />
        </div>
      </div>
    </section>
  );
}
