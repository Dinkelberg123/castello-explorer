import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import spainMap from "@/assets/spain-map.jpg";
import { castellos, accentPoints, type Castello, type Species } from "@/data/castellos";

interface SpainMapProps {
  activeFilter: Species | "all";
  onCastelloClick: (castello: Castello) => void;
}

const SpainMap = ({ activeFilter, onCastelloClick }: SpainMapProps) => {
  const [hoveredCastello, setHoveredCastello] = useState<Castello | null>(null);

  const isActive = (c: Castello) =>
    activeFilter === "all" || c.animal === activeFilter;

  return (
    <section className="w-full bg-background py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl sm:text-3xl font-semibold text-center mb-8"
        >
          Explore Our Locations
        </motion.h2>

        <div className="map-container">
          <div className="relative">
            <img
              src={spainMap}
              alt="Map of Spain showing hunting locations"
              className="w-full h-auto rounded-lg"
            />

            {/* Accent dots */}
            {accentPoints.map((p, i) => (
              <div
                key={`accent-${i}`}
                className="accent-dot"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              />
            ))}

            {/* Castello markers */}
            {castellos.map((c) => (
              <div
                key={c.id}
                className={`castello-marker ${!isActive(c) ? "dimmed" : ""}`}
                style={{ left: `${c.mapPosition.x}%`, top: `${c.mapPosition.y}%` }}
                onMouseEnter={() => isActive(c) && setHoveredCastello(c)}
                onMouseLeave={() => setHoveredCastello(null)}
                onClick={() => {
                  setHoveredCastello(null);
                  onCastelloClick(c);
                }}
              >
                <MapPin
                  className={`w-7 h-7 sm:w-8 sm:h-8 drop-shadow-md ${
                    isActive(c) ? "text-accent" : "text-muted-foreground"
                  }`}
                  fill={isActive(c) ? "hsl(18 70% 45% / 0.2)" : "transparent"}
                />
              </div>
            ))}

            {/* Hover preview */}
            <AnimatePresence>
              {hoveredCastello && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-20 w-64 rounded-lg overflow-hidden shadow-xl pointer-events-none"
                  style={{
                    left: `${Math.min(hoveredCastello.mapPosition.x + 3, 65)}%`,
                    top: `${hoveredCastello.mapPosition.y - 5}%`,
                  }}
                >
                  <img
                    src={hoveredCastello.previewImage}
                    alt={hoveredCastello.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3 bg-card">
                    <h4 className="font-display text-sm font-semibold text-foreground">
                      {hoveredCastello.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {hoveredCastello.region} · {hoveredCastello.animal === "ibex" ? "Ibex" : "Red Deer"}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpainMap;
