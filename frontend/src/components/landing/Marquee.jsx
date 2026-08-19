const ITEMS = [
  "Sankalp",
  "Seva",
  "Nirmaan",
  "Swabhimaan",
  "Intention",
  "Responsibility",
  "Participation",
  "Visible Action",
  "Bharat Upliftment",
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item, i) => (
      <span key={i} className="flex items-center">
        <span className="font-mono-x text-xs sm:text-sm tracking-[0.35em] uppercase text-[#FAF7F2]/90 px-6 sm:px-8">
          {item}
        </span>
        <span className="text-[#D4AF37] text-xs" aria-hidden="true">
          ✦
        </span>
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div
    className="relative bg-[#5B2A86] border-y border-[#D4AF37]/30 py-5 overflow-hidden"
    data-testid="editorial-marquee"
  >
    <div className="marquee-track flex w-max">
      <Row />
      <Row />
    </div>
  </div>
);

export default Marquee;
