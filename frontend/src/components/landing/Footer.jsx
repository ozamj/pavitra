const HOME_URL = "https://dazzling-kitsune-eb866a.netlify.app/";

const CHAPTERS = [
  ["02", "The Thought", "thought"],
  ["03", "Our Mission", "mission"],
  ["04", "Our Belief", "belief"],
  ["05", "Founder's Sankalp", "founder"],
  ["06", "Join", "join"],
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
          <div className="md:col-span-5">
            <span className="inline-flex items-center bg-[#FAF7F2] rounded-full px-4 py-1.5 shadow-[0_6px_20px_-8px_rgba(0,0,0,0.5)]">
              <img
                src="/pavitra-logo.webp"
                alt="Pavitra — A sankalp for Bharat"
                className="h-9 w-auto"
                data-testid="footer-logo-image"
              />
            </span>
            <p className="mt-6 text-sm sm:text-base text-[#F4F1EA]/60 leading-relaxed max-w-sm">
              A people-powered movement built on pure intention, responsible
              action, and visible progress — for the upliftment of Bharat.
            </p>
            <p className="mt-5 font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
              A sankalp for Bharat
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono-x text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
              Navigate
            </p>
            <ul className="mt-6 space-y-3.5">
              <li>
                <a
                  href={HOME_URL}
                  className="text-sm text-[#F4F1EA]/60 hover:text-[#E9C176] transition-colors duration-300"
                  data-testid="footer-link-home"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={() => go("hero")}
                  className="text-sm text-[#E9C176]"
                  data-testid="footer-link-our-sankalp"
                >
                  Our Sankalp
                </button>
              </li>
              <li>
                <a
                  href={`${HOME_URL}#products`}
                  className="text-sm text-[#F4F1EA]/60 hover:text-[#E9C176] transition-colors duration-300"
                  data-testid="footer-link-products"
                >
                  Products
                </a>
              </li>
              <li>
                <button
                  onClick={() => go("join")}
                  className="text-sm text-[#F4F1EA]/60 hover:text-[#E9C176] transition-colors duration-300"
                  data-testid="footer-link-join"
                >
                  Join The Movement
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono-x text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
              The Manifesto
            </p>
            <ul className="mt-6 space-y-3.5">
              {CHAPTERS.map(([n, label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => go(id)}
                    className="group flex items-baseline gap-2.5 text-sm text-[#F4F1EA]/60 hover:text-[#E9C176] transition-colors duration-300"
                    data-testid={`footer-chapter-${id}`}
                  >
                    <span className="font-mono-x text-[10px] tracking-[0.2em] text-[#D4AF37]/70">
                      {n}
                    </span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#F4F1EA]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono-x text-[10px] tracking-[0.2em] uppercase text-[#F4F1EA]/40">
            © 2026 Pavitra Sankalp — A Movement for Bharat
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
