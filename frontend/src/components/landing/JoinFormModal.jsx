import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n";

const JoinFormModal = ({ way, onClose }) => {
  const t = useT();
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [status, setStatus] = useState("idle");

  const FIELDS = [
    { key: "name", label: t("jn.modal.name"), type: "text", required: true, placeholder: t("jn.modal.namePh") },
    { key: "email", label: t("jn.modal.email"), type: "email", required: true, placeholder: t("jn.modal.emailPh") },
    { key: "phone", label: t("jn.modal.phone"), type: "tel", required: false, placeholder: t("jn.modal.phonePh") },
    { key: "city", label: t("jn.modal.city"), type: "text", required: false, placeholder: t("jn.modal.cityPh") },
  ];

  const submit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/interest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role: way.slug }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {way && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#180F2C]/60 backdrop-blur-sm"
          onClick={onClose}
          data-testid="join-form-modal"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl border border-[#D4AF37]/40 shadow-[0_40px_90px_-20px_rgba(24,15,44,0.6)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#522B6A]/20 text-[#522B6A]/70 hover:text-[#180F2C] hover:border-[#775A19] flex items-center justify-center transition-colors duration-300 z-10"
              aria-label="Close form"
              data-testid="join-form-close"
            >
              <X size={16} />
            </button>

            {status === "success" ? (
              <div className="p-8 sm:p-10 text-center" data-testid="join-form-success">
                <span className="mx-auto w-16 h-16 rounded-full border border-[#D4AF37]/50 bg-white flex items-center justify-center p-3.5">
                  <img src="/pavitra-globe.webp" alt="Pavitra globe emblem" className="w-full h-full object-contain" />
                </span>
                <h3 className="mt-6 font-display font-bold text-2xl sm:text-3xl text-[#775A19]">
                  {t("jn.modal.successPrefix")} {form.name.split(" ")[0]}.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
                  {t("jn.modal.successTemplate")
                    .split("{role}")
                    .reduce((acc, part, i, arr) => {
                      acc.push(part);
                      if (i < arr.length - 1)
                        acc.push(
                          <span key={i} className="font-semibold text-[#522B6A]">
                            {way.name}
                          </span>
                        );
                      return acc;
                    }, [])}
                </p>
                <p className="mt-5 font-display italic text-lg text-[#B08D1E]">
                  {t("jn.modal.tagline")}
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 font-mono-x text-[11px] tracking-[0.2em] uppercase bg-[#522B6A] hover:bg-[#775A19] text-[#FAF7F2] px-8 py-3.5 rounded-full transition-colors duration-300"
                  data-testid="join-form-done"
                >
                  {t("jn.modal.done")}
                </button>
              </div>
            ) : (
              <div className="p-7 sm:p-9">
                <p className="font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#775A19]">
                  {t("jn.modal.kicker")}
                </p>
                <h3 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-[#1C1917] leading-tight" data-testid="join-form-title">
                  {way.cta}
                </h3>
                <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                  {t("jn.modal.sub")}
                </p>

                <form onSubmit={submit} className="mt-7 space-y-4" data-testid="join-interest-form">
                  {FIELDS.map((field) => (
                    <div key={field.key}>
                      <label className="block font-mono-x text-[10px] tracking-[0.22em] uppercase text-[#522B6A]/80 mb-1.5">
                        {field.label}
                        {field.required && <span className="text-[#775A19]"> *</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full bg-white border border-[#522B6A]/20 focus:border-[#B08D1E] rounded-xl px-4 py-3 text-sm text-[#1C1917] placeholder-[#1C1917]/35 outline-none transition-colors duration-300"
                        data-testid={`join-form-${field.key}`}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-mono-x text-[10px] tracking-[0.22em] uppercase text-[#522B6A]/80 mb-1.5">
                      {t("jn.modal.message")}
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t("jn.modal.messagePh")}
                      className="w-full bg-white border border-[#522B6A]/20 focus:border-[#B08D1E] rounded-xl px-4 py-3 text-sm text-[#1C1917] placeholder-[#1C1917]/35 outline-none transition-colors duration-300 resize-none"
                      data-testid="join-form-message"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-[#9F1239]" data-testid="join-form-error">
                      {t("jn.modal.error")}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group w-full inline-flex items-center justify-center gap-3 bg-[#522B6A] hover:bg-[#775A19] disabled:opacity-60 text-[#FAF7F2] font-mono-x text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors duration-300"
                    data-testid="join-form-submit"
                  >
                    {status === "submitting" ? t("jn.modal.sending") : t("jn.modal.submit")}
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinFormModal;
