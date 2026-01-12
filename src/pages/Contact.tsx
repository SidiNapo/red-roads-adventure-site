import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Compass, Navigation } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import nature1 from "@/assets/nature-1.jpg";
import nature2 from "@/assets/nature-2.jpg";
import nature3 from "@/assets/nature-3.jpg";
import quad1 from "@/assets/quad-1.jpg";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Envoyé !",
      description: "Nous vous répondrons dès que possible."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const contactInfo = [{
    icon: MapPin,
    title: "Adresse",
    details: ["Kebdana, Nador", "Maroc"],
    color: "from-primary to-quad"
  }, {
    icon: Phone,
    title: "Téléphone",
    details: ["+212 600 000 000", "+212 600 000 001"],
    color: "from-quad to-cross"
  }, {
    icon: Mail,
    title: "Email",
    details: ["info@redroadsadventure.com", "booking@redroadsadventure.com"],
    color: "from-cross to-primary"
  }, {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Dim : 8h00 - 19h00", "Réservations 24h/24"],
    color: "from-primary to-cross"
  }];
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Stunning & Modern */}
      <section className="relative min-h-[85vh] md:h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Multi-layer background */}
        <div className="absolute inset-0">
          <motion.div initial={{
          scale: 1.2
        }} animate={{
          scale: 1
        }} transition={{
          duration: 2,
          ease: "easeOut"
        }} className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${nature1})`
          }} />
          </motion.div>
        </div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-background/90" />
        
        {/* Decorative floating elements - Hidden on mobile/tablet */}
        <motion.div initial={{
        opacity: 0,
        x: -100
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.5,
        duration: 1
      }} className="absolute left-10 top-1/4 hidden xl:block">
          <div className="relative">
            <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-adventure rotate-6">
              <img src={nature2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden border-2 border-quad/30 shadow-xl -rotate-6">
              <img src={quad1} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: 100
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.7,
        duration: 1
      }} className="absolute right-10 bottom-1/4 hidden xl:block">
          <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-cross/30 shadow-adventure -rotate-12">
            <img src={nature3} alt="" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Background text - Hidden on mobile */}
        <motion.div initial={{
        opacity: 0,
        y: 100
      }} animate={{
        opacity: 0.05,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 1
      }} className="absolute bottom-0 left-0 font-display text-[8rem] md:text-[12rem] lg:text-[15rem] text-foreground tracking-wider whitespace-nowrap hidden md:block">
          CONTACT
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-8 md:py-0">
          <motion.div initial={{
          opacity: 0,
          scale: 0.5
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6
        }} className="mb-4 md:mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-quad/20 flex items-center justify-center mx-auto backdrop-blur-sm border border-primary/30">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
          </motion.div>

          <motion.span initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="inline-block font-body text-xs sm:text-sm text-primary font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 md:mb-6">
            Parlons Aventure
          </motion.span>

          <motion.h1 initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.8
        }} className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground tracking-wider mb-4 md:mb-6">
            CONTACT
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Une question ? Une envie d'aventure ? Notre équipe est prête à vous accompagner 
            dans votre prochaine exploration des terres de Kebdana.
          </motion.p>

          {/* Quick contact buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8
        }} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-6 md:mt-8">
            <Button variant="hero" size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              Appeler Maintenant
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-primary/50 text-primary hover:bg-primary/10">
              <Mail className="w-4 h-4" />
              Envoyer un Email
            </Button>
          </motion.div>
        </div>

      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => <motion.div key={info.title} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-adventure">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <info.icon className="w-6 h-6 text-[adventure-forest-light] text-slate-300" />
                </div>
                <h3 className="font-display text-lg text-foreground tracking-wider mb-2">{info.title}</h3>
                {info.details.map(detail => <p key={detail} className="font-body text-sm text-muted-foreground">{detail}</p>)}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-10">
          <img src={nature3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-background/95" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Info */}
            <motion.div initial={{
            opacity: 0,
            x: -40
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <div className="flex items-center gap-4 mb-6">
                <Compass className="w-8 h-8 text-primary" />
                <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">Venez Nous Voir</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl text-foreground tracking-wider mb-6">
                PRÊT POUR<br /><span className="text-primary">L'AVENTURE</span> ?
              </h2>
              
              <p className="font-body text-muted-foreground mb-12 text-lg">
                Des questions sur nos circuits ou véhicules ? Envie de planifier une aventure personnalisée ? 
                Nous sommes là pour rendre votre expérience inoubliable.
              </p>

              {/* Image collage */}
              <div className="relative h-80 hidden lg:block">
                <motion.div initial={{
                opacity: 0,
                rotate: -6
              }} whileInView={{
                opacity: 1,
                rotate: -6
              }} viewport={{
                once: true
              }} className="absolute top-0 left-0 w-56 h-56 rounded-2xl overflow-hidden shadow-adventure border-4 border-background">
                  <img src={nature1} alt="Kebdana" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div initial={{
                opacity: 0,
                rotate: 6
              }} whileInView={{
                opacity: 1,
                rotate: 6
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2
              }} className="absolute top-10 left-40 w-48 h-48 rounded-2xl overflow-hidden shadow-adventure border-4 border-background">
                  <img src={nature2} alt="Pistes" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div initial={{
                opacity: 0,
                rotate: -3
              }} whileInView={{
                opacity: 1,
                rotate: -3
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.4
              }} className="absolute bottom-0 left-20 w-40 h-40 rounded-2xl overflow-hidden shadow-adventure border-4 border-background">
                  <img src={quad1} alt="Quad" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div initial={{
            opacity: 0,
            x: 40
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-adventure">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-quad flex items-center justify-center">
                  <Send className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground tracking-wider">ÉCRIVEZ-NOUS</h3>
                  <p className="font-body text-sm text-muted-foreground">Réponse sous 24h garantie</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Votre Nom *</label>
                    <Input value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} placeholder="Jean Dupont" required className="bg-muted border-border/50 h-12" />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Téléphone</label>
                    <Input value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} placeholder="+212 600 000 000" className="bg-muted border-border/50 h-12" />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Adresse Email *</label>
                  <Input type="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} placeholder="jean@exemple.com" required className="bg-muted border-border/50 h-12" />
                </div>

                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Votre Message *</label>
                  <Textarea value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} placeholder="Parlez-nous de vos projets d'aventure... Quel type de balade vous intéresse ? Combien de personnes ?" rows={6} required className="bg-muted border-border/50 resize-none" />
                </div>

                <Button variant="hero" size="xl" className="w-full" type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-10">
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Notre Localisation
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 text-foreground tracking-wider">
              KEBDANA, NADOR
            </h2>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="rounded-3xl overflow-hidden h-[400px] bg-muted shadow-adventure border border-border/50">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103553.47844999!2d-2.5!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77a8c5c5c5c5c5%3A0x0!2sKebdana%2C%20Morocco!5e0!3m2!1sfr!2s!4v1600000000000!5m2!1sfr!2s" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;