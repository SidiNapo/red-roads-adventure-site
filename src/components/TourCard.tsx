import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TourCardProps {
  title: string;
  duration: string;
  groupSize: string;
  location: string;
  image: string;
  price: string;
  description: string;
}

const TourCard = ({
  title,
  duration,
  groupSize,
  location,
  image,
  price,
  description,
}: TourCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl bg-card border border-border/50"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
        
        {/* Duration Badge */}
        <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm">
          <span className="font-display text-sm text-primary-foreground tracking-wider">
            {duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl tracking-wider text-foreground">
          {title}
        </h3>

        <p className="font-body text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center p-3 rounded-xl bg-muted/50">
            <Clock className="w-4 h-4 text-primary mb-1" />
            <span className="font-body text-xs text-muted-foreground">
              {duration}
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-muted/50">
            <Users className="w-4 h-4 text-primary mb-1" />
            <span className="font-body text-xs text-muted-foreground">
              {groupSize}
            </span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-xl bg-muted/50">
            <MapPin className="w-4 h-4 text-primary mb-1" />
            <span className="font-body text-xs text-muted-foreground truncate w-full text-center">
              {location}
            </span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
              Par personne
            </p>
            <p className="font-display text-2xl text-primary">{price}</p>
          </div>
          <Button variant="adventure" size="default" asChild>
            <Link to="/reservation">Réserver</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
