import { motion } from "framer-motion";
import { Sparkles, HandHeart, Eye } from "lucide-react";
import ChapterTag from "./ChapterTag";

const APPROACH = [
  {
    title: "Think Pure",
    definition: "Every initiative begins with honest intention.",
    icon: Sparkles,
  },
  {
    title: "Act Responsible",
    definition: "Every action must serve a larger purpose.",
    icon: HandHeart,
  },
  {
    title: "Build Visible",
    definition: "Every effort should create trust and visible progress.",
    icon: Eye,
  },
];

const WWAction = () => (
  <section
    id="action"
    className="relative bg-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="ww-action-section"
  >
    <span
      className="absolute top-10 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      02
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="02" label="Pavitra in Action" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#775A19] max-w-3xl"
      >
        Think Pure. Act Responsible.{" "}
        <span className="italic">Build Visible.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl"
        data-testid="ww-action-lead"
      >
        Pavitra follows a simple but powerful approach:
      </motion.p>

      <div className="mt-14 grid sm:grid-cols-3 gap-6 lg:gap-8">
        {APPROACH.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
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
                {step.definition}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WWAction;
