import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HomeNewsletter = () => {
  const [done, setDone] = useState(false);

  return (
    <section
      className="relative overflow-hidden bg-[#180F2C]"
      data-testid="home-newsletter-section"
    >
      <img
        src="/assets/india.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain opacity-[0.14] scale-125"
        loading="lazy"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-8 py-24 sm:py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#E9C176]"
        >
          The Ongoing Sankalp
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.95, delay: 0.1 }}
          className="mt-6 font-caslon font-bold tracking-tight leading-[1.15] text-2xl sm:text-3xl lg:text-4xl text-[#FDFBF7]"
        >
          Walk with us on the road to a{" "}
          <span className="italic text-[#D4AF37]">dignified Bharat.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="mt-5 text-sm sm:text-base text-[#FDFBF7]/70"
        >
          Field notes. Impact letters. Once a fortnight — never more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="mt-10"
        >
          {done ? (
            <p
              className="font-caslon italic text-xl text-[#E9C176]"
              data-testid="newsletter-success"
            >
              Shukriya. You walk with us now.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
              data-testid="newsletter-form"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full flex-1 bg-[#FDFBF7]/10 border border-[#FDFBF7]/25 focus:border-[#D4AF37] rounded-full px-6 py-4 text-sm text-[#FDFBF7] placeholder-[#FDFBF7]/45 outline-none transition-colors duration-300"
                data-testid="newsletter-email-input"
              />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E9C176] text-[#180F2C] font-mono-x text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors duration-300 whitespace-nowrap"
                data-testid="newsletter-subscribe-button"
              >
                Subscribe
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <div className="relative border-t border-[#FDFBF7]/10 py-6">
        <p className="text-center font-mono-x text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#FDFBF7]/45">
          Sankalp • Seva • Nirmaan
        </p>
      </div>
    </section>
  );
};

export default HomeNewsletter;
