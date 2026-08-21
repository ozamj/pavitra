import { motion } from "framer-motion";
import { Sparkles, HandHeart, Eye } from "lucide-react";
import ChapterTag from "./ChapterTag";
import { useT } from "@/i18n";

const ICONS = [Sparkles, HandHeart, Eye];

const WWAction = () => {
  const t = useT();
  const APPROACH = t("ww.action.steps");

  return (
  <section
    id="action"
    className="relative bg-gradient-to-b from-[#ECE4F6] to-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="ww-action-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="02" label={t("ww.action.tag")} />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19] max-w-3xl"
      >
        {t("ww.action.title1")}{" "}
        <span className="italic">{t("ww.action.title2")}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl"
        data-testid="ww-action-lead"
      >
        {t("ww.action.lead")}
      </motion.p>

      <div className="mt-14 grid sm:grid-cols-3 gap-6 lg:gap-8">
        {APPROACH.map((step, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.85,
                delay: i * 0.13,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-[#522B6A]/12 hover:border-[#D4AF37]/50 rounded-2xl p-7 sm:p-8 shadow-[0_16px_40px_-24px_rgba(82,43,106,0.3)] transition-colors duration-500"
              data-testid={`action-step-${i + 1}`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={20} className="text-[#775A19]" />
                </div>
                <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#775A19]/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display font-semibold text-xl sm:text-2xl text-[#1C1917]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
                {step.def}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default WWAction;
