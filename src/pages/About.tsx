import { motion } from "framer-motion";
import { Target, Heart, Users, Award, Compass, Mountain, TreePine } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
import nature1 from "@/assets/nature-1.jpg";
import nature2 from "@/assets/nature-2.jpg";
import nature3 from "@/assets/nature-3.jpg";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: Target,
    title: "Notre Mission",
    description:
      "Offrir des aventures tout-terrain inoubliables tout en mettant en valeur la beauté naturelle des paysages marocains.",
  },
  {
    icon: Heart,
    title: "Notre Passion",
    description:
      "Nous vivons pour le frisson de la conduite et partageons cette passion avec chaque invité qui nous rejoint sur les pistes.",
  },
  {
    icon: Users,
    title: "Notre Communauté",
    description:
      "Construire une famille de passionnés d'aventure qui partagent notre amour pour l'exploration et le plein air.",
  },
  {
    icon: Award,
    title: "Notre Promesse",
    description:
      "La sécurité, la qualité et des expériences exceptionnelles sont au cœur de tout ce que nous faisons.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Modern & Stunning */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Multi-layer background with parallax effect */}
        <div className="absolute inset-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${nature3})` }}
          />
        </div>
        
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-primary/30 rotate-45" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[20rem] text-foreground/5 tracking-wider whitespace-nowrap"
        >
          AVENTURE
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <Compass className="w-8 h-8 text-primary animate-float" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block font-body text-sm text-primary font-semibold tracking-[0.3em] uppercase mb-6"
          >
            Découvrez Notre Histoire
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground tracking-wider mb-6"
          >
            À PROPOS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Passionnés par l'aventure et les paysages époustouflants de Kebdana, 
            nous créons des expériences inoubliables depuis le cœur du Maroc.
          </motion.p>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: "500+", label: "Aventures" },
              { value: "10+", label: "Véhicules" },
              { value: "100%", label: "Passion" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl text-primary">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs text-muted-foreground uppercase tracking-widest">Découvrir</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Nature Gallery Strip */}
      <section className="py-4 bg-card/50 overflow-hidden">
        <div className="flex gap-4 animate-marquee">
          {[nature1, nature2, nature3, trail1, trail2, nature1, nature2, nature3].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-80 h-48 rounded-2xl overflow-hidden">
              <img src={img} alt="Paysage" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Mountain className="w-8 h-8 text-primary" />
                <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">Notre Origine</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-wider mb-6">
                NÉ DE LA<br/><span className="text-primary">PASSION</span>
              </h2>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  Red Roads Adventure a été fondé au cœur de Kebdana,
                  Nador, par une équipe de passionnés de tout-terrain qui ont vu
                  l'incroyable potentiel des paysages diversifiés du Maroc.
                </p>
                <p>
                  Ce qui a commencé comme des sorties du week-end entre amis est devenu une
                  destination d'aventure de premier plan, offrant aux visiteurs la chance de
                  vivre le frisson de rouler à travers les forêts, le long des falaises côtières
                  et sur les célèbres pistes de terre rouge qui donnent leur nom à notre entreprise.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers de partager notre amour de l'aventure avec
                  des voyageurs du monde entier, offrant des expériences sûres, excitantes et
                  inoubliables pour les pilotes de tous niveaux.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-adventure">
                <img
                  src={nature1}
                  alt="Nos pistes"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-56 h-56 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={nature2}
                  alt="Aventure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-background shadow-xl">
                <img
                  src={nature3}
                  alt="Kebdana"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-quad blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <TreePine className="w-6 h-6 text-primary" />
              <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
                Ce Qui Nous Anime
              </span>
              <TreePine className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl mt-4 text-foreground tracking-wider">
              NOS VALEURS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border/50 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-adventure"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-quad/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl tracking-wider text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 relative">
        <div className="absolute inset-0 opacity-20">
          <img src={nature2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-background/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Nous Trouver
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-4 text-foreground tracking-wider">
              KEBDANA, NADOR
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Située dans la magnifique région de Nador, Kebdana offre des paysages diversifiés
              parfaits pour les aventures tout-terrain - des forêts luxuriantes aux vues côtières méditerranéennes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden h-[500px] bg-muted shadow-adventure border border-border/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103553.47844999!2d-2.5!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77a8c5c5c5c5c5%3A0x0!2sKebdana%2C%20Morocco!5e0!3m2!1sfr!2s!4v1600000000000!5m2!1sfr!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;