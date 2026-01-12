import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Lock, Star, Zap, Crown, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleShowcaseCard from "@/components/VehicleShowcaseCard";
import hero1 from "@/assets/hero-1.jpg";
import nature1 from "@/assets/nature-1.jpg";
import nature2 from "@/assets/nature-2.jpg";
import nature3 from "@/assets/nature-3.jpg";
import quad1 from "@/assets/quad-1.jpg";
import { vehicles } from "@/data/vehicles";
const benefits = [{
  icon: Lock,
  title: "Accès Exclusif",
  description: "Réservation prioritaire et accès aux pistes premium"
}, {
  icon: Star,
  title: "Traitement VIP",
  description: "Guides personnels et expériences sur mesure"
}, {
  icon: Zap,
  title: "Derniers Modèles",
  description: "Premier accès aux nouveaux véhicules de notre flotte"
}, {
  icon: Users,
  title: "Événements Communautaires",
  description: "Rejoignez des sorties et aventures de groupe exclusives"
}];
const CloseCircle = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${hero1})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        
        {/* Floating Elements */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 0.3,
        scale: 1
      }} transition={{
        duration: 1,
        delay: 0.5
      }} className="absolute top-32 left-10 hidden lg:block">
          <div className="w-20 h-20 rounded-full bg-primary/20 blur-2xl" />
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 0.3,
        scale: 1
      }} transition={{
        duration: 1,
        delay: 0.7
      }} className="absolute bottom-32 right-10 hidden lg:block">
          <div className="w-32 h-32 rounded-full bg-secondary/20 blur-3xl" />
        </motion.div>

        <div className="relative z-10 text-center px-4 py-12 md:py-0">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Crown className="w-4 h-4 text-primary" />
            <span className="font-body text-xs sm:text-sm text-primary font-semibold tracking-widest uppercase">
              Adhésion Exclusive
            </span>
          </motion.div>
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wider">
            CERCLE PRIVÉ
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="font-body text-base sm:text-lg text-muted-foreground mt-4 max-w-xl mx-auto px-4">
            Rejoignez notre communauté exclusive de passionnés d'aventure
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl tracking-wider text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Vehicles Section - Creative Design */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        
        {/* Decorative Images */}
        <motion.div initial={{
        opacity: 0,
        x: -100
      }} whileInView={{
        opacity: 0.15,
        x: 0
      }} viewport={{
        once: true
      }} className="absolute left-0 top-1/4 w-64 h-96 hidden xl:block">
          <img src={nature1} alt="" className="w-full h-full object-cover rounded-r-3xl" />
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        x: 100
      }} whileInView={{
        opacity: 0.15,
        x: 0
      }} viewport={{
        once: true
      }} className="absolute right-0 bottom-1/4 w-64 h-96 hidden xl:block">
          <img src={nature3} alt="" className="w-full h-full object-cover rounded-l-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            
            <span className="block font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4">
              Flotte Premium
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider mb-4">
              NOS VÉHICULES
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre collection exclusive de machines d'exception. 
              Cliquez sur un véhicule pour explorer l'expérience et réserver directement.
            </p>
          </motion.div>

          {/* Creative Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {vehicles.map((vehicle, index) => <motion.div key={vehicle.id} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.15
          }}>
                <VehicleShowcaseCard {...vehicle} />
              </motion.div>)}
          </div>

          {/* Bottom Decorative Element */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-muted/50 border border-border/50">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-body text-sm text-muted-foreground">
                Tous nos véhicules sont assurés et entretenus quotidiennement
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl text-foreground tracking-wider mb-6">
              REJOIGNEZ LE CERCLE
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Prêt à faire partie de notre communauté exclusive ? Contactez-nous pour
              en savoir plus sur les avantages de l'adhésion.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CloseCircle;