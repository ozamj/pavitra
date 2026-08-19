import { motion } from "framer-motion";
import { Quote, ArrowUpRight, Users, Flame, TrendingUp } from "lucide-react";
import ChapterTag from "./ChapterTag";

const FOUNDER_IMG =
  "https://images.pexels.com/photos/5940089/pexels-photo-5940089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const PS = [
  {
    title: "People",
    line: "Because no movement can rise without people\u2019s participation.",
    icon: Users,
  },
  {
    title: "Purpose",
    line: "Because every action must carry pure intention.",
    icon: Flame,
  },
  {
    title: "Progress",
    line: "Because every sankalp must lead to visible nirmaan.",
    icon: TrendingUp,
  },
];

const Founder = () => (
  <section
    id="founder"
    className="relative bg-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="founder-section"
  >
    <span
      className="absolute top-10 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#5B2A86]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      05
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="05" label={"Founder’s Sankalp"} />

      <div className="mt-12 grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 order-2 lg:order-1"
        >
          <div className="relative rounded-t-[9rem] rounded-b-2xl overflow-hidden border border-[#5B2A86]/15 shadow-[0_32px_64px_-24px_rgba(91,42,134,0.35)]">
            <img
              src={FOUNDER_IMG}
              alt="Shri Pramod Kaushal, Founder of Pavitra"
              className="w-full h-[44vh] lg:h-[52vh] object-cover"
              data-testid="founder-portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150F1E]/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-display text-lg text-[#F4F1EA]">
                Shri Pramod Kaushal
              </p>
              <p className="font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#F4F1EA]/70 mt-1">
                Founder, Pavitra
              </p>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-8 order-1 lg:order-2">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#1C1917]"
          >
            A Message from{" "}
            <span className="italic text-[#5B2A86]">the Founder</span>
          </motion.h2>

          <motion.blockquote
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.12 }}
            className="relative mt-10 pl-8 sm:pl-12 border-l-2 border-[#8A6D1F]/50"
            data-testid="founder-quote"
          >
            <Quote
              size={34}
              className="absolute -left-4 -top-4 text-[#D4AF37] fill-[#D4AF37]/15"
            />
            <p className="font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed text-[#1C1917]">
              &ldquo;Pavitra was created with a pure thought — that
              Bharat&rsquo;s progress can be strengthened through purpose,
              trust, and people&rsquo;s participation. We begin with a sankalp,
              but our destination is a movement where every citizen can feel
              connected to the upliftment of Bharat.&rdquo;
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8"
          >
            <button
              className="group inline-flex items-center gap-3 border border-[#5B2A86]/40 hover:bg-[#5B2A86] text-[#5B2A86] hover:text-[#FAF7F2] font-mono-x text-[11px] sm:text-xs tracking-[0.2em] uppercase px-6 py-3.5 rounded-full transition-colors duration-400"
              data-testid="founder-story-button"
            >
              Read Full Founder Story
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 lg:mt-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="font-mono-x text-xs sm:text-sm tracking-[0.3em] uppercase text-[#5B2A86] text-center"
          data-testid="three-ps-heading"
        >
          Pavitra Stands on 3 P&rsquo;s
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6 lg:gap-8">
          {PS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.85,
                  delay: i * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-[#5B2A86]/12 hover:border-[#5B2A86]/35 rounded-2xl p-7 sm:p-8 text-center shadow-[0_16px_40px_-24px_rgba(91,42,134,0.3)] transition-colors duration-500"
                data-testid={`three-p-${p.title.toLowerCase()}`}
              >
                <div className="mx-auto w-14 h-14 rounded-full bg-[#5B2A86]/10 border border-[#5B2A86]/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Icon size={22} className="text-[#5B2A86]" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-xl sm:text-2xl text-[#1C1917]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
                  {p.line}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
