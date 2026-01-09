import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trail1 from "@/assets/trail-1.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Kebdana, Nador", "Morocco"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+212 600 000 000", "+212 600 000 001"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@redroadsadventure.com", "booking@redroadsadventure.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Sun: 8:00 AM - 7:00 PM", "Available for bookings 24/7"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trail1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-foreground tracking-wider"
          >
            CONTACT US
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl text-foreground tracking-wider mb-8">
                LET'S TALK ADVENTURE
              </h2>
              <p className="font-body text-muted-foreground mb-12">
                Have questions about our tours or vehicles? Want to plan a
                custom adventure? We're here to help make your experience
                unforgettable.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-foreground tracking-wider mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail) => (
                        <p
                          key={detail}
                          className="font-body text-muted-foreground"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 border border-border/50"
            >
              <h3 className="font-display text-2xl text-foreground tracking-wider mb-6">
                SEND US A MESSAGE
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    required
                    className="bg-muted border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    required
                    className="bg-muted border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+212 600 000 000"
                    className="bg-muted border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">
                    Your Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your adventure plans..."
                    rows={5}
                    required
                    className="bg-muted border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button variant="hero" size="lg" className="w-full" type="submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
