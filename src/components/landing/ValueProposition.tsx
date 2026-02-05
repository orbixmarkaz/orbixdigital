 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Target, BarChart3, TrendingUp, Zap } from "lucide-react";
 
 const features = [
   {
     icon: Target,
     title: "Strategy-First Approach",
     description: "We start with deep research and strategic planning before executing any campaign.",
   },
   {
     icon: BarChart3,
     title: "Data-Driven Decisions",
     description: "Every move is backed by analytics and real-time performance data.",
   },
   {
     icon: TrendingUp,
     title: "ROI-Focused Campaigns",
     description: "We optimize for conversions and revenue, not vanity metrics.",
   },
   {
     icon: Zap,
     title: "Rapid Scaling",
     description: "Once we find what works, we scale aggressively to maximize growth.",
   },
 ];
 
 export function ValueProposition() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section className="py-24 bg-gradient-section relative overflow-hidden">
       {/* Background Accent */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-purple/5 to-transparent" />
 
       <div className="container mx-auto px-6 relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Text Content */}
           <motion.div
             ref={ref}
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8 }}
           >
             <h2 className="text-3xl md:text-5xl font-bold mb-6">
               Crafting Unique Digital Experiences That{" "}
               <span className="gradient-text">Elevate Your Brand</span>
             </h2>
             <p className="text-lg text-muted-foreground mb-8">
               We don't just run ads — we build growth systems. Our approach combines 
               creative excellence with performance marketing to deliver measurable 
               results that impact your bottom line.
             </p>
 
             <div className="space-y-6">
               {features.map((feature, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, x: -30 }}
                   animate={isInView ? { opacity: 1, x: 0 } : {}}
                   transition={{ duration: 0.6, delay: index * 0.1 }}
                   className="flex items-start gap-4"
                 >
                   <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                     <feature.icon className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-foreground mb-1">
                       {feature.title}
                     </h3>
                     <p className="text-sm text-muted-foreground">
                       {feature.description}
                     </p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </motion.div>
 
           {/* Visual Element */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
           >
             <div className="relative aspect-square max-w-md mx-auto">
               {/* Main Circle */}
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 rounded-full border border-primary/20"
               />
               <motion.div
                 animate={{ rotate: -360 }}
                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-8 rounded-full border border-neon-cyan/20"
               />
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-16 rounded-full border border-neon-violet/20"
               />
 
               {/* Center Glow */}
               <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary/30 to-neon-cyan/20 blur-2xl" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <div className="text-6xl font-bold gradient-text">360°</div>
                   <div className="text-muted-foreground mt-2">Digital Growth</div>
                 </div>
               </div>
 
               {/* Floating Elements */}
               <motion.div
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl glass-card flex items-center justify-center"
               >
                 <Target className="w-8 h-8 text-primary" />
               </motion.div>
               <motion.div
                 animate={{ y: [10, -10, 10] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl glass-card flex items-center justify-center"
               >
                 <BarChart3 className="w-8 h-8 text-neon-cyan" />
               </motion.div>
               <motion.div
                 animate={{ x: [-10, 10, -10] }}
                 transition={{ duration: 4.5, repeat: Infinity }}
                 className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl glass-card flex items-center justify-center"
               >
                 <TrendingUp className="w-8 h-8 text-neon-violet" />
               </motion.div>
               <motion.div
                 animate={{ x: [10, -10, 10] }}
                 transition={{ duration: 5.5, repeat: Infinity }}
                 className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl glass-card flex items-center justify-center"
               >
                 <Zap className="w-8 h-8 text-neon-pink" />
               </motion.div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }