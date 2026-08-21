import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useT } from "@/i18n";

const HomeFounder = () => {
  const t = useT();

  return (
  <section
    className="relative bg-[#FAF7F2] py-20 sm:py-28 overflow-hidden"
    data-testid="home-founder-section"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-4"
      >
        <span className="w-16 h-px bg-[#D4AF37]" aria-hidden="true" />
        <span className="font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#775A19]">
          {t("home.founder.label")}
        </span>
        <span className="w-16 h-px bg-[#D4AF37]" aria-hidden="true" />
      </motion.div>
      <div className="mt-3 flex justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 relative rounded-3xl overflow-hidden"
      >
        <img
          src="/assets/forest.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#180F2C]/78" aria-hidden="true" />

        <div className="relative grid lg:grid-cols-12 items-center gap-10 p-6 sm:p-10 lg:p-16">
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-56 sm:w-64 lg:w-full max-w-xs rounded-t-[8rem] rounded-b-2xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_32px_64px_-20px_rgba(0,0,0,0.6)]">
              <img
                src="/assets/founder.png"
                alt="Shri Jay Ukani, Founder of Pavitra"
                className="w-full h-full object-cover"
                data-testid="home-founder-portrait"
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="flex items-center gap-4 font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E9C176]">
              <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
              {t("home.founder.eyebrow")}
            </p>
            <Quote size={34} className="mt-6 text-[#D4AF37] fill-[#D4AF37]/15" />
            <blockquote
              className="mt-4 font-caslon text-lg sm:text-xl lg:text-2xl leading-relaxed text-[#FDFBF7]"
              data-testid="home-founder-quote"
            >
              {t("home.founder.quote")}
            </blockquote>
            <p className="mt-6 flex items-center gap-4">
              <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
              <span className="font-caslon italic text-xl text-[#E9C176]">
                {t("home.founder.name")}
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default HomeFounder;
