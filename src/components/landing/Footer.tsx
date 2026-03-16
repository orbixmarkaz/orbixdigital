import orbixLogo from "@/assets/orbix-logo.png";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

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
  { title: "Services", links: ["Social Media Marketing", "Meta Ads", "Google Ads", "Shopify Setup"] },
  { title: "Company", links: ["About Us", "Our Process", "Testimonials", "Contact"] },
  { title: "Resources", links: ["Blog", "Case Studies", "Free Tools", "FAQs"] },
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-border relative overflow-hidden bg-secondary/50">
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={orbixLogo} alt="Orbix Digital Markaz" className="w-[200px] h-auto object-contain brightness-0 invert opacity-80" />
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Your trusted partner for scaling brands through data-driven
              performance marketing and creative excellence.
            </p>
            <p className="text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">WhatsApp:</span>{" "}
              <a href="https://wa.me/923104431295" className="hover:text-cyan transition-colors">+92 310 4431295</a>
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/30 hover:shadow-[0_0_12px_hsl(var(--cyan)/0.2)] transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4 tracking-wider uppercase text-sm">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-muted-foreground hover:text-cyan transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Orbix Digital Markaz. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-cyan transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-cyan transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
