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

const CENTER = { line: "Bharat rises through collective action", icon: Flag };

const NODES = [
  { line: "Citizens participate", icon: Users, x: 50, y: 9 },
  { line: "Communities benefit", icon: HandHeart, x: 10, y: 38 },
  { line: "Youth earn with dignity", icon: HandCoins, x: 25, y: 84 },
  { line: "Villages progress with pride", icon: Sprout, x: 75, y: 84 },
  { line: "Cities contribute with responsibility", icon: Building2, x: 90, y: 38 },
];

const ALL = [...NODES.map(({ line, icon }) => ({ line, icon })), CENTER];

const IMPVision = () => (
  <section
    id="vision"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="impact-vision-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="05" label="Future Impact Vision" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19] max-w-3xl"
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

      <div className="mt-16 hidden lg:block">
        <div className="relative aspect-square max-w-[36rem] mx-auto" data-testid="vision-network">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" fill="none">
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              stroke="#B08D1E"
              strokeOpacity="0.35"
              strokeWidth="0.3"
              strokeDasharray="1.5 1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            {NODES.map((node, i) => (
              <motion.line
                key={node.line}
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
                stroke="#522B6A"
                strokeOpacity="0.25"
                strokeWidth="0.35"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 160, damping: 16 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-40 h-40 rounded-full bg-[#D4AF37] shadow-[0_0_60px_rgba(212,175,55,0.45)] flex flex-col items-center justify-center text-center px-4">
              <Flag size={20} className="text-[#180F2C]" />
              <p className="mt-2 font-display font-bold text-sm leading-snug text-[#180F2C]">
                {CENTER.line}
              </p>
            </div>
          </motion.div>

          {NODES.map((node, i) => {
            const Icon = node.icon;
            return (
              <div
                key={node.line}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 16,
                    delay: 0.5 + i * 0.12,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5 + i * 0.6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-36 bg-white border border-[#522B6A]/15 hover:border-[#D4AF37] rounded-2xl px-3 py-3.5 flex flex-col items-center gap-2 text-center shadow-[0_16px_36px_-18px_rgba(82,43,106,0.4)] transition-colors duration-400 cursor-default"
                    data-testid={`vision-node-${i + 1}`}
                  >
                    <span className="w-9 h-9 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 flex items-center justify-center">
                      <Icon size={15} className="text-[#775A19]" />
                    </span>
                    <span className="font-display font-semibold text-xs leading-snug text-[#1C1917]">
                      {node.line}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 lg:hidden space-y-3">
        {ALL.map((item, i) => {
          const Icon = item.icon;
          const isLast = i === ALL.length - 1;
          return (
            <motion.div
              key={item.line}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`flex items-center gap-4 rounded-2xl p-5 border ${
                isLast
                  ? "bg-[#D4AF37] border-[#D4AF37]"
                  : "bg-white border-[#522B6A]/12"
              }`}
              data-testid={`vision-item-${i + 1}`}
            >
              <span
                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${
                  isLast
                    ? "bg-[#180F2C]/10 border border-[#180F2C]/20"
                    : "bg-[#522B6A]/10 border border-[#522B6A]/15"
                }`}
              >
                <Icon size={16} className={isLast ? "text-[#180F2C]" : "text-[#775A19]"} />
              </span>
              <p
                className={`font-display font-semibold text-base leading-snug ${
                  isLast ? "text-[#180F2C]" : "text-[#1C1917]"
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
