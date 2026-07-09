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
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="absolute inset-x-0 top-0 divider-fade" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="eyebrow mb-6"><span className="eyebrow-dot" /> Why Orbix</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 tracking-tight leading-[1.05]">
            Why Brands Choose{" "}
            <span className="gradient-text">Orbix Digital Markaz</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hire a Shopify expert team that pairs premium design with conversion-focused execution — built to convert your Shopify store into a real growth engine.
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
              <div className="glass-card ring-gradient rounded-2xl p-7 h-full hover:-translate-y-1.5 transition-transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-cyan/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">

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
