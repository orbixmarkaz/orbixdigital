import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingBag, BarChart3, Rocket, Palette, MessageSquare } from "lucide-react";

const reasons = [
  {
    icon: ShoppingBag,
    title: "Premium Shopify Store Setup",
    description: "We build polished, conversion-ready Shopify stores using high-quality premium themes.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Mindset",
    description: "Every store we set up is prepared for growth, ads, and real marketing performance.",
  },
  {
    icon: Rocket,
    title: "Launch-Ready Execution",
    description: "From domain to pixel testing — we ensure your store is fully ready before going live.",
  },
  {
    icon: Palette,
    title: "Better Brand Presentation",
    description: "Clean layouts, premium styling, and brand-aligned visuals that build trust instantly.",
  },
  {
    icon: MessageSquare,
    title: "Reliable Support & Communication",
    description: "Direct WhatsApp communication and dedicated support through every stage of the project.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="absolute inset-x-0 top-0 divider-fade" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <span className="eyebrow mb-6"><span className="eyebrow-dot" /> Why Orbix</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 tracking-tight leading-[1.05]">
            The partner brands trust to{" "}
            <span className="gradient-text">launch and scale with clarity</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-[1.75] tracking-[-0.005em]">
            Hire a Shopify expert team that pairs premium design with conversion-focused execution —
            built to turn your storefront into a real, measurable growth engine.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: index * 0.09, ease: [0.2, 0.7, 0.2, 1] }}
              className={`group ${index === 4 ? "lg:col-start-2" : ""}`}
            >
              <div className="glass-card ring-gradient card-lift rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-cyan/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">

                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.75]">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
