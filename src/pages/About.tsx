import { motion } from "framer-motion";
import { Target, Heart, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide unforgettable off-road adventures while showcasing the natural beauty of Morocco's landscapes.",
  },
  {
    icon: Heart,
    title: "Our Passion",
    description:
      "We live for the thrill of the ride and share that passion with every guest who joins us on the trails.",
  },
  {
    icon: Users,
    title: "Our Community",
    description:
      "Building a family of adventure enthusiasts who share our love for exploration and the outdoors.",
  },
  {
    icon: Award,
    title: "Our Promise",
    description:
      "Safety, quality, and exceptional experiences are at the core of everything we do.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${trail2})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-body text-sm text-primary font-semibold tracking-widest uppercase mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-foreground tracking-wider"
          >
            ABOUT US
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={logo}
                alt="Red Roads Adventure"
                className="w-48 mb-8"
              />
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-6">
                BORN FROM PASSION
              </h2>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  Red Roads Adventure was founded in the heart of Kebdana,
                  Nador, by a team of passionate off-road enthusiasts who saw
                  the incredible potential of Morocco's diverse landscapes.
                </p>
                <p>
                  What started as weekend rides with friends has grown into a
                  premier adventure destination, offering visitors the chance to
                  experience the thrill of riding through forests, along coastal
                  cliffs, and across the famous red earth trails that give our
                  company its name.
                </p>
                <p>
                  Today, we're proud to share our love for adventure with
                  travelers from around the world, providing safe, exciting, and
                  unforgettable experiences for riders of all skill levels.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={trail1}
                  alt="Our trails"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src={trail2}
                  alt="Adventure"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
              OUR VALUES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl tracking-wider text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm text-primary font-semibold tracking-widest uppercase">
              Find Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 text-foreground tracking-wider">
              KEBDANA, NADOR
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Located in the stunning region of Nador, Kebdana offers diverse
              landscapes perfect for off-road adventures - from lush forests to
              Mediterranean coastal views.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden h-96 bg-muted"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103553.47844999!2d-2.5!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77a8c5c5c5c5c5%3A0x0!2sKebdana%2C%20Morocco!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
