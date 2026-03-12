import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, DollarSign, Star } from "lucide-react";
import type { Castello } from "@/data/castellos";

interface CastelloModalProps {
  castello: Castello | null;
  onClose: () => void;
  onBookingRequest: () => void;
}

const CastelloModal = ({ castello, onClose, onBookingRequest }: CastelloModalProps) => {
  return (
    <AnimatePresence>
      {castello && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={castello.previewImage}
                alt={castello.name}
                className="w-full h-56 sm:h-64 object-cover rounded-t-lg"
              />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm rounded-full p-1.5 text-foreground hover:bg-card transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/80 to-transparent p-5">
                <span className="text-xs font-body uppercase tracking-widest text-accent opacity-90">
                  {castello.animal === "ibex" ? "Ibex" : "Red Deer"} · {castello.region}
                </span>
                <h3 className="font-display text-2xl font-semibold text-background mt-1">
                  {castello.name}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {castello.longDescription}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-body text-muted-foreground">Season</p>
                    <p className="text-sm font-body font-medium text-foreground">{castello.huntingWindow}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-body text-muted-foreground">Price Band</p>
                    <p className="text-sm font-body font-medium text-foreground">{castello.priceBand}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-display text-base font-semibold text-foreground mb-2">Highlights</h4>
                <ul className="space-y-2">
                  {castello.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                      <Star className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={onBookingRequest} className="btn-accent w-full">
                Request Booking
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CastelloModal;
