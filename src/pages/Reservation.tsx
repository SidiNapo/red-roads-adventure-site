import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Users, Clock, CheckCircle, Zap, Shield, Sparkles, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import nature1 from "@/assets/nature-1.jpg";
import nature2 from "@/assets/nature-2.jpg";
import nature3 from "@/assets/nature-3.jpg";
import quad1 from "@/assets/quad-1.jpg";
import cross1 from "@/assets/cross-1.jpg";

const vehicles = [
  { value: "raptor", label: "Quad - Raptor 700R", type: "quad" },
  { value: "outlander", label: "Quad - Outlander X3", type: "quad" },
  { value: "crf450", label: "Cross - CRF450X", type: "cross" },
  { value: "ktm450", label: "Cross - KTM 450 EXC", type: "cross" },
];

const durations = [
  { value: "30min", label: "30 Minutes", price: "200 MAD" },
  { value: "1hour", label: "1 Heure", price: "350 MAD" },
  { value: "1.5hours", label: "1h30", price: "500 MAD" },
  { value: "2hours", label: "2 Heures", price: "700 MAD" },
  { value: "4hours", label: "4 Heures", price: "1200 MAD" },
];

const features = [
  { icon: Shield, title: "Équipement Inclus", description: "Casque et protection fournis" },
  { icon: Users, title: "Guide Expert", description: "Accompagnement professionnel" },
  { icon: Sparkles, title: "Expérience Unique", description: "Paysages époustouflants" },
];

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", vehicle: "", duration: "", participants: "", notes: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({ title: "Réservation Envoyée !", description: "Nous confirmerons votre réservation sous 24 heures." });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 opacity-20">
            <img src={nature2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-background/90" />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="text-center max-w-lg relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-quad/20 flex items-center justify-center mx-auto mb-8 border-2 border-primary/30"
            >
              <CheckCircle className="w-16 h-16 text-primary" />
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground tracking-wider mb-4">RÉSERVATION REÇUE !</h1>
            <p className="font-body text-muted-foreground mb-8 text-lg">
              Merci pour votre demande de réservation. Notre équipe examinera votre demande et vous contactera sous 24 heures pour confirmer votre aventure.
            </p>
            <Button variant="hero" size="lg" onClick={() => setIsSubmitted(false)}>Nouvelle Réservation</Button>
          </motion.div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Modern & Stunning */}
      <section className="relative min-h-[85vh] md:h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Multi-layer background with images */}
        <div className="absolute inset-0">
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${nature2})` }}
            />
          </motion.div>
        </div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

        {/* Floating vehicle images - Hidden on smaller screens */}
        <motion.div 
          initial={{ opacity: 0, x: -80, rotate: -12 }}
          animate={{ opacity: 1, x: 0, rotate: -12 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute left-8 top-1/3 hidden 2xl:block"
        >
          <div className="w-52 h-52 rounded-2xl overflow-hidden border-2 border-quad/30 shadow-adventure">
            <img src={quad1} alt="Quad" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-quad text-background font-display text-sm px-4 py-2 rounded-lg">
            QUAD
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 80, rotate: 12 }}
          animate={{ opacity: 1, x: 0, rotate: 12 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="absolute right-8 top-1/3 hidden 2xl:block"
        >
          <div className="w-52 h-52 rounded-2xl overflow-hidden border-2 border-cross/30 shadow-adventure">
            <img src={cross1} alt="Cross" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-cross text-background font-display text-sm px-4 py-2 rounded-lg">
            CROSS
          </div>
        </motion.div>

        {/* Background text - Hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 items-center justify-center pointer-events-none hidden md:flex"
        >
          <span className="font-display text-[10rem] md:text-[15rem] lg:text-[20rem] text-foreground tracking-wider">BOOK</span>
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-8 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-cross/20 flex items-center justify-center mx-auto backdrop-blur-sm border border-primary/30">
              <Bike className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block font-body text-xs sm:text-sm text-primary font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 md:mb-6"
          >
            Réservez Votre Aventure
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground tracking-wider mb-4 md:mb-6"
          >
            RÉSERVATION
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 px-2"
          >
            Choisissez votre véhicule, votre durée, et préparez-vous pour une aventure 
            inoubliable dans les paysages époustouflants de Kebdana.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-2 sm:gap-3 bg-card/50 backdrop-blur-sm rounded-full px-3 sm:px-5 py-2 sm:py-3 border border-border/50"
              >
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="font-body text-xs sm:text-sm text-foreground">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-body text-xs text-muted-foreground uppercase tracking-widest">Réserver</span>
            <Zap className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Image Strip */}
      <section className="py-6 bg-card/30 overflow-hidden">
        <div className="flex gap-4">
          {[nature1, quad1, nature3, cross1, nature2, quad1].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-48 h-32 rounded-xl overflow-hidden"
            >
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 opacity-5">
          <img src={nature3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-background/98" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-adventure"
            >
              {/* Form header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                  <Calendar className="w-8 h-8 text-primary" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-4">RÉSERVEZ VOTRE SORTIE</h2>
                <p className="font-body text-muted-foreground max-w-lg mx-auto">
                  Remplissez le formulaire ci-dessous et notre équipe confirmera votre réservation sous 24 heures
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-display text-lg text-foreground tracking-wider">Informations Personnelles</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">Nom Complet *</label>
                      <Input 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                        placeholder="Votre nom complet" 
                        required 
                        className="bg-muted border-border/50 h-12" 
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">Adresse Email *</label>
                      <Input 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                        placeholder="votre@email.com" 
                        required 
                        className="bg-muted border-border/50 h-12" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">Numéro de Téléphone *</label>
                      <Input 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                        placeholder="+212 600 000 000" 
                        required 
                        className="bg-muted border-border/50 h-12" 
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />Date Souhaitée *
                      </label>
                      <Input 
                        type="date" 
                        value={formData.date} 
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })} 
                        required 
                        className="bg-muted border-border/50 h-12" 
                      />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Adventure details */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Bike className="w-5 h-5 text-primary" />
                    <span className="font-display text-lg text-foreground tracking-wider">Détails de l'Aventure</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">Véhicule *</label>
                      <Select value={formData.vehicle} onValueChange={(value) => setFormData({ ...formData, vehicle: value })}>
                        <SelectTrigger className="bg-muted border-border/50 h-12">
                          <SelectValue placeholder="Sélectionnez un véhicule" />
                        </SelectTrigger>
                        <SelectContent>
                          {vehicles.map((v) => (
                            <SelectItem key={v.value} value={v.value}>
                              <span className={v.type === 'quad' ? 'text-quad' : 'text-cross'}>{v.label}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />Durée *
                      </label>
                      <Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                        <SelectTrigger className="bg-muted border-border/50 h-12">
                          <SelectValue placeholder="Sélectionnez la durée" />
                        </SelectTrigger>
                        <SelectContent>
                          {durations.map((d) => (
                            <SelectItem key={d.value} value={d.value}>{d.label} - {d.price}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />Nombre de Participants *
                    </label>
                    <Select value={formData.participants} onValueChange={(value) => setFormData({ ...formData, participants: value })}>
                      <SelectTrigger className="bg-muted border-border/50 h-12">
                        <SelectValue placeholder="Nombre de pilotes" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <SelectItem key={n} value={n.toString()}>{n} {n === 1 ? "Pilote" : "Pilotes"}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional notes */}
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Notes Supplémentaires</label>
                  <Textarea 
                    value={formData.notes} 
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })} 
                    placeholder="Demandes spéciales, niveau d'expérience, ou informations à nous communiquer ?" 
                    rows={4} 
                    className="bg-muted border-border/50 resize-none" 
                  />
                </div>

                <Button variant="hero" size="xl" className="w-full" type="submit">
                  <Zap className="w-5 h-5 mr-2" />
                  Confirmer la Réservation
                </Button>

                <p className="text-center font-body text-sm text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez nos conditions de réservation. 
                  Confirmation sous 24h.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservation;