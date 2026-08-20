import { motion } from "framer-motion";
import {
  Flag,
  Sprout,
  HandCoins,
  BookOpen,
  Droplets,
  Venus,
  Users,
  Building2,
  Handshake,
} from "lucide-react";
import ChapterTag from "./ChapterTag";

const AREAS = [
  {
    title: "National Causes",
    desc: "Supporting Bharat-focused initiatives connected with service, protection, and national strength.",
    icon: Flag,
  },
  {
    title: "Village Development",
    desc: "Future local development through Pavitra Gram Vikas and community-led initiatives.",
    icon: Sprout,
  },
  {
    title: "Dignified Opportunities",
    desc: "Creating future earning and participation opportunities through Pavitra Pragati Mitras.",
    icon: HandCoins,
  },
  {
    title: "Education & Children",
    desc: "Supporting learning, stationery, and child-focused development.",
    icon: BookOpen,
  },
  {
    title: "Health & Cleanliness",
    desc: "Encouraging hygiene, cleanliness, and healthier community spaces.",
    icon: Droplets,
  },
  {
    title: "Women & Youth",
    desc: "Creating future participation and earning pathways for women and young people.",
    icon: Venus,
  },
  {
    title: "Community-Led Progress",
    desc: "Encouraging people to become participants in their own development.",
    icon: Users,
  },
  {
    title: "Purpose-Led Cities",
    desc: "Creating urban spaces where citizens can connect with a larger mission.",
    icon: Building2,
  },
  {
    title: "Local Self-Reliance",
    desc: "Building future systems where value, dignity, and opportunity stay closer to communities.",
    icon: Handshake,
  },
];

const IMPAreas = () => (
  <section
    id="impact-areas"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="impact-areas-section"
  >
    <span
      className="absolute top-10 left-4 sm:left-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      03
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label="Impact Areas" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#775A19] max-w-3xl"
      >
        Where Pavitra Aims to{" "}
        <span className="italic">Create Impact</span>
      </motion.h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {AREAS.map((area, i) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group bg-[#FAF7F2] border border-[#522B6A]/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 transition-colors duration-500"
              data-testid={`impact-area-${area.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <div className="w-11 h-11 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Icon size={18} className="text-[#775A19]" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-[#1C1917] leading-snug">
                {area.title}
              </h3>
              <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default IMPAreas;
