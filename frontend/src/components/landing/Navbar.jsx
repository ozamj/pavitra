import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HOME_URL = "https://99vcjpt3hxku5gpy-73384231102.shopifypreview.com/";

const linkClass =
  "group relative font-mono-x text-[11px] tracking-[0.2em] uppercase text-[#F4F1EA]/70 hover:text-[#E9C176] transition-colors duration-300";
const activeClass =
  "relative font-mono-x text-[11px] tracking-[0.2em] uppercase text-[#E9C176]";

const ActiveMarks = () => (
  <>
    <span className="absolute -bottom-1.5 left-0 w-full h-px bg-[#D4AF37]" />
    <span className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#D4AF37]" />
  </>
);

const HoverMark = () => (
  <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSankalp = pathname === "/" || pathname === "/our-sankalp";
  const isWhatWeDo = pathname === "/what-we-do";
  const isImpact = pathname === "/impact";
  const isJoin = pathname === "/join-the-movement";

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
        <Link to="/" className="group relative" data-testid="nav-logo-button">
          <span
            className="absolute -inset-3.5 rounded-full bg-[#FAF7F2]/85 blur-lg pointer-events-none"
            aria-hidden="true"
          />
          <img
            src="/pavitra-logo.webp"
            alt="Pavitra — A sankalp for Bharat"
            className="relative h-9 sm:h-10 w-auto transition-transform duration-500 group-hover:scale-[1.05]"
            data-testid="nav-logo-image"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" data-testid="nav-site-links">
          <a href={HOME_URL} className={linkClass} data-testid="nav-link-home">
            Home
            <HoverMark />
          </a>
          <Link
            to="/our-sankalp"
            aria-current={isSankalp ? "page" : undefined}
            className={isSankalp ? activeClass : linkClass}
            data-testid="nav-link-our-sankalp"
          >
            Our Sankalp
            {isSankalp ? <ActiveMarks /> : <HoverMark />}
          </Link>
          <Link
            to="/what-we-do"
            aria-current={isWhatWeDo ? "page" : undefined}
            className={isWhatWeDo ? activeClass : linkClass}
            data-testid="nav-link-what-we-do"
          >
            What We Do
            {isWhatWeDo ? <ActiveMarks /> : <HoverMark />}
          </Link>
          <Link
            to="/impact"
            aria-current={isImpact ? "page" : undefined}
            className={isImpact ? activeClass : linkClass}
            data-testid="nav-link-impact"
          >
            Impact
            {isImpact ? <ActiveMarks /> : <HoverMark />}
          </Link>
          <a
            href={`${HOME_URL}#products`}
            className={linkClass}
            data-testid="nav-link-products"
          >
            Products
            <HoverMark />
          </a>
        </nav>

        <Link
          to="/join-the-movement"
          className={`group flex items-center gap-2 font-mono-x text-[11px] sm:text-xs tracking-[0.18em] uppercase px-4 sm:px-5 py-2.5 rounded-full transition-colors duration-400 ${
            isJoin
              ? "bg-[#D4AF37] text-[#180F2C]"
              : "bg-[#522B6A] hover:bg-[#D4AF37] text-[#E9C176] hover:text-[#180F2C]"
          }`}
          data-testid="nav-join-button"
        >
          Join The Movement
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.header>
  );
};

export default Navbar;
