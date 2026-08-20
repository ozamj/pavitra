import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check, Menu, X } from "lucide-react";

const HOME_URL = "https://99vcjpt3hxku5gpy-73384231102.shopifypreview.com/";

const linkClass =
  "group relative font-mono-x text-xs sm:text-sm tracking-[0.15em] uppercase text-[#261242]/75 hover:text-[#180F2C] transition-colors duration-300";
const activeClass =
  "relative font-mono-x text-xs sm:text-sm tracking-[0.15em] uppercase text-[#180F2C]";
const joinClass =
  "group relative font-mono-x text-xs sm:text-sm tracking-[0.15em] uppercase text-[#775A19] hover:text-[#180F2C] transition-colors duration-300";

const MENU_LINKS = [
  { label: "Our Sankalp", to: "/our-sankalp", testid: "our-sankalp" },
  { label: "What We Do", to: "/what-we-do", testid: "what-we-do" },
  { label: "Impact", to: "/impact", testid: "impact" },
  { label: "Join The Movement", to: "/join-the-movement", testid: "join" },
  { label: "Newsroom", to: "/newsroom", testid: "newsroom" },
  { label: "Shop", to: "/shop", testid: "shop" },
];

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
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [pathname]);

  const isActive = (to) => pathname === to;
  const isJoin = pathname === "/join-the-movement";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-[80] bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#522B6A]/10 transition-shadow duration-500 ${
        scrolled ? "shadow-[0_10px_36px_-20px_rgba(24,15,44,0.4)]" : ""
      }`}
      data-testid="main-navbar"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="group shrink-0" data-testid="nav-logo-button">
          <img
            src="/pavitra-logo.webp"
            alt="Pavitra — A sankalp for Bharat"
            className="h-9 sm:h-10 w-auto transition-transform duration-500 group-hover:scale-[1.05]"
            data-testid="nav-logo-image"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7" data-testid="nav-site-links">
          {MENU_LINKS.map((link) => {
            const active = isActive(link.to);
            const isJoinLink = link.to === "/join-the-movement";
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={
                  active ? activeClass : isJoinLink ? joinClass : linkClass
                }
                data-testid={`nav-link-${link.testid}`}
              >
                {link.label}
                {active ? <ActiveMarks /> : <HoverMark />}
              </Link>
            );
          })}
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
              className="group flex items-center gap-1.5 font-mono-x text-xs sm:text-sm tracking-[0.15em] uppercase text-[#261242]/75 hover:text-[#180F2C] border border-[#261242]/25 hover:border-[#775A19]/60 rounded-full px-3.5 py-2 transition-colors duration-300"
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
                  className="absolute right-0 top-9 z-50 w-44 bg-white border border-[#522B6A]/15 rounded-xl p-1.5 shadow-[0_20px_44px_-12px_rgba(24,15,44,0.25)]"
                  data-testid="nav-language-menu"
                >
                  <button
                    onClick={() => setLangOpen(false)}
                    className="flex w-full items-center justify-between px-3 py-2 text-sm text-[#775A19] rounded-lg hover:bg-[#F5ECD9] transition-colors duration-200"
                    data-testid="nav-lang-en"
                  >
                    English
                    <Check size={13} />
                  </button>
                  <button
                    disabled
                    className="flex w-full items-center justify-between px-3 py-2 text-sm text-[#1C1917]/35 cursor-not-allowed"
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

        <div className="flex lg:hidden items-center gap-3">
          <Link
            to="/join-the-movement"
            className={`font-mono-x text-[11px] tracking-[0.18em] uppercase px-4 py-2.5 rounded-full transition-colors duration-300 ${
              isJoin ? "bg-[#775A19] text-[#FAF7F2]" : "bg-[#522B6A] text-[#E9C176]"
            }`}
            data-testid="nav-join-button"
          >
            Join
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="w-10 h-10 rounded-full border border-[#261242]/25 text-[#261242] flex items-center justify-center"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            data-testid="nav-menu-toggle"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[#FAF7F2] border-b border-[#522B6A]/10"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 space-y-1">
              {MENU_LINKS.map((link, i) => {
                const active = isActive(link.to);
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between py-3.5 border-b border-[#522B6A]/10 font-mono-x text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                        active ? "text-[#775A19]" : "text-[#261242]/80"
                      }`}
                      data-testid={`mobile-link-${link.testid}`}
                    >
                      {link.label}
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" aria-hidden="true" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.4 }}
                className="flex items-center justify-between pt-4"
              >
                <a
                  href={`${HOME_URL}account`}
                  className="font-mono-x text-sm tracking-[0.15em] uppercase text-[#261242]/80"
                  data-testid="mobile-link-login"
                >
                  Login
                </a>
                <span className="flex items-center gap-1.5 font-mono-x text-[10px] tracking-[0.2em] uppercase text-[#261242]/60 border border-[#261242]/20 rounded-full px-3 py-1.5">
                  <Globe size={11} />
                  EN
                </span>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
