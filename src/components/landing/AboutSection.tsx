 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Lightbulb, Users, Award, Heart } from "lucide-react";
 
 const values = [
   {
     icon: Lightbulb,
     title: "Strategic Thinking",
     description: "Every campaign starts with a clear strategy aligned to your business goals.",
   },
   {
     icon: Users,
     title: "Creative Excellence",
     description: "Scroll-stopping creatives that capture attention and drive action.",
   },
   {
     icon: Award,
     title: "Performance Mindset",
     description: "We optimize for results, not vanity metrics. Your ROI is our priority.",
   },
   {
     icon: Heart,
     title: "Passion for Growth",
     description: "We're genuinely invested in scaling your brand to new heights.",
   },
 ];
 
 export function AboutSection() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
       <div className="container mx-auto px-6 relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Content */}
           <motion.div
             ref={ref}
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8 }}
           >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-navy">
               An Agency of{" "}
              <span className="text-teal">Creative Innovators</span>
             </h2>
            <p className="text-lg text-navy-light mb-8">
               At Orbix Digital Markaz, we're more than a marketing agency — we're your 
               growth partners. Our team combines strategic expertise with creative 
               innovation to deliver campaigns that don't just look good, but perform 
               exceptionally.
             </p>
            <p className="text-lg text-navy-light mb-8">
               Founded with a mission to help Pakistani brands compete on a global scale, 
               we've helped over 20 businesses achieve unprecedented growth through 
               data-driven performance marketing.
             </p>
 
             {/* Values Grid */}
             <div className="grid grid-cols-2 gap-4">
               {values.map((value, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4 group hover:glow-teal transition-all duration-300 border border-border shadow-sm"
                 >
                  <value.icon className="w-6 h-6 text-teal mb-2" />
                  <h3 className="font-semibold text-navy text-sm">
                     {value.title}
                   </h3>
                 </motion.div>
               ))}
             </div>
           </motion.div>
 
           {/* Visual */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
           >
             <div className="relative aspect-square max-w-lg mx-auto">
               {/* Decorative Cards */}
               <motion.div
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-10 left-10 bg-white rounded-2xl p-6 shadow-lg border border-border"
               >
                 <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                  <div className="text-sm text-navy-light">Client Satisfaction</div>
               </motion.div>
 
               <motion.div
                 animate={{ y: [10, -10, 10] }}
                 transition={{ duration: 7, repeat: Infinity }}
                  className="absolute bottom-10 right-10 bg-white rounded-2xl p-6 shadow-lg border border-border"
               >
                 <div className="text-3xl font-bold gradient-text-alt mb-1">24/7</div>
                  <div className="text-sm text-navy-light">Support Available</div>
               </motion.div>
 
               <motion.div
                 animate={{ y: [-15, 15, -15] }}
                 transition={{ duration: 8, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-xl border border-border"
               >
                 <div className="text-4xl font-bold gradient-text mb-2">3+ Years</div>
                  <div className="text-sm text-navy-light text-center">
                   Scaling Pakistani Brands
                 </div>
               </motion.div>
 
               {/* Background Circles */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-teal/10 animate-pulse" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-cyan/10 animate-pulse" />
               </div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 }