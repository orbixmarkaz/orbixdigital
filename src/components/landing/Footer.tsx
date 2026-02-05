 import orbixLogo from "@/assets/orbix-logo.png";
 import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
 
 const socialLinks = [
   { icon: Facebook, href: "#" },
   { icon: Instagram, href: "#" },
   { icon: Twitter, href: "#" },
   { icon: Linkedin, href: "#" },
 ];
 
 const footerLinks = [
   {
     title: "Services",
     links: ["Social Media Marketing", "Meta Ads", "Google Ads", "Shopify Setup"],
   },
   {
     title: "Company",
     links: ["About Us", "Our Process", "Testimonials", "Contact"],
   },
   {
     title: "Resources",
     links: ["Blog", "Case Studies", "Free Tools", "FAQs"],
   },
 ];
 
 export function Footer() {
   return (
     <footer className="py-16 border-t border-border/50 relative overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
 
       <div className="container mx-auto px-6 relative z-10">
         <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
           {/* Brand */}
           <div className="lg:col-span-2">
             <a href="#" className="flex items-center gap-3 mb-6">
               <img
                 src={orbixLogo}
                 alt="Orbix Digital Markaz"
                 className="h-12 w-auto"
               />
             </a>
             <p className="text-muted-foreground mb-6 max-w-sm">
               Your trusted partner for scaling brands through data-driven 
               performance marketing and creative excellence.
             </p>
             <div className="flex gap-4">
               {socialLinks.map((social, index) => (
                 <a
                   key={index}
                   href={social.href}
                   className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-purple transition-all duration-300"
                 >
                   <social.icon className="w-5 h-5" />
                 </a>
               ))}
             </div>
           </div>
 
           {/* Links */}
           {footerLinks.map((section, index) => (
             <div key={index}>
               <h3 className="font-semibold text-foreground mb-4">
                 {section.title}
               </h3>
               <ul className="space-y-3">
                 {section.links.map((link, linkIndex) => (
                   <li key={linkIndex}>
                     <a
                       href="#"
                       className="text-muted-foreground hover:text-foreground transition-colors"
                     >
                       {link}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
 
         {/* Bottom Bar */}
         <div className="pt-8 border-t border-border/50">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-muted-foreground">
               © 2025 Orbix Digital Markaz. All rights reserved.
             </p>
             <div className="flex gap-6">
               <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                 Privacy Policy
               </a>
               <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                 Terms of Service
               </a>
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
 }