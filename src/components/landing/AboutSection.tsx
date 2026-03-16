import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Users, Award, Heart } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Strategic Thinking", description: "Every campaign starts with a clear strategy aligned to your business goals." },
  { icon: Users, title: "Creative Excellence", description: "Scroll-stopping creatives that capture attention and drive action." },
  { icon: Award, title: "Performance Mindset", description: "We optimize for results, not vanity metrics. Your ROI is our priority." },
  { icon: Heart, title: "Passion for Growth", description: "We're genuinely invested in scaling your brand to new heights." },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div ref={ref} initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
              An Agency of{" "}
              <span className="gradient-text">Creative Innovators</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Orbix Digital Markaz, we're more than a marketing agency — we're your
              growth partners. Our team combines strategic expertise with creative
              innovation to deliver campaigns that don't just look good, but perform
              exceptionally.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Founded with a mission to help Pakistani brands compete on a global scale,
              we've helped over 20 businesses achieve unprecedented growth through
              data-driven performance marketing.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card neon-border rounded-xl p-4 group">
                  <value.icon className="w-6 h-6 text-cyan mb-2" />
                  <h3 className="font-semibold text-foreground text-sm">{value.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-10 left-10 glass-card neon-border rounded-2xl p-6">
                <div className="text-3xl font-bold gradient-text font-display mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </motion.div>

              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-10 right-10 glass-card neon-border rounded-2xl p-6">
                <div className="text-3xl font-bold gradient-text-alt font-display mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </motion.div>

              <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card neon-border rounded-2xl p-8">
                <div className="text-4xl font-bold gradient-text font-display mb-2">3+ Years</div>
                <div className="text-sm text-muted-foreground text-center">Scaling Pakistani Brands</div>
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-cyan/10 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-teal/10 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
