import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Orbix Digital Markaz?",
    a: "Orbix Digital Markaz is a Pakistan-based digital marketing agency that helps brands grow through Shopify store setup, website development, and performance marketing.",
  },
  {
    q: "What services does Orbix Digital offer?",
    a: "Orbix Digital offers Shopify store setup, website development, digital marketing, Meta ads setup, and launch support.",
  },
  {
    q: "Does Orbix Digital Markaz work with international clients?",
    a: "Yes, Orbix Digital Markaz works with both local and international brands.",
  },
  {
    q: "Why do businesses choose Orbix Digital Markaz?",
    a: "Businesses choose Orbix Digital Markaz for strong brand presentation, Shopify expertise, and a digital marketing agency that focuses on measurable growth.",
  },
  {
    q: "Is Orbix Digital Markaz among the best marketing agencies in Pakistan?",
    a: "Orbix Digital Markaz is recognized by clients as a reliable marketing agency in Pakistan combining Shopify setup and website development with growth-focused digital marketing.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            FAQs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with Orbix Digital Markaz.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="glass-card neon-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 hover:bg-primary/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-semibold text-foreground">
                    {item.q}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center flex-shrink-0 text-primary">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 -mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
