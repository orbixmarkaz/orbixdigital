 import orbixLogo from "@/assets/orbix-logo.png";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
);
 
 const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587500429601" },
  { icon: Instagram, href: "https://www.instagram.com/orbix_digi" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@orbix.digital" },
  { icon: MessageCircle, href: "https://wa.me/923104431295" },
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
    <footer className="py-16 border-t border-border relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-light/10 to-transparent" />
 
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
            <p className="text-white/70 mb-6 max-w-sm">
               Your trusted partner for scaling brands through data-driven 
               performance marketing and creative excellence.
             </p>
            <p className="text-white/70 mb-6">
              <span className="font-semibold text-white">WhatsApp:</span>{" "}
              <a href="https://wa.me/923104431295" className="hover:text-teal transition-colors">
                +92 310 4431295
              </a>
            </p>
             <div className="flex gap-4">
               {socialLinks.map((social, index) => (
                 <a
                   key={index}
                   href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-teal hover:bg-white/20 transition-all duration-300"
                 >
                   <social.icon className="w-5 h-5" />
                 </a>
               ))}
             </div>
           </div>
 
           {/* Links */}
           {footerLinks.map((section, index) => (
             <div key={index}>
              <h3 className="font-semibold text-white mb-4">
                 {section.title}
               </h3>
               <ul className="space-y-3">
                 {section.links.map((link, linkIndex) => (
                   <li key={linkIndex}>
                     <a
                       href="#"
                      className="text-white/60 hover:text-teal transition-colors"
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
        <div className="pt-8 border-t border-white/10">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
               © 2025 Orbix Digital Markaz. All rights reserved.
             </p>
             <div className="flex gap-6">
              <a href="#" className="text-sm text-white/50 hover:text-teal transition-colors">
                 Privacy Policy
               </a>
              <a href="#" className="text-sm text-white/50 hover:text-teal transition-colors">
                 Terms of Service
               </a>
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
 }