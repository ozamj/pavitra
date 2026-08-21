import { motion } from "framer-motion";
import ChapterTag from "./ChapterTag";
import { useT } from "@/i18n";

const JNWhy = () => {
  const t = useT();
  const BELIEFS = t("jn.why.beliefs");

  return (
  <section
    id="why"
    className="relative bg-gradient-to-b from-[#ECE4F6] to-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="join-why-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="02" label={t("jn.why.tag")} />

      <div className="mt-12 grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19]"
          >
            {t("jn.why.title1")}{" "}
            <span className="italic">{t("jn.why.title2")}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="mt-6 space-y-4 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl"
            data-testid="join-why-lead"
          >
            <p>{t("jn.why.p1")}</p>
            <p>{t("jn.why.p2")}</p>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          {BELIEFS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid grid-cols-[1fr_auto_1fr] items-baseline gap-x-4 sm:gap-x-8 py-4 sm:py-5 border-t border-[#522B6A]/15 last:border-b"
              data-testid={`join-belief-${i + 1}`}
            >
              <span className="text-right font-display text-xl sm:text-2xl text-[#1C1917] transition-transform duration-500 group-hover:translate-x-1.5">
                {b.first}
              </span>
              <span className="font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#775A19]/70">
                {t("jn.why.before")}
              </span>
              <span className="text-left font-display italic font-semibold text-xl sm:text-2xl text-[#775A19] transition-transform duration-500 group-hover:-translate-x-1.5">
                {b.second}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.95, delay: 0.15 }}
        className="mt-16 pl-8 sm:pl-12 border-l-2 border-[#D4AF37]/70 max-w-4xl"
        data-testid="join-why-closing"
      >
        <p className="font-display text-xl sm:text-2xl leading-relaxed text-[#522B6A]">
          {t("jn.why.closing")}{" "}
          <span className="italic font-semibold text-[#775A19]">
            {t("jn.why.closingAccent")}
          </span>
        </p>
      </motion.blockquote>
    </div>
  </section>
  );
};

export default JNWhy;
