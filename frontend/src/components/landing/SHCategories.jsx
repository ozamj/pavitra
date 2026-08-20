import { motion } from "framer-motion";
import {
  Droplets,
  Home,
  Flower2,
  Coffee,
  BookOpen,
  Leaf,
} from "lucide-react";
import ChapterTag from "./ChapterTag";

const CATEGORIES = [
  {
    title: "Personal Care",
    desc: "Products for daily hygiene, freshness, and self-care.",
    icon: Droplets,
  },
  {
    title: "Home Care",
    desc: "Essentials for clean, healthy, and responsible homes.",
    icon: Home,
  },
  {
    title: "Fragrance & Spiritual Essentials",
    desc: "Products inspired by purity, peace, and Indian cultural emotion.",
    icon: Flower2,
  },
  {
    title: "Tea & Beverages",
    desc: "Everyday products that connect with Indian homes and routines.",
    icon: Coffee,
  },
  {
    title: "Stationery",
    desc: "Products connected with learning, education, and progress.",
    icon: BookOpen,
  },
  {
    title: "Wellness & Ayurveda",
    desc: "Products rooted in traditional trust and modern responsibility.",
    icon: Leaf,
  },
];

const SHCategories = () => (
  <section
    id="categories"
    className="relative bg-[#F5ECD9] py-20 sm:py-28 lg:py-36 overflow-hidden"
    data-testid="shop-categories-section"
  >
    <span
      className="absolute top-10 left-4 sm:left-10 font-display text-[9rem] sm:text-[13rem] leading-none text-[#522B6A]/[0.05] select-none pointer-events-none"
      aria-hidden="true"
    >
      03
    </span>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <ChapterTag number="03" label="Product Categories" />

      <motion.h2
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 font-display font-bold tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-4xl text-[#775A19] max-w-3xl"
      >
        Explore <span className="italic">Pavitra Products</span>
      </motion.h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CATEGORIES.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5 }}
              className="group bg-[#FAF7F2] border border-[#522B6A]/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 transition-colors duration-500"
              data-testid={`category-card-${cat.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <div className="w-11 h-11 rounded-full bg-[#522B6A]/10 border border-[#522B6A]/15 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Icon size={18} className="text-[#775A19]" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-[#1C1917] leading-snug">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SHCategories;
