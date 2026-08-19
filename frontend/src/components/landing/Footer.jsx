import { Flower2 } from "lucide-react";

const Footer = () => (
  <footer
    className="bg-[#121614] border-t border-[#D97706]/15 py-14"
    data-testid="site-footer"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-[#8C3218] flex items-center justify-center">
            <Flower2 size={18} className="text-[#FAF7F2]" />
          </span>
          <div>
            <p className="font-display text-2xl font-semibold text-[#F4F1EA] leading-none">
              Pavitra
            </p>
            <p className="font-mono-x text-[10px] tracking-[0.3em] uppercase text-[#D97706] mt-1.5">
              A sankalp for Bharat
            </p>
          </div>
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
              className="font-mono-x text-[11px] tracking-[0.2em] uppercase text-[#F4F1EA]/55 hover:text-[#D97706] transition-colors duration-300"
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
