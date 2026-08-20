import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

const FIELDS = [
  { key: "name", label: "Full Name", type: "text", required: true, placeholder: "Your name" },
  { key: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
  { key: "phone", label: "Phone", type: "tel", required: false, placeholder: "+91" },
  { key: "city", label: "City / Town", type: "text", required: false, placeholder: "Where you are based" },
];

const JoinFormModal = ({ way, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [status, setStatus] = useState("idle");

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
                  Shukriya, {form.name.split(" ")[0]}.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
                  Your interest as{" "}
                  <span className="font-semibold text-[#522B6A]">{way.name}</span>{" "}
                  has been received. The Pavitra team will reach out to you soon.
                </p>
                <p className="mt-5 font-display italic text-lg text-[#B08D1E]">
                  Haath Badhayein, Bharat Banayein
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 font-mono-x text-[11px] tracking-[0.2em] uppercase bg-[#522B6A] hover:bg-[#775A19] text-[#FAF7F2] px-8 py-3.5 rounded-full transition-colors duration-300"
                  data-testid="join-form-done"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="p-7 sm:p-9">
                <p className="font-mono-x text-[10px] tracking-[0.25em] uppercase text-[#775A19]">
                  Join The Movement
                </p>
                <h3 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-[#1C1917] leading-tight" data-testid="join-form-title">
                  {way.cta}
                </h3>
                <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                  Share your details and the Pavitra team will connect with you.
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
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Anything you'd like us to know"
                      className="w-full bg-white border border-[#522B6A]/20 focus:border-[#B08D1E] rounded-xl px-4 py-3 text-sm text-[#1C1917] placeholder-[#1C1917]/35 outline-none transition-colors duration-300 resize-none"
                      data-testid="join-form-message"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-[#9F1239]" data-testid="join-form-error">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group w-full inline-flex items-center justify-center gap-3 bg-[#522B6A] hover:bg-[#775A19] disabled:opacity-60 text-[#FAF7F2] font-mono-x text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors duration-300"
                    data-testid="join-form-submit"
                  >
                    {status === "submitting" ? "Sending…" : "Submit Interest"}
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
