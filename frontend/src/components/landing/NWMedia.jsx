import { motion } from "framer-motion";
import {
  FileText,
  Newspaper,
  Image,
  Mic,
  CalendarDays,
  Megaphone,
} from "lucide-react";
import ChapterTag from "./ChapterTag";

const MEDIA = [
  {
    title: "Press releases",
    desc: "Official statements and releases from the Pavitra movement.",
    icon: FileText,
  },
  {
    title: "Media mentions",
    desc: "Where the movement has been seen, quoted, and covered.",
    icon: Newspaper,
  },
  {
    title: "Brand assets",
    desc: "Logos, colours, and identity resources for responsible use.",
    icon: Image,
  },
  {
    title: "Founder interviews",
    desc: "Conversations with Shri Jay Ukani on the sankalp behind Pavitra.",
    icon: Mic,
  },
  {
    title: "Event coverage",
    desc: "Moments and milestones from gatherings across Bharat.",
    icon: CalendarDays,
  },
  {
    title: "Official announcements",
    desc: "Every announcement, straight from the movement.",
    icon: Megaphone,
  },
];

const NWMedia = () => (
  <section
    id="media"
    className="relative bg-[#180F2C] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="newsroom-media-section"
  >
    <div
      className="absolute top-0 left-1/4 w-[30rem] h-[30rem] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0) 70%)",
      }}
      aria-hidden="true"
    />
    <span
      className="absolute bottom-8 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-stroke-ivory opacity-40 select-none pointer-events-none"
      aria-hidden="true"
    >
      04
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="04" label="Media & Press" dark />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.1] text-2xl sm:text-3xl lg:text-4xl text-[#D4AF37] max-w-3xl"
      >
        Media & <span className="italic text-[#E9C176]">Press</span>
      </motion.h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {MEDIA.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-[#241641] border border-[#D4AF37]/15 hover:border-[#D4AF37]/45 rounded-2xl p-6 sm:p-7 transition-colors duration-500"
              data-testid={`media-card-${i + 1}`}
            >
              <div className="w-11 h-11 rounded-full bg-[#522B6A]/40 border border-[#D4AF37]/25 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Icon size={18} className="text-[#E9C176]" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg sm:text-xl text-[#F4F1EA] leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#F4F1EA]/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default NWMedia;
