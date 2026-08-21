import { motion } from "framer-motion";
import { useT } from "@/i18n";

const SLUGS = ["sankalp", "seva", "nirmaan"];

const HomeThought = () => {
  const t = useT();
  const PILLARS = t("home.thought.pillars");

  return (
  <section
    className="relative bg-gradient-to-b from-[#EFE7D8] to-[#FAF7F2] py-20 sm:py-28 overflow-hidden"
    data-testid="home-thought-section"
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4 font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#775A19]"
      >
        <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
        {t("home.thought.eyebrow")}
        <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-8 font-caslon font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl text-[#1C1917]"
      >
        {t("home.thought.title1")}{" "}
        <span className="italic text-[#775A19]">{t("home.thought.title2")}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl mx-auto"
        data-testid="home-thought-text"
      >
        {t("home.thought.text")}
      </motion.p>
    </div>

    <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl overflow-hidden"
      >
        <img
          src="/assets/forest.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#180F2C]/70" aria-hidden="true" />
        <div className="relative grid md:grid-cols-3 gap-6 p-6 sm:p-10 lg:p-14">
          {PILLARS.map((pillar, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="bg-[#FAF7F2]/[0.07] backdrop-blur-md border border-[#FDFBF7]/15 hover:border-[#D4AF37]/50 rounded-2xl p-7 sm:p-8 transition-colors duration-500"
              data-testid={`pillar-card-${SLUGS[i]}`}
            >
              <h3 className="font-caslon font-bold text-2xl sm:text-3xl text-[#FDFBF7]">
                {pillar.title}
              </h3>
              <span className="block mt-4 w-12 h-px bg-[#D4AF37]" aria-hidden="true" />
              <p className="mt-4 text-sm sm:text-base text-[#FDFBF7]/75 leading-relaxed">
                {pillar.text}
              </p>
              <span className="block mt-6 font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#E9C176]">
                {pillar.chapter}
              </span>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default HomeThought;
