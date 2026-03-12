import { motion } from "framer-motion";
import ibexImg from "@/assets/ibex.jpg";
import redDeerImg from "@/assets/red-deer.jpg";
import type { Species } from "@/data/castellos";

interface SpeciesFilterProps {
  activeFilter: Species | "all";
  onFilterChange: (filter: Species | "all") => void;
}

const speciesData = [
  { id: "ibex" as const, name: "Ibex", image: ibexImg, desc: "Spanish Ibex — Capra pyrenaica" },
  { id: "red-deer" as const, name: "Red Deer", image: redDeerImg, desc: "Red Deer — Cervus elaphus" },
];

const SpeciesFilter = ({ activeFilter, onFilterChange }: SpeciesFilterProps) => {
  return (
    <section className="w-full bg-card py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl sm:text-3xl font-semibold text-center mb-8"
        >
          Select Your Species
        </motion.h2>

        {/* Filter chips */}
        <div className="flex justify-center gap-3 mb-10">
          {(["all", "ibex", "red-deer"] as const).map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={`filter-chip ${activeFilter === f ? "active" : ""}`}
            >
              {f === "all" ? "All" : f === "ibex" ? "Ibex" : "Red Deer"}
            </button>
          ))}
        </div>

        {/* Species cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {speciesData
            .filter((s) => activeFilter === "all" || activeFilter === s.id)
            .map((species, i) => (
              <motion.div
                key={species.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="species-card group"
                onClick={() => onFilterChange(species.id)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={species.image}
                    alt={species.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-background mb-1">
                    {species.name}
                  </h3>
                  <p className="font-body text-sm text-background/80">{species.desc}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SpeciesFilter;
