 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
import {
  Share2,
  Target,
  Search,
  Video,
  ShoppingBag,
  LineChart,
  Megaphone,
  Film,
  Palette,
  Link2,
  Layout,
  PenTool,
} from "lucide-react";
 
 const services = [
   {
     icon: Share2,
     title: "Social Media Marketing",
     description: "Strategic content creation and community management that builds loyal audiences.",
   },
   {
     icon: Target,
     title: "Meta Ads (Facebook & Instagram)",
     description: "High-converting ad campaigns with precise targeting and creative excellence.",
   },
   {
     icon: Search,
     title: "Google Ads",
     description: "Search, display, and shopping campaigns that capture high-intent buyers.",
   },
   {
     icon: Video,
     title: "TikTok & Snapchat Ads",
     description: "Viral-ready video ads for Gen Z and millennial audiences.",
   },
   {
     icon: ShoppingBag,
     title: "Shopify Store Setup",
     description: "Complete e-commerce solutions from store design to payment integration.",
   },
   {
     icon: LineChart,
     title: "Funnel Optimization",
     description: "Convert more visitors into customers with optimized sales funnels.",
   },
  {
    icon: Megaphone,
    title: "Performance Strategy",
    description: "Comprehensive marketing strategy tailored to your growth goals.",
  },
  {
    icon: Film,
    title: "Creative Video Editing",
    description: "High-impact editing for social ads, reels, and brand films.",
  },
  {
    icon: Palette,
    title: "Graphic Design Suite",
    description: "Custom brand identities, social media assets, and professional marketing visuals.",
  },
  {
    icon: Link2,
    title: "SEO Link Building",
    description: "Strategic high-authority backlink acquisition to scale search rankings.",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "User-centric web and mobile interface designs focused on high conversion rates.",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Persuasive, SEO-optimized copy and brand storytelling for blogs and ads.",
  },
];
 
 export function ServicesSection() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
       <div className="container mx-auto px-6 relative z-10">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
         >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-navy">
             Our Digital Services to{" "}
            <span className="text-teal">Grow Your Brand</span>
           </h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
             Full-service digital marketing solutions designed for brands ready to scale.
           </p>
         </motion.div>
 
         {/* Services Grid */}
         <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
           {services.map((service, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group"
             >
                <div className="bg-white rounded-2xl p-8 h-full transition-all duration-300 hover:glow-teal relative overflow-hidden border border-border shadow-sm">
                 {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 
                 {/* Icon */}
                 <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-teal" />
                   </div>
                 </div>
 
                 {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-navy relative">
                   {service.title}
                 </h3>
                  <p className="text-navy-light relative">
                   {service.description}
                 </p>
 
                 {/* Arrow on Hover */}
                  <div className="mt-6 flex items-center text-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative">
                   <span className="text-sm font-medium">Learn More</span>
                   <svg
                     className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                   >
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 }