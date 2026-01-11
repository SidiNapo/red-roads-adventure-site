import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const tours = [
  {
    title: "Découverte Rapide",
    duration: "30 min",
    groupSize: "2-4",
    location: "Sentier Forêt",
    image: trail1,
    price: "200 MAD",
    description:
      "Parfait pour les débutants. Un avant-goût de l'aventure tout-terrain à travers des chemins forestiers pittoresques.",
  },
  {
    title: "Explorateur Forêt",
    duration: "1 heure",
    groupSize: "2-6",
    location: "Forêt Kebdana",
    image: trail2,
    price: "350 MAD",
    description:
      "Explorez le cœur des forêts de Kebdana avec des terrains variés et de beaux points de vue.",
  },
  {
    title: "Aventure Côtière",
    duration: "1h30",
    groupSize: "2-8",
    location: "Côte & Forêt",
    image: trail1,
    price: "500 MAD",
    description:
      "Découvrez à la fois les sentiers forestiers et les vues côtières lors de cette aventure prolongée.",
  },
  {
    title: "Expérience Ultime",
    duration: "2 heures",
    groupSize: "4-10",
    location: "Circuit Complet",
    image: trail2,
    price: "700 MAD",
    description:
      "L'expérience Red Roads complète avec tous types de terrains et des arrêts premium.",
  },
  {
    title: "Safari Coucher de Soleil",
    duration: "2h30",
    groupSize: "2-6",
    location: "Route Panoramique",
    image: trail1,
    price: "850 MAD",
    description:
      "Une balade magique en soirée culminant avec des vues du coucher de soleil sur la Méditerranée.",
  },
  {
    title: "Aventure Journée Complète",
    duration: "4 heures",
    groupSize: "4-8",
    location: "Multi-Zones",
    image: trail2,
    price: "1200 MAD",
    description:
      "Le forfait aventure ultime avec pause déjeuner et multiples expériences de pistes.",
  },
];

const Balade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center px-4 py-12 md:py-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-body text-xs sm:text-sm text-primary font-semibold tracking-widest uppercase mb-4"
          >
            Circuits Guidés
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-wider"
          >
            BALADE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-base sm:text-lg text-muted-foreground mt-4 max-w-xl mx-auto px-4"
          >
            Découvrez les paysages époustouflants du Maroc avec nos forfaits de circuits guidés
          </motion.p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Choisissez Votre Aventure
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
              FORFAITS CIRCUITS
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Des balades découverte rapides aux expéditions d'une journée complète, nous avons
              l'aventure parfaite pour tout le monde
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.title} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl text-foreground tracking-wider mb-6">
                CE QUI EST INCLUS
              </h2>
              <ul className="space-y-4">
                {[
                  "Guide professionnel avec connaissance locale",
                  "Équipement de sécurité (casque, gants, lunettes)",
                  "Véhicule de votre choix",
                  "Briefing et formation sécurité",
                  "Eau et rafraîchissements",
                  "Opportunités photos aux arrêts panoramiques",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-body text-muted-foreground">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img
                src={trail1}
                alt="Piste"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Balade;
