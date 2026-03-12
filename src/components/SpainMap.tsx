import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import spainMap from "@/assets/spain-map.png";
import { castellos, accentPoints, type Castello, type Species } from "@/data/castellos";

interface SpainMapProps {
  activeFilter: Species | "all";
  onCastelloClick: (castello: Castello) => void;
}

const SpainMap = ({ activeFilter, onCastelloClick }: SpainMapProps) => {
  const [hoveredCastello, setHoveredCastello] = useState<Castello | null>(null);

  const filteredCastellos = castellos.filter(
    (c) => activeFilter === "all" || c.animal === activeFilter
  );

  const isActive = (c: Castello) =>
    activeFilter === "all" || c.animal === activeFilter;

  return (
    <div className="relative w-full">
      <div className="relative inline-block w-full">
        <img
          src={spainMap}
          alt="Map of Spain showing hunting locations"
          className="w-full h-auto"
        />

        {/* Accent dots */}
        {accentPoints.map((p, i) => (
          <div
            key={`accent-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: 6,
              height: 6,
              background: "hsl(var(--accent) / 0.4)",
            }}
          />
        ))}

        {/* Castello markers — only show filtered ones */}
        <AnimatePresence>
          {filteredCastellos.map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className="absolute cursor-pointer"
              style={{
                left: `${c.mapPosition.x}%`,
                top: `${c.mapPosition.y}%`,
                transform: "translate(-50%, -100%)",
              }}
              onMouseEnter={() => setHoveredCastello(c)}
              onMouseLeave={() => setHoveredCastello(null)}
              onClick={() => {
                setHoveredCastello(null);
                onCastelloClick(c);
              }}
            >
              <MapPin
                className="w-6 h-6 sm:w-7 sm:h-7 text-accent drop-shadow-md transition-transform duration-200 hover:scale-125"
                fill="hsl(18 70% 45% / 0.2)"
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Hover preview */}
        <AnimatePresence>
          {hoveredCastello && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="absolute z-20 w-56 overflow-hidden shadow-xl pointer-events-none bg-background"
              style={{
                left: `${Math.min(hoveredCastello.mapPosition.x + 3, 60)}%`,
                top: `${hoveredCastello.mapPosition.y - 5}%`,
              }}
            >
              <img
                src={hoveredCastello.previewImage}
                alt={hoveredCastello.name}
                className="w-full h-28 object-cover"
              />
              <div className="p-3">
                <h4 className="font-display text-sm font-medium text-foreground">
                  {hoveredCastello.name}
                </h4>
                <p className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground mt-1 font-body">
                  {hoveredCastello.region} ·{" "}
                  {hoveredCastello.animal === "ibex"
                    ? "Ibex"
                    : hoveredCastello.animal === "red-deer"
                    ? "Red Deer"
                    : "Wild Boar"}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpainMap;
