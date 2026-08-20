import { motion } from "framer-motion";
import { Users, Handshake, Heart, Sprout, Store, Flower2 } from "lucide-react";
import ChapterTag from "./ChapterTag";

const ROLES = [
  {
    name: "Pavitra Saathi",
    desc: "For people who want to work with the mission.",
    icon: Users,
  },
  {
    name: "Purpose Partner",
    desc: "For NGOs, trusts, institutions, companies, and organisations.",
    icon: Handshake,
  },
  {
    name: "Mission Supporter",
    desc: "For citizens who want to support and follow the movement.",
    icon: Heart,
  },
  {
    name: "Future Pragati Mitra",
    desc: "For people interested in future village/local participation.",
    icon: Sprout,
  },
  {
    name: "Pavitra Vikas Partner",
    desc: "For those who want to open Pavitra stores, franchise centres, or help take the mission to more communities.",
    icon: Store,
  },
];

const JNWho = () => (
  <section
    id="who"
    className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="join-who-section"
  >

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label="Who Can Join" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-3xl sm:text-4xl lg:text-5xl text-[#775A19] max-w-3xl"
      >
        A Movement for Every Hand{" "}
        <span className="italic">That Believes in Bharat</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="mt-6 text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl"
        data-testid="join-who-lead"
      >
        Pavitra is open to people, partners, institutions, and communities who
        want to be part of a purpose-led mission. You can join as:
      </motion.p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ROLES.map((role, i) => {
          const Icon = role.icon;
          return (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group bg-[#FAF7F2] border border-[#522B6A]/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 transition-colors duration-500"
              data-testid={`join-role-${role.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <div className="w-11 h-11 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Icon size={18} className="text-[#775A19]" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-[#1C1917] leading-snug">
                {role.name}
              </h3>
              <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                {role.desc}
              </p>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-[#522B6A] border border-[#D4AF37]/50 rounded-2xl p-6 flex flex-col justify-center"
          data-testid="join-role-tagline-card"
        >
          <Flower2 size={20} className="text-[#D4AF37]" />
          <p className="mt-4 font-display italic font-semibold text-xl text-[#F4F1EA] leading-snug">
            Haath Badhayein, Bharat Banayein
          </p>
          <p className="mt-2 font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#E9C176]">
            Every hand counts
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default JNWho;
