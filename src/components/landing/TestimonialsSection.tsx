import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "E-Commerce Brand Owner",
    content: "Orbix set up our Shopify store professionally and handled everything from theme setup to product uploading. The store looks premium and our sales have grown since launch.",
    rating: 5,
  },
  {
    name: "Sara Khan",
    role: "Fashion Brand Founder",
    content: "The team understood our brand vision perfectly. The store presentation is clean, modern, and conversion-focused. Communication was smooth throughout the process.",
    rating: 5,
  },
  {
    name: "Ali Raza",
    role: "Small Business Owner",
    content: "Professional, reliable, and great support. Our Shopify store was launch-ready with pixel setup and everything configured. Very happy with the service.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            What Our Clients{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from brands we've helped launch and grow.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card neon-border rounded-2xl p-8 h-full relative overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-10 h-10 text-primary" />
                </div>

                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-8 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-foreground">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
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
