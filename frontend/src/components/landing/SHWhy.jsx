import { motion } from "framer-motion";
import ChapterTag from "./ChapterTag";

const PHILOSOPHY = [
  "Trusted quality",
  "Purpose-led creation",
  "Indian values",
  "Everyday usefulness",
  "Responsibility towards society",
];

const SHWhy = () => (
  <section
    id="why-products"
    className="relative bg-gradient-to-b from-[#F3EBDD] to-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="shop-why-section"
  >
    <span
      className="absolute top-10 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      02
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="02" label="Why Pavitra Products" />

      <div className="mt-12 grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#775A19]"
          >
            Everyday Essentials.{" "}
            <span className="italic">Larger Purpose.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl"
            data-testid="shop-why-lead"
          >
            Pavitra products are designed to become part of everyday life
            while staying connected to a bigger mission. Our product
            philosophy:
          </motion.p>
        </div>

        <div className="lg:col-span-6">
          {PHILOSOPHY.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-baseline gap-5 py-5 border-t border-[#522B6A]/15 last:border-b"
              data-testid={`shop-philosophy-${i + 1}`}
            >
              <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#775A19]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-lg sm:text-2xl text-[#1C1917] leading-snug transition-transform duration-500 group-hover:translate-x-2">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SHWhy;
