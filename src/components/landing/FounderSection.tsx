import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ShoppingBag, TrendingUp, HeadphonesIcon } from "lucide-react";
import founderImage from "@/assets/founder-abdul-basit.webp";

const highlights = [
  { icon: Award, text: "5+ Years Experience" },
  { icon: ShoppingBag, text: "Shopify Store Setup Expertise" },
  { icon: TrendingUp, text: "Digital Growth Focus" },
  { icon: HeadphonesIcon, text: "Reliable Client Support" },
];

export function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founder" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-x-0 top-0 divider-fade" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="eyebrow mb-6"><span className="eyebrow-dot" /> Leadership</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 tracking-tight leading-[1.05]">
            Meet the Founder of <span className="gradient-text">Orbix Digital Markaz</span>
          </h2>
        </motion.div>


        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-primary/25 shadow-[var(--shadow-elegant)]">

                  <img
                    src={founderImage}
                    alt="Abdul Basit — Founder of Orbix Digital Markaz, Shopify web developer and e-commerce marketing expert"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -top-3 -right-3 w-20 h-20 rounded-xl border border-primary/15 -z-10" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-xl bg-primary/5 -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-display">
                Abdul Basit
              </h3>
              <p className="text-primary font-medium mb-6">Owner / Founder</p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Abdul Basit is the founder behind the brand, bringing 5+ years of market experience
                in digital growth, Shopify store setup, branding support, and performance-focused
                execution. He helps businesses build a stronger online presence through premium
                store presentation, better launch readiness, and growth-driven digital systems.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="glass-card ring-gradient rounded-2xl p-4 flex items-center gap-3 group hover:-translate-y-0.5 transition-transform duration-500"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/15 to-cyan/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>

                    <span className="text-sm text-foreground/80 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
