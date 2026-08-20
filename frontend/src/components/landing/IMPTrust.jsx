import { motion } from "framer-motion";
import ChapterTag from "./ChapterTag";

const PILLARS = [
  "Clarity",
  "Responsibility",
  "Visible progress",
  "Community trust",
  "Long-term dignity",
];

const IMPTrust = () => (
  <section
    id="trust"
    className="relative bg-gradient-to-b from-[#F3EBDD] to-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="impact-trust-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="02" label="Trust Must Be Visible" />

      <div className="mt-12 grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19]"
          >
            Trust Must Be <span className="italic">Visible</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="mt-6 space-y-4 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl"
            data-testid="impact-trust-lead"
          >
            <p>
              Pavitra is built on the belief that good intention must be
              supported by visible action.
            </p>
            <p>
              People should not only hear about impact. They should be able to
              see it, feel it, and take pride in it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-10 w-24 h-24 rounded-full border border-[#522B6A]/25 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-16 h-16 rounded-full border border-[#775A19]/35 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/25" />
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="font-mono-x text-xs tracking-[0.25em] uppercase text-[#775A19]"
            data-testid="impact-approach-label"
          >
            Pavitra&rsquo;s impact approach is based on:
          </motion.p>

          <div className="mt-6">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-baseline gap-5 py-5 border-t border-[#522B6A]/15 last:border-b"
                data-testid={`trust-pillar-${i + 1}`}
              >
                <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#775A19]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-lg sm:text-2xl text-[#1C1917] leading-snug transition-transform duration-500 group-hover:translate-x-2">
                  {pillar}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IMPTrust;
