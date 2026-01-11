import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Lock, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import hero1 from "@/assets/hero-1.jpg";
import { vehicles } from "@/data/vehicles";

const benefits = [
  {
    icon: Lock,
    title: "Accès Exclusif",
    description: "Réservation prioritaire et accès aux pistes premium",
  },
  {
    icon: Star,
    title: "Traitement VIP",
    description: "Guides personnels et expériences sur mesure",
  },
  {
    icon: Zap,
    title: "Derniers Modèles",
    description: "Premier accès aux nouveaux véhicules de notre flotte",
  },
  {
    icon: Users,
    title: "Événements Communautaires",
    description: "Rejoignez des sorties et aventures de groupe exclusives",
  },
];

const CloseCircle = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center px-4 py-12 md:py-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-body text-xs sm:text-sm text-primary font-semibold tracking-widest uppercase mb-4"
          >
            Adhésion Exclusive
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wider"
          >
            CERCLE PRIVÉ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-base sm:text-lg text-muted-foreground mt-4 max-w-xl mx-auto px-4"
          >
            Rejoignez notre communauté exclusive de passionnés d'aventure
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl tracking-wider text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Flotte Premium
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
              NOS VÉHICULES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.name} {...vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
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
    </div>
  );
};

export default CloseCircle;
