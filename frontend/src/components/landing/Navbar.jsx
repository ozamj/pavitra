import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LANGS, useLang, useT } from "@/i18n";

const HOME_URL = "https://99vcjpt3hxku5gpy-73384231102.shopifypreview.com/";

const linkClass =
  "group relative font-mono-x text-xs sm:text-sm tracking-[0.15em] uppercase text-[#261242]/75 hover:text-[#180F2C] transition-colors duration-300";
const activeClass =
  "relative font-mono-x text-xs sm:text-sm tracking-[0.15em] uppercase text-[#180F2C]";
const joinClass =
  "group relative font-mono-x text-xs sm:text-sm tracking-[0.15em] uppercase text-[#775A19] hover:text-[#180F2C] transition-colors duration-300";

const MENU_LINKS = [
  { key: "ourSankalp", to: "/our-sankalp", testid: "our-sankalp" },
  { key: "whatWeDo", to: "/what-we-do", testid: "what-we-do" },
  { key: "impact", to: "/impact", testid: "impact" },
  { key: "join", to: "/join-the-movement", testid: "join" },
  { key: "newsroom", to: "/newsroom", testid: "newsroom" },
  { key: "shop", to: "/shop", testid: "shop" },
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

const LanguageSwitcher = ({ testid = "nav-language-switcher" }) => {
  const { lang, setLang } = useLang();
  return (
    <div
      className="flex items-center gap-0.5 border border-[#261242]/25 rounded-full p-0.5"
      role="group"
      aria-label="Language"
      data-testid={testid}
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          title={l.label}
          className={`rounded-full px-2.5 py-1.5 font-mono-x text-[10px] sm:text-[11px] tracking-[0.08em] transition-colors duration-300 ${
            lang === l.code
              ? "bg-[#522B6A] text-[#E9C176]"
              : "text-[#261242]/70 hover:text-[#180F2C]"
          }`}
          data-testid={`nav-lang-${l.code}`}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
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
                {t(`common.nav.${link.key}`)}
                {active ? <ActiveMarks /> : <HoverMark />}
              </Link>
            );
          })}
          <a
            href={`${HOME_URL}account`}
            className={linkClass}
            data-testid="nav-link-login"
          >
            {t("common.nav.login")}
            <HoverMark />
          </a>

          <LanguageSwitcher />
        </nav>

        <div className="flex lg:hidden items-center gap-3">
          <LanguageSwitcher testid="nav-language-switcher-mobile-bar" />
          <Link
            to="/join-the-movement"
            className={`font-mono-x text-[11px] tracking-[0.18em] uppercase px-4 py-2.5 rounded-full transition-colors duration-300 ${
              isJoin ? "bg-[#775A19] text-[#FAF7F2]" : "bg-[#522B6A] text-[#E9C176]"
            }`}
            data-testid="nav-join-button"
          >
            {t("common.nav.joinShort")}
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
                      {t(`common.nav.${link.key}`)}
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
                  {t("common.nav.login")}
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
