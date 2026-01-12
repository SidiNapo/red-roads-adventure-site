import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, CheckCircle, AlertTriangle, CreditCard, Calendar, HelpCircle } from "lucide-react";

const TermsConditions = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: "Conditions Générales de Réservation",
      content: `En effectuant une réservation chez Red Roads Adventure, vous acceptez les conditions suivantes :
      
      • Âge minimum requis : 18 ans avec permis de conduire valide
      • Présentation obligatoire d'une pièce d'identité et du permis
      • Réservation confirmée après validation par notre équipe
      • Les tarifs incluent le véhicule, le casque et les équipements de sécurité
      
      Toute réservation est considérée comme un engagement ferme.`
    },
    {
      icon: CreditCard,
      title: "Tarifs et Paiement",
      content: `Modalités de paiement :
      
      • Un acompte de 30% est requis pour confirmer la réservation
      • Le solde est à régler le jour de l'aventure
      • Modes de paiement acceptés : espèces, virement bancaire
      • Les prix affichés sont en Dirhams Marocains (MAD)
      • TVA incluse dans tous nos tarifs
      
      Les tarifs peuvent être modifiés sans préavis.`
    },
    {
      icon: Calendar,
      title: "Annulation et Remboursement",
      content: `Politique d'annulation :
      
      • Plus de 48h avant : remboursement intégral de l'acompte
      • Entre 24h et 48h : remboursement de 50% de l'acompte
      • Moins de 24h : aucun remboursement
      • No-show : aucun remboursement
      
      En cas de conditions météorologiques défavorables, nous vous proposerons un report ou un remboursement intégral.`
    },
    {
      icon: AlertTriangle,
      title: "Responsabilités et Sécurité",
      content: `Pour votre sécurité et celle des autres :
      
      • Le port du casque est obligatoire
      • Conduite sous influence d'alcool ou de drogues strictement interdite
      • Respect des consignes du guide obligatoire
      • Tout dommage causé par négligence sera à la charge du client
      • Assurance responsabilité civile incluse
      
      Red Roads Adventure se réserve le droit de refuser ou d'interrompre une prestation en cas de non-respect des règles de sécurité.`
    },
    {
      icon: FileText,
      title: "Propriété Intellectuelle",
      content: `Droits de propriété :
      
      • Tout le contenu du site (textes, images, logos) est protégé
      • Reproduction interdite sans autorisation écrite
      • Les photos prises pendant les aventures peuvent être utilisées à des fins promotionnelles
      • Vous pouvez demander le retrait de vos images à tout moment
      
      La marque "Red Roads Adventure" est une marque déposée.`
    },
    {
      icon: HelpCircle,
      title: "Litiges et Réclamations",
      content: `En cas de différend :
      
      • Contactez-nous d'abord pour une résolution amiable
      • Délai de réclamation : 7 jours après la prestation
      • Les réclamations doivent être faites par écrit
      • Juridiction compétente : Tribunaux de Nador, Maroc
      
      Contact : legal@redroadsadventure.com
      
      Ces conditions sont régies par le droit marocain.`
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
              <FileText className="w-8 h-8 md:w-12 md:h-12 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider text-foreground mb-4">
              Conditions <span className="text-primary">Générales</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Lisez attentivement nos conditions avant de réserver votre aventure.
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

            {/* Agreement Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/10 border border-primary/30 rounded-2xl p-6 md:p-8 text-center"
            >
              <p className="font-body text-foreground">
                En utilisant nos services, vous confirmez avoir lu, compris et accepté l'ensemble de ces conditions générales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
