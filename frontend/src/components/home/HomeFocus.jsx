import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    tag: "Rashtriya Seva",
    title: "National Service",
    text: "Supporting causes connected with Bharat\u2019s strength and protection.",
    img: "/assets/d1.jpg",
    cta: "Learn More",
    to: "/what-we-do",
  },
  {
    tag: "Samuday",
    title: "Community Upliftment",
    text: "Preparing initiatives that will support people, places, and local needs.",
    img: "/assets/d3.jpg",
    cta: "Learn More",
    to: "/what-we-do",
  },
  {
    tag: "Uddyam",
    title: "Purpose-Led Products",
    text: "Creating products that carry the spirit of trust, purity, and responsibility.",
    img: "/assets/d6.jpg",
    cta: "Explore Collection",
    to: "/shop",
  },
];

const FocusCard = ({ card }) => (
  <article
    className="w-72 sm:w-80 shrink-0 bg-[#FAF7F2] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-[0_32px_64px_-24px_rgba(0,0,0,0.55)]"
    data-testid={`focus-card-${card.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
  >
    <div className="relative h-44">
      <img src={card.img} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#180F2C]/45 to-transparent" />
      <span className="absolute top-4 left-4 font-mono-x text-[9px] tracking-[0.22em] uppercase bg-[#180F2C]/70 backdrop-blur text-[#E9C176] border border-[#D4AF37]/40 px-3 py-1 rounded-full">
        {card.tag}
      </span>
    </div>
    <div className="p-6">
      <h3 className="font-caslon font-bold text-xl text-[#1C1917]">{card.title}</h3>
      <p className="mt-2 text-sm text-[#57534E] leading-relaxed">{card.text}</p>
      <Link
        to={card.to}
        className="group mt-4 inline-flex items-center gap-2 font-mono-x text-[10px] tracking-[0.2em] uppercase text-[#775A19] hover:text-[#522B6A] transition-colors duration-300"
        data-testid={`focus-cta-${card.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
      >
        {card.cta}
        <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  </article>
);

const FanOut = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const spread = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });

  const x0 = useTransform(spread, [0.15, 0.8], ["110%", "0%"]);
  const x2 = useTransform(spread, [0.15, 0.8], ["-110%", "0%"]);
  const r0 = useTransform(spread, [0.15, 0.8], [8, 0]);
  const r2 = useTransform(spread, [0.15, 0.8], [-8, 0]);
  const midY = useTransform(spread, [0.15, 0.8], [60, 0]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);

  return (
    <div ref={ref} className="relative h-[300vh] hidden lg:block" data-testid="home-focus-section">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#F5ECD9] to-[#FAF7F2]">
        <motion.div style={{ opacity: introOpacity }} className="text-center px-4">
          <p className="flex items-center justify-center gap-4 font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#775A19]">
            <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
            Our Current Focus
            <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
          </p>
          <h2 className="mt-6 font-caslon font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl text-[#1C1917]">
            Our Work Begins <span className="italic text-[#775A19]">with Bharat</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl mx-auto">
            Pavitra begins by supporting national causes and building a
            platform where people can connect with a larger mission for
            Bharat&rsquo;s upliftment.
          </p>
        </motion.div>

        <div className="relative mt-14 flex items-center justify-center">
          <motion.div style={{ x: x0, rotate: r0 }} className="relative z-10">
            <FocusCard card={CARDS[0]} />
          </motion.div>
          <motion.div style={{ y: midY }} className="relative z-20 -mx-6">
            <FocusCard card={CARDS[1]} />
          </motion.div>
          <motion.div style={{ x: x2, rotate: r2 }} className="relative z-10">
            <FocusCard card={CARDS[2]} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const HomeFocus = () => (
  <>
    <FanOut />
    <section className="lg:hidden bg-gradient-to-b from-[#F5ECD9] to-[#FAF7F2] py-20" data-testid="home-focus-section-mobile">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <p className="flex items-center gap-4 font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#775A19]">
          <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
          Our Current Focus
        </p>
        <h2 className="mt-6 font-caslon font-bold text-3xl text-[#1C1917]">
          Our Work Begins <span className="italic text-[#775A19]">with Bharat</span>
        </h2>
        <p className="mt-4 text-sm text-[#57534E] leading-relaxed">
          Pavitra begins by supporting national causes and building a platform
          where people can connect with a larger mission for Bharat&rsquo;s
          upliftment.
        </p>
        <div className="mt-10 space-y-6">
          {CARDS.map((card) => (
            <FocusCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default HomeFocus;
