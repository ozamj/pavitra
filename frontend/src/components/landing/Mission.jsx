import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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

const Mission = () => {
  const pathRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pathRef,
    offset: ["start 0.75", "end 0.55"],
  });
  const draw = useSpring(scrollYProgress, { stiffness: 55, damping: 20 });

  return (
    <section
      id="mission"
      className="relative bg-[#180F2C] py-20 sm:py-28 lg:py-36 overflow-hidden"
      data-testid="mission-section"
    >
      <div
        className="absolute top-0 left-1/3 w-[30rem] h-[30rem] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0) 70%)",
        }}
        aria-hidden="true"
      />
      <span
        className="absolute top-10 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-stroke-ivory opacity-40 select-none pointer-events-none"
        aria-hidden="true"
      >
        03
      </span>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <ChapterTag number="03" label="Our Mission" dark />

        <div className="mt-12 lg:flex lg:items-end lg:justify-between lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight leading-[1.1] text-2xl sm:text-3xl lg:text-4xl text-[#D4AF37] max-w-2xl"
          >
            From Sankalp to Seva.{" "}
            <span className="italic text-[#E9C176]">From Seva to Nirmaan.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 lg:mt-0 text-base sm:text-lg text-[#F4F1EA]/65 leading-relaxed max-w-md lg:text-right"
            data-testid="mission-lead"
          >
            Pavitra&rsquo;s mission is to convert pure intention into
            responsible action for Bharat — one phase leading to the next.
          </motion.p>
        </div>

        <div ref={pathRef} className="relative mt-20 lg:mt-28">
          <div
            className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-1/2 bg-[#F4F1EA]/10"
            aria-hidden="true"
          >
            <motion.div
              style={{ scaleY: draw }}
              className="w-full h-full origin-top bg-gradient-to-b from-[#E9C176] via-[#D4AF37] to-[#775A19]"
            />
          </div>

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const rightSide = i % 2 === 1;
            return (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative pb-16 lg:pb-24 last:pb-0"
                data-testid={`mission-step-${step.name.toLowerCase()}`}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                    delay: 0.15,
                  }}
                  className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-1 z-10 w-11 h-11 rounded-full bg-[#241641] border border-[#D4AF37]/60 shadow-[0_0_26px_rgba(212,175,55,0.35)] flex items-center justify-center"
                >
                  <Icon size={18} className="text-[#E9C176]" />
                </motion.span>

                <div
                  className={`pl-20 lg:pl-0 lg:w-[calc(50%-4rem)] ${
                    rightSide ? "lg:ml-auto" : "lg:text-right"
                  }`}
                >
                  <p className="font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
                    Phase {String(i + 1).padStart(2, "0")} ·{" "}
                    <span className="font-display text-base normal-case tracking-normal text-[#E9C176]">
                      {step.devanagari}
                    </span>
                  </p>
                  <h3 className="mt-2 font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] leading-none">
                    {step.name}
                  </h3>
                  <p
                    className={`mt-3 text-sm sm:text-base text-[#F4F1EA]/60 leading-relaxed max-w-sm ${
                      rightSide ? "" : "lg:ml-auto"
                    }`}
                  >
                    {step.definition}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 text-center font-mono-x text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#D4AF37]/80"
          data-testid="mission-chain"
        >
          Sankalp → Seva → Nirmaan → Swabhimaan
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;
