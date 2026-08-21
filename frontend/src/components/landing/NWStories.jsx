import { motion } from "framer-motion";
import {
  Users,
  Camera,
  Heart,
  Sprout,
  User,
  PenLine,
} from "lucide-react";
import ChapterTag from "./ChapterTag";
import { useT } from "@/i18n";

const ICONS = [Users, Camera, Heart, Sprout, User, PenLine];

const NWStories = () => {
  const t = useT();
  const STORIES = t("nw.stories.items");

  return (
  <section
    id="stories"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="newsroom-stories-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label={t("nw.stories.tag")} />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19] max-w-3xl"
      >
        {t("nw.stories.title1")} <span className="italic">{t("nw.stories.title2")}</span>
      </motion.h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STORIES.map((story, i) => {
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
              data-testid={`story-card-${i + 1}`}
            >
              <div className="w-11 h-11 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Icon size={18} className="text-[#775A19]" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-[#1C1917] leading-snug">
                {story.t}
              </h3>
              <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                {story.d}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default NWStories;
