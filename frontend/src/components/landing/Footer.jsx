const HOME_URL = "https://99vcjpt3hxku5gpy-73384231102.shopifypreview.com/";

const COLUMNS = [
  {
    title: "Movement",
    links: [
      { label: "Our Sankalp", action: "hero" },
      { label: "What We Do", href: HOME_URL },
      { label: "Impact", href: HOME_URL },
      { label: "Newsroom", href: HOME_URL },
    ],
  },
  {
    title: "Participate",
    links: [
      { label: "Join", action: "join" },
      { label: "Volunteer", href: HOME_URL },
      { label: "Partner", href: HOME_URL },
      { label: "Donate", href: HOME_URL },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "All Products", href: HOME_URL },
      { label: "Ayurveda", href: HOME_URL },
      { label: "Tea & Beverages", href: HOME_URL },
      { label: "Fragrance", href: HOME_URL },
    ],
  },
  {
    title: "Reach",
    links: [
      { label: "Contact", href: HOME_URL },
      { label: "Gallery", href: HOME_URL },
      { label: "Privacy", href: HOME_URL },
      { label: "Terms", href: HOME_URL },
    ],
  },
];

const Footer = () => {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="bg-[#180F2C] border-t border-[#D4AF37]/15 pt-16 pb-10"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
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
              A people-powered movement for Bharat&rsquo;s upliftment — built
              on pure intention, responsible action, and visible progress.
            </p>
            <div className="mt-8">
              <p className="font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
                Where We Sit
              </p>
              <p className="mt-3 text-sm text-[#F4F1EA]/55 leading-relaxed">
                Pavitra Foundation — Nirmaan Bhavan
                <br />
                Kailashpur Road, Rishikesh,
                <br />
                Uttarakhand — 249201, Bharat
              </p>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="font-mono-x text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
                {col.title}
              </p>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.action ? (
                      <button
                        onClick={() => go(link.action)}
                        className={`text-sm transition-colors duration-300 ${
                          link.action === "hero"
                            ? "text-[#E9C176]"
                            : "text-[#F4F1EA]/60 hover:text-[#E9C176]"
                        }`}
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-[#F4F1EA]/60 hover:text-[#E9C176] transition-colors duration-300"
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
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
            © 2026 Pavitra Swarojgar Kendra · Built for Bharat
          </p>
          <p className="font-mono-x text-[10px] tracking-[0.2em] uppercase text-[#F4F1EA]/40">
            Sankalp → Seva → Nirmaan → Swabhimaan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
