 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 
 export function TrustSection() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
    <section className="py-32 relative overflow-hidden bg-navy">
       {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/20 to-navy" />
 
       <div className="container mx-auto px-6 relative z-10" ref={ref}>
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 1 }}
           className="text-center max-w-4xl mx-auto"
         >
           {/* Main Statement */}
           <motion.h2
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
           >
            <span className="text-white">Marketers Lie.</span>
             <br />
            <span className="text-teal">Numbers Don't.</span>
           </motion.h2>
 
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70"
           >
             Real results from real campaigns.
             <br />
             No fake promises — only data-backed performance.
           </motion.p>
 
           {/* Decorative Elements */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ duration: 1, delay: 0.6 }}
             className="mt-16 flex justify-center gap-8"
           >
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal to-transparent rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-light to-transparent rounded-full" />
           </motion.div>
         </motion.div>
       </div>
     </section>
   );
 }