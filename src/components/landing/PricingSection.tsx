import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Plan",
    price: "30,000",
    uploadPrice: "500",
    description: "Best for small businesses starting online",
    popular: false,
    features: [
      "Custom Basic Website",
      "Responsive Design",
      "Up to 5 Pages",
      "Contact Form Integration",
      "Basic SEO Setup",
      "1 Round of Revisions",
    ],
  },
  {
    name: "Standard Plan",
    price: "40,000",
    uploadPrice: "500",
    description: "Best for growing businesses that need a complete online presence",
    popular: true,
    features: [
      "Professional Website Design",
      "Fully Responsive Layout",
      "Up to 10 Pages",
      "Advanced Contact Forms",
      "SEO Optimization",
      "Social Media Integration",
      "3 Rounds of Revisions",
      "Speed Optimization",
    ],
  },
  {
    name: "Premium Plan",
    price: "55,000",
    uploadPrice: "400",
    description: "Best for brands that want a premium, high-performing website",
    popular: false,
    features: [
      "Premium Custom Design",
      "Unlimited Pages",
      "E-commerce Integration",
      "Advanced SEO & Analytics",
      "Social Media Integration",
      "Priority Support",
      "Unlimited Revisions",
      "Performance Optimization",
      "Content Management System",
    ],
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
            Choose the Right Plan for{" "}
            <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional website packages designed for Pakistani businesses. No hidden charges.
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group ${plan.popular ? "md:-mt-4 md:mb-[-16px]" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wider uppercase shadow-lg shadow-primary/20">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`glass-card rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-primary/40 shadow-lg shadow-primary/10"
                    : "neon-border"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">PKR</span>
                    <span className="text-4xl font-bold font-display text-foreground">{plan.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    + PKR {plan.uploadPrice} per product upload
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "glow" : "glass"}
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/923104431295" target="_blank" rel="noopener noreferrer">
                    Choose Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Additional product uploading charges apply as per selected package.
        </motion.p>
      </div>
    </section>
  );
}
