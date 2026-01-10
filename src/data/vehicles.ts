import quad1 from "@/assets/quad-1.jpg";
import quad2 from "@/assets/quad-2.jpg";
import cross1 from "@/assets/cross-1.jpg";
import cross2 from "@/assets/cross-2.jpg";

export interface Vehicle {
  id: string;
  type: "quad" | "cross";
  name: string;
  image: string;
  engine: string;
  power: string;
  price: string;
  features: string[];
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export const vehicles: Vehicle[] = [
  {
    id: "raptor-700r",
    type: "quad",
    name: "Raptor 700R",
    image: quad1,
    engine: "686cc",
    power: "50 CV",
    price: "400 MAD/h",
    features: ["Automatique", "4x4", "Mode Sport"],
    description: "Le Raptor 700R est la référence des quads sportifs. Sa puissance brute combinée à une maniabilité exceptionnelle en fait le choix idéal pour les amateurs de sensations fortes. Parfait pour conquérir les dunes et les pistes rocheuses de Kebdana.",
    specs: [
      { label: "Cylindrée", value: "686cc" },
      { label: "Puissance", value: "50 CV" },
      { label: "Transmission", value: "Automatique CVT" },
      { label: "Suspension", value: "Double A-arm avant" },
      { label: "Freins", value: "Disques hydrauliques" },
      { label: "Réservoir", value: "11 litres" },
    ],
  },
  {
    id: "outlander-x3",
    type: "quad",
    name: "Outlander X3",
    image: quad2,
    engine: "900cc",
    power: "72 CV",
    price: "500 MAD/h",
    features: ["Manuel", "4x4", "Turbo"],
    description: "L'Outlander X3 représente l'élite des quads tout-terrain. Avec son moteur turbo de 900cc, il offre des performances inégalées sur tous les terrains. Idéal pour les aventuriers expérimentés recherchant l'adrénaline pure.",
    specs: [
      { label: "Cylindrée", value: "900cc Turbo" },
      { label: "Puissance", value: "72 CV" },
      { label: "Transmission", value: "CVT Quick Response" },
      { label: "Suspension", value: "FOX 2.5 Podium" },
      { label: "Freins", value: "Twin Piston Brembo" },
      { label: "Réservoir", value: "27.5 litres" },
    ],
  },
  {
    id: "crf450x",
    type: "cross",
    name: "CRF450X",
    image: cross1,
    engine: "449cc",
    power: "55 CV",
    price: "350 MAD/h",
    features: ["Niveau Pro", "Léger", "Prêt Course"],
    description: "La CRF450X est une légende des motos cross. Légère et puissante, elle offre un contrôle précis sur les terrains les plus difficiles. Le choix des champions pour dompter les pistes de terre rouge.",
    specs: [
      { label: "Cylindrée", value: "449cc" },
      { label: "Puissance", value: "55 CV" },
      { label: "Transmission", value: "6 vitesses" },
      { label: "Suspension", value: "Showa 49mm" },
      { label: "Freins", value: "Disques wave" },
      { label: "Poids", value: "122 kg" },
    ],
  },
  {
    id: "ktm-450-exc",
    type: "cross",
    name: "KTM 450 EXC",
    image: cross2,
    engine: "510cc",
    power: "63 CV",
    price: "450 MAD/h",
    features: ["Enduro", "6 Vitesses", "Suspension Pro"],
    description: "La KTM 450 EXC est la machine ultime pour l'enduro. Son châssis léger et son moteur explosif en font l'arme parfaite pour les terrains techniques. Prête à conquérir les sentiers les plus exigeants du Maroc.",
    specs: [
      { label: "Cylindrée", value: "510cc" },
      { label: "Puissance", value: "63 CV" },
      { label: "Transmission", value: "6 vitesses" },
      { label: "Suspension", value: "WP XPLOR" },
      { label: "Freins", value: "Brembo Racing" },
      { label: "Poids", value: "112 kg" },
    ],
  },
];

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find((v) => v.id === id);
};

export const getSimilarVehicles = (id: string, type: "quad" | "cross"): Vehicle[] => {
  return vehicles.filter((v) => v.id !== id && v.type === type);
};

export const getOtherTypeVehicles = (type: "quad" | "cross"): Vehicle[] => {
  return vehicles.filter((v) => v.type !== type);
};
