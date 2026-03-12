import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const ProfileModal = ({ isOpen, onClose, onComplete }: ProfileModalProps) => {
  const [form, setForm] = useState({
    passportNumber: "",
    passportExpiry: "",
    passportIssuingCountry: "",
    huntingLicenseNumber: "",
    huntingLicenseIssuer: "",
    huntingLicenseExpiry: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
  };

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
            className="bg-card rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Complete Your Profile
              </h3>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <p className="text-sm font-body text-muted-foreground mb-2">
                Please provide your travel and hunting documentation to proceed with your booking.
              </p>

              <h4 className="font-display text-base font-semibold text-foreground pt-2">Passport Details</h4>
              <input name="passportNumber" placeholder="Passport Number" value={form.passportNumber} onChange={handleChange} className="luxury-input" required />
              <input name="passportExpiry" type="date" placeholder="Passport Expiry" value={form.passportExpiry} onChange={handleChange} className="luxury-input" required />
              <input name="passportIssuingCountry" placeholder="Issuing Country" value={form.passportIssuingCountry} onChange={handleChange} className="luxury-input" required />

              <h4 className="font-display text-base font-semibold text-foreground pt-2">Hunting License</h4>
              <input name="huntingLicenseNumber" placeholder="License Number" value={form.huntingLicenseNumber} onChange={handleChange} className="luxury-input" required />
              <input name="huntingLicenseIssuer" placeholder="Issuing Authority" value={form.huntingLicenseIssuer} onChange={handleChange} className="luxury-input" required />
              <input name="huntingLicenseExpiry" type="date" placeholder="License Expiry" value={form.huntingLicenseExpiry} onChange={handleChange} className="luxury-input" required />

              <button type="submit" className="btn-primary w-full mt-2">
                Submit & Confirm Booking
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
