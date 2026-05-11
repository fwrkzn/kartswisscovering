import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const footerLinks = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Présentation", path: "/presentation" },
  { name: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Left Column: Logo & Bio */}
          <div className="flex flex-col gap-6">
            <img src={logo} alt="Kart Swiss Logo" className="h-16 w-auto object-contain self-start" />
            <p className="text-neutral-500 font-sans leading-relaxed max-w-xs">
              Atelier de covering indépendant à Yverdon-les-Bains. Rapidité, soin et accompagnement personnalisé.
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div className="flex flex-col gap-8">
            <h4 className="text-neon font-display font-bold text-xl tracking-tight uppercase">NAVIGATION</h4>
            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-neutral-400 hover:text-white font-sans transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Column: Contact */}
          <div className="flex flex-col gap-8">
            <h4 className="text-neon font-display font-bold text-xl tracking-tight uppercase">CONTACT</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-neutral-400 font-sans">
                <MapPin className="w-5 h-5 text-neutral-600" />
                <span>Yverdon-les-Bains, Suisse</span>
              </div>
              <a href="tel:+41762221597" className="flex items-center gap-4 text-neutral-400 hover:text-white font-sans transition-colors group">
                <Phone className="w-5 h-5 text-neutral-600 group-hover:text-neon transition-colors" />
                <span>+41 76 222 15 97</span>
              </a>
              <a href="mailto:info@kartswisscovering.ch" className="flex items-center gap-4 text-neutral-400 hover:text-white font-sans transition-colors group">
                <Mail className="w-5 h-5 text-neutral-600 group-hover:text-neon transition-colors" />
                <span>info@kartswisscovering.ch</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-neutral-500 text-[11px] font-sans">
            © 2026 Kart Swiss Covering. Tous droits réservés.
          </span>
          <span className="text-neutral-500 text-[11px] font-sans font-bold tracking-widest uppercase">
            Créé et géré par <a href="https://zerosix.be" target="_blank" rel="noopener noreferrer" className="text-neon hover:underline transition-all inline-block">Zerosix</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
