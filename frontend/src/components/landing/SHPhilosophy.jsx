import { motion } from "framer-motion";
import ChapterTag from "./ChapterTag";

const LINES = [
  "Pavitra products are not created only to occupy shelves.",
  "They are created to carry a thought.",
];

const SHPhilosophy = () => (
  <section
    id="product-philosophy"
    className="relative bg-[#180F2C] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="shop-philosophy-section"
  >
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0) 70%)",
      }}
      aria-hidden="true"
    />
    <span
      className="absolute top-10 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-stroke-ivory opacity-40 select-none pointer-events-none"
      aria-hidden="true"
    >
      04
    </span>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
      <div className="flex justify-center">
        <ChapterTag number="04" label="Product Philosophy" dark />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.1] text-2xl sm:text-3xl lg:text-4xl text-[#D4AF37]"
      >
        Purity in Thought. Trust in Product.{" "}
        <span className="italic text-[#E9C176]">Purpose in Action.</span>
      </motion.h2>

      <div className="mt-14 space-y-4">
        {LINES.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.18 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#F4F1EA] leading-tight"
            data-testid={`shop-philosophy-line-${i + 1}`}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-10 text-base sm:text-lg text-[#F4F1EA]/65 leading-relaxed max-w-2xl mx-auto"
        data-testid="shop-philosophy-closing"
      >
        A thought that daily-use products can also represent trust,
        responsibility, and participation in a larger mission.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14 mx-auto w-40 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        aria-hidden="true"
      />
    </div>
  </section>
);

export default SHPhilosophy;
