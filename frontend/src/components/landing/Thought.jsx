import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ChapterTag from "./ChapterTag";

const THOUGHT_IMG =
  "https://images.unsplash.com/photo-1617338727645-987dddeef332?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHw0fHxpbmRpYSUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlJTIwc3VubGlnaHQlMjB1cGxpZnRtZW50JTIwbW92ZW1lbnR8ZW58MHx8fHwxNzg3MTQ0ODkwfDA&ixlib=rb-4.1.0&q=85";

const LINES = [
  "A path where purpose becomes a way of life.",
  "A path where contribution becomes a shared responsibility.",
  "A path where progress is not spoken, but seen.",
  "A path where service is not occasional, but continuous.",
  "A path where Bharat\u2019s upliftment becomes everyone\u2019s sankalp.",
];

const Thought = () => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="thought"
      className="relative bg-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
      data-testid="thought-section"
    >
      <span
        className="absolute top-10 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#5B2A86]/[0.05] select-none pointer-events-none"
        aria-hidden="true"
      >
        02
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <ChapterTag number="02" label="The Thought Behind the Mission" />

        <div className="mt-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#1C1917]"
            >
              A Pure Thought{" "}
              <span className="italic text-[#5B2A86]">for Bharat</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-xl"
              data-testid="thought-lead"
            >
              Pavitra was created with one belief — when intention is pure,
              every action can become a force for Bharat&rsquo;s upliftment.
            </motion.p>

            <div className="mt-12">
              {LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-baseline gap-5 py-5 border-t border-[#5B2A86]/15 last:border-b"
                  data-testid={`thought-line-${i + 1}`}
                >
                  <span className="font-mono-x text-[10px] tracking-[0.25em] text-[#8A6D1F]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg sm:text-2xl text-[#1C1917] leading-snug transition-transform duration-500 group-hover:translate-x-2">
                    {line}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9 }}
              className="mt-10 font-display italic font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#5B2A86]"
              data-testid="thought-closing-line"
            >
              Pavitra is that path.
            </motion.p>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28" ref={imgRef}>
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden border border-[#5B2A86]/15 shadow-[0_32px_64px_-24px_rgba(91,42,134,0.35)]"
            >
              <motion.img
                style={{ y, scale: 1.18 }}
                src={THOUGHT_IMG}
                alt="Sunlit carved arches of Indian heritage architecture"
                className="w-full h-[46vh] lg:h-[58vh] object-cover will-change-transform"
                data-testid="thought-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#150F1E]/45 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#F4F1EA]/85">
                The path of pure intention
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thought;
