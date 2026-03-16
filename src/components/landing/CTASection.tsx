import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan/5 via-background to-background" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal/5 blur-3xl rounded-full" />
      </div>
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }} className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5 mb-8">
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm text-foreground/70 tracking-wider uppercase">Ready to Scale?</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 font-display tracking-tight">
            <span className="gradient-text text-glow">LET'S WORK</span>
            <br />
            <span className="text-foreground">TOGETHER</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to scale your brand with performance-driven marketing?
            Let's discuss your growth strategy today.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="glow" size="xl" asChild>
              <a href="https://wa.me/923104431295" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="glass" size="xl">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
