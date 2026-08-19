import { motion } from "framer-motion";
import { MoveRight, Users, Target, Sun } from "lucide-react";
import ChapterTag from "./ChapterTag";

const CONTRASTS = [
  { from: "Not beneficiaries", to: "Participants.", icon: Users },
  { from: "Not charity", to: "Responsibility.", icon: Target },
  { from: "Not dependency", to: "Swabhimaan.", icon: Sun },
];

const Belief = () => (
  <section
    id="belief"
    className="relative bg-[#F3EEF7] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="belief-section"
  >
    <span
      className="absolute top-10 left-4 sm:left-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#5B2A86]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      04
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="04" label="Our Belief" />

      <div className="mt-12 grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#1C1917]"
          >
            Dignity,{" "}
            <span className="italic text-[#5B2A86]">Not Dependency</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="mt-6 space-y-4 text-base sm:text-lg text-[#57534E] leading-relaxed"
            data-testid="belief-lead"
          >
            <p>Pavitra does not believe in creating dependency.</p>
            <p>
              The mission is to build systems where people participate, earn,
              contribute, and rise with self-respect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-10 w-24 h-24 rounded-full border border-[#5B2A86]/25 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-16 h-16 rounded-full border border-[#8A6D1F]/35 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#5B2A86]/15" />
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          {CONTRASTS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.to}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex items-center gap-4 sm:gap-8 py-7 sm:py-9 border-t border-[#5B2A86]/15 last:border-b hover:bg-[#FAF7F2]/70 transition-colors duration-500 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg"
                data-testid={`belief-contrast-${i + 1}`}
              >
                <span className="hidden sm:flex w-11 h-11 shrink-0 rounded-full bg-[#5B2A86]/10 border border-[#5B2A86]/20 items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                  <Icon size={18} className="text-[#5B2A86]" />
                </span>
                <span className="flex-1 font-display text-lg sm:text-2xl text-[#57534E] line-through decoration-[#5B2A86]/50 decoration-1">
                  {c.from}
                </span>
                <MoveRight
                  size={22}
                  className="shrink-0 text-[#8A6D1F] transition-transform duration-500 group-hover:translate-x-2"
                />
                <span className="flex-1 text-right font-display italic font-semibold text-xl sm:text-3xl text-[#5B2A86]">
                  {c.to}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Belief;
