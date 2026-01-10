import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
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

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trail2})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4"
          >
            Notre Histoire
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-foreground tracking-wider"
          >
            À PROPOS
          </motion.h1>
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
              <img
                src={logo}
                alt="Red Roads Adventure"
                className="w-48 mb-8"
              />
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-6">
                NÉ DE LA PASSION
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
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={trail1}
                  alt="Nos pistes"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={trail2}
                  alt="Aventure"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Ce Qui Nous Anime
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
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
                className="p-8 rounded-2xl bg-card border border-border/50 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
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
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Nous Trouver
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
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
            className="rounded-3xl overflow-hidden h-96 bg-muted"
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
