import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";

const HOME_URL = "https://99vcjpt3hxku5gpy-73384231102.shopifypreview.com/";

const linkClass =
  "group relative font-mono-x text-[10px] tracking-[0.18em] uppercase text-[#F4F1EA]/70 hover:text-[#E9C176] transition-colors duration-300";
const activeClass =
  "relative font-mono-x text-[10px] tracking-[0.18em] uppercase text-[#E9C176]";
const joinClass =
  "group relative font-mono-x text-[10px] tracking-[0.18em] uppercase text-[#D4AF37] hover:text-[#E9C176] transition-colors duration-300";

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
  const [langOpen, setLangOpen] = useState(false);
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
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="group relative shrink-0" data-testid="nav-logo-button">
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

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7" data-testid="nav-site-links">
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
          <Link
            to="/join-the-movement"
            aria-current={isJoin ? "page" : undefined}
            className={isJoin ? activeClass : joinClass}
            data-testid="nav-link-join"
          >
            Join The Movement
            {isJoin ? <ActiveMarks /> : <HoverMark />}
          </Link>
          <a href={HOME_URL} className={linkClass} data-testid="nav-link-newsroom">
            Newsroom
            <HoverMark />
          </a>
          <a
            href={`${HOME_URL}#products`}
            className={linkClass}
            data-testid="nav-link-shop"
          >
            Shop
            <HoverMark />
          </a>
          <a
            href={`${HOME_URL}account`}
            className={linkClass}
            data-testid="nav-link-login"
          >
            Login
            <HoverMark />
          </a>

          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="group flex items-center gap-1.5 font-mono-x text-[10px] tracking-[0.18em] uppercase text-[#F4F1EA]/70 hover:text-[#E9C176] border border-[#F4F1EA]/20 hover:border-[#D4AF37]/50 rounded-full px-3 py-1.5 transition-colors duration-300"
              data-testid="nav-language-button"
              aria-expanded={langOpen}
            >
              <Globe size={12} />
              EN
              <ChevronDown
                size={11}
                className={`transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangOpen(false)}
                  aria-hidden="true"
                />
                <div
                  className="absolute right-0 top-9 z-50 w-44 bg-[#241641] border border-[#D4AF37]/25 rounded-xl p-1.5 shadow-[0_20px_44px_-12px_rgba(0,0,0,0.6)]"
                  data-testid="nav-language-menu"
                >
                  <button
                    onClick={() => setLangOpen(false)}
                    className="flex w-full items-center justify-between px-3 py-2 text-sm text-[#E9C176] rounded-lg hover:bg-[#D4AF37]/10 transition-colors duration-200"
                    data-testid="nav-lang-en"
                  >
                    English
                    <Check size={13} />
                  </button>
                  <button
                    disabled
                    className="flex w-full items-center justify-between px-3 py-2 text-sm text-[#F4F1EA]/40 cursor-not-allowed"
                    data-testid="nav-lang-hi"
                  >
                    हिन्दी
                    <span className="font-mono-x text-[9px] tracking-[0.2em] uppercase">
                      Soon
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </nav>

        <Link
          to="/join-the-movement"
          className="lg:hidden group flex items-center gap-2 bg-[#522B6A] text-[#E9C176] font-mono-x text-[11px] tracking-[0.18em] uppercase px-4 py-2.5 rounded-full"
          data-testid="nav-join-button"
        >
          Join
        </Link>
      </div>
    </motion.header>
  );
};

export default Navbar;
