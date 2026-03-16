import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, BarChart3, TrendingUp, Zap } from "lucide-react";

const features = [
  { icon: Target, title: "Strategy-First Approach", description: "We start with deep research and strategic planning before executing any campaign." },
  { icon: BarChart3, title: "Data-Driven Decisions", description: "Every move is backed by analytics and real-time performance data." },
  { icon: TrendingUp, title: "ROI-Focused Campaigns", description: "We optimize for conversions and revenue, not vanity metrics." },
  { icon: Zap, title: "Rapid Scaling", description: "Once we find what works, we scale aggressively to maximize growth." },
];

export function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
              Crafting Unique Digital Experiences That{" "}
              <span className="gradient-text">Elevate Your Brand</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just run ads — we build growth systems. Our approach combines
              creative excellence with performance marketing to deliver measurable
              results that impact your bottom line.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-cyan/15" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-8 rounded-full border border-teal/15" />
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-16 rounded-full border border-neon-blue/15" />

              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-cyan/10 to-teal/5 blur-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text font-display text-glow">360°</div>
                  <div className="text-muted-foreground mt-2 tracking-wider uppercase text-sm">Digital Growth</div>
                </div>
              </div>

              {[
                { Icon: Target, pos: "top-0 left-1/2 -translate-x-1/2", anim: { y: [-10, 10, -10] }, dur: 4 },
                { Icon: BarChart3, pos: "bottom-0 left-1/2 -translate-x-1/2", anim: { y: [10, -10, 10] }, dur: 5 },
                { Icon: TrendingUp, pos: "left-0 top-1/2 -translate-y-1/2", anim: { x: [-10, 10, -10] }, dur: 4.5 },
                { Icon: Zap, pos: "right-0 top-1/2 -translate-y-1/2", anim: { x: [10, -10, 10] }, dur: 5.5 },
              ].map(({ Icon, pos, anim, dur }, i) => (
                <motion.div key={i} animate={anim} transition={{ duration: dur, repeat: Infinity }} className={`absolute ${pos} w-16 h-16 rounded-xl glass-card neon-border flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-cyan" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
