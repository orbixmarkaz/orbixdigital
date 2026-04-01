import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Users, HeadphonesIcon } from "lucide-react";

const highlights = [
  { icon: Award, text: "5+ Years Experience" },
  { icon: Briefcase, text: "Professional Website Solutions" },
  { icon: Users, text: "Business-Focused Approach" },
  { icon: HeadphonesIcon, text: "Reliable Client Support" },
];

export function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founder" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            Meet the <span className="gradient-text">Founder</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan/10 overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5">
                  <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-bold gradient-text font-display">AB</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Abdul Basit</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-3 -right-3 w-20 h-20 rounded-xl border border-primary/20 -z-10" />
                <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-xl bg-primary/5 -z-10" />
              </div>
            </motion.div>

            {/* Content */}
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
                Abdul Basit is the founder behind the brand, with 5+ years of market
                experience in delivering professional digital solutions. He focuses on
                helping businesses build a strong online presence through high-quality
                websites, smart design, and reliable service.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="glass-card neon-border rounded-xl p-4 flex items-center gap-3 group hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
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
