import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useT } from "@/i18n";

const NODES = [
  { x: 392, y: 522 },
  { x: 522, y: 392 },
  { x: 522, y: 208 },
  { x: 392, y: 78 },
];

const HomeJoin = () => {
  const t = useT();
  const STEPS = t("home.join.steps");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setActive(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)))
  );

  const stepCards = (
    <>
      {STEPS.map((title, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 rounded-2xl border p-5 transition-colors duration-500 ${
            i === active
              ? "border-[#D4AF37]/60 bg-[#D4AF37]/10"
              : "border-[#FDFBF7]/12 bg-[#FDFBF7]/[0.04]"
          }`}
          data-testid={`join-step-${i + 1}`}
        >
          <span
            className={`w-10 h-10 shrink-0 rounded-full border flex items-center justify-center font-mono-x text-xs ${
              i <= active
                ? "bg-[#D4AF37] border-[#D4AF37] text-[#180F2C]"
                : "border-[#FDFBF7]/25 text-[#FDFBF7]/60"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="font-caslon font-bold text-lg sm:text-xl text-[#FDFBF7]">
            {title}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div ref={ref} className="relative lg:h-[340vh] bg-[#180F2C]" data-testid="home-join-section">
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center overflow-hidden py-20 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="flex items-center gap-4 font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E9C176]">
              <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
              {t("home.join.eyebrow")}
            </p>
            <h2 className="mt-6 font-caslon font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl text-[#FDFBF7]">
              {t("home.join.title1")}{" "}
              <span className="italic text-[#D4AF37]">{t("home.join.title2")}</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#FDFBF7]/65 leading-relaxed max-w-lg">
              {t("home.join.body")}
            </p>

            <div className="relative mt-10 hidden lg:block w-[26rem] h-[26rem]">
              <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient id="goldArc" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#fef08a" />
                    <stop offset="100%" stopColor="#b45309" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                <path
                  d="M 300 540 A 240 240 0 0 0 300 60"
                  stroke="#FDFBF7"
                  strokeOpacity="0.08"
                  strokeWidth="22"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M 300 540 A 240 240 0 0 0 300 60"
                  stroke="url(#goldArc)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{ pathLength: scrollYProgress }}
                />
                {NODES.map((node, i) => (
                  <g key={i}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={i <= active ? 15 : 11}
                      className={`transition-all duration-500 ${
                        i <= active ? "fill-[#D4AF37]" : "fill-[#241641]"
                      }`}
                      stroke="#D4AF37"
                      strokeOpacity={i <= active ? 1 : 0.35}
                      strokeWidth="1.5"
                    />
                    <text
                      x={node.x}
                      y={node.y + 4}
                      textAnchor="middle"
                      className={`font-mono-x text-[11px] ${
                        i <= active ? "fill-[#180F2C]" : "fill-[#FDFBF7]/50"
                      }`}
                    >
                      {i + 1}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-10 lg:hidden space-y-4">{stepCards}</div>
          </div>

          <div className="hidden lg:flex items-center justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-md bg-[#FDFBF7]/[0.06] backdrop-blur-md border border-[#D4AF37]/30 rounded-3xl p-10"
                data-testid="join-active-card"
              >
                <span className="font-caslon font-bold text-6xl text-[#D4AF37]/35">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-caslon font-bold text-2xl sm:text-3xl text-[#FDFBF7]">
                  {STEPS[active]}
                </h3>
                <span className="block mt-5 w-12 h-px bg-[#D4AF37]" aria-hidden="true" />
                <Link
                  to="/join-the-movement"
                  className="group mt-7 inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#E9C176] text-[#180F2C] font-mono-x text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 rounded-full transition-colors duration-400"
                  data-testid="join-active-cta"
                >
                  {t("home.join.cta")}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeJoin;
