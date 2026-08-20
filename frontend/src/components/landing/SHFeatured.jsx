import { motion } from "framer-motion";
import {
  Droplets,
  Coffee,
  Flame,
  SprayCan,
  NotebookPen,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import ChapterTag from "./ChapterTag";

const PRODUCTS = [
  {
    name: "Pavitra Ayurvedic Soap",
    line: "Daily purity, rooted in tradition.",
    price: "₹95",
    category: "Personal Care",
    icon: Droplets,
  },
  {
    name: "Pavitra Herbal Tea",
    line: "An everyday ritual of calm.",
    price: "₹240",
    category: "Tea & Beverages",
    icon: Coffee,
  },
  {
    name: "Pavitra Agarbatti",
    line: "Fragrance inspired by peace.",
    price: "₹120",
    category: "Fragrance & Spiritual",
    icon: Flame,
  },
  {
    name: "Pavitra Dishwash Gel",
    line: "Clean homes, responsible choices.",
    price: "₹110",
    category: "Home Care",
    icon: SprayCan,
  },
  {
    name: "Pavitra Notebook Set",
    line: "Stationery for learning and progress.",
    price: "₹150",
    category: "Stationery",
    icon: NotebookPen,
  },
  {
    name: "Pavitra Chyawanprash",
    line: "Traditional trust, modern care.",
    price: "₹410",
    category: "Wellness & Ayurveda",
    icon: Leaf,
  },
];

const SHFeatured = () => (
  <section
    id="featured"
    className="relative bg-[#FAF7F2] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="shop-featured-section"
  >
    <span
      className="absolute top-10 right-4 sm:right-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      05
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="05" label="Featured Products" />

      <div className="mt-12 lg:flex lg:items-end lg:justify-between lg:gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#775A19]"
        >
          Featured <span className="italic">Pavitra Products</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 lg:mt-0 font-mono-x text-[11px] tracking-[0.25em] uppercase text-[#57534E]"
          data-testid="featured-note"
        >
          Launch collection · more arriving soon
        </motion.p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product, i) => {
          const Icon = product.icon;
          return (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.75,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-[#522B6A]/10 hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-[0_16px_40px_-24px_rgba(82,43,106,0.3)] transition-colors duration-500"
              data-testid={`product-card-${product.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <div className="relative h-44 bg-[#180F2C] flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 120%, rgba(212,175,55,0.25) 0%, rgba(212,175,55,0) 60%)",
                  }}
                  aria-hidden="true"
                />
                <span className="absolute top-4 left-4 font-mono-x text-[9px] tracking-[0.2em] uppercase text-[#E9C176] border border-[#D4AF37]/40 rounded-full px-3 py-1">
                  {product.category}
                </span>
                <div className="w-16 h-16 rounded-full bg-[#522B6A]/50 border border-[#D4AF37]/30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={26} className="text-[#D4AF37]" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-[#1C1917] leading-snug">
                  {product.name}
                </h3>
                <p className="mt-1.5 text-sm text-[#57534E]">{product.line}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display font-bold text-xl text-[#775A19]">
                    {product.price}
                  </span>
                  <button
                    className="group/btn inline-flex items-center gap-2 border border-[#522B6A]/40 hover:bg-[#522B6A] text-[#522B6A] hover:text-[#F4F1EA] font-mono-x text-[10px] tracking-[0.18em] uppercase px-4 py-2.5 rounded-full transition-colors duration-400"
                    data-testid={`view-product-${product.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  >
                    View Product
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SHFeatured;
