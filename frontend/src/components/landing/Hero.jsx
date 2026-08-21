import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useT } from "@/i18n";

const HERO_IMG =
  "https://images.unsplash.com/photo-1519955266818-0231b63402bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxpbmRpYSUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlJTIwc3VubGlnaHQlMjB1cGxpZnRtZW50JTIwbW92ZW1lbnR8ZW58MHx8fHwxNzg3MTQ0ODkwfDA&ixlib=rb-4.1.0&q=85";

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

const Hero = () => {
  const t = useT();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen bg-[#ECE4F6] overflow-hidden flex items-center"
      data-testid="hero-section"
    >
      <div
        className="glow-pulse absolute -top-40 -right-40 w-[34rem] h-[34rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[26rem] h-[26rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(82,43,106,0.25) 0%, rgba(82,43,106,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full pt-32 pb-24 lg:pt-36 grid lg:grid-cols-12 gap-14 lg:gap-8 items-center">
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="font-mono-x text-xs sm:text-sm tracking-[0.25em] uppercase text-[#522B6A]">
              {t("os.hero.kicker")}
            </span>
          </motion.div>

          <h1 className="font-display font-bold tracking-tight leading-[1.02] text-5xl sm:text-6xl lg:text-7xl text-[#775A19]">
            <MaskedLine delay={0.35}>{t("os.hero.l1")}</MaskedLine>
            <MaskedLine delay={0.47}>{t("os.hero.l2")}</MaskedLine>
            <MaskedLine delay={0.59} className="mt-2">
              <span className="italic text-[#B08D1E]">{t("os.hero.l3")}</span>
            </MaskedLine>
            <MaskedLine delay={0.71}>
              <span className="italic text-[#B08D1E]">{t("os.hero.l4")}</span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-[#57534E] leading-relaxed"
            data-testid="hero-lead-paragraph"
          >
            {t("os.hero.lead")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.25 }}
            className="mt-12 flex items-center gap-6"
          >
            <button
              onClick={() =>
                document
                  .getElementById("thought")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 font-mono-x text-[11px] tracking-[0.25em] uppercase text-[#1C1917]/60 hover:text-[#775A19] transition-colors duration-300"
              data-testid="hero-scroll-indicator"
            >
              <span className="w-10 h-10 rounded-full border border-[#522B6A]/25 flex items-center justify-center group-hover:border-[#775A19] transition-colors duration-300">
                <ArrowDown size={15} className="animate-bounce" />
              </span>
              {t("os.hero.scroll")}
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <motion.div
            style={{ y: imgY }}
            className="relative rounded-t-[10rem] rounded-b-2xl overflow-hidden border border-[#775A19]/30 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <img
              src={HERO_IMG}
              alt="Indian heritage architecture bathed in golden sunlight"
              className="w-full h-[52vh] lg:h-[64vh] object-cover"
              data-testid="hero-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180F2C]/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <p className="font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#F4F1EA]/85">
                {t("os.hero.caption")}
              </p>
            </div>
          </motion.div>
          <div
            className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-[#775A19]/30 pointer-events-none"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
