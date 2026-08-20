import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SHOPIFY = "https://nheb3m412gm42p5e-73384231102.shopifypreview.com/";

const FILTERS = ["All", "Personal Care", "Home Care", "Tea & Beverages", "Wellness"];

const PRODUCTS = [
  {
    name: "Ayukalash Heart Care Syrup | Natural Ingredients for Heart Health",
    price: "Rs. 659.00",
    img: "/assets/p-heart.jpg",
    badge: "Ayurvedic Medicines",
    cat: "Wellness",
    url: `${SHOPIFY}products/ayukalash-heart-care-syrup`,
  },
  {
    name: "Acidinol Syrup - 200 ml",
    price: "Rs. 89.00",
    img: "/assets/p-acidinol.jpg",
    badge: "Ayurvedic Medicines",
    cat: "Wellness",
    url: `${SHOPIFY}products/acidinol-syrup`,
  },
  {
    name: "Ayukalash Eye care - Healthy Vision Gummies",
    price: "Rs. 751.00",
    img: "/assets/p-eye.jpg",
    badge: "Ayurvedic Medicines",
    cat: "Wellness",
    url: `${SHOPIFY}products/eye-healthy-vision`,
  },
  {
    name: "Ayukalash Figure care - Weight 'N' Shape",
    price: "Rs. 1,041.00",
    img: "/assets/p-figure.jpg",
    badge: "Ayurvedic Medicines",
    cat: "Wellness",
    url: `${SHOPIFY}products/figure-care-ayukalash-figure-weight-n-shape`,
  },
  {
    name: "ATTITUDE – Men's Eau De Parfum - 100ml | Warm Spicy Leather Fragrance",
    price: "Rs. 999.00",
    img: "/assets/p-attitude.jpg",
    badge: "Fragrances",
    cat: "Personal Care",
    url: `${SHOPIFY}products/attitude-mens-eau-de-parfum-100ml-warm-spicy-leather-fragrance`,
  },
  {
    name: "Autre Eau De Parfum - 80ml",
    price: "Rs. 2,333.00",
    img: "/assets/p-autre.webp",
    badge: "Fragrances",
    cat: "Personal Care",
    url: `${SHOPIFY}products/autre-eau-de-parfum-80ml`,
  },
  {
    name: "ATTITUDE – Men's Perfume Deodorant - 150ml | Warm Spicy Leather Body Spray",
    price: "Rs. 199.00",
    img: "/assets/p-deo.jpg",
    badge: "Fragrances",
    cat: "Personal Care",
    soldOut: true,
    url: `${SHOPIFY}products/attitude-mens-perfume-deodorant-150ml-warm-spicy-leather-body-spray`,
  },
  {
    name: "ATTITUDE Signature Duo – Men's 100ml EDP & 150ml Deodorant Combo | Warm Spicy Leather",
    price: "Rs. 1,299.00",
    img: "/assets/p-duo.png",
    badge: "Fragrances",
    cat: "Personal Care",
    soldOut: true,
    url: `${SHOPIFY}products/attitude-signature-duo-mens-100ml-edp-150ml-deodorant-combo-warm-spicy-leather`,
  },
];

const HomeProducts = () => {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter);

  return (
    <section
      className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F5ECD9] py-20 sm:py-28 overflow-hidden"
      data-testid="home-products-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="flex items-center gap-4 font-mono-x text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#775A19]">
            <span className="w-10 h-px bg-[#D4AF37]" aria-hidden="true" />
            Products With Purpose
          </p>
          <h2 className="mt-6 font-caslon font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] max-w-3xl">
            What you bring home,{" "}
            <span className="italic text-[#775A19]">builds someone&rsquo;s.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 flex flex-wrap gap-3"
          data-testid="product-filters"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono-x text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 rounded-full border transition-colors duration-300 ${
                filter === f
                  ? "bg-[#522B6A] border-[#522B6A] text-[#FAF7F2]"
                  : "border-[#522B6A]/25 text-[#522B6A]/70 hover:border-[#775A19] hover:text-[#775A19]"
              }`}
              data-testid={`filter-${f.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <motion.article
                layout
                key={product.name}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white border border-[#522B6A]/10 hover:border-[#D4AF37]/60 rounded-2xl overflow-hidden shadow-[0_16px_40px_-24px_rgba(82,43,106,0.3)] transition-colors duration-500"
                data-testid={`home-product-${product.name.toLowerCase().replace(/[^a-z]+/g, "-").slice(0, 40)}`}
              >
                <a href={product.url} target="_blank" rel="noreferrer" className="block">
                  <div className="relative aspect-square bg-[#FAF7F2] overflow-hidden">
                    <span className="absolute top-4 left-4 z-10 font-mono-x text-[9px] tracking-[0.18em] uppercase bg-[#180F2C]/75 backdrop-blur text-[#E9C176] px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                    <img
                      src={product.img}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="px-5 pt-5 text-sm font-medium text-[#1C1917] leading-snug line-clamp-2 min-h-[2.6rem]">
                    {product.name}
                  </p>
                </a>
                <div className="px-5 pb-5 pt-3 flex items-center justify-between">
                  <span className="font-caslon font-bold text-lg text-[#775A19]">
                    {product.price}
                  </span>
                  {product.soldOut ? (
                    <span
                      className="font-mono-x text-[9px] tracking-[0.18em] uppercase text-[#1C1917]/40 border border-[#1C1917]/15 px-4 py-2 rounded-full"
                      data-testid="sold-out-badge"
                    >
                      Sold out
                    </span>
                  ) : (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-x text-[9px] tracking-[0.18em] uppercase bg-[#522B6A] hover:bg-[#775A19] text-[#FAF7F2] px-4 py-2 rounded-full transition-colors duration-300"
                      data-testid="add-to-basket-button"
                    >
                      Add to basket
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center font-caslon italic text-xl text-[#775A19]" data-testid="products-empty">
            Coming soon in this category — the sankalp is still taking shape.
          </p>
        )}
      </div>
    </section>
  );
};

export default HomeProducts;
