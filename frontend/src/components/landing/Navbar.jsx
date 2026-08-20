import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HOME_URL = "https://99vcjpt3hxku5gpy-73384231102.shopifypreview.com/";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const linkClass =
    "group relative font-mono-x text-[11px] tracking-[0.2em] uppercase text-[#F4F1EA]/70 hover:text-[#E9C176] transition-colors duration-300";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-[80] transition-colors duration-500 ${
        scrolled
          ? "bg-[#180F2C]/90 backdrop-blur-md border-b border-[#D4AF37]/15"
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
          <img
            src="/pavitra-logo-light.webp"
            alt="Pavitra — A sankalp for Bharat"
            className="h-9 sm:h-10 w-auto transition-transform duration-500 group-hover:scale-[1.05]"
            data-testid="nav-logo-image"
          />
        </button>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-site-links">
          <a href={HOME_URL} className={linkClass} data-testid="nav-link-home">
            Home
            <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </a>
          <button
            onClick={() => go("hero")}
            aria-current="page"
            className="relative font-mono-x text-[11px] tracking-[0.2em] uppercase text-[#E9C176]"
            data-testid="nav-link-our-sankalp"
          >
            Our Sankalp
            <span className="absolute -bottom-1.5 left-0 w-full h-px bg-[#D4AF37]" />
            <span className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37]" />
          </button>
          <a
            href={`${HOME_URL}#products`}
            className={linkClass}
            data-testid="nav-link-products"
          >
            Products
            <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        <button
          onClick={() => go("join")}
          className="group flex items-center gap-2 bg-[#522B6A] hover:bg-[#D4AF37] text-[#E9C176] hover:text-[#180F2C] font-mono-x text-[11px] sm:text-xs tracking-[0.18em] uppercase px-4 sm:px-5 py-2.5 rounded-full transition-colors duration-400"
          data-testid="nav-join-button"
        >
          Join The Movement
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
