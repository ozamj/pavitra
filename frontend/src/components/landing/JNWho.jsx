import { motion } from "framer-motion";
import { Users, Handshake, Heart, Sprout, Store, Flower2, ArrowUpRight } from "lucide-react";
import ChapterTag from "./ChapterTag";
import { useT } from "@/i18n";

const ICONS = [Users, Handshake, Heart, Sprout, Store];

const JNWho = () => {
  const t = useT();
  const ROLES = t("jn.who.roles");

  return (
  <section
    id="who"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="join-who-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label={t("jn.who.tag")} />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19] max-w-3xl"
      >
        {t("jn.who.title1")}{" "}
        <span className="italic">{t("jn.who.title2")}</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl"
        data-testid="join-who-lead"
      >
        {t("jn.who.lead")}
      </motion.p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ROLES.map((role, i) => {
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
              className="group relative overflow-hidden bg-white border border-[#522B6A]/10 hover:border-[#522B6A] rounded-2xl p-6 cursor-default transition-colors duration-500"
              data-testid={`join-role-${i + 1}`}
            >
              <span
                className="absolute inset-0 bg-[#522B6A] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] flex items-center justify-center transition-colors duration-500">
                  <Icon size={18} className="text-[#775A19] group-hover:text-[#180F2C] transition-colors duration-500" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-lg text-[#1C1917] group-hover:text-[#F4F1EA] leading-snug transition-colors duration-500">
                  {role.name}
                </h3>
                <p className="mt-2 text-sm text-[#57534E] group-hover:text-[#F4F1EA]/75 leading-relaxed transition-colors duration-500">
                  {role.desc}
                </p>
                <p className="mt-4 flex items-center gap-2 font-mono-x text-[10px] tracking-[0.22em] uppercase text-[#D4AF37] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {t("jn.who.joinAs")}
                  <ArrowUpRight size={12} />
                </p>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-[#522B6A] border border-[#D4AF37]/50 rounded-2xl p-6 flex flex-col justify-center"
          data-testid="join-role-tagline-card"
        >
          <Flower2 size={20} className="text-[#D4AF37]" />
          <p className="mt-4 font-display italic font-semibold text-xl text-[#F4F1EA] leading-snug">
            {t("jn.who.taglineTitle")}
          </p>
          <p className="mt-2 font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#E9C176]">
            {t("jn.who.taglineSub")}
          </p>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default JNWho;
