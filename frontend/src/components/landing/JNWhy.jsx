import { motion } from "framer-motion";
import ChapterTag from "./ChapterTag";

const BELIEFS = [
  ["Purpose", "profit"],
  ["Dignity", "dependency"],
  ["Action", "promises"],
  ["Trust", "publicity"],
  ["Bharat", "everything"],
];

const JNWhy = () => (
  <section
    id="why"
    className="relative bg-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="join-why-section"
  >
    <span
      className="absolute top-10 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      02
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="02" label="Why Join Pavitra" />

      <div className="mt-12 grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
        <div className="lg:col-span-6">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#775A19]"
          >
            Because Bharat&rsquo;s Upliftment{" "}
            <span className="italic">Needs Participation</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="mt-6 space-y-4 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl"
            data-testid="join-why-lead"
          >
            <p>
              Pavitra is not only looking for people to work, sell, support,
              or partner.
            </p>
            <p>Pavitra is looking for people who believe in:</p>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          {BELIEFS.map(([first, second], i) => (
            <motion.div
              key={first}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-baseline gap-4 sm:gap-6 py-4 sm:py-5 border-t border-[#522B6A]/15 last:border-b"
              data-testid={`join-belief-${i + 1}`}
            >
              <span className="font-display text-xl sm:text-2xl text-[#1C1917] transition-transform duration-500 group-hover:translate-x-2">
                {first}
              </span>
              <span className="font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#775A19]/70 shrink-0">
                before
              </span>
              <span className="font-display italic font-semibold text-xl sm:text-2xl text-[#775A19]">
                {second}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.blockquote
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.95, delay: 0.15 }}
        className="mt-16 pl-8 sm:pl-12 border-l-2 border-[#D4AF37]/70 max-w-4xl"
        data-testid="join-why-closing"
      >
        <p className="font-display text-xl sm:text-2xl leading-relaxed text-[#522B6A]">
          If you believe your work should mean more than income, your role
          should mean more than position, and your contribution should mean
          more than words —{" "}
          <span className="italic font-semibold text-[#775A19]">
            Pavitra is a movement you can belong to.
          </span>
        </p>
      </motion.blockquote>
    </div>
  </section>
);

export default JNWhy;
