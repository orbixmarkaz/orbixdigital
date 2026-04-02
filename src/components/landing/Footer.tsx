import orbixLogo from "@/assets/orbix-logo.png";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const WA_LINK = "https://api.whatsapp.com/send/?phone=923104431295&text&type=phone_number&app_absent=0";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587500429601" },
  { icon: Instagram, href: "https://www.instagram.com/orbix_digi" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@orbix.digital" },
  { icon: MessageCircle, href: WA_LINK },
];

const footerLinks = [
  { title: "Services", links: [
    { label: "Shopify Store Setup", href: "#services" },
    { label: "Brand Presentation", href: "#services" },
    { label: "Product Uploading", href: "#services" },
    { label: "Meta Pixel Setup", href: "#services" },
  ]},
  { title: "Company", links: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ]},
  { title: "Support", links: [
    { label: "WhatsApp Support", href: WA_LINK },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ]},
];

export function Footer() {
  return (
    <footer className="py-16 border-t border-border relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img
                src={orbixLogo}
                alt="Orbix Digital Markaz"
                className="w-[180px] h-auto object-contain brightness-0 invert opacity-80"
              />
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm text-sm leading-relaxed">
              Premium Shopify store setup, digital marketing readiness, and brand growth
              solutions. Based in Pakistan, helping brands launch and scale.
            </p>
            <p className="text-muted-foreground mb-6 text-sm">
              <span className="font-semibold text-foreground">WhatsApp:</span>{" "}
              <a href={WA_LINK} className="hover:text-primary transition-colors">
                +92 310 4431295
              </a>
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Orbix Digital Markaz. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
