import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const CHAPTERS = [
  {
    title: "Sankalp",
    sub: "It begins in silence — a promise made to Bharat, in the presence of one\u2019s own conscience.",
    img: "/assets/s1.jpg",
    chip: "Chapter 01",
  },
  {
    title: "Seva",
    sub: "Hours given, skills shared, presence brought — the sankalp finds its hands.",
    img: "/assets/s2.jpg",
    chip: "Chapter 02",
  },
  {
    title: "Nirmaan",
    sub: "Villages restored. Wells revived. Schools rebuilt. Progress becomes something you can touch.",
    img: "/assets/s4.jpg",
    chip: "Chapter 03",
  },
  {
    title: "Swabhimaan",
    sub: "What returns to the people is not aid — it is their own strength, made visible.",
    img: "/assets/s7.jpg",
    chip: "Chapter 04",
  },
];

const HomeChapters = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setActive(Math.min(CHAPTERS.length - 1, Math.floor(v * CHAPTERS.length)))
  );

  return (
    <div ref={ref} className="relative h-[400vh] bg-[#180F2C]" data-testid="home-chapters-section">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="flex items-center gap-4 font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E9C176]">
              <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
              From Sankalp to Swabhimaan
            </p>
            <h2 className="mt-6 font-caslon font-bold tracking-tight leading-[1.1] text-2xl sm:text-3xl lg:text-4xl text-[#FDFBF7]">
              The journey of a{" "}
              <span className="italic text-[#D4AF37]">single promise.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#FDFBF7]/65 leading-relaxed max-w-lg">
              Pavitra works to convert pure intention into meaningful action —
              supporting national causes today and building the foundation for
              future community development, local opportunities, and Pavitra
              Kosh.
            </p>

            <div className="mt-8 min-h-[7.5rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  data-testid="chapter-active-panel"
                >
                  <h3 className="font-caslon font-bold text-2xl sm:text-3xl text-[#D4AF37]">
                    {CHAPTERS[active].title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#FDFBF7]/75 leading-relaxed max-w-md">
                    {CHAPTERS[active].sub}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              {CHAPTERS.map((c, i) => (
                <span
                  key={c.title}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active ? "w-10 bg-[#D4AF37]" : "w-4 bg-[#FDFBF7]/20"
                  }`}
                  aria-hidden="true"
                />
              ))}
              <span className="ml-3 font-mono-x text-[10px] tracking-[0.25em] text-[#FDFBF7]/45">
                {String(active + 1).padStart(2, "0")} / 04
              </span>
            </div>
          </div>

          <div className="relative h-[38vh] lg:h-[62vh] rounded-2xl overflow-hidden border border-[#D4AF37]/25 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
            {CHAPTERS.map((c, i) => (
              <motion.div
                key={c.title}
                className="absolute inset-0"
                initial={false}
                animate={{
                  opacity: i === active ? 1 : 0,
                  scale: i === active ? 1 : 1.06,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180F2C]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <span className="font-mono-x text-[9px] tracking-[0.25em] uppercase bg-[#D4AF37] text-[#180F2C] px-2.5 py-1 rounded-full">
                    {c.chip}
                  </span>
                  <span className="font-caslon text-lg text-[#FDFBF7]">{c.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChapters;
