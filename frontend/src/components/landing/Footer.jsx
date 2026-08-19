const Footer = () => (
  <footer
    className="bg-[#150F1E] border-t border-[#D4AF37]/15 py-14"
    data-testid="site-footer"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center bg-[#FAF7F2] rounded-full px-4 py-1.5 shadow-[0_6px_20px_-8px_rgba(0,0,0,0.5)]">
            <img
              src="/pavitra-logo.webp"
              alt="Pavitra — A sankalp for Bharat"
              className="h-9 w-auto"
              data-testid="footer-logo-image"
            />
          </span>
          <p className="font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
            A sankalp for Bharat
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3">
          {[
            ["Thought", "thought"],
            ["Mission", "mission"],
            ["Belief", "belief"],
            ["Founder", "founder"],
            ["Join", "join"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-mono-x text-[11px] tracking-[0.2em] uppercase text-[#F4F1EA]/55 hover:text-[#D4AF37] transition-colors duration-300"
              data-testid={`footer-link-${id}`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-10 pt-8 border-t border-[#F4F1EA]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono-x text-[10px] tracking-[0.2em] uppercase text-[#F4F1EA]/40">
          © 2026 Pavitra · Sankalp → Seva → Nirmaan → Swabhimaan
        </p>
        <p className="font-mono-x text-[10px] tracking-[0.2em] uppercase text-[#F4F1EA]/40">
          Built with pure intention
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
