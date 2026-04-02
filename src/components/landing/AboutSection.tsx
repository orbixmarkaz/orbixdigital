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
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
              About Orbix
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
              Your Trusted Partner for{" "}
              <span className="gradient-text">Digital Growth</span>
            </h2>
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
                  className="text-center p-4 glass-card neon-border rounded-xl"
                >
                  <div className="text-2xl font-bold gradient-text font-display mb-1">{stat.num}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
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
                className="glass-card neon-border rounded-xl p-5 flex items-start gap-4 group hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/12 transition-colors">
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
