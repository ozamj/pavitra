import { motion } from "framer-motion";
import { ArrowUpRight, Flower2 } from "lucide-react";

const PageCTA = ({
  kicker = "06 · The Calling",
  titleA = "Be a Part of the",
  titleB = "Pavitra Sankalp",
  text = "If you believe Bharat can rise through pure intention, responsible action, and collective participation, Pavitra is your movement too.",
  tagline = null,
  buttonLabel = "Join The Movement",
  testid = "closing-cta-section",
}) => (
  <section
    id="join"
    className="relative bg-[#F5ECD9] py-24 sm:py-32 lg:py-40 overflow-hidden"
    data-testid={testid}
  >
    <div
      className="glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0) 65%)",
      }}
      aria-hidden="true"
    />
    <div
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
      aria-hidden="true"
    />

    <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-16 h-16 rounded-full border border-[#775A19]/50 bg-[#522B6A]/10 flex items-center justify-center"
      >
        <Flower2 size={26} className="text-[#775A19]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-8 font-mono-x text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#775A19]"
        data-testid="cta-chapter-tag"
      >
        {kicker}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19]"
      >
        {titleA} <span className="italic text-[#B08D1E]">{titleB}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mt-6 text-base sm:text-lg text-[#1C1917]/70 leading-relaxed max-w-2xl mx-auto"
        data-testid="cta-subtext"
      >
        {text}
      </motion.p>

      {tagline && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.36 }}
          className="mt-6 font-display italic font-semibold text-xl sm:text-2xl text-[#B08D1E]"
          data-testid="cta-tagline"
        >
          {tagline}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.42 }}
        className="mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-3 bg-[#522B6A] hover:bg-[#775A19] text-[#FAF7F2] font-mono-x text-xs sm:text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-full shadow-[0_24px_48px_-16px_rgba(82,43,106,0.45)] transition-colors duration-400"
          data-testid="join-movement-button"
        >
          {buttonLabel}
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default PageCTA;
