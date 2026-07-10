import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, BarChart3, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK = "https://api.whatsapp.com/send/?phone=923104431295&text&type=phone_number&app_absent=0";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0">
        <div className="absolute top-24 right-16 w-[560px] h-[560px] bg-primary/10 rounded-full blur-[160px] animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-[460px] h-[460px] bg-cyan/10 rounded-full blur-[140px] animate-float-slow" style={{ animationDelay: "-6s" }} />
        <div className="absolute inset-0 cyber-grid opacity-70" />
      </div>

      <div className="container mx-auto px-6 pt-40 pb-28 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
              className="eyebrow mb-10"
            >
              <span className="eyebrow-dot animate-pulse" />
              Expert Shopify Web Developer · Premium E-commerce Growth
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              className="text-[44px] sm:text-6xl lg:text-[84px] font-display leading-[1.02] mb-10 tracking-tight text-foreground"
            >
              High-Converting{" "}
              <span className="gradient-text">Shopify Store Design</span>
              <br />
              by an Expert Shopify Web Developer{" "}
              <span className="font-serif-accent text-foreground/60 block sm:inline text-3xl sm:text-5xl lg:text-6xl mt-3 sm:mt-0">
                — Orbix Digital Markaz
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-border/50"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-[1.85] font-light tracking-[0.005em]">
              A premium e-commerce digital marketing agency and team of Shopify theme customization
              specialists — building high-converting store design, performance-ready launches, and
              scalable brand systems for modern founders.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 text-center lg:text-left">





          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Button variant="glow" size="xl" asChild>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Sparkles className="mr-1 h-4 w-4" />
                Get a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#pricing">View Packages</a>
            </Button>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mb-16 text-xs uppercase tracking-[0.18em] text-muted-foreground/70"
          >
            <span>50+ Stores Launched</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>5+ Years Experience</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>ROAS-Driven</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { icon: ShoppingBag, title: "Shopify Store Setup", desc: "Premium theme-based stores" },
              { icon: BarChart3, title: "Performance Marketing", desc: "Meta ads & growth systems" },
              { icon: Rocket, title: "Launch Support", desc: "End-to-end launch readiness" },
            ].map((item, i) => (
              <div key={i} className="glass-card ring-gradient rounded-2xl p-6 text-center group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-cyan/10 border border-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-9 rounded-full border-2 border-foreground/15 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
