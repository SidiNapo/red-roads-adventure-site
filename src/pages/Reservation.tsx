import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Users, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hero2 from "@/assets/hero-2.jpg";

const vehicles = [
  { value: "raptor", label: "Quad - Raptor 700R" },
  { value: "outlander", label: "Quad - Outlander X3" },
  { value: "crf450", label: "Cross - CRF450X" },
  { value: "ktm450", label: "Cross - KTM 450 EXC" },
];

const durations = [
  { value: "30min", label: "30 Minutes", price: "200 MAD" },
  { value: "1hour", label: "1 Heure", price: "350 MAD" },
  { value: "1.5hours", label: "1h30", price: "500 MAD" },
  { value: "2hours", label: "2 Heures", price: "700 MAD" },
  { value: "4hours", label: "4 Heures", price: "1200 MAD" },
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
        <section className="min-h-[80vh] flex items-center justify-center px-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-lg">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8"><CheckCircle className="w-12 h-12 text-primary" /></div>
            <h1 className="font-display text-4xl text-foreground tracking-wider mb-4">RÉSERVATION REÇUE !</h1>
            <p className="font-body text-muted-foreground mb-8">Merci pour votre demande de réservation. Notre équipe examinera votre demande et vous contactera sous 24 heures pour confirmer.</p>
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
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero2})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 text-center px-4">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4">Réservez Votre Aventure</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-foreground tracking-wider">RÉSERVATION</motion.h1>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl text-foreground tracking-wider mb-4">RÉSERVEZ VOTRE SORTIE</h2>
                <p className="font-body text-muted-foreground">Remplissez le formulaire ci-dessous et nous confirmerons votre réservation</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="font-body text-sm text-muted-foreground mb-2 block">Nom Complet *</label><Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Votre nom complet" required className="bg-muted border-border/50" /></div>
                  <div><label className="font-body text-sm text-muted-foreground mb-2 block">Adresse Email *</label><Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="votre@email.com" required className="bg-muted border-border/50" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="font-body text-sm text-muted-foreground mb-2 block">Numéro de Téléphone *</label><Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+212 600 000 000" required className="bg-muted border-border/50" /></div>
                  <div><label className="font-body text-sm text-muted-foreground mb-2 block flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" />Date Souhaitée *</label><Input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required className="bg-muted border-border/50" /></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div><label className="font-body text-sm text-muted-foreground mb-2 block">Véhicule *</label><Select value={formData.vehicle} onValueChange={(value) => setFormData({ ...formData, vehicle: value })}><SelectTrigger className="bg-muted border-border/50"><SelectValue placeholder="Sélectionnez un véhicule" /></SelectTrigger><SelectContent>{vehicles.map((v) => (<SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>))}</SelectContent></Select></div>
                  <div><label className="font-body text-sm text-muted-foreground mb-2 block flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />Durée *</label><Select value={formData.duration} onValueChange={(value) => setFormData({ ...formData, duration: value })}><SelectTrigger className="bg-muted border-border/50"><SelectValue placeholder="Sélectionnez la durée" /></SelectTrigger><SelectContent>{durations.map((d) => (<SelectItem key={d.value} value={d.value}>{d.label} - {d.price}</SelectItem>))}</SelectContent></Select></div>
                </div>
                <div><label className="font-body text-sm text-muted-foreground mb-2 block flex items-center gap-2"><Users className="w-4 h-4 text-primary" />Nombre de Participants *</label><Select value={formData.participants} onValueChange={(value) => setFormData({ ...formData, participants: value })}><SelectTrigger className="bg-muted border-border/50"><SelectValue placeholder="Nombre de pilotes" /></SelectTrigger><SelectContent>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (<SelectItem key={n} value={n.toString()}>{n} {n === 1 ? "Pilote" : "Pilotes"}</SelectItem>))}</SelectContent></Select></div>
                <div><label className="font-body text-sm text-muted-foreground mb-2 block">Notes Supplémentaires</label><Textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} placeholder="Demandes spéciales ou informations à nous communiquer ?" rows={4} className="bg-muted border-border/50 resize-none" /></div>
                <Button variant="hero" size="xl" className="w-full" type="submit">Envoyer la Réservation</Button>
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
