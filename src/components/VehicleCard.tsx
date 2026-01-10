import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gauge, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VehicleCardProps {
  id?: string;
  type: "quad" | "cross";
  name: string;
  image: string;
  engine: string;
  power: string;
  price: string;
  features: string[];
}

const VehicleCard = ({
  id,
  type,
  name,
  image,
  engine,
  power,
  price,
  features,
}: VehicleCardProps) => {
  const isQuad = type === "quad";
  const vehicleId = id || name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link to={`/vehicle/${vehicleId}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -10 }}
        className={`relative group overflow-hidden rounded-3xl border ${
          isQuad ? "border-primary/30" : "border-secondary/30"
        } bg-card cursor-pointer`}
      >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 opacity-50 ${
          isQuad
            ? "bg-gradient-to-b from-primary/20 via-transparent to-transparent"
            : "bg-gradient-to-b from-secondary/20 via-transparent to-transparent"
        }`}
      />

      {/* Top Decorative Bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${
          isQuad ? "bg-primary" : "bg-secondary"
        }`}
      />

      {/* Type Badge */}
      <div
        className={`absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full font-display text-xs tracking-widest ${
          isQuad
            ? "bg-primary/20 text-primary border border-primary/30"
            : "bg-secondary/20 text-secondary-foreground border border-secondary/30"
        }`}
      >
        {type.toUpperCase()}
      </div>

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <h3 className="font-display text-2xl tracking-wider text-foreground">
          {name}
        </h3>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Gauge
              className={`w-4 h-4 ${isQuad ? "text-primary" : "text-secondary"}`}
            />
            <span className="font-body text-sm text-muted-foreground">
              {engine}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap
              className={`w-4 h-4 ${isQuad ? "text-primary" : "text-secondary"}`}
            />
            <span className="font-body text-sm text-muted-foreground">
              {power}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 rounded-full bg-muted text-xs font-body text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
              À partir de
            </p>
            <p
              className={`font-display text-2xl ${
                isQuad ? "text-primary" : "text-secondary-foreground"
              }`}
            >
              {price}
            </p>
          </div>
          <Button variant={isQuad ? "quad" : "cross"} size="default" asChild>
            <Link to="/reservation">Réserver</Link>
          </Button>
        </div>
      </div>

        {/* Hover Glow Effect */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
            isQuad
              ? "shadow-[inset_0_0_60px_hsl(0_72%_50%/0.1)]"
              : "shadow-[inset_0_0_60px_hsl(145_40%_25%/0.1)]"
          }`}
        />
      </motion.div>
    </Link>
  );
};

export default VehicleCard;
