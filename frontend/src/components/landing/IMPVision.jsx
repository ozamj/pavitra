import { motion } from "framer-motion";
import {
  Users,
  HandHeart,
  HandCoins,
  Sprout,
  Building2,
  Flag,
} from "lucide-react";
import ChapterTag from "./ChapterTag";

const NETWORK = [
  { line: "Citizens participate", icon: Users },
  { line: "Communities benefit", icon: HandHeart },
  { line: "Youth earn with dignity", icon: HandCoins },
  { line: "Villages progress with pride", icon: Sprout },
  { line: "Cities contribute with responsibility", icon: Building2 },
  { line: "Bharat rises through collective action", icon: Flag },
];

const IMPVision = () => (
  <section
    id="vision"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="impact-vision-section"
  >
    <span
      className="absolute top-10 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      05
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="05" label="Future Impact Vision" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#775A19] max-w-3xl"
      >
        From Local Action to{" "}
        <span className="italic">Bharat-Level Upliftment</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl"
        data-testid="impact-vision-lead"
      >
        Pavitra&rsquo;s long-term vision is to create a national network of
        purpose-led participation. A network where:
      </motion.p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {NETWORK.map((item, i) => {
          const Icon = item.icon;
          const isLast = i === NETWORK.length - 1;
          return (
            <motion.div
              key={item.line}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className={`group flex items-center gap-4 rounded-2xl p-6 border transition-colors duration-500 ${
                isLast
                  ? "bg-[#522B6A] border-[#D4AF37]/50 sm:col-span-2 lg:col-span-1"
                  : "bg-white border-[#522B6A]/12 hover:border-[#D4AF37]/50"
              }`}
              data-testid={`vision-item-${i + 1}`}
            >
              <div
                className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                  isLast
                    ? "bg-[#D4AF37]/20 border border-[#D4AF37]/40"
                    : "bg-[#522B6A]/10 border border-[#522B6A]/15"
                }`}
              >
                <Icon
                  size={18}
                  className={isLast ? "text-[#E9C176]" : "text-[#775A19]"}
                />
              </div>
              <p
                className={`font-display font-semibold text-lg leading-snug ${
                  isLast ? "text-[#F4F1EA]" : "text-[#1C1917]"
                }`}
              >
                {item.line}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IMPVision;
