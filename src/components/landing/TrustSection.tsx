import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, BarChart3, Activity, Cpu } from "lucide-react";

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 cyber-grid opacity-15" />
      
      {/* Floating data visuals */}
      <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-20 left-[10%] glass-card rounded-xl p-3 opacity-40">
        <TrendingUp className="w-6 h-6 text-cyan" />
      </motion.div>
      <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-32 right-[15%] glass-card rounded-xl p-3 opacity-40">
        <BarChart3 className="w-6 h-6 text-teal" />
      </motion.div>
      <motion.div animate={{ y: [-10, 20, -10] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-28 left-[20%] glass-card rounded-xl p-3 opacity-40">
        <Activity className="w-6 h-6 text-neon-blue" />
      </motion.div>
      <motion.div animate={{ y: [10, -20, 10] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-36 right-[10%] glass-card rounded-xl p-3 opacity-40">
        <Cpu className="w-6 h-6 text-cyan" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-display tracking-tight">
            <span className="text-foreground">Marketers Lie.</span>
            <br />
            <span className="gradient-text text-glow">Numbers Don't.</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-muted-foreground">
            Real results from real campaigns.
            <br />
            No fake promises — only data-backed performance.
          </motion.p>

          {/* Futuristic data bars */}
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6 }} className="mt-16 max-w-lg mx-auto space-y-4">
            {[
              { label: "ROAS", pct: 85, color: "from-cyan to-teal" },
              { label: "CTR", pct: 72, color: "from-teal to-neon-blue" },
              { label: "Conversions", pct: 91, color: "from-neon-blue to-cyan" },
            ].map((bar, i) => (
              <div key={i} className="text-left">
                <div className="flex justify-between text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  <span>{bar.label}</span>
                  <span className="text-cyan">{bar.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${bar.pct}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.8 + i * 0.2, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${bar.color} shadow-[0_0_10px_hsl(var(--cyan)/0.3)]`}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6 }} className="mt-12 flex justify-center gap-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent shadow-[0_0_8px_hsl(var(--cyan)/0.3)]" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent shadow-[0_0_8px_hsl(var(--teal)/0.3)]" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent shadow-[0_0_8px_hsl(var(--neon-blue)/0.3)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
