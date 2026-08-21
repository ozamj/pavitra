import { Link, useLocation } from "react-router-dom";
import { useT } from "@/i18n";

const HOME_URL = "https://99vcjpt3hxku5gpy-73384231102.shopifypreview.com/";

const Footer = () => {
  const { pathname } = useLocation();
  const t = useT();
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const COLUMNS = [
    {
      title: t("common.footer.columns.movement"),
      links: [
        { label: t("common.footer.links.ourSankalp"), to: "/our-sankalp", testid: "our-sankalp" },
        { label: t("common.footer.links.whatWeDo"), to: "/what-we-do", testid: "what-we-do" },
        { label: t("common.footer.links.impact"), to: "/impact", testid: "impact" },
        { label: t("common.footer.links.newsroom"), to: "/newsroom", testid: "newsroom" },
      ],
    },
    {
      title: t("common.footer.columns.participate"),
      links: [
        { label: t("common.footer.links.join"), to: "/join-the-movement", testid: "join" },
        { label: t("common.footer.links.volunteer"), href: HOME_URL, testid: "volunteer" },
        { label: t("common.footer.links.partner"), href: HOME_URL, testid: "partner" },
        { label: t("common.footer.links.donate"), href: HOME_URL, testid: "donate" },
      ],
    },
    {
      title: t("common.footer.columns.shop"),
      links: [
        { label: t("common.footer.links.allProducts"), to: "/shop", testid: "all-products" },
        { label: t("common.footer.links.ayurveda"), href: HOME_URL, testid: "ayurveda" },
        { label: t("common.footer.links.tea"), href: HOME_URL, testid: "tea-beverages" },
        { label: t("common.footer.links.fragrance"), href: HOME_URL, testid: "fragrance" },
      ],
    },
    {
      title: t("common.footer.columns.reach"),
      links: [
        { label: t("common.footer.links.contact"), href: HOME_URL, testid: "contact" },
        { label: t("common.footer.links.gallery"), href: HOME_URL, testid: "gallery" },
        { label: t("common.footer.links.privacy"), href: HOME_URL, testid: "privacy" },
        { label: t("common.footer.links.terms"), href: HOME_URL, testid: "terms" },
      ],
    },
  ];

  const isActive = (to) =>
    to === "/our-sankalp"
      ? pathname === "/" || pathname === "/our-sankalp"
      : pathname === to;

  return (
    <footer
      className="bg-[#180F2C] pb-10"
      data-testid="site-footer"
    >
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-16">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="relative inline-block">
              <span
                className="absolute -inset-4 rounded-full bg-[#FAF7F2]/85 blur-xl pointer-events-none"
                aria-hidden="true"
              />
              <img
                src="/pavitra-logo.webp"
                alt="Pavitra — A sankalp for Bharat"
                className="relative h-11 w-auto"
                data-testid="footer-logo-image"
              />
            </span>
            <p className="mt-6 text-sm sm:text-base text-[#F4F1EA]/60 leading-relaxed max-w-xs">
              {t("common.footer.tagline")}
            </p>
            <div className="mt-8">
              <p className="font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
                {t("common.footer.whereWeSit")}
              </p>
              <p className="mt-3 text-sm text-[#F4F1EA]/55 leading-relaxed">
                {t("common.footer.addr1")}
                <br />
                {t("common.footer.addr2")}
                <br />
                {t("common.footer.addr3")}
              </p>
            </div>
          </div>

          {COLUMNS.map((col, ci) => (
            <div key={ci} className="md:col-span-2">
              <p className="font-mono-x text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
                {col.title}
              </p>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.testid}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className={`text-sm transition-colors duration-300 ${
                          isActive(link.to)
                            ? "text-[#E9C176]"
                            : "text-[#F4F1EA]/60 hover:text-[#E9C176]"
                        }`}
                        data-testid={`footer-link-${link.testid}`}
                      >
                        {link.label}
                      </Link>
                    ) : link.action ? (
                      <button
                        onClick={() => go(link.action)}
                        className="text-sm text-[#F4F1EA]/60 hover:text-[#E9C176] transition-colors duration-300"
                        data-testid={`footer-link-${link.testid}`}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-[#F4F1EA]/60 hover:text-[#E9C176] transition-colors duration-300"
                        data-testid={`footer-link-${link.testid}`}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[#F4F1EA]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono-x text-[10px] tracking-[0.2em] uppercase text-[#F4F1EA]/40">
            {t("common.footer.copyright")}
          </p>
          <p className="font-mono-x text-[10px] tracking-[0.2em] uppercase text-[#F4F1EA]/40">
            {t("common.footer.chain")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
