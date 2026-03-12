import { motion } from "framer-motion";
import ibexImg from "@/assets/ibex.jpg";
import redDeerImg from "@/assets/red-deer.jpg";
import wildBoarImg from "@/assets/wild-boar.jpg";
import type { Species } from "@/data/castellos";

interface SpeciesFilterProps {
  activeFilter: Species | "all";
  onFilterChange: (filter: Species | "all") => void;
}

const speciesData = [
  { id: "ibex" as const, name: "Ibex", image: ibexImg, latin: "Capra pyrenaica" },
  { id: "red-deer" as const, name: "Red Deer", image: redDeerImg, latin: "Cervus elaphus" },
  { id: "wild-boar" as const, name: "Wild Boar", image: wildBoarImg, latin: "Sus scrofa" },
];

const SpeciesFilter = ({ activeFilter, onFilterChange }: SpeciesFilterProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4 mb-2">
        {(["all", "ibex", "red-deer", "wild-boar"] as const).map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`text-[11px] tracking-[0.15em] uppercase font-body font-medium transition-all duration-300 pb-1 ${
              activeFilter === f
                ? "text-foreground border-b border-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {f === "all" ? "All" : f === "ibex" ? "Ibex" : f === "red-deer" ? "Red Deer" : "Wild Boar"}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {speciesData
          .filter((s) => activeFilter === "all" || activeFilter === s.id)
          .map((species, i) => (
            <motion.div
              key={species.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onFilterChange(species.id)}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={species.image}
                  alt={species.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg font-light text-background tracking-wide">
                    {species.name}
                  </h3>
                  <p className="font-body text-[10px] tracking-[0.15em] uppercase text-background/70">
                    {species.latin}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default SpeciesFilter;
