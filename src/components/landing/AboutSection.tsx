import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Shield, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Performance-Focused", description: "Every project is built to drive real, measurable growth for your brand." },
  { icon: TrendingUp, title: "Growth-Oriented", description: "We prepare stores and brands for long-term scalability and marketing success." },
  { icon: Shield, title: "Reliable & Trusted", description: "Consistent quality, timely delivery, and honest communication you can count on." },
  { icon: Heart, title: "Client-First Approach", description: "Your brand vision and success are at the center of everything we do." },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-y relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-x-0 top-0 divider-fade" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <span className="eyebrow mb-6"><span className="eyebrow-dot" /> About Orbix</span>
            <h2 className="text-4xl md:text-5xl font-display mb-8 tracking-tight leading-[1.05]">
              A digital growth partner built for{" "}
              <span className="gradient-text">modern e-commerce brands</span>
            </h2>
            <p className="text-muted-foreground leading-[1.85] mb-6">
              Orbix Digital Markaz is a Pakistan-based digital marketing agency helping brands grow through Shopify store setup, website development, and performance-focused digital marketing.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              At Orbix Digital Markaz, we specialize in premium Shopify store setup, brand presentation,
              and digital marketing readiness. We help businesses launch professional, high-converting
              online stores using premium themes — and prepare them for real performance marketing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're a new brand looking to launch your first Shopify store or an established
              business wanting stronger digital presence, we deliver execution that drives results.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "5+", label: "Years Experience" },
                { num: "50+", label: "Stores Launched" },
                { num: "100%", label: "Client Satisfaction" },
                { num: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center p-5 glass-card ring-gradient rounded-2xl"
                >
                  <div className="text-3xl font-bold gradient-text font-display mb-1 tracking-tight">{stat.num}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.14em]">{stat.label}</div>

                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card ring-gradient rounded-2xl p-5 flex items-start gap-4 group hover:-translate-y-0.5 transition-transform duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-cyan/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
