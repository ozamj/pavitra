import { motion } from "framer-motion";
import { Quote, ArrowUpRight, Users, Flame, TrendingUp } from "lucide-react";
import ChapterTag from "./ChapterTag";
import { useT } from "@/i18n";

const FOUNDER_IMG =
  "https://images.pexels.com/photos/5940089/pexels-photo-5940089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const ICONS = [Users, Flame, TrendingUp];
const SLUGS = ["people", "purpose", "progress"];

const Founder = () => {
  const t = useT();
  const PS = t("os.founder.ps");

  return (
  <section
    id="founder"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="founder-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="05" label={t("os.founder.tag")} />

      <div className="mt-12 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19]"
        >
          {t("os.founder.title1")} <span className="italic">{t("os.founder.title2")}</span>
        </motion.h2>
      </div>

      <div className="mt-12 grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4"
        >
          <div className="relative rounded-t-[9rem] rounded-b-2xl overflow-hidden border border-[#522B6A]/15 shadow-[0_32px_64px_-24px_rgba(82,43,106,0.35)]">
            <img
              src={FOUNDER_IMG}
              alt="Shri Jay Ukani, Founder of Pavitra"
              className="w-full h-[44vh] lg:h-[52vh] object-cover"
              data-testid="founder-portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180F2C]/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-display text-lg text-[#F4F1EA]">
                {t("os.founder.name")}
              </p>
              <p className="font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#F4F1EA]/70 mt-1">
                {t("os.founder.role")}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.12 }}
            className="relative mt-10 pl-8 sm:pl-12 border-l-2 border-[#775A19]/50"
            data-testid="founder-quote"
          >
            <Quote
              size={34}
              className="absolute -left-4 -top-4 text-[#D4AF37] fill-[#D4AF37]/15"
            />
            <p className="font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed text-[#1C1917]">
              {t("os.founder.quote")}
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8"
          >
            <button
              className="group inline-flex items-center gap-3 border border-[#522B6A]/40 hover:bg-[#522B6A] text-[#522B6A] hover:text-[#FAF7F2] font-mono-x text-[11px] sm:text-xs tracking-[0.2em] uppercase px-6 py-3.5 rounded-full transition-colors duration-400"
              data-testid="founder-story-button"
            >
              {t("os.founder.button")}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 lg:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4"
          data-testid="three-ps-heading"
        >
          <span className="w-12 h-px bg-[#D4AF37]" aria-hidden="true" />
          <p className="font-mono-x text-xs sm:text-sm tracking-[0.3em] uppercase text-[#522B6A]">
            {t("os.founder.psTitle")}
          </p>
          <span className="w-12 h-px bg-[#D4AF37]" aria-hidden="true" />
        </motion.div>

        <div className="mt-12 border-b border-[#522B6A]/15">
          {PS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={SLUGS[i]}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden grid sm:grid-cols-12 items-center gap-x-8 gap-y-5 py-10 sm:py-12 lg:py-14 border-t border-[#522B6A]/15 px-4 sm:px-8 -mx-4 sm:-mx-8"
                data-testid={`three-p-${SLUGS[i]}`}
              >
                <span
                  className="absolute inset-0 bg-[#522B6A] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  aria-hidden="true"
                />
                <div className="relative sm:col-span-3 flex items-end gap-4">
                  <span
                    className="font-display italic font-bold leading-[0.8] text-[6.5rem] lg:text-[8.5rem] text-transparent transition-all duration-500 [-webkit-text-stroke:1.5px_#B08D1E] group-hover:[-webkit-text-stroke:1.5px_#D4AF37]"
                    aria-hidden="true"
                  >
                    P
                  </span>
                  <span className="font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#775A19] group-hover:text-[#E9C176] transition-colors duration-500 mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative sm:col-span-4 flex items-center gap-5">
                  <span className="w-12 h-12 shrink-0 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/20 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] flex items-center justify-center transition-colors duration-500">
                    <Icon size={20} className="text-[#522B6A] group-hover:text-[#180F2C] transition-colors duration-500" />
                  </span>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] group-hover:text-[#F4F1EA] leading-none transition-colors duration-500">
                    {p.title}
                  </h3>
                </div>
                <p className="relative sm:col-span-5 text-base sm:text-lg text-[#57534E] group-hover:text-[#F4F1EA]/75 leading-relaxed max-w-md transition-colors duration-500">
                  {p.line}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Founder;
