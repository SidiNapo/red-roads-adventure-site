import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Zap, MapPin, Clock, ChevronRight, X, Phone, User, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import nature1 from "@/assets/nature-1.jpg";
import nature2 from "@/assets/nature-2.jpg";
import nature3 from "@/assets/nature-3.jpg";

interface VehicleShowcaseCardProps {
  id: string;
  type: "quad" | "cross";
  name: string;
  image: string;
  engine: string;
  power: string;
  price: string;
  features: string[];
  description: string;
}

const experienceLocations = [
  {
    name: "Dunes de Kebdana",
    image: nature1,
    terrain: "Sable doré & pistes sauvages",
  },
  {
    name: "Forêt de l'Atlas",
    image: nature2,
    terrain: "Sentiers forestiers & vallées",
  },
  {
    name: "Montagnes Rocheuses",
    image: nature3,
    terrain: "Rochers & chemins techniques",
  },
];

const durations = [
  { value: "30min", label: "30 Minutes", price: "200 MAD" },
  { value: "1h", label: "1 Heure", price: "350 MAD" },
  { value: "2h", label: "2 Heures", price: "600 MAD" },
  { value: "half-day", label: "Demi-journée", price: "1000 MAD" },
];

const VehicleShowcaseCard = ({
  id,
  type,
  name,
  image,
  engine,
  power,
  price,
  features,
  description,
}: VehicleShowcaseCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    duration: "",
  });

  const isQuad = type === "quad";
  const location = experienceLocations[Math.floor(Math.random() * experienceLocations.length)];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Réservation Confirmée! 🎉",
        description: `Votre ${name} est réservé. Nous vous contacterons bientôt.`,
      });
      setIsSubmitting(false);
      setIsModalOpen(false);
      setFormData({ name: "", phone: "", duration: "" });
    }, 1500);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="group relative"
      >
        {/* Main Card */}
        <div
          onClick={() => setIsModalOpen(true)}
          className={`relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] ${
            isQuad 
              ? "bg-gradient-to-br from-primary/5 via-card to-card border border-primary/20 hover:border-primary/50" 
              : "bg-gradient-to-br from-secondary/5 via-card to-card border border-secondary/20 hover:border-secondary/50"
          }`}
        >
          {/* Glow Effect */}
          <div
            className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
              isQuad ? "bg-primary/20" : "bg-secondary/20"
            }`}
          />

          {/* Content Container */}
          <div className="relative">
            {/* Image with Overlay */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <motion.img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              
              {/* Type Badge */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={`absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-md font-display text-xs tracking-widest ${
                  isQuad
                    ? "bg-primary/30 text-primary border border-primary/40"
                    : "bg-secondary/30 text-secondary-foreground border border-secondary/40"
                }`}
              >
                {type.toUpperCase()}
              </motion.div>

              {/* Floating Price Tag */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-4 px-4 py-2 rounded-2xl backdrop-blur-md bg-background/60 border border-border/50"
              >
                <span className="font-body text-xs text-muted-foreground block">À partir de</span>
                <span className={`font-display text-lg ${isQuad ? "text-primary" : "text-secondary-foreground"}`}>
                  {price}
                </span>
              </motion.div>
            </div>

            {/* Info Section */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl sm:text-3xl tracking-wider text-foreground">
                  {name}
                </h3>
                <motion.div
                  whileHover={{ x: 5 }}
                  className={`p-2 rounded-full ${isQuad ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary-foreground"}`}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Specs */}
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${isQuad ? "bg-primary/10" : "bg-secondary/10"}`}>
                    <Gauge className={`w-4 h-4 ${isQuad ? "text-primary" : "text-secondary-foreground"}`} />
                  </div>
                  <span className="font-body text-sm text-muted-foreground">{engine}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${isQuad ? "bg-primary/10" : "bg-secondary/10"}`}>
                    <Zap className={`w-4 h-4 ${isQuad ? "text-primary" : "text-secondary-foreground"}`} />
                  </div>
                  <span className="font-body text-sm text-muted-foreground">{power}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {features.map((feature) => (
                  <span
                    key={feature}
                    className={`px-3 py-1.5 rounded-full text-xs font-body ${
                      isQuad 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "bg-secondary/10 text-secondary-foreground border border-secondary/20"
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="pt-4 flex items-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  variant={isQuad ? "quad" : "cross"} 
                  className="flex-1 group/btn"
                >
                  <span>Découvrir l'Expérience</span>
                  <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Experience Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-card border-border/50">
          {/* Hero Section of Modal */}
          <div className="relative h-64 sm:h-80 overflow-hidden">
            <img
              src={nature2}
              alt="Experience location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
            
            {/* Vehicle Image Overlay */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 right-4 sm:right-8 w-32 h-32 sm:w-48 sm:h-48"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl border-4 border-card shadow-2xl"
              />
            </motion.div>

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 sm:left-8">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`inline-block px-3 py-1 rounded-full text-xs font-display tracking-widest mb-2 ${
                  isQuad 
                    ? "bg-primary/20 text-primary border border-primary/30" 
                    : "bg-secondary/20 text-secondary-foreground border border-secondary/30"
                }`}
              >
                {type.toUpperCase()}
              </motion.span>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl text-foreground tracking-wider"
              >
                {name}
              </motion.h2>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Location & Experience Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className={`p-6 rounded-2xl ${isQuad ? "bg-primary/5 border border-primary/20" : "bg-secondary/5 border border-secondary/20"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${isQuad ? "bg-primary/20" : "bg-secondary/20"}`}>
                    <MapPin className={`w-5 h-5 ${isQuad ? "text-primary" : "text-secondary-foreground"}`} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg tracking-wider text-foreground">Lieu de l'Aventure</h4>
                    <p className="font-body text-sm text-muted-foreground">Kebdana, Maroc Oriental</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Explorez les paysages sauvages du Maroc oriental. Des dunes dorées aux forêts verdoyantes, 
                  chaque terrain est une invitation à l'aventure.
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${isQuad ? "bg-primary/5 border border-primary/20" : "bg-secondary/5 border border-secondary/20"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${isQuad ? "bg-primary/20" : "bg-secondary/20"}`}>
                    <Clock className={`w-5 h-5 ${isQuad ? "text-primary" : "text-secondary-foreground"}`} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg tracking-wider text-foreground">L'Expérience</h4>
                    <p className="font-body text-sm text-muted-foreground">Sensations garanties</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`p-6 sm:p-8 rounded-3xl ${
                isQuad 
                  ? "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20" 
                  : "bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent border border-secondary/20"
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl sm:text-3xl tracking-wider text-foreground mb-2">
                  RÉSERVEZ VOTRE AVENTURE
                </h3>
                <p className="font-body text-muted-foreground">
                  Véhicule sélectionné: <span className={isQuad ? "text-primary font-semibold" : "text-secondary-foreground font-semibold"}>{name}</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body text-foreground flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Votre Nom
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ahmed El Mansouri"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Numéro de Téléphone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+212 6XX XXX XXX"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label className="font-body text-foreground flex items-center gap-2">
                    <Timer className="w-4 h-4" />
                    Durée de l'Aventure
                  </Label>
                  <Select
                    value={formData.duration}
                    onValueChange={(value) => setFormData({ ...formData, duration: value })}
                    required
                  >
                    <SelectTrigger className="bg-background/50 border-border/50">
                      <SelectValue placeholder="Choisissez votre durée" />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map((duration) => (
                        <SelectItem key={duration.value} value={duration.value}>
                          <span className="flex items-center justify-between gap-4">
                            <span>{duration.label}</span>
                            <span className={`font-semibold ${isQuad ? "text-primary" : "text-secondary-foreground"}`}>
                              {duration.price}
                            </span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant={isQuad ? "quad" : "cross"}
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting || !formData.name || !formData.phone || !formData.duration}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <span>Confirmer la Réservation</span>
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VehicleShowcaseCard;
