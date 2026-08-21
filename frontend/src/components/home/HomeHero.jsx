import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useT } from "@/i18n";

const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block will-change-transform"
      initial={{ y: "115%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.15, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const HomeHero = () => {
  const t = useT();

  return (
  <section
    className="relative min-h-screen flex items-center overflow-hidden bg-[#180F2C]"
    data-testid="home-hero-section"
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      data-testid="home-hero-video"
    >
      <source src="/assets/hero.webm" type="video/webm" />
      <source src="/assets/hero-720.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-[#180F2C]/55" aria-hidden="true" />
    <div
      className="absolute inset-0 bg-gradient-to-t from-[#180F2C]/75 via-transparent to-[#180F2C]/30"
      aria-hidden="true"
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full pt-32 pb-24">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex items-center gap-4 font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E9C176]"
        data-testid="home-hero-eyebrow"
      >
        <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
        {t("home.hero.eyebrow")}
      </motion.p>

      <h1 className="mt-8 font-caslon font-bold tracking-tight leading-[1.02] text-5xl sm:text-6xl lg:text-7xl">
        <MaskedLine delay={0.45}>
          <span className="text-[#FDFBF7]">{t("home.hero.l1")}</span>
        </MaskedLine>
        <MaskedLine delay={0.6}>
          <span className="italic text-[#D4AF37]">{t("home.hero.l2")}</span>
        </MaskedLine>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.0 }}
        className="mt-8 max-w-xl space-y-3"
        data-testid="home-hero-subtext"
      >
        <p className="text-base sm:text-lg text-[#FDFBF7]/85 leading-relaxed">
          {t("home.hero.sub1")}
        </p>
        <p className="font-caslon italic text-lg sm:text-xl text-[#E9C176]">
          {t("home.hero.sub2")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.2 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <span className="hidden sm:block w-10 h-px bg-[#D4AF37]/60" aria-hidden="true" />
        <Link
          to="/join-the-movement"
          className="group inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#E9C176] text-[#180F2C] font-mono-x text-[11px] sm:text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors duration-400"
          data-testid="home-hero-join-button"
        >
          {t("home.hero.join")}
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-3 border border-[#FDFBF7]/40 hover:border-[#D4AF37] text-[#FDFBF7] hover:text-[#D4AF37] font-mono-x text-[11px] sm:text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors duration-400"
          data-testid="home-hero-explore-button"
        >
          {t("home.hero.explore")}
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  </section>
  );
};

export default HomeHero;
