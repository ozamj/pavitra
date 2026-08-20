import { motion } from "framer-motion";
import {
  Flag,
  Users,
  Sprout,
  HandCoins,
  Venus,
  Rocket,
  BookOpen,
  Droplets,
  Handshake,
  Store,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";
import ChapterTag from "./ChapterTag";

const AREAS = [
  {
    title: "National Service",
    desc: "Supporting Bharat-focused causes connected with service, protection, and national pride.",
    icon: Flag,
  },
  {
    title: "Community Upliftment",
    desc: "Creating initiatives that support people, places, and local needs with dignity.",
    icon: Users,
  },
  {
    title: "Village Development",
    desc: "Future local development through Pavitra Gram Vikas and community-led progress.",
    icon: Sprout,
  },
  {
    title: "Dignified Opportunities",
    desc: "Creating future earning and participation opportunities through Pavitra Pragati Mitras.",
    icon: HandCoins,
  },
  {
    title: "Women Empowerment",
    desc: "Building future pathways for women to participate, earn, lead, and contribute.",
    icon: Venus,
  },
  {
    title: "Youth Participation",
    desc: "Giving young people a meaningful role in Bharat\u2019s progress.",
    icon: Rocket,
  },
  {
    title: "Education & Children",
    desc: "Supporting learning, stationery, school needs, and child-focused initiatives.",
    icon: BookOpen,
  },
  {
    title: "Health & Cleanliness",
    desc: "Encouraging hygiene, cleanliness, and healthier community spaces.",
    icon: Droplets,
  },
  {
    title: "Local Self-Reliance",
    desc: "Creating systems where communities can participate in their own development.",
    icon: Handshake,
  },
  {
    title: "Purpose-Led Retail",
    desc: "Building stores and platforms that do not only sell, but also connect people with a larger mission.",
    icon: Store,
  },
  {
    title: "Pavitra Kosh",
    desc: "A future development fund designed to support visible, local, and community-focused initiatives.",
    icon: PiggyBank,
  },
  {
    title: "Trust-Based Systems",
    desc: "Creating clear, responsible, and visible ways to show how Pavitra\u2019s initiatives create progress.",
    icon: ShieldCheck,
  },
];

const WWAreas = () => (
  <section
    id="areas"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="ww-areas-section"
  >
    <span
      className="absolute top-10 left-4 sm:left-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      03
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label="Areas of Work" />

      <div className="mt-12 lg:flex lg:items-end lg:justify-between lg:gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#775A19]"
        >
          Where <span className="italic">Pavitra Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 lg:mt-0 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl"
          data-testid="ww-areas-lead"
        >
          Pavitra is being built as a multi-dimensional movement for
          Bharat&rsquo;s upliftment. Its work is not limited to one activity,
          one location, or one section of society.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center items-center gap-3.5 sm:gap-4 max-w-5xl mx-auto">
        {AREAS.map((area, i) => {
          const Icon = area.icon;
          const size =
            i % 5 === 0
              ? "px-7 py-4 sm:px-9 sm:py-5"
              : i % 3 === 0
                ? "px-6 py-3.5"
                : "px-5 py-3";
          const titleSize =
            i % 5 === 0 ? "text-lg sm:text-xl" : i % 3 === 0 ? "text-base sm:text-lg" : "text-sm sm:text-base";
          const tilt =
            i % 3 === 0 ? "sm:-rotate-2" : i % 3 === 1 ? "sm:rotate-1" : "";
          const lift = i % 4 === 1 ? "sm:translate-y-3" : i % 4 === 3 ? "sm:-translate-y-2" : "";
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: i * 0.05,
              }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className={`group cursor-default rounded-full bg-[#FAF7F2] border border-[#522B6A]/15 hover:border-[#D4AF37] hover:bg-[#522B6A] transition-colors duration-400 ${size} ${tilt} ${lift}`}
              data-testid={`area-chip-${area.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <span className="flex items-center gap-2.5">
                <Icon
                  size={17}
                  className="shrink-0 text-[#775A19] group-hover:text-[#D4AF37] transition-colors duration-400"
                />
                <span
                  className={`font-display font-semibold leading-none text-[#1C1917] group-hover:text-[#F4F1EA] transition-colors duration-400 ${titleSize}`}
                >
                  {area.title}
                </span>
              </span>
              <span className="block max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                <span className="block pt-2 text-xs sm:text-sm text-[#57534E] group-hover:text-[#F4F1EA]/75 leading-relaxed max-w-56">
                  {area.desc}
                </span>
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WWAreas;
