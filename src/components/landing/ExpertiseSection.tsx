import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Brands Scaled", prefix: "" },
  { value: 6, suffix: "M+", label: "PKR Ad Budget Managed", prefix: "" },
  { value: 25, suffix: "+", label: "Campaigns Executed", prefix: "" },
  { value: 3, suffix: " Crore+", label: "PKR Revenue Generated", prefix: "" },
  { value: 10, suffix: "K+", label: "Orders Fulfilled", prefix: "" },
  { value: 18, suffix: "K+", label: "Total Conversions", prefix: "" },
];

function CountUpNumber({ value, suffix, prefix, isInView }: { value: number; suffix: string; prefix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);
  return <span className="gradient-text text-glow">{prefix}{count}{suffix}</span>;
}

export function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/3 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            Expertise That Drives{" "}
            <span className="gradient-text">Digital Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real numbers from real campaigns. We let our results speak for themselves.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className="group">
              <div className="glass-card neon-border rounded-2xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-3 font-display">
                  <CountUpNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} isInView={isInView} />
                </div>
                <div className="text-sm md:text-base text-muted-foreground tracking-wider uppercase">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
