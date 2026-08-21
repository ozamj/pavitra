import { motion } from "framer-motion";
import {
  Droplets,
  Home,
  Flower2,
  Coffee,
  BookOpen,
  Leaf,
} from "lucide-react";
import ChapterTag from "./ChapterTag";
import { useT } from "@/i18n";

const ICONS = [Droplets, Home, Flower2, Coffee, BookOpen, Leaf];

const SHCategories = () => {
  const t = useT();
  const CATEGORIES = t("sh.categories.items");

  return (
  <section
    id="categories"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="shop-categories-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label={t("sh.categories.tag")} />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19] max-w-3xl"
      >
        {t("sh.categories.title1")} <span className="italic">{t("sh.categories.title2")}</span>
      </motion.h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map((cat, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group bg-[#FAF7F2] border border-[#522B6A]/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 transition-colors duration-500"
              data-testid={`category-card-${i + 1}`}
            >
              <div className="w-11 h-11 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Icon size={18} className="text-[#775A19]" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-[#1C1917] leading-snug">
                {cat.t}
              </h3>
              <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                {cat.d}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default SHCategories;
