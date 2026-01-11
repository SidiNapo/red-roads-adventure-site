import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const navLinks = [{
  name: "Accueil",
  path: "/"
}, {
  name: "Cercle Privé",
  path: "/close-circle"
}, {
  name: "Balade",
  path: "/balade"
}, {
  name: "À Propos",
  path: "/about"
}, {
  name: "Contact",
  path: "/contact"
}];
const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: "easeOut"
  }} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 bg-white">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img src={logo} alt="Red Roads Adventure" className="h-14 w-auto" whileHover={{
            scale: 1.05
          }} transition={{
            duration: 0.2
          }} />
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-xl text-primary tracking-wider">
                RED ROADS
              </span>
              <span className="font-display text-sm text-muted-foreground tracking-widest">
                ADVENTURE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className="relative font-body text-sm font-semibold tracking-wider uppercase">
                <span className={`transition-colors duration-300 ${location.pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {link.name}
                </span>
                {location.pathname === link.path && <motion.div layoutId="navbar-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" transition={{
              duration: 0.3
            }} />}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/reservation">Réserver</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
            {isMenuOpen ? <X size={28} className="text-red-600 bg-destructive" /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} transition={{
        duration: 0.3
      }} className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => <motion.div key={link.path} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }}>
                  <Link to={link.path} onClick={() => setIsMenuOpen(false)} className={`block py-3 font-display text-lg tracking-wider ${location.pathname === link.path ? "text-primary" : "text-muted-foreground"}`}>
                    {link.name}
                  </Link>
                </motion.div>)}
              <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.5
          }}>
                <Button variant="hero" size="lg" className="w-full mt-4" asChild>
                  <Link to="/reservation" onClick={() => setIsMenuOpen(false)}>
                    Réserver
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.header>;
};
export default Navbar;