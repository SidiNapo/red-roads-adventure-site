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

const vehicles = [
  {
    type: "quad" as const,
    name: "Raptor 700R",
    image: quad1,
    engine: "686cc",
    power: "50 HP",
    price: "400 MAD/h",
    features: ["Automatic", "4x4", "Sport Mode"],
  },
  {
    type: "quad" as const,
    name: "Outlander X3",
    image: quad2,
    engine: "900cc",
    power: "72 HP",
    price: "500 MAD/h",
    features: ["Manual", "4x4", "Turbo"],
  },
  {
    type: "cross" as const,
    name: "CRF450X",
    image: cross1,
    engine: "449cc",
    power: "55 HP",
    price: "350 MAD/h",
    features: ["Pro Level", "Lightweight", "Race Ready"],
  },
  {
    type: "cross" as const,
    name: "KTM 450 EXC",
    image: cross2,
    engine: "510cc",
    power: "63 HP",
    price: "450 MAD/h",
    features: ["Enduro", "6-Speed", "Pro Suspension"],
  },
];

const tours = [
  {
    title: "Forest Discovery",
    duration: "30 min",
    groupSize: "2-6",
    location: "Kebdana",
    image: trail1,
    price: "200 MAD",
    description: "A perfect introduction to off-road adventures through scenic forest trails.",
  },
  {
    title: "Coastal Explorer",
    duration: "1 hour",
    groupSize: "2-8",
    location: "Nador Coast",
    image: trail2,
    price: "350 MAD",
    description: "Experience breathtaking views of the Mediterranean while conquering red earth trails.",
  },
  {
    title: "Ultimate Adventure",
    duration: "2 hours",
    groupSize: "4-10",
    location: "Full Circuit",
    image: trail1,
    price: "600 MAD",
    description: "The complete Kebdana experience with multiple terrain types and stunning viewpoints.",
  },
];

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Full protective gear and safety briefing included",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Experienced local guides who know every trail",
  },
  {
    icon: Award,
    title: "Premium Fleet",
    description: "Well-maintained, top-of-the-line vehicles",
  },
  {
    icon: Mountain,
    title: "Stunning Routes",
    description: "Exclusive access to the best off-road trails",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
              THE ADVENTURE AWAITS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl tracking-wider text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Vehicles Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Our Fleet
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
              CHOOSE YOUR RIDE
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              From powerful quads to agile cross bikes, find the perfect machine
              for your adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.name} {...vehicle} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/close-circle">View All Vehicles</Link>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
                Balade Tours
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
                EXPLORE THE TRAILS
              </h2>
              <p className="font-body text-muted-foreground mt-4 max-w-xl">
                Guided adventures through Morocco's most breathtaking landscapes
              </p>
            </div>
            <Button variant="adventure" size="lg" asChild>
              <Link to="/balade">View All Tours</Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.title} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trail2})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-6">
              READY FOR YOUR
              <br />
              <span className="text-gradient-hero">ADVENTURE?</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-10">
              Book your experience now and discover the thrill of Morocco's red
              roads. Our team is ready to make your adventure unforgettable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/reservation">Make a Reservation</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
