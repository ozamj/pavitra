import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ClosingCTA = () => (
  <section
    id="join"
    className="relative bg-[#261242] py-24 sm:py-32 lg:py-40 overflow-hidden"
    data-testid="closing-cta-section"
  >
    <div
      className="glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.28) 0%, rgba(212,175,55,0) 65%)",
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
        className="mx-auto w-fit bg-[#FAF7F2] rounded-full px-8 py-3 shadow-[0_20px_44px_-14px_rgba(0,0,0,0.5)]"
      >
        <img
          src="/pavitra-logo.webp"
          alt="Pavitra — A sankalp for Bharat"
          className="h-12 sm:h-14 w-auto"
          data-testid="cta-logo-image"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-8 font-mono-x text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#D4AF37]"
        data-testid="cta-chapter-tag"
      >
        06 · The Calling
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#FDFBF7]"
      >
        Be a Part of the{" "}
        <span className="italic text-[#D4AF37]">Pavitra Sankalp</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="mt-6 text-base sm:text-lg text-[#FDFBF7]/75 leading-relaxed max-w-2xl mx-auto"
        data-testid="cta-subtext"
      >
        If you believe Bharat can rise through pure intention, responsible
        action, and collective participation, Pavitra is your movement too.
      </motion.p>

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
          className="group inline-flex items-center gap-3 bg-[#FAF7F2] hover:bg-[#D4AF37] text-[#261242] hover:text-[#FAF7F2] font-mono-x text-xs sm:text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-full shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45)] transition-colors duration-400"
          data-testid="join-movement-button"
        >
          Join The Movement
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default ClosingCTA;
