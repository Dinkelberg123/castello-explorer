import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const SignupModal = ({ isOpen, onClose, onComplete }: SignupModalProps) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    preferredLanguage: "",
    huntingExperience: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                Become a Member
              </h3>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="luxury-input" required />
                <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="luxury-input" required />
              </div>
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="luxury-input" required />
              <input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="luxury-input" required />
              <input name="nationality" placeholder="Nationality" value={form.nationality} onChange={handleChange} className="luxury-input" required />
              <select name="preferredLanguage" value={form.preferredLanguage} onChange={handleChange} className="luxury-input" required>
                <option value="">Preferred Language</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
              <select name="huntingExperience" value={form.huntingExperience} onChange={handleChange} className="luxury-input" required>
                <option value="">Hunting Experience</option>
                <option value="beginner">Beginner (0–2 years)</option>
                <option value="intermediate">Intermediate (3–7 years)</option>
                <option value="experienced">Experienced (8+ years)</option>
              </select>
              <button type="submit" className="btn-primary w-full mt-2">
                Join Spanish Hunting
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;
