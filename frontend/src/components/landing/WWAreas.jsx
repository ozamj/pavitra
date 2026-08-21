import { motion } from "framer-motion";
import {
  Flag,
  Users,
  Sprout,
  HandCoins,
  Venus,
  Rocket,
  BookOpen,
  Droplets,
  Handshake,
  Store,
} from "lucide-react";
import ChapterTag from "./ChapterTag";
import { useT } from "@/i18n";

const ICONS = [Flag, Users, Sprout, HandCoins, Venus, Rocket, BookOpen, Droplets, Handshake, Store];

const WWAreas = () => {
  const t = useT();
  const AREAS = t("ww.areas.items");

  return (
  <section
    id="areas"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="ww-areas-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label={t("ww.areas.tag")} />

      <div className="mt-12">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19]"
        >
          {t("ww.areas.title1")} <span className="italic">{t("ww.areas.title2")}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl"
          data-testid="ww-areas-lead"
        >
          {t("ww.areas.lead")}
        </motion.p>
      </div>

      <div className="mt-14 grid lg:grid-cols-2 gap-x-16 border-b border-[#522B6A]/15">
        {AREAS.map((area, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 5) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-start gap-5 py-7 border-t border-[#522B6A]/15"
              data-testid={`area-row-${i + 1}`}
            >
              <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#775A19] pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="w-11 h-11 shrink-0 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 flex items-center justify-center transition-colors duration-500 group-hover:bg-[#522B6A] group-hover:border-[#522B6A]">
                <Icon
                  size={18}
                  className="text-[#775A19] group-hover:text-[#E9C176] transition-colors duration-500"
                />
              </span>
              <div>
                <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#1C1917] leading-snug transition-transform duration-500 group-hover:translate-x-1.5">
                  {area.t}
                </h3>
                <p className="mt-1.5 text-sm sm:text-base text-[#57534E] leading-relaxed">
                  {area.d}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default WWAreas;
