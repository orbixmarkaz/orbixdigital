import { motion } from "framer-motion";

const brands = [
  "TechNova", "VisionPro", "NexGen", "CyberPulse", "DataForge",
  "QuantumEdge", "PixelCraft", "CloudSync", "AlphaScale", "NeoTrend",
  "SwiftCart", "PrimeWave", "ZenithAI", "FluxMedia", "CoreLogic",
];

export function BrandMarquee() {
  return (
    <section className="py-12 relative overflow-hidden border-y border-border/50">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          Trusted by innovative brands
        </p>
        
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-lg font-display font-semibold text-foreground/20 hover:text-cyan/60 transition-colors duration-300 cursor-default tracking-widest uppercase"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
