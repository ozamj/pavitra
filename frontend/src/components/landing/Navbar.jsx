import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { n: "02", label: "Thought", id: "thought" },
  { n: "03", label: "Mission", id: "mission" },
  { n: "04", label: "Belief", id: "belief" },
  { n: "05", label: "Founder", id: "founder" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-[80] transition-colors duration-500 ${
        scrolled
          ? "bg-[#150F1E]/85 backdrop-blur-md border-b border-[#D4AF37]/15"
          : "bg-transparent border-b border-transparent"
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-16 sm:h-20 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          className="group"
          data-testid="nav-logo-button"
        >
          <span className="inline-flex items-center bg-[#FAF7F2] rounded-full px-4 py-1.5 shadow-[0_6px_20px_-8px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.05]">
            <img
              src="/pavitra-logo.webp"
              alt="Pavitra — A sankalp for Bharat"
              className="h-8 sm:h-9 w-auto"
              data-testid="nav-logo-image"
            />
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-7" data-testid="nav-chapter-links">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="group flex items-baseline gap-1.5 font-mono-x text-[11px] tracking-[0.2em] uppercase text-[#F4F1EA]/70 hover:text-[#F4F1EA] transition-colors duration-300"
              data-testid={`nav-link-${l.id}`}
            >
              <span className="text-[#D4AF37] text-[9px]">{l.n}</span>
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => go("join")}
          className="group flex items-center gap-2 bg-[#5B2A86] hover:bg-[#D4AF37] text-[#FAF7F2] font-mono-x text-[11px] sm:text-xs tracking-[0.18em] uppercase px-4 sm:px-5 py-2.5 rounded-full transition-colors duration-400"
          data-testid="nav-join-button"
        >
          Join
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;
