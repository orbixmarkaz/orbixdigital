import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowLeftRight } from "lucide-react";
import before1 from "@/assets/case-studies/before.webp";
import after1 from "@/assets/case-studies/after.webp";
import before2 from "@/assets/case-studies/before_2.webp";
import after2 from "@/assets/case-studies/after_2.webp";
import before3 from "@/assets/case-studies/before_3.webp";
import after3 from "@/assets/case-studies/after_3.webp";
import before4 from "@/assets/case-studies/before_4.webp";
import after4 from "@/assets/case-studies/after_4.webp";

type Study = {
  title: string;
  metric: string;
  description: string;
  before: string;
  after: string;
  stats: { label: string; value: string }[];
};

const studies: Study[] = [
  {
    title: "Meta Ads Scale-Up — Fashion Brand",
    metric: "ROAS Boosted & Purchases 10×",
    description:
      "Restructured campaigns, refined creatives and audience targeting to unlock high-intent buyers at scale.",
    before: before1,
    after: after1,
    stats: [
      { label: "Purchases", value: "17 → 171" },
      { label: "Total Spend", value: "Rs 39K → Rs 133K" },
      { label: "ROAS Avg", value: "4.07x" },
    ],
  },
  {
    title: "Shopify Store Performance — Lifestyle Brand",
    metric: "15× Purchase Growth",
    description:
      "Rebuilt the funnel with a performance-first Shopify theme and creative testing framework.",
    before: before2,
    after: after2,
    stats: [
      { label: "Purchases", value: "131 → 2,076" },
      { label: "ROAS", value: "3.62 → 3.94" },
      { label: "Revenue", value: "Rs 6.3M" },
    ],
  },
  {
    title: "E-commerce Redesign — Growth Brand",
    metric: "UI/UX & Speed Optimized",
    description:
      "Premium UX overhaul with checkout optimization and ad-set restructuring drove massive purchase lift.",
    before: before3,
    after: after3,
    stats: [
      { label: "Purchases", value: "286 → 4,489" },
      { label: "Revenue", value: "Rs 1.1M → Rs 18.1M" },
      { label: "ROAS", value: "5.16x" },
    ],
  },
  {
    title: "Full-Funnel Marketing — Premium Retailer",
    metric: "13× Revenue Scale",
    description:
      "End-to-end Meta ads management with creative production, pixel setup and CBO scaling.",
    before: before4,
    after: after4,
    stats: [
      { label: "Purchases", value: "676 → 9,218" },
      { label: "Revenue", value: "Rs 2.7M → Rs 36.8M" },
      { label: "ROAS", value: "5.41x" },
    ],
  },
];

function BeforeAfterCard({ study, index }: { study: Study; index: number }) {
  const [view, setView] = useState<"before" | "after">("after");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="glass-card ring-gradient rounded-3xl overflow-hidden group"
    >

      <div className="relative aspect-[16/9] bg-secondary/40 overflow-hidden">
        <img
          src={study.before}
          alt={`${study.title} — before premium Shopify store design by Orbix Digital Markaz`}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
            view === "before" ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={study.after}
          alt={`${study.title} — after high-converting e-commerce website design by Orbix Digital Markaz`}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
            view === "after" ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Toggle badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1 p-1 rounded-full glass border border-border/50 shadow-lg z-10">
          <button
            onClick={() => setView("before")}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
              view === "before"
                ? "bg-muted text-foreground"
                : "text-foreground/50 hover:text-foreground"
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setView("after")}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
              view === "after"
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                : "text-foreground/50 hover:text-foreground"
            }`}
          >
            After
          </button>
        </div>

        {/* State badge */}
        <div className="absolute top-4 right-4 z-10">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md border ${
              view === "after"
                ? "bg-primary/15 text-primary border-primary/30"
                : "bg-muted/60 text-foreground/70 border-border/50"
            }`}
          >
            <ArrowLeftRight className="w-3 h-3" />
            {view === "after" ? "Optimized" : "Original"}
          </span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
            {study.title}
          </h3>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/25">
            <TrendingUp className="w-3.5 h-3.5" />
            {study.metric}
          </span>
        </div>

        <p className="text-sm text-foreground/60 leading-relaxed">{study.description}</p>

        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border/40">
          {study.stats.map((s) => (
            <div key={s.label}>
              <div className="text-[10px] uppercase tracking-wider text-foreground/40 font-medium">
                {s.label}
              </div>
              <div className="text-sm md:text-base font-semibold gradient-text mt-0.5">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-32 overflow-hidden">
      <span id="results" className="absolute -top-24" aria-hidden="true" />
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-x-0 top-0 divider-fade" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="eyebrow mb-6"><span className="eyebrow-dot" /> Case Studies</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6 tracking-tight">
            Proven Results{" "}
            <span className="font-serif-accent text-foreground/70">with</span>{" "}
            <span className="gradient-text">Orbix Digital Markaz</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Real transformations, data-driven design, and high-converting Shopify stores — backed
            by verified Meta Ads performance.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {studies.map((s, i) => (
            <BeforeAfterCard key={s.title} study={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
