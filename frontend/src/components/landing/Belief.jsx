import { motion } from "framer-motion";
import { MoveRight, Users, Target, Sun } from "lucide-react";
import ChapterTag from "./ChapterTag";
import { useT } from "@/i18n";

const ICONS = [Users, Target, Sun];

const Belief = () => {
  const t = useT();
  const CONTRASTS = t("os.belief.rows");

  return (
  <section
    id="belief"
    className="relative bg-gradient-to-b from-[#F5ECD9] to-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="belief-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="04" label={t("os.belief.tag")} />

      <div className="mt-12 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19]"
        >
          {t("os.belief.title1")} <span className="italic">{t("os.belief.title2")}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="mt-6 space-y-4 text-base sm:text-lg text-[#57534E] leading-relaxed"
          data-testid="belief-lead"
        >
          <p>{t("os.belief.p1")}</p>
          <p>{t("os.belief.p2")}</p>
        </motion.div>
      </div>

      <div className="mt-14">
          {CONTRASTS.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-center gap-4 sm:gap-8 py-7 sm:py-9 border-t border-[#522B6A]/15 last:border-b hover:bg-[#FAF7F2]/70 transition-colors duration-500 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
                data-testid={`belief-contrast-${i + 1}`}
              >
                <span className="hidden sm:flex w-11 h-11 shrink-0 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/20 items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                  <Icon size={18} className="text-[#522B6A]" />
                </span>
                <span className="flex-1 font-display text-lg sm:text-2xl text-[#57534E] line-through decoration-[#522B6A]/50 decoration-1">
                  {c.from}
                </span>
                <MoveRight
                  size={22}
                  className="shrink-0 text-[#775A19] transition-transform duration-500 group-hover:translate-x-2"
                />
                <span className="flex-1 text-right font-display italic font-semibold text-xl sm:text-3xl text-[#522B6A]">
                  {c.to}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
  </section>
  );
};

export default Belief;
