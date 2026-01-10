import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-adventure-darker border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={logo} 
                  alt="Red Roads Adventure" 
                  className="h-20 w-auto relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-primary tracking-wider drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">
                  RED ROADS
                </span>
                <span className="font-display text-xs text-muted-foreground tracking-[0.3em]">
                  ADVENTURE
                </span>
              </div>
            </Link>
            <p className="font-body text-muted-foreground leading-relaxed">
              Vivez le frisson des aventures tout-terrain dans les magnifiques paysages de Kebdana, Nador.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-xl tracking-wider text-foreground mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", path: "/" },
                { label: "Cercle Privé", path: "/close-circle" },
                { label: "Balade", path: "/balade" },
                { label: "À Propos", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-xl tracking-wider text-foreground mb-6">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {[
                "Location de Quads",
                "Location de Motos Cross",
                "Randonnées Guidées",
                "Aventures en Groupe",
                "Sessions Privées",
              ].map((service) => (
                <li key={service}>
                  <span className="font-body text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display text-xl tracking-wider text-foreground mb-6">
              Contactez-Nous
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="font-body text-muted-foreground">
                  Kebdana, Nador<br />Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-muted-foreground">
                  +212 600 000 000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-muted-foreground">
                  info@redroadsadventure.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-muted-foreground">
              © 2024 Red Roads Adventure. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Politique de Confidentialité
              </a>
              <a
                href="#"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Conditions Générales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
