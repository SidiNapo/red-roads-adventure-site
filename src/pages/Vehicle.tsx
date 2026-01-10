import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Gauge, Zap, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getVehicleById, getSimilarVehicles, getOtherTypeVehicles } from "@/data/vehicles";

const Vehicle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const vehicle = getVehicleById(id || "");

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Véhicule Non Trouvé</h1>
          <Button variant="hero" asChild>
            <Link to="/">Retour à l'Accueil</Link>
          </Button>
        </div>
      </div>
    );
  }

  const isQuad = vehicle.type === "quad";
  const similarVehicles = getSimilarVehicles(vehicle.id, vehicle.type);
  const otherTypeVehicles = getOtherTypeVehicles(vehicle.type);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl ${
            isQuad ? "bg-primary/20" : "bg-secondary/20"
          }`} />
          <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl ${
            isQuad ? "bg-primary/10" : "bg-secondary/10"
          }`} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-body">Retour</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className={`absolute inset-0 rounded-3xl ${
                isQuad 
                  ? "bg-gradient-to-br from-primary/30 via-transparent to-primary/10" 
                  : "bg-gradient-to-br from-secondary/30 via-transparent to-secondary/10"
              }`} />
              <motion.img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
              {/* Type Badge */}
              <div className={`absolute top-6 left-6 px-6 py-2 rounded-full font-display text-sm tracking-widest ${
                isQuad
                  ? "bg-primary/90 text-primary-foreground"
                  : "bg-secondary/90 text-secondary-foreground"
              }`}>
                {vehicle.type.toUpperCase()}
              </div>
              {/* Decorative Elements */}
              <div className={`absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-xl ${
                isQuad ? "bg-primary/30" : "bg-secondary/30"
              }`} />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <span className={`font-body text-sm font-semibold tracking-widest uppercase ${
                  isQuad ? "text-primary" : "text-green-500"
                }`}>
                  {isQuad ? "Quad Haute Performance" : "Moto Cross Professionnelle"}
                </span>
                <h1 className="font-display text-5xl md:text-6xl text-foreground tracking-wider mt-2">
                  {vehicle.name}
                </h1>
              </div>

              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {vehicle.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-2xl border ${
                  isQuad ? "border-primary/30 bg-primary/5" : "border-secondary/30 bg-secondary/5"
                }`}>
                  <Gauge className={`w-6 h-6 mb-2 ${isQuad ? "text-primary" : "text-green-500"}`} />
                  <p className="font-body text-sm text-muted-foreground">Moteur</p>
                  <p className="font-display text-2xl text-foreground">{vehicle.engine}</p>
                </div>
                <div className={`p-4 rounded-2xl border ${
                  isQuad ? "border-primary/30 bg-primary/5" : "border-secondary/30 bg-secondary/5"
                }`}>
                  <Zap className={`w-6 h-6 mb-2 ${isQuad ? "text-primary" : "text-green-500"}`} />
                  <p className="font-body text-sm text-muted-foreground">Puissance</p>
                  <p className="font-display text-2xl text-foreground">{vehicle.power}</p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-3">
                {vehicle.features.map((feature) => (
                  <span
                    key={feature}
                    className={`px-4 py-2 rounded-full font-body text-sm ${
                      isQuad
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "bg-secondary/10 text-green-500 border border-secondary/30"
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className={`p-6 rounded-2xl border ${
                isQuad ? "border-primary/30 bg-primary/5" : "border-secondary/30 bg-secondary/5"
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-sm text-muted-foreground uppercase tracking-wider">
                      Tarif Location
                    </p>
                    <p className={`font-display text-4xl ${isQuad ? "text-primary" : "text-green-500"}`}>
                      {vehicle.price}
                    </p>
                  </div>
                  <Button variant={isQuad ? "quad" : "cross"} size="xl" asChild>
                    <Link to="/reservation">Réserver Maintenant</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider">
              CARACTÉRISTIQUES TECHNIQUES
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {vehicle.specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border ${
                  isQuad
                    ? "border-primary/20 bg-card hover:border-primary/40"
                    : "border-secondary/20 bg-card hover:border-secondary/40"
                } transition-colors`}
              >
                <p className="font-body text-sm text-muted-foreground mb-1">{spec.label}</p>
                <p className="font-display text-xl text-foreground">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider">
              INCLUS AVEC LA LOCATION
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Équipement Sécurité", desc: "Casque, gants et protection" },
              { icon: Clock, title: "Briefing Complet", desc: "Formation avant départ" },
              { icon: CheckCircle, title: "Assurance Incluse", desc: "Couverture complète" },
              { icon: Gauge, title: "Carburant", desc: "Réservoir plein" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border ${
                  isQuad ? "border-primary/20" : "border-secondary/20"
                } bg-card/50 backdrop-blur-sm`}
              >
                <item.icon className={`w-8 h-8 mb-4 ${isQuad ? "text-primary" : "text-green-500"}`} />
                <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Similar Vehicles */}
      {similarVehicles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className={`font-body text-sm font-semibold tracking-widest uppercase ${
                isQuad ? "text-primary" : "text-green-500"
              }`}>
                {isQuad ? "Autres Quads" : "Autres Motos Cross"}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mt-2">
                VÉHICULES SIMILAIRES
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarVehicles.map((v, index) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/vehicle/${v.id}`} className="block group">
                    <div className={`relative overflow-hidden rounded-3xl border ${
                      v.type === "quad" ? "border-primary/30" : "border-secondary/30"
                    } bg-card transition-all duration-300 group-hover:border-opacity-60`}>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-2xl text-foreground tracking-wider">
                          {v.name}
                        </h3>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-4">
                            <span className="font-body text-sm text-muted-foreground">{v.engine}</span>
                            <span className="font-body text-sm text-muted-foreground">{v.power}</span>
                          </div>
                          <span className={`font-display text-xl ${
                            v.type === "quad" ? "text-primary" : "text-green-500"
                          }`}>
                            {v.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Type Vehicles */}
      <section className="py-16 relative overflow-hidden">
        <div className={`absolute inset-0 ${
          isQuad
            ? "bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5"
            : "bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
        }`} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className={`font-body text-sm font-semibold tracking-widest uppercase ${
              isQuad ? "text-green-500" : "text-primary"
            }`}>
              Découvrez Aussi
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mt-2">
              {isQuad ? "NOS MOTOS CROSS" : "NOS QUADS"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherTypeVehicles.map((v, index) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/vehicle/${v.id}`} className="block group">
                  <div className={`relative overflow-hidden rounded-3xl border ${
                    v.type === "quad" ? "border-primary/30" : "border-secondary/30"
                  } bg-card transition-all duration-300 group-hover:border-opacity-60`}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={v.image}
                        alt={v.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                      {/* Type Badge */}
                      <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full font-display text-xs tracking-widest ${
                        v.type === "quad"
                          ? "bg-primary/90 text-primary-foreground"
                          : "bg-secondary/90 text-secondary-foreground"
                      }`}>
                        {v.type.toUpperCase()}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl text-foreground tracking-wider">
                        {v.name}
                      </h3>
                      <p className="font-body text-muted-foreground mt-2 line-clamp-2">
                        {v.description}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                        <div className="flex gap-2">
                          {v.features.slice(0, 2).map((f) => (
                            <span
                              key={f}
                              className="px-3 py-1 rounded-full bg-muted text-xs font-body text-muted-foreground"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                        <span className={`font-display text-xl ${
                          v.type === "quad" ? "text-primary" : "text-green-500"
                        }`}>
                          {v.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className={`absolute inset-0 ${
          isQuad
            ? "bg-gradient-to-r from-primary/20 via-background to-primary/10"
            : "bg-gradient-to-r from-secondary/20 via-background to-secondary/10"
        }`} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-6">
              PRÊT À CONQUÉRIR
              <br />
              <span className={isQuad ? "text-primary" : "text-green-500"}>LES PISTES ?</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Réservez le {vehicle.name} maintenant et vivez une aventure inoubliable sur les terres rouges du Maroc.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant={isQuad ? "quad" : "cross"} size="xl" asChild>
                <Link to="/reservation">Réserver le {vehicle.name}</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Poser une Question</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vehicle;
