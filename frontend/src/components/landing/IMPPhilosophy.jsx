import { motion } from "framer-motion";
import ChapterTag from "./ChapterTag";
import { useT } from "@/i18n";

const IMPPhilosophy = () => {
  const t = useT();
  const EXAMPLES = t("imp.philosophy.examples");
  const CASCADE = t("imp.philosophy.cascade");

  return (
  <section
    id="philosophy"
    className="relative bg-[#3E2A5C] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="impact-philosophy-section"
  >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F5ECD9] via-[#F5ECD9]/40 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#FAF7F2]/40 to-[#FAF7F2] pointer-events-none" aria-hidden="true" />
    <div
      className="absolute top-0 left-1/3 w-[30rem] h-[30rem] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0) 70%)",
      }}
      aria-hidden="true"
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="04" label={t("imp.philosophy.tag")} dark />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl text-[#D4AF37] max-w-3xl"
      >
        {t("imp.philosophy.title1")}{" "}
        <span className="italic text-[#E9C176]">{t("imp.philosophy.title2")}</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-6 space-y-4 text-base sm:text-lg text-[#F4F1EA]/65 leading-relaxed max-w-2xl"
        data-testid="impact-philosophy-lead"
      >
        <p>{t("imp.philosophy.p1")}</p>
        <p>{t("imp.philosophy.p2")}</p>
      </motion.div>

      <div className="mt-16">
        {EXAMPLES.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.8,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] leading-tight py-2 ${
              [0, "sm:ml-0", "sm:ml-10", "sm:ml-20", "sm:ml-32", "sm:ml-44", "sm:ml-56"][i + 1]
            }`}
            data-testid={`philosophy-example-${i + 1}`}
          >
            <span className="text-[#D4AF37] mr-3" aria-hidden="true">
              ·
            </span>
            {line}
          </motion.p>
        ))}
      </div>

      <div className="mt-20 text-center space-y-3">
        {CASCADE.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: i * 0.15 }}
            className={
              i === CASCADE.length - 1
                ? "font-display italic font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#D4AF37]"
                : "font-display text-xl sm:text-2xl text-[#F4F1EA]/75"
            }
            data-testid={`philosophy-cascade-${i + 1}`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  </section>
  );
};

export default IMPPhilosophy;
