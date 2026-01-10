import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Users, Award, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import VehicleCard from "@/components/VehicleCard";
import TourCard from "@/components/TourCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import quad1 from "@/assets/quad-1.jpg";
import quad2 from "@/assets/quad-2.jpg";
import cross1 from "@/assets/cross-1.jpg";
import cross2 from "@/assets/cross-2.jpg";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
const vehicles = [{
  type: "quad" as const,
  name: "Raptor 700R",
  image: quad1,
  engine: "686cc",
  power: "50 CV",
  price: "400 MAD/h",
  features: ["Automatique", "4x4", "Mode Sport"]
}, {
  type: "quad" as const,
  name: "Outlander X3",
  image: quad2,
  engine: "900cc",
  power: "72 CV",
  price: "500 MAD/h",
  features: ["Manuel", "4x4", "Turbo"]
}, {
  type: "cross" as const,
  name: "CRF450X",
  image: cross1,
  engine: "449cc",
  power: "55 CV",
  price: "350 MAD/h",
  features: ["Niveau Pro", "Léger", "Prêt Course"]
}, {
  type: "cross" as const,
  name: "KTM 450 EXC",
  image: cross2,
  engine: "510cc",
  power: "63 CV",
  price: "450 MAD/h",
  features: ["Enduro", "6 Vitesses", "Suspension Pro"]
}];
const tours = [{
  title: "Découverte Forêt",
  duration: "30 min",
  groupSize: "2-6",
  location: "Kebdana",
  image: trail1,
  price: "200 MAD",
  description: "Une introduction parfaite aux aventures tout-terrain à travers les sentiers forestiers pittoresques."
}, {
  title: "Explorateur Côtier",
  duration: "1 heure",
  groupSize: "2-8",
  location: "Côte Nador",
  image: trail2,
  price: "350 MAD",
  description: "Découvrez des vues imprenables sur la Méditerranée tout en conquérant les pistes de terre rouge."
}, {
  title: "Aventure Ultime",
  duration: "2 heures",
  groupSize: "4-10",
  location: "Circuit Complet",
  image: trail1,
  price: "600 MAD",
  description: "L'expérience Kebdana complète avec plusieurs types de terrains et des points de vue époustouflants."
}];
const features = [{
  icon: Shield,
  title: "Sécurité Avant Tout",
  description: "Équipement de protection complet et briefing sécurité inclus"
}, {
  icon: Users,
  title: "Guides Experts",
  description: "Des guides locaux expérimentés qui connaissent chaque sentier"
}, {
  icon: Award,
  title: "Flotte Premium",
  description: "Des véhicules haut de gamme bien entretenus"
}, {
  icon: Mountain,
  title: "Parcours Exceptionnels",
  description: "Accès exclusif aux meilleurs circuits tout-terrain"
}];
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Features Section */}
      

      {/* Divider */}
      <div className="section-divider" />

      {/* Vehicles Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Notre Flotte
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
              CHOISISSEZ VOTRE MONTURE
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Des quads puissants aux motos cross agiles, trouvez la machine parfaite
              pour votre aventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map(vehicle => <VehicleCard key={vehicle.name} {...vehicle} />)}
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/close-circle">Voir Tous les Véhicules</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Tours Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
                Circuits Balade
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
                EXPLOREZ LES PISTES
              </h2>
              <p className="font-body text-muted-foreground mt-4 max-w-xl">
                Des aventures guidées à travers les paysages les plus époustouflants du Maroc
              </p>
            </div>
            <Button variant="adventure" size="lg" asChild>
              <Link to="/balade">Voir Tous les Circuits</Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map(tour => <TourCard key={tour.title} {...tour} />)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${trail2})`
      }} />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-6">
              PRÊT POUR VOTRE
              <br />
              <span className="text-gradient-hero">AVENTURE ?</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10">
              Réservez votre expérience maintenant et découvrez le frisson des pistes
              rouges du Maroc. Notre équipe est prête à rendre votre aventure inoubliable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/reservation">Faire une Réservation</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Nous Contacter</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;