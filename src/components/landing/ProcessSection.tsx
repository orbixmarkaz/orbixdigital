import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Rocket, Settings, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Research & Strategy", description: "Deep dive into your market, competitors, and audience to build a winning strategy." },
  { icon: Palette, step: "02", title: "Creative Development", description: "Crafting scroll-stopping visuals and copy that resonates with your target audience." },
  { icon: Rocket, step: "03", title: "Campaign Execution", description: "Launching campaigns across platforms with precision targeting and optimization." },
  { icon: Settings, step: "04", title: "Optimization & Scaling", description: "Continuous testing and refinement to maximize ROI and scale what works." },
  { icon: TrendingUp, step: "05", title: "Reporting & Growth", description: "Transparent reporting and strategic planning for sustained growth." },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            Our Proven Process for{" "}
            <span className="gradient-text">Achieving Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach that transforms your marketing from guesswork to growth engine.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-teal/40 to-neon-blue/40 hidden md:block shadow-[0_0_8px_hsl(var(--cyan)/0.2)]" />

            {steps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.15 }} className="relative flex gap-8 mb-8 last:mb-0">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-2xl glass-card neon-border flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-cyan" />
                  </div>
                </div>

                <div className="flex-1 glass-card neon-border rounded-2xl p-6 md:p-8 group">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-bold text-cyan bg-cyan/10 px-3 py-1 rounded-full border border-cyan/20 tracking-wider">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
