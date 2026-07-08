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
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-x-0 top-0 divider-fade" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="eyebrow mb-6"><span className="eyebrow-dot" /> FAQs</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 tracking-tight leading-[1.05]">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about working with Orbix Digital Markaz.
          </p>
        </motion.div>


        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="glass-card ring-gradient rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-6 hover:bg-primary/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold text-foreground">
                    {item.q}
                  </span>
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/15 to-cyan/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary transition-transform duration-300" style={{ transform: isOpen ? "rotate(180deg)" : "none" }}>
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
