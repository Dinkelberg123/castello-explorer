import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpeciesFilter from "@/components/SpeciesFilter";
import SpainMap from "@/components/SpainMap";
import SignupModal from "@/components/SignupModal";
import CastelloModal from "@/components/CastelloModal";
import ProfileModal from "@/components/ProfileModal";
import ConfirmationModal from "@/components/ConfirmationModal";
import type { Castello, Species } from "@/data/castellos";

type ModalState = "none" | "signup" | "castello" | "profile" | "confirmation";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<Species | "all">("all");
  const [modalState, setModalState] = useState<ModalState>("none");
  const [isMember, setIsMember] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);
  const [selectedCastello, setSelectedCastello] = useState<Castello | null>(null);

  const handleCastelloClick = useCallback(
    (castello: Castello) => {
      setSelectedCastello(castello);
      if (!isMember) {
        setModalState("signup");
      } else {
        setModalState("castello");
      }
    },
    [isMember]
  );

  const handleSignupComplete = useCallback(() => {
    setIsMember(true);
    setModalState("castello");
  }, []);

  const handleBookingRequest = useCallback(() => {
    if (!profileComplete) {
      setModalState("profile");
    } else {
      setModalState("confirmation");
    }
  }, [profileComplete]);

  const handleProfileComplete = useCallback(() => {
    setProfileComplete(true);
    setModalState("confirmation");
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalState("none");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Map + Species side by side */}
      <section className="w-full bg-background py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.25em] uppercase font-body text-muted-foreground mb-10"
          >
            Explore Our Locations
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
            <SpainMap activeFilter={activeFilter} onCastelloClick={handleCastelloClick} />
            <SpeciesFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-background border-t border-border py-16">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="font-display text-base font-light tracking-wide text-foreground mb-3">
                Spanish Hunting
              </h4>
              <p className="text-xs font-body text-muted-foreground leading-relaxed tracking-wide">
                Exclusive guided hunting experiences across Spain's finest private estates.
              </p>
            </div>
            <div id="about">
              <h4 className="font-display text-base font-light tracking-wide text-foreground mb-3">
                About Us
              </h4>
              <p className="text-xs font-body text-muted-foreground leading-relaxed tracking-wide">
                We connect discerning hunters with Spain's most prestigious private castellos and estates, offering fully managed, premium hunting packages.
              </p>
            </div>
            <div>
              <h4 className="font-display text-base font-light tracking-wide text-foreground mb-3">
                Contact
              </h4>
              <p className="text-xs font-body text-muted-foreground leading-relaxed tracking-wide">
                info@spanishhunting.com<br />
                +34 900 123 456
              </p>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-[10px] font-body text-muted-foreground tracking-[0.15em] uppercase">
              © 2026 Spanish Hunting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SignupModal
        isOpen={modalState === "signup"}
        onClose={handleCloseModal}
        onComplete={handleSignupComplete}
      />
      <CastelloModal
        castello={modalState === "castello" ? selectedCastello : null}
        onClose={handleCloseModal}
        onBookingRequest={handleBookingRequest}
      />
      <ProfileModal
        isOpen={modalState === "profile"}
        onClose={handleCloseModal}
        onComplete={handleProfileComplete}
      />
      <ConfirmationModal
        isOpen={modalState === "confirmation"}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
