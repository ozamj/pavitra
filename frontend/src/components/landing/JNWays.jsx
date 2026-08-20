import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Handshake, Sprout, Store, ArrowUpRight, Plus } from "lucide-react";
import ChapterTag from "./ChapterTag";

const WAYS = [
  {
    slug: "saathi",
    name: "Become a Pavitra Saathi",
    icon: Users,
    desc: "A Pavitra Saathi is not just an employee. A Pavitra Saathi is someone who carries the mission forward with responsibility, dignity, and pride.",
    points: [
      "Store and experience centre",
      "Digital and social media",
      "Operations and coordination",
      "Community initiatives",
      "Customer care",
      "Field development",
      "Partnerships",
    ],
    cta: "Apply as Pavitra Saathi",
  },
  {
    slug: "partner",
    name: "Partner for Purpose",
    icon: Handshake,
    desc: "Pavitra welcomes partnerships with organisations that believe in meaningful social action.",
    points: [
      "NGOs",
      "Trusts",
      "Educational institutions",
      "Community organisations",
      "CSR teams",
      "Local bodies",
      "Social leaders",
      "Purpose-led institutions",
    ],
    cta: "Partner with Us",
  },
  {
    slug: "pragati-mitra",
    name: "Become a Future Pavitra Pragati Mitra",
    icon: Sprout,
    desc: "Pavitra Pragati Mitras will be part of the future local and rural participation model. They will help carry Pavitra\u2019s mission closer to people, communities, and villages.",
    points: [
      "Local participation",
      "Village development",
      "Community trust-building",
      "Dignified earning",
      "Purpose-led distribution",
      "Pavitra Kosh awareness",
    ],
    cta: "Register Interest",
  },
  {
    slug: "vikas-partner",
    name: "Become a Pavitra Vikas Partner",
    icon: Store,
    desc: "Pavitra Vikas Partners will help take the Pavitra movement to more cities, towns, and communities through future stores, franchise centres, and local presence. This role is for people who do not want to open just another store — but want to build a centre of purpose, trust, and participation.",
    points: [
      "Pavitra stores",
      "Franchise opportunities",
      "Local expansion",
      "Community connection",
      "Purpose-led retail",
      "Bharat-building participation",
    ],
    cta: "Explore Vikas Partnership",
  },
];

const JNWays = () => {
  const [open, setOpen] = useState(0);

  return (
  <section
    id="ways"
    className="relative bg-gradient-to-b from-[#F5ECD9] to-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="join-ways-section"
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

    <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="04" label="Ways to Join" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.1] text-2xl sm:text-3xl lg:text-4xl text-[#775A19] max-w-3xl"
      >
        Ways to Join the{" "}
        <span className="italic">Pavitra Movement</span>
      </motion.h2>

      <div className="mt-14">
        {WAYS.map((way, i) => {
          const Icon = way.icon;
          const isOpen = open === i;
          return (
            <motion.div
              key={way.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-[#522B6A]/15 last:border-b"
              data-testid={`join-way-${way.slug}`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group w-full flex items-center gap-5 sm:gap-8 py-6 sm:py-8 text-left"
                aria-expanded={isOpen}
                data-testid={`join-way-${way.slug}-toggle`}
              >
                <span className="font-mono-x text-[10px] sm:text-xs tracking-[0.25em] text-[#775A19]/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full border flex items-center justify-center transition-colors duration-400 ${
                    isOpen
                      ? "bg-[#775A19] border-[#775A19]"
                      : "bg-[#522B6A]/10 border-[#522B6A]/20 group-hover:border-[#775A19]/50"
                  }`}
                >
                  <Icon
                    size={19}
                    className={isOpen ? "text-[#FAF7F2]" : "text-[#775A19]"}
                  />
                </span>
                <span
                  className={`flex-1 font-display font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug transition-colors duration-400 ${
                    isOpen ? "text-[#775A19]" : "text-[#1C1917] group-hover:text-[#775A19]"
                  }`}
                >
                  {way.name}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-colors duration-400 ${
                    isOpen
                      ? "border-[#775A19] text-[#775A19]"
                      : "border-[#522B6A]/25 text-[#522B6A]/60 group-hover:border-[#775A19]/50"
                  }`}
                >
                  <Plus size={16} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                    data-testid={`join-way-${way.slug}-panel`}
                  >
                    <div className="pb-9 pl-16 sm:pl-[7.5rem] pr-2 sm:pr-8 grid lg:grid-cols-2 gap-8">
                      <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                        {way.desc}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 content-start">
                        {way.points.map((point) => (
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
                      <div className="lg:col-span-2">
                        <button
                          className="group/btn inline-flex items-center gap-3 border border-[#522B6A]/40 hover:bg-[#522B6A] text-[#522B6A] hover:text-[#FAF7F2] font-mono-x text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-6 py-3.5 rounded-full transition-colors duration-400"
                          data-testid={`join-way-${way.slug}-button`}
                        >
                          {way.cta}
                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

export default JNWays;
