import { motion } from "framer-motion";
import { Users, Handshake, Sprout, Store, ArrowUpRight } from "lucide-react";
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

const JNWays = () => (
  <section
    id="ways"
    className="relative bg-[#180F2C] py-20 sm:py-28 lg:py-36 overflow-hidden"
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
      className="absolute bottom-8 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-stroke-ivory opacity-40 select-none pointer-events-none"
      aria-hidden="true"
    >
      04
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="04" label="Ways to Join" dark />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.1] text-2xl sm:text-3xl lg:text-4xl text-[#D4AF37] max-w-3xl"
      >
        Ways to Join the{" "}
        <span className="italic text-[#E9C176]">Pavitra Movement</span>
      </motion.h2>

      <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
        {WAYS.map((way, i) => {
          const Icon = way.icon;
          return (
            <motion.div
              key={way.slug}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.85,
                delay: (i % 2) * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-[#241641] border border-[#D4AF37]/15 hover:border-[#D4AF37]/45 rounded-2xl p-7 sm:p-9 transition-colors duration-500"
              data-testid={`join-way-${way.slug}`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-full bg-[#522B6A]/40 border border-[#D4AF37]/25 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={20} className="text-[#E9C176]" />
                </div>
                <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#D4AF37]/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 font-display font-semibold text-xl sm:text-2xl text-[#F4F1EA]">
                {way.name}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#F4F1EA]/60 leading-relaxed">
                {way.desc}
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 flex-1">
                {way.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-baseline gap-3 text-sm text-[#F4F1EA]/70"
                  >
                    <span className="text-[#D4AF37]" aria-hidden="true">
                      —
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <button
                className="group/btn mt-8 inline-flex items-center justify-between gap-3 border border-[#D4AF37]/40 hover:bg-[#D4AF37] text-[#E9C176] hover:text-[#180F2C] font-mono-x text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-5 py-3.5 rounded-full transition-colors duration-400 w-full"
                data-testid={`join-way-${way.slug}-button`}
              >
                {way.cta}
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

export default JNWays;
