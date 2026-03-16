import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Ahmed Hassan", role: "CEO, Fashion Brand", content: "Orbix transformed our online presence completely. Our ROAS went from 1.5x to 4.2x within 3 months. Their team truly understands performance marketing.", rating: 5 },
  { name: "Sara Khan", role: "Founder, E-commerce Store", content: "Best decision we made was partnering with Orbix. They don't just run ads – they build growth systems. Our revenue tripled in 6 months.", rating: 5 },
  { name: "Ali Raza", role: "Marketing Director", content: "Professional, data-driven, and results-focused. Orbix delivered beyond our expectations. Highly recommend for serious brands.", rating: 5 },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            What Clients Say About{" "}
            <span className="gradient-text">Working With Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real partners who trusted us with their growth.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.15 }} className="group">
              <div className="glass-card neon-border rounded-2xl p-8 h-full relative overflow-hidden">
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-cyan" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan text-cyan" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-8 relative">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-teal flex items-center justify-center shadow-[0_0_15px_hsl(var(--cyan)/0.3)]">
                    <span className="text-lg font-bold text-background">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
