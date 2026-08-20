import { motion } from "framer-motion";
import {
  Megaphone,
  Mic,
  Sparkles,
  Handshake,
  Store,
  Users,
  Newspaper,
  ArrowUpRight,
} from "lucide-react";
import ChapterTag from "./ChapterTag";

const UPDATES = [
  { title: "Launch updates", icon: Megaphone },
  { title: "Founder announcements", icon: Mic },
  { title: "New initiatives", icon: Sparkles },
  { title: "Partnership news", icon: Handshake },
  { title: "Store updates", icon: Store },
  { title: "Community activity updates", icon: Users },
  { title: "Media coverage", icon: Newspaper },
];

const NWUpdates = () => (
  <section
    id="updates"
    className="relative bg-gradient-to-b from-[#F3EBDD] to-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="newsroom-updates-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="02" label="Latest Updates" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19]"
      >
        Latest from <span className="italic">Pavitra</span>
      </motion.h2>

      <div className="mt-12">
        {UPDATES.map((update, i) => {
          const Icon = update.icon;
          return (
            <motion.div
              key={update.title}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-center gap-5 py-6 border-t border-[#522B6A]/15 last:border-b"
              data-testid={`update-row-${i + 1}`}
            >
              <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#775A19]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="hidden sm:flex w-11 h-11 shrink-0 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Icon size={18} className="text-[#775A19]" />
              </span>
              <p className="flex-1 font-display text-lg sm:text-2xl text-[#1C1917] leading-snug transition-transform duration-500 group-hover:translate-x-2">
                {update.title}
              </p>
              <span className="font-mono-x text-[9px] tracking-[0.25em] uppercase text-[#775A19]/70 border border-[#D4AF37]/40 rounded-full px-3 py-1">
                Soon
              </span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-[#775A19] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 font-mono-x text-[11px] tracking-[0.25em] uppercase text-[#57534E]"
        data-testid="updates-note"
      >
        Fresh updates will appear here as the movement grows.
      </motion.p>
    </div>
  </section>
);

export default NWUpdates;
