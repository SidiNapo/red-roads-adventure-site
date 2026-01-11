import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroSlides = [
  {
    image: hero1,
    title: "CONQUÉREZ LES",
    highlight: "PISTES ROUGES",
    subtitle: "Vivez l'aventure ultime en quad au Maroc",
  },
  {
    image: hero2,
    title: "DOMPTEZ LES",
    highlight: "SENTIERS SAUVAGES",
    subtitle: "Des motos cross pour les explorateurs intrépides",
  },
  {
    image: hero3,
    title: "DÉCOUVREZ LE",
    highlight: "MAROC",
    subtitle: "Des aventures inoubliables à Kebdana, Nador",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt="Aventure"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Subtitle Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-body text-sm text-primary font-semibold tracking-wider uppercase">
                  Kebdana, Nador - Maroc
                </span>
              </motion.div>

              {/* Title */}
              <div className="space-y-1 md:space-y-2">
                <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground tracking-wider hero-text-shadow leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient-hero tracking-wider leading-tight">
                  {heroSlides[currentSlide].highlight}
                </h1>
              </div>

              {/* Description */}
              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl">
                {heroSlides[currentSlide].subtitle}
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button variant="hero" size="xl" asChild>
                  <Link to="/reservation" className="group">
                    Réservez Votre Aventure
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/balade" className="group">
                    <Play className="w-5 h-5" />
                    Explorer les Circuits
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 sm:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              index === currentSlide ? "w-8 sm:w-12 bg-primary" : "w-2 bg-foreground/30"
            }`}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                layoutId="hero-indicator"
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex absolute bottom-8 right-8 z-10 flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-muted-foreground tracking-widest uppercase rotate-90 origin-center translate-y-6">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
