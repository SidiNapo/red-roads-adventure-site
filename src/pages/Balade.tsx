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
    title: "Quick Discovery",
    duration: "30 min",
    groupSize: "2-4",
    location: "Forest Trail",
    image: trail1,
    price: "200 MAD",
    description:
      "Perfect for beginners. A quick taste of off-road adventure through scenic forest paths.",
  },
  {
    title: "Forest Explorer",
    duration: "1 hour",
    groupSize: "2-6",
    location: "Kebdana Forest",
    image: trail2,
    price: "350 MAD",
    description:
      "Explore the heart of Kebdana's forests with varied terrain and beautiful viewpoints.",
  },
  {
    title: "Coastal Adventure",
    duration: "1.5 hours",
    groupSize: "2-8",
    location: "Coast & Forest",
    image: trail1,
    price: "500 MAD",
    description:
      "Experience both forest trails and coastal views on this extended adventure.",
  },
  {
    title: "Ultimate Experience",
    duration: "2 hours",
    groupSize: "4-10",
    location: "Full Circuit",
    image: trail2,
    price: "700 MAD",
    description:
      "The complete Red Roads experience with all terrain types and premium stops.",
  },
  {
    title: "Sunset Safari",
    duration: "2.5 hours",
    groupSize: "2-6",
    location: "Scenic Route",
    image: trail1,
    price: "850 MAD",
    description:
      "A magical evening ride culminating with sunset views over the Mediterranean.",
  },
  {
    title: "Full Day Adventure",
    duration: "4 hours",
    groupSize: "4-8",
    location: "Multi-Zone",
    image: trail2,
    price: "1200 MAD",
    description:
      "The ultimate adventure package with lunch break and multiple trail experiences.",
  },
];

const Balade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4"
          >
            Guided Tours
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-foreground tracking-wider"
          >
            BALADE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground mt-4 max-w-xl mx-auto"
          >
            Discover Morocco's stunning landscapes on our guided tour packages
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
              Choose Your Adventure
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
              TOUR PACKAGES
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              From quick discovery rides to full-day expeditions, we have the
              perfect adventure for everyone
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
                WHAT'S INCLUDED
              </h2>
              <ul className="space-y-4">
                {[
                  "Professional guide with local knowledge",
                  "Safety equipment (helmet, gloves, goggles)",
                  "Vehicle of your choice",
                  "Safety briefing and training",
                  "Water and refreshments",
                  "Photo opportunities at scenic stops",
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
                alt="Trail"
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
