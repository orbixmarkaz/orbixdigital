 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import orbixLogo from "@/assets/orbix-logo.png";
 
 const navLinks = [
   { name: "Services", href: "#services" },
   { name: "Expertise", href: "#expertise" },
   { name: "Process", href: "#process" },
   { name: "About", href: "#about" },
   { name: "Testimonials", href: "#testimonials" },
 ];
 
 export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   return (
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 z-50 bg-transparent py-5"
     >
       <div className="container mx-auto px-6">
         <div className="flex items-center justify-between">
           {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={orbixLogo}
                alt="Orbix Digital Markaz"
                className="h-[35px] w-auto object-contain"
              />
            </motion.a>
 
           {/* Desktop Navigation */}
           <nav className="hidden lg:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                className="text-sm font-medium text-navy-light hover:text-navy transition-colors relative group"
               >
                 {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-300" />
               </a>
             ))}
           </nav>
 
           {/* CTA Button */}
           <div className="hidden lg:block">
            <Button variant="glow" size="lg" asChild>
              <a href="https://wa.me/923104431295" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy"
           >
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
         </div>
       </div>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg mt-4 mx-6 rounded-xl overflow-hidden border border-border"
           >
             <nav className="flex flex-col p-6 gap-4">
               {navLinks.map((link) => (
                 <a
                   key={link.name}
                   href={link.href}
                   onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-navy-light hover:text-navy transition-colors"
                 >
                   {link.name}
                 </a>
               ))}
              <Button variant="glow" className="mt-4" asChild>
                <a href="https://wa.me/923104431295" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
             </nav>
           </motion.div>
         )}
       </AnimatePresence>
     </motion.header>
   );
 }