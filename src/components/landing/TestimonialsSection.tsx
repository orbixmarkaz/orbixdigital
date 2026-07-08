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
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-x-0 top-0 divider-fade" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="eyebrow mb-6"><span className="eyebrow-dot" /> Client Feedback</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 tracking-tight leading-[1.05]">
            What Clients Say About{" "}
            <span className="gradient-text">Orbix Digital</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
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
              <div className="glass-card ring-gradient rounded-3xl p-8 h-full relative overflow-hidden hover:-translate-y-1.5 transition-transform duration-500">
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-10 h-10 text-primary" />
                </div>

                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="font-serif-accent text-foreground/85 mb-8 text-lg leading-relaxed">
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
