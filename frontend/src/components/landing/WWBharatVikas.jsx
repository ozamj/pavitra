import { motion } from "framer-motion";
import { Sprout, Building2, PiggyBank, ArrowUpRight } from "lucide-react";
import ChapterTag from "./ChapterTag";

const PILLARS = [
  {
    slug: "gram",
    name: "Pavitra Gram Vikas",
    icon: Sprout,
    desc: "Taking development closer to villages through participation, dignity, local opportunity, and future Pavitra Kosh.",
    points: [
      "Local participation",
      "Dignified earning opportunities",
      "Pavitra Pragati Mitras",
      "Village-level initiatives",
      "Pavitra Kosh",
      "Community-led progress",
    ],
    cta: "Explore Pavitra Gram Vikas",
  },
  {
    slug: "nagar",
    name: "Pavitra Nagar Vikas",
    icon: Building2,
    desc: "Connecting cities and towns with purpose-led participation through Pavitra stores, digital platforms, and citizen contribution.",
    points: [
      "Experience centres",
      "Purpose-led products",
      "Citizen participation",
      "National contribution",
      "Future city-level initiatives",
    ],
    cta: "Explore Pavitra Nagar Vikas",
  },
  {
    slug: "kosh",
    name: "Pavitra Kosh",
    icon: PiggyBank,
    desc: "A future fund for visible progress, created to support meaningful local initiatives that people can see, feel, and remember.",
    points: [
      "Education support",
      "Cleanliness initiatives",
      "Water-related needs",
      "Health and hygiene support",
      "Women and youth participation",
      "Village-level development",
    ],
    cta: "Explore Pavitra Kosh",
  },
];

const WWBharatVikas = () => (
  <section
    id="bharat-vikas"
    className="relative bg-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="ww-bharat-vikas-section"
  >
    <div
      className="absolute top-0 right-1/4 w-[30rem] h-[30rem] rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.12) 0%, rgba(212,175,55,0) 70%)",
      }}
      aria-hidden="true"
    />
    <span
      className="absolute bottom-8 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      04
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="04" label="The Larger Identity" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.1] text-2xl sm:text-3xl lg:text-4xl text-[#775A19] max-w-3xl"
      >
        Pavitra <span className="italic">Bharat Vikas</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl"
        data-testid="ww-bharat-vikas-lead"
      >
        Pavitra Bharat Vikas is the larger national identity of the movement —
        connecting citizens, cities, villages, communities, and causes under
        one Pavitra Sankalp for Bharat.
      </motion.p>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PILLARS.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.slug}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.85,
                delay: i * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-white border border-[#522B6A]/12 hover:border-[#D4AF37]/45 rounded-2xl p-7 sm:p-8 transition-colors duration-500"
              data-testid={`vikas-card-${pillar.slug}`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={20} className="text-[#775A19]" />
                </div>
                <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#775A19]/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 font-display font-semibold text-xl sm:text-2xl text-[#1C1917]">
                {pillar.name}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
                {pillar.desc}
              </p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-baseline gap-3 text-sm text-[#1C1917]/70"
                  >
                    <span className="text-[#B08D1E]" aria-hidden="true">
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <button
                className="group/btn mt-8 inline-flex items-center justify-between gap-3 border border-[#522B6A]/40 hover:bg-[#522B6A] text-[#522B6A] hover:text-[#FAF7F2] font-mono-x text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-5 py-3.5 rounded-full transition-colors duration-400 w-full"
                data-testid={`explore-${pillar.slug}-button`}
              >
                {pillar.cta}
                <ArrowUpRight
                  size={14}
                  className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WWBharatVikas;
