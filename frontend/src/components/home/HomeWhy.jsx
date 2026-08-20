import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const POINTS = [
  ["To Support", "national causes"],
  ["To Create", "dignity-led opportunities"],
  ["To Build", "trust-based community initiatives"],
  ["To Take", "development closer to people"],
];

const HomeWhy = () => (
  <section
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 overflow-hidden"
    data-testid="home-why-section"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid lg:grid-cols-12 gap-14 items-start">
      <div className="lg:col-span-6">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#775A19]"
        >
          <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
          Why Pavitra Exists
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-8 font-caslon font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl text-[#1C1917]"
        >
          Because Bharat{" "}
          <span className="italic text-[#775A19]">does not need saving.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl"
          data-testid="home-why-body"
        >
          Pavitra exists because trust, once broken, is hard to rebuild — and
          Bharat has seen enough promises. This is not charity, and it is not a
          scheme. It is a pure, people-powered commitment to visible,
          accountable progress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            to="/our-sankalp"
            className="group inline-flex items-center gap-3 border border-[#522B6A]/40 hover:bg-[#522B6A] text-[#522B6A] hover:text-[#FAF7F2] font-mono-x text-[11px] sm:text-xs tracking-[0.18em] uppercase px-7 py-3.5 rounded-full transition-colors duration-400"
            data-testid="home-why-cta"
          >
            Explore Full Our Sankalp Page
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <div className="lg:col-span-6">
        {POINTS.map(([label, text], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-baseline gap-5 py-6 border-t border-[#522B6A]/15 last:border-b"
            data-testid={`home-why-point-${i + 1}`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0 translate-y-[-2px]" aria-hidden="true" />
            <p className="font-caslon text-xl sm:text-2xl leading-snug">
              <span className="font-bold text-[#1C1917] transition-transform duration-500 inline-block group-hover:translate-x-1">
                {label}
              </span>{" "}
              <span className="italic text-[#775A19]">{text}</span>
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeWhy;
