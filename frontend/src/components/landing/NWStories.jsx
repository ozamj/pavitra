import { motion } from "framer-motion";
import {
  Users,
  Camera,
  Heart,
  Sprout,
  User,
  PenLine,
} from "lucide-react";
import ChapterTag from "./ChapterTag";

const STORIES = [
  {
    title: "People connected with Pavitra",
    desc: "Faces and voices of the movement — citizens who turned belief into participation.",
    icon: Users,
  },
  {
    title: "Behind-the-scenes stories",
    desc: "How initiatives are imagined, built, and carried forward with care.",
    icon: Camera,
  },
  {
    title: "Purpose-led initiatives",
    desc: "The story behind every action that begins with pure intention.",
    icon: Heart,
  },
  {
    title: "Future community stories",
    desc: "Chronicles of communities rising through dignity and shared effort.",
    icon: Sprout,
  },
  {
    title: "Pavitra Saathi stories",
    desc: "Journeys of the Saathis who carry the mission forward every day.",
    icon: User,
  },
  {
    title: "Founder notes",
    desc: "Reflections and thoughts from Shri Jay Ukani as the movement grows.",
    icon: PenLine,
  },
];

const NWStories = () => (
  <section
    id="stories"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="newsroom-stories-section"
  >
    <span
      className="absolute top-10 left-4 sm:left-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      03
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label="Movement Stories" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#775A19] max-w-3xl"
      >
        Stories of <span className="italic">Sankalp</span>
      </motion.h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STORIES.map((story, i) => {
          const Icon = story.icon;
          return (
            <motion.div
              key={story.title}
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
              data-testid={`story-card-${i + 1}`}
            >
              <div className="w-11 h-11 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Icon size={18} className="text-[#775A19]" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-[#1C1917] leading-snug">
                {story.title}
              </h3>
              <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                {story.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default NWStories;
