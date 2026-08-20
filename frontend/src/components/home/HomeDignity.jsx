import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TAGS = [
  ["Not beneficiaries", "Participants"],
  ["Not charity", "Responsibility"],
  ["Not dependency", "Swabhimaan"],
];

const HomeDignity = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);

  return (
    <section
      ref={ref}
      className="relative h-[85vh] min-h-[34rem] overflow-hidden flex items-center"
      data-testid="home-dignity-section"
    >
      <motion.img
        src="/assets/d7.jpg"
        alt="People of Bharat walking together"
        style={{ y, scale: 1.28 }}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#180F2C]/60" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center w-full">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E9C176]"
        >
          <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
          Dignity, not dependency
          <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, delay: 0.12 }}
          className="mt-8 font-caslon font-bold tracking-tight leading-[1.18] text-xl sm:text-2xl lg:text-4xl text-[#FDFBF7]"
          data-testid="home-dignity-headline"
        >
          Pavitra does not believe in creating dependency. The mission is to
          build systems where people participate, earn, contribute, and rise
          with self-respect.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.28 }}
          className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {TAGS.map(([from, to], i) => (
            <span
              key={to}
              className="inline-flex items-center gap-2.5 bg-[#FDFBF7]/10 backdrop-blur-md border border-[#FDFBF7]/20 rounded-full px-5 py-2.5 text-sm"
              data-testid={`dignity-tag-${i + 1}`}
            >
              <span className="line-through text-[#FDFBF7]/55">{from}</span>
              <span className="text-[#D4AF37]" aria-hidden="true">→</span>
              <span className="font-semibold text-[#E9C176]">{to}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeDignity;
