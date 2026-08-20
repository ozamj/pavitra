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
    img: "/assets/s2.jpg",
  },
  {
    title: "Village Development",
    desc: "Future local development through Pavitra Gram Vikas and community-led initiatives.",
    icon: Sprout,
    img: "/assets/s4.jpg",
  },
  {
    title: "Dignified Opportunities",
    desc: "Creating future earning and participation opportunities through Pavitra Pragati Mitras.",
    icon: HandCoins,
    img: "/assets/d3.jpg",
  },
  {
    title: "Education & Children",
    desc: "Supporting learning, stationery, and child-focused development.",
    icon: BookOpen,
    img: "/assets/d6.jpg",
  },
  {
    title: "Health & Cleanliness",
    desc: "Encouraging hygiene, cleanliness, and healthier community spaces.",
    icon: Droplets,
    img: "/assets/s7.jpg",
  },
  {
    title: "Women & Youth",
    desc: "Creating future participation and earning pathways for women and young people.",
    icon: Venus,
    img: "/assets/s1.jpg",
  },
  {
    title: "Community-Led Progress",
    desc: "Encouraging people to become participants in their own development.",
    icon: Users,
    img: "/assets/d7.jpg",
  },
  {
    title: "Purpose-Led Cities",
    desc: "Creating urban spaces where citizens can connect with a larger mission.",
    icon: Building2,
    img: "/assets/city.jpg",
  },
  {
    title: "Local Self-Reliance",
    desc: "Building future systems where value, dignity, and opportunity stay closer to communities.",
    icon: Handshake,
    img: "/assets/d1.jpg",
  },
];

const IMPAreas = () => (
  <section
    id="impact-areas"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="impact-areas-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label="Impact Areas" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19] max-w-3xl"
      >
        Where Pavitra Aims to{" "}
        <span className="italic">Create Impact</span>
      </motion.h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {AREAS.map((area, i) => {
          const Icon = area.icon;
          return (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-[#522B6A]/10 hover:border-[#D4AF37]/60 rounded-2xl overflow-hidden shadow-[0_16px_40px_-24px_rgba(82,43,106,0.3)] transition-colors duration-500"
              data-testid={`impact-area-${area.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={area.img}
                  alt={area.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#180F2C]/45 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-[#FAF7F2]/95 border border-[#D4AF37]/50 flex items-center justify-center shadow-md">
                  <Icon size={17} className="text-[#775A19]" />
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display font-semibold text-lg text-[#1C1917] leading-snug">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default IMPAreas;
