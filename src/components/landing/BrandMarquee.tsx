import { motion } from "framer-motion";

const brands = [
  "TechNova", "VisionPro", "NexGen", "SwiftCart", "PrimeWave",
  "AlphaScale", "CloudSync", "CoreLogic", "FluxMedia", "NeoTrend",
];

export function BrandMarquee() {
  return (
    <section className="py-10 relative overflow-hidden border-y border-border/30">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Trusted by growing businesses
        </p>

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="text-base font-semibold text-foreground/30 hover:text-primary/60 transition-colors duration-300 cursor-default tracking-wider uppercase"
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
