 import { motion } from "framer-motion";
 import { ArrowRight, Play } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 export function HeroSection() {
   return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
       {/* Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden">
         {/* Floating Orbs */}
         <motion.div
           animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-teal/10 blur-3xl"
         />
         <motion.div
           animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-cyan/10 blur-3xl"
         />
         <motion.div
           animate={{ y: [-30, 30, -30] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-light/8 blur-3xl"
         />
 
         {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
       </div>
 
       <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
         <div className="max-w-5xl mx-auto text-center">
           {/* Badge */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 mb-8"
           >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-sm text-navy">
               Trusted by 20+ Premium Brands
             </span>
           </motion.div>
 
           {/* Main Headline */}
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
           >
            <span className="text-navy">Innovative Solutions for</span>
             <br />
             <span className="gradient-text">Social & Performance</span>
             <br />
            <span className="text-navy">Marketing</span>
           </motion.h1>
 
           {/* Subheadline */}
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
           >
             Helping brands scale faster through data-driven advertising,
             creative strategy, and performance marketing that delivers real ROI.
           </motion.p>
 
           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
           >
             <Button variant="glow" size="xl">
               Get a Free Strategy Call
               <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
             <Button variant="glass" size="xl">
               <Play className="mr-2 h-5 w-5" />
               Watch Our Story
             </Button>
           </motion.div>
 
           {/* Stats Preview */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
           >
             {[
               { value: "20+", label: "Brands Scaled" },
               { value: "6M+", label: "PKR Ad Spend" },
               { value: "3Cr+", label: "Revenue Generated" },
               { value: "18K+", label: "Conversions" },
             ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-white/80 border border-border shadow-sm">
                 <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                   {stat.value}
                 </div>
                <div className="text-sm text-navy-light">{stat.label}</div>
               </div>
             ))}
           </motion.div>
         </div>
       </div>
 
       {/* Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.2 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2"
       >
         <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
         >
           <motion.div
             animate={{ y: [0, 12, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-1.5 h-1.5 rounded-full bg-primary"
           />
         </motion.div>
       </motion.div>
     </section>
   );
 }