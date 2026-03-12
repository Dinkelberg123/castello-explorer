import castello1 from "@/assets/castello-1.jpg";
import castello2 from "@/assets/castello-2.jpg";
import castello3 from "@/assets/castello-3.jpg";
import castello4 from "@/assets/castello-4.jpg";

export type Species = "ibex" | "red-deer" | "wild-boar";

export interface Castello {
  id: string;
  name: string;
  animal: Species;
  region: string;
  shortDescription: string;
  longDescription: string;
  huntingWindow: string;
  priceBand: string;
  highlights: string[];
  previewImage: string;
  mapPosition: { x: number; y: number };
}

export const castellos: Castello[] = [
  {
    id: "sierra-nevada-ibex",
    name: "Castello Sierra Nevada",
    animal: "ibex",
    region: "Andalucía",
    shortDescription: "High-altitude ibex hunting in the Sierra Nevada mountains.",
    longDescription:
      "Nestled at the foot of Spain's highest peaks, Castello Sierra Nevada offers an unparalleled ibex hunting experience. The estate spans 12,000 hectares of pristine mountain terrain, home to some of the finest Southeastern Spanish Ibex specimens. Guided hunts are conducted by expert local gamekeepers with generations of mountain knowledge.",
    huntingWindow: "October – February",
    priceBand: "€8,500 – €14,000",
    highlights: [
      "Trophy Southeastern Spanish Ibex",
      "Professional mountain guides",
      "Luxury lodge accommodation",
      "Helicopter access to remote zones",
    ],
    previewImage: castello1,
    mapPosition: { x: 52, y: 78 },
  },
  {
    id: "gredos-ibex",
    name: "Castello de Gredos",
    animal: "ibex",
    region: "Castilla y León",
    shortDescription: "Historic Gredos ibex hunting on a private mountain estate.",
    longDescription:
      "The legendary Gredos range is the birthplace of Spanish ibex conservation. Castello de Gredos sits on 8,000 hectares of rugged granite peaks and ancient oak forests. The Gredos Ibex, with its distinctive wide-spreading horns, is considered the most prestigious trophy in European mountain hunting.",
    huntingWindow: "November – May",
    priceBand: "€10,000 – €18,000",
    highlights: [
      "Gredos Ibex – premium trophy class",
      "Historic hunting grounds since 1905",
      "Stone-built mountain lodge",
      "Stalking and driven hunt options",
    ],
    previewImage: castello3,
    mapPosition: { x: 35, y: 48 },
  },
  {
    id: "montes-toledo-deer",
    name: "Castello Montes de Toledo",
    animal: "red-deer",
    region: "Castilla-La Mancha",
    shortDescription: "World-class red deer stalking in the Montes de Toledo.",
    longDescription:
      "Spanning over 15,000 hectares of Mediterranean woodland and dehesa landscape, Castello Montes de Toledo is one of Spain's premier red deer estates. The property has been managed for trophy quality for over four decades, producing exceptional stags with consistently high medal-class antlers.",
    huntingWindow: "September – February",
    priceBand: "€6,000 – €12,000",
    highlights: [
      "Medal-class red deer stags",
      "Traditional montería drives available",
      "Luxury finca accommodation",
      "Wine cellar and gourmet dining",
    ],
    previewImage: castello2,
    mapPosition: { x: 38, y: 56 },
  },
  {
    id: "coto-donana-deer",
    name: "Castello Coto de Alcázar",
    animal: "red-deer",
    region: "Extremadura",
    shortDescription: "Exclusive red deer hunting on a grand Extremaduran estate.",
    longDescription:
      "Set within the rolling dehesas of Extremadura, Castello Coto de Alcázar is a 20,000-hectare private estate renowned for its exceptional red deer population. The landscape of ancient holm oaks and open grasslands creates ideal habitat for trophy stags. The estate's 17th-century manor house provides an unforgettable base.",
    huntingWindow: "October – March",
    priceBand: "€7,500 – €15,000",
    highlights: [
      "Trophy red deer in natural dehesa",
      "17th-century manor accommodation",
      "Expert stalking guides",
      "Full concierge hunting service",
    ],
    previewImage: castello4,
    mapPosition: { x: 22, y: 58 },
  },
  {
    id: "asturias-boar",
    name: "Castello de Asturias",
    animal: "wild-boar",
    region: "Asturias",
    shortDescription: "Wild boar driven hunts in the rugged Asturian mountains.",
    longDescription:
      "Deep in the Cantabrian range, Castello de Asturias offers traditional montería-style wild boar hunts across 10,000 hectares of ancient beech and chestnut forest. The terrain is dramatic — steep valleys, dense undergrowth, and misty ridgelines create an unforgettable hunting experience. The estate lodge dates to the 18th century.",
    huntingWindow: "October – February",
    priceBand: "€5,000 – €9,000",
    highlights: [
      "Traditional montería wild boar drives",
      "Cantabrian mountain terrain",
      "18th-century estate lodge",
      "Expert local beaters and dogs",
    ],
    previewImage: castello1,
    mapPosition: { x: 30, y: 15 },
  },
  {
    id: "extremadura-boar",
    name: "Castello Dehesa Real",
    animal: "wild-boar",
    region: "Extremadura",
    shortDescription: "Premium wild boar stalking in Extremadura's oak dehesas.",
    longDescription:
      "Castello Dehesa Real encompasses 18,000 hectares of pristine dehesa landscape in the heart of Extremadura. The estate's abundant acorn crop supports one of Spain's densest wild boar populations, with mature specimens regularly exceeding 100kg. Hunts combine traditional stalking with strategic driven methods.",
    huntingWindow: "September – March",
    priceBand: "€4,500 – €8,500",
    highlights: [
      "High-density wild boar population",
      "Mixed stalking and driven hunts",
      "Gourmet Ibérico dining experiences",
      "Private airstrip access",
    ],
    previewImage: castello2,
    mapPosition: { x: 18, y: 52 },
  },
];

export const accentPoints = [
  { x: 70, y: 30 },
  { x: 15, y: 35 },
  { x: 60, y: 50 },
  { x: 80, y: 60 },
  { x: 45, y: 33 },
  { x: 28, y: 70 },
  { x: 55, y: 40 },
  { x: 68, y: 68 },
  { x: 75, y: 44 },
];
