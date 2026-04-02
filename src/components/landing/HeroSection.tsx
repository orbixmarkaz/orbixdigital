import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, BarChart3, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK = "https://api.whatsapp.com/send/?phone=923104431295&text&type=phone_number&app_absent=0";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[140px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-cyan/4 rounded-full blur-[120px]" />
        <div className="absolute inset-0 cyber-grid opacity-20" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/15 bg-primary/5 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground/60 font-medium">
              Premium Shopify Setup & Digital Growth Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-8 font-display tracking-tight"
          >
            <span className="text-foreground">Launch Your </span>
            <span className="gradient-text">Shopify Store</span>
            <br />
            <span className="text-foreground">& Scale Your Brand</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We set up premium Shopify stores using high-converting themes, handle product uploading,
            and prepare your brand for growth with performance marketing readiness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Button variant="glow" size="xl" asChild>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                Get a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#pricing">
                View Packages
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {[
              { icon: ShoppingBag, title: "Shopify Store Setup", desc: "Premium theme-based stores" },
              { icon: BarChart3, title: "Performance Marketing", desc: "Meta ads & growth systems" },
              { icon: Rocket, title: "Launch Support", desc: "End-to-end launch readiness" },
            ].map((item, i) => (
              <div key={i} className="glass-card neon-border rounded-2xl p-6 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/12 transition-colors">
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
