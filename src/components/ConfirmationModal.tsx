import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmationModal = ({ isOpen, onClose }: ConfirmationModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-card rounded-lg shadow-2xl max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-3">
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-8 pb-8">
              <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                Booking Request Received
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                Thank you for your booking request. Our concierge team will now
                handle the remaining process — including all necessary permits,
                coordination with the castello, and final confirmations. You will
                receive a detailed itinerary by email within 48 hours.
              </p>
              <button onClick={onClose} className="btn-primary">
                Return to Map
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmationModal;
