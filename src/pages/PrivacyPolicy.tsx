import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "Collecte des Données",
      content: `Nous collectons les informations que vous nous fournissez directement lors de vos réservations, notamment :
      • Nom et prénom
      • Numéro de téléphone
      • Adresse email
      • Informations de réservation (date, durée, véhicule choisi)
      
      Ces données sont essentielles pour traiter vos demandes et vous offrir la meilleure expérience possible.`
    },
    {
      icon: Lock,
      title: "Utilisation des Données",
      content: `Vos données personnelles sont utilisées exclusivement pour :
      • Traiter et confirmer vos réservations
      • Vous contacter concernant vos aventures
      • Améliorer nos services et votre expérience
      • Vous envoyer des informations promotionnelles (avec votre consentement)
      
      Nous ne vendons jamais vos données à des tiers.`
    },
    {
      icon: Shield,
      title: "Protection des Données",
      content: `La sécurité de vos données est notre priorité :
      • Chiffrement SSL pour toutes les communications
      • Accès restreint aux données personnelles
      • Stockage sécurisé sur des serveurs protégés
      • Mise à jour régulière de nos protocoles de sécurité
      
      Nous appliquons les meilleures pratiques de l'industrie.`
    },
    {
      icon: Eye,
      title: "Cookies et Tracking",
      content: `Notre site utilise des cookies pour :
      • Améliorer votre navigation sur le site
      • Analyser le trafic et les performances
      • Personnaliser votre expérience
      
      Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.`
    },
    {
      icon: UserCheck,
      title: "Vos Droits",
      content: `Conformément à la législation en vigueur, vous disposez des droits suivants :
      • Droit d'accès à vos données personnelles
      • Droit de rectification des informations inexactes
      • Droit à l'effacement de vos données
      • Droit à la portabilité de vos données
      • Droit d'opposition au traitement
      
      Pour exercer ces droits, contactez-nous.`
    },
    {
      icon: Mail,
      title: "Contact",
      content: `Pour toute question concernant notre politique de confidentialité ou vos données personnelles :
      
      Email : privacy@redroadsadventure.com
      Téléphone : +212 600 000 000
      Adresse : Kebdana, Nador, Maroc
      
      Nous nous engageons à répondre dans les 48 heures.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 md:w-12 md:h-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider text-foreground mb-4">
              Politique de <span className="text-primary">Confidentialité</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Votre vie privée est importante pour nous. Découvrez comment nous protégeons vos données.
            </p>
            <p className="font-body text-sm text-muted-foreground mt-4">
              Dernière mise à jour : Janvier 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl md:text-2xl tracking-wider text-foreground mb-4">
                      {section.title}
                    </h2>
                    <p className="font-body text-muted-foreground whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
