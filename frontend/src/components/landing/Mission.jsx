import { motion } from "framer-motion";
import { Compass, HeartHandshake, Building2, ShieldCheck } from "lucide-react";
import ChapterTag from "./ChapterTag";

const STEPS = [
  {
    name: "Sankalp",
    devanagari: "संकल्प",
    definition: "A pure commitment for Bharat",
    icon: Compass,
  },
  {
    name: "Seva",
    devanagari: "सेवा",
    definition: "Purpose-led action for society",
    icon: HeartHandshake,
  },
  {
    name: "Nirmaan",
    devanagari: "निर्माण",
    definition: "Visible development and progress",
    icon: Building2,
  },
  {
    name: "Swabhimaan",
    devanagari: "स्वाभिमान",
    definition: "Dignity, pride, and participation",
    icon: ShieldCheck,
  },
];

const Mission = () => (
  <section
    id="mission"
    className="relative bg-[#121614] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="mission-section"
  >
    <div
      className="absolute top-0 left-1/3 w-[30rem] h-[30rem] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(217,119,6,0.12) 0%, rgba(217,119,6,0) 70%)",
      }}
      aria-hidden="true"
    />
    <span
      className="absolute bottom-8 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-stroke-ivory opacity-40 select-none pointer-events-none"
      aria-hidden="true"
    >
      03
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label="Our Mission" dark />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.1] text-2xl sm:text-3xl lg:text-4xl text-[#F4F1EA] max-w-3xl"
      >
        From Sankalp to Seva.{" "}
        <span className="italic text-[#D97706]">From Seva to Nirmaan.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-6 text-base sm:text-lg text-[#F4F1EA]/65 leading-relaxed max-w-2xl"
        data-testid="mission-lead"
      >
        Pavitra&rsquo;s mission is to convert pure intention into responsible
        action for Bharat.
      </motion.p>

      <div className="mt-16 relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute top-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-[#D97706]/60 via-[#D97706]/25 to-[#D97706]/60"
          aria-hidden="true"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:pt-12">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative bg-[#1A221E] border border-[#D97706]/15 hover:border-[#D97706]/45 rounded-2xl p-7 sm:p-8 transition-colors duration-500"
                data-testid={`mission-step-${step.name.toLowerCase()}`}
              >
                <span className="absolute -top-3 left-7 bg-[#121614] border border-[#D97706]/40 text-[#D97706] font-mono-x text-[10px] tracking-[0.25em] px-2.5 py-1 rounded-full">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-12 h-12 rounded-full bg-[#8C3218]/25 border border-[#D97706]/25 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={20} className="text-[#D97706]" />
                </div>

                <p className="font-mono-x text-[10px] tracking-[0.3em] text-[#F4F1EA]/40 uppercase">
                  {step.devanagari}
                </p>
                <h3 className="mt-2 font-display font-semibold text-xl sm:text-2xl text-[#F4F1EA]">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#F4F1EA]/60 leading-relaxed">
                  {step.definition}
                </p>

                {i < STEPS.length - 1 && (
                  <span
                    className="hidden lg:block absolute top-1/2 -right-6 text-[#D97706]/50 font-display text-2xl"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Mission;
