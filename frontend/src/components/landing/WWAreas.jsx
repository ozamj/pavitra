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
];

const WWAreas = () => (
  <section
    id="areas"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="ww-areas-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label="Areas of Work" />

      <div className="mt-12">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19]"
        >
          Where <span className="italic">Pavitra Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl"
          data-testid="ww-areas-lead"
        >
          Pavitra is being built as a multi-dimensional movement for
          Bharat&rsquo;s upliftment. Its work is not limited to one activity,
          one location, or one section of society.
        </motion.p>
      </div>

      <div className="mt-14 grid lg:grid-cols-2 gap-x-16 border-b border-[#522B6A]/15">
        {AREAS.map((area, i) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 5) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex items-start gap-5 py-7 border-t border-[#522B6A]/15"
              data-testid={`area-row-${area.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#775A19] pt-2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="w-11 h-11 shrink-0 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 flex items-center justify-center transition-colors duration-500 group-hover:bg-[#522B6A] group-hover:border-[#522B6A]">
                <Icon
                  size={18}
                  className="text-[#775A19] group-hover:text-[#E9C176] transition-colors duration-500"
                />
              </span>
              <div>
                <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#1C1917] leading-snug transition-transform duration-500 group-hover:translate-x-1.5">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-sm sm:text-base text-[#57534E] leading-relaxed">
                  {area.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WWAreas;
