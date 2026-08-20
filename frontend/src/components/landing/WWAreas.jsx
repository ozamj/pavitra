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
    className="relative bg-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
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

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group bg-[#FAF7F2] border border-[#522B6A]/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 transition-colors duration-500"
              data-testid={`area-card-${area.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
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

export default WWAreas;
