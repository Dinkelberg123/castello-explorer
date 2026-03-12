import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <img
        src={heroBg}
        alt="Spanish hunting landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-cta-box max-w-2xl w-full rounded-lg px-8 py-10 sm:px-12 sm:py-14 text-center"
        >
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
            Start your hunting trip with Spanish Hunting
          </h1>
          <p className="font-body text-base sm:text-lg opacity-90 leading-relaxed">
            Explore curated Spanish castellos, choose your species, and book
            exclusive guided hunts through our private platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
