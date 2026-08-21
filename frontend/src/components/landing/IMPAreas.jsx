import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
import { useT } from "@/i18n";

const ICONS = [Flag, Sprout, HandCoins, BookOpen, Droplets, Venus, Users, Building2, Handshake];
const IMGS = [
  "/assets/s2.jpg",
  "/assets/s4.jpg",
  "/assets/d3.jpg",
  "/assets/d6.jpg",
  "/assets/s7.jpg",
  "/assets/s1.jpg",
  "/assets/d7.jpg",
  "/assets/city.jpg",
  "/assets/d1.jpg",
];

const AreaCard = ({ area, img, Icon, i }) => (
  <article
    className="group relative w-[19rem] sm:w-[21rem] shrink-0 snap-center bg-white border border-[#522B6A]/10 hover:border-[#D4AF37]/60 rounded-3xl overflow-hidden shadow-[0_24px_56px_-28px_rgba(82,43,106,0.4)] transition-colors duration-500"
    data-testid={`impact-area-${i + 1}`}
  >
    <div className="relative h-60 sm:h-64 overflow-hidden">
      <img
        src={img}
        alt={area.t}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#180F2C]/50 via-transparent to-transparent"
        aria-hidden="true"
      />
      <span className="absolute top-4 left-4 font-mono-x text-[10px] tracking-[0.25em] bg-[#FAF7F2]/90 backdrop-blur text-[#775A19] border border-[#D4AF37]/50 rounded-full px-3 py-1">
        {String(i + 1).padStart(2, "0")}
      </span>
      <span className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-[#FAF7F2]/95 border border-[#D4AF37]/50 flex items-center justify-center shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <Icon size={18} className="text-[#775A19]" />
      </span>
    </div>
    <div className="p-6">
      <h3 className="font-display font-semibold text-xl text-[#1C1917] leading-snug">
        {area.t}
      </h3>
      <p className="mt-2 text-sm text-[#57534E] leading-relaxed">{area.d}</p>
    </div>
  </article>
);

const IMPAreas = () => {
  const t = useT();
  const AREAS = t("imp.areas.items");
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [range, setRange] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current)
        setRange(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 128));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const x = useTransform(smooth, [0, 1], [0, -range]);

  return (
    <section id="impact-areas" data-testid="impact-areas-section">
      {/* Desktop: sticky horizontal scroll journey */}
      <div
        ref={sectionRef}
        className="relative hidden lg:block bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9]"
        style={{ height: `calc(125vh + ${range}px)` }}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-14">
          <div className="max-w-7xl mx-auto w-full px-16">
            <ChapterTag number="03" label={t("imp.areas.tag")} />
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19] max-w-3xl"
            >
              {t("imp.areas.title1")}{" "}
              <span className="italic">{t("imp.areas.title2")}</span>
            </motion.h2>
          </div>

          <div className="mt-12 overflow-hidden">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex gap-6 px-16 w-max"
              data-testid="impact-areas-track"
            >
              {AREAS.map((area, i) => (
                <AreaCard key={i} area={area} img={IMGS[i]} Icon={ICONS[i]} i={i} />
              ))}
            </motion.div>
          </div>

          <div className="max-w-7xl mx-auto w-full px-16 mt-10">
            <div className="relative h-px bg-[#522B6A]/15 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute inset-0 origin-left bg-gradient-to-r from-[#B08D1E] to-[#D4AF37]"
                data-testid="impact-areas-progress"
              />
            </div>
            <p className="mt-3 font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#775A19]/70">
              {t("imp.areas.scrollHint")}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: native swipe cards */}
      <div className="lg:hidden bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <ChapterTag number="03" label={t("imp.areas.tag")} />
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl text-[#775A19]"
          >
            {t("imp.areas.title1")}{" "}
            <span className="italic">{t("imp.areas.title2")}</span>
          </motion.h2>
        </div>
        <div
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory px-4 sm:px-8 pb-4"
          data-testid="impact-areas-track-mobile"
        >
          {AREAS.map((area, i) => (
            <AreaCard key={i} area={area} img={IMGS[i]} Icon={ICONS[i]} i={i} />
          ))}
        </div>
        <p className="mt-4 px-4 sm:px-8 font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#775A19]/70">
          {t("imp.areas.scrollHint")}
        </p>
      </div>
    </section>
  );
};

export default IMPAreas;
