import { motion } from "framer-motion";

const ChapterTag = ({ number, label, dark = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="flex items-center gap-4"
    data-testid={`chapter-tag-${number}`}
  >
    <span
      className={`font-mono-x text-xs sm:text-sm tracking-[0.25em] uppercase ${
        dark ? "text-[#E9C176]" : "text-[#522B6A]"
      }`}
    >
      {label}
    </span>
    <span
      className={`h-px flex-1 max-w-24 ${dark ? "bg-[#D4AF37]/40" : "bg-[#522B6A]/25"}`}
    />
  </motion.div>
);

export default ChapterTag;
