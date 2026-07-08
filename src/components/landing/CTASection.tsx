import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK = "https://api.whatsapp.com/send/?phone=923104431295&text&type=phone_number&app_absent=0";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/8 via-background to-background" />
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 blur-[130px] rounded-full animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan/10 blur-[130px] rounded-full animate-float-slow" style={{ animationDelay: "-7s" }} />
      </div>
      <div className="absolute inset-x-0 top-0 divider-fade" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto glass-card ring-gradient rounded-[2rem] p-10 md:p-16"
        >
          <span className="eyebrow mb-6"><span className="eyebrow-dot" /> Let's Get Started</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 tracking-tight leading-[1.05]">
            Ready to Launch Your Brand{" "}
            <span className="font-serif-accent text-foreground/70">with</span>{" "}
            <span className="gradient-text text-glow">Orbix Digital</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Get in touch today and let's discuss how we can set up your premium Shopify store,
            prepare your marketing, and help your brand grow.
          </p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="glow" size="xl" asChild>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#pricing">
                View Our Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
