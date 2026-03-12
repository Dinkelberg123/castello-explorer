import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[75vh] min-h-[520px] overflow-hidden">
      <img
        src={heroBg}
        alt="Spanish hunting landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex items-end justify-start h-full px-6 sm:px-10 lg:px-16 pb-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-background mb-6 tracking-tight">
            Start your hunting trip with Spanish Hunting
          </h1>
          <p className="font-body text-sm sm:text-base text-background/80 leading-relaxed tracking-wide max-w-md">
            Explore curated Spanish castellos, choose your species, and book
            exclusive guided hunts through our private platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
