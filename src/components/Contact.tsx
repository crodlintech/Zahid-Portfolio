"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const dismissToast = useCallback(() => setShowToast(false), []);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(dismissToast, 4000);
    return () => clearTimeout(timer);
  }, [showToast, dismissToast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", organisation: "", message: "" });
      setShowToast(true);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-16 md:py-24 px-6 md:px-12">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-black/[0.015] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left — CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 lg:sticky lg:top-32"
          >
            <div className="flex flex-col gap-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-xs uppercase tracking-[0.35em] text-black/35 font-light"
              >Contact</motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="block"
                >If you have read</motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="block"
                >this far,</motion.span>
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl text-black/35 font-light italic"
              >
                we will probably get along.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col gap-3 text-base font-light text-black/50 leading-relaxed"
            >
              <p>
                If you are building something, or just trying to say it better — I would love to be a part of it.
              </p>
              <p className="text-black/30 italic">
                just drop a hi
                <br />
                good conversations start that way
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col gap-3 pt-4 border-t border-black/10"
            >
              <motion.a
                href="mailto:connect.zahidworks@gmail.com"
                whileHover={{ x: 4 }}
                className="group inline-flex items-center gap-3 text-sm text-black/45 hover:text-black transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                connect.zahidworks@gmail.com
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/zahidworkshere"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-3 text-sm text-black/45 hover:text-black transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-white border border-black/[0.06] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.06)] rounded-3xl p-8 md:p-10 flex flex-col gap-6 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-black/[0.015]" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-black/[0.01]" />

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs text-black/40 uppercase tracking-widest font-light">
                    Name <span className="text-black/55">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your name"
                      className="w-full bg-black/[0.02] border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm text-black placeholder-black/25 focus:outline-none focus:border-black/25 focus:bg-white focus:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 font-light"
                    />
                    {focusedField === "name" && (
                      <motion.div
                        layoutId="inputFocus"
                        className="absolute inset-0 rounded-xl border-2 border-black/15 pointer-events-none"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs text-black/40 uppercase tracking-widest font-light">
                    Email <span className="text-black/55">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your@email.com"
                      className="w-full bg-black/[0.02] border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm text-black placeholder-black/25 focus:outline-none focus:border-black/25 focus:bg-white focus:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 font-light"
                    />
                    {focusedField === "email" && (
                      <motion.div
                        layoutId="inputFocus"
                        className="absolute inset-0 rounded-xl border-2 border-black/15 pointer-events-none"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Organisation */}
              <div className="relative flex flex-col gap-2">
                <label htmlFor="organisation" className="text-xs text-black/40 uppercase tracking-widest font-light">
                  Organisation <span className="text-black/25">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    value={form.organisation}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("organisation")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Where are you from?"
                    className="w-full bg-black/[0.02] border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm text-black placeholder-black/25 focus:outline-none focus:border-black/25 focus:bg-white focus:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 font-light"
                  />
                  {focusedField === "organisation" && (
                    <motion.div
                      layoutId="inputFocus"
                      className="absolute inset-0 rounded-xl border-2 border-black/15 pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="relative flex flex-col gap-2">
                <label htmlFor="message" className="text-xs text-black/40 uppercase tracking-widest font-light">
                  Regarding
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me what you're building..."
                    className="w-full bg-black/[0.02] border border-black/[0.08] rounded-xl px-4 py-3.5 text-sm text-black placeholder-black/25 focus:outline-none focus:border-black/25 focus:bg-white focus:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 resize-none font-light leading-relaxed"
                  />
                  {focusedField === "message" && (
                    <motion.div
                      layoutId="inputFocus"
                      className="absolute inset-0 rounded-xl border-2 border-black/15 pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative self-end inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/85 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 overflow-hidden"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="relative">Send Message</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-600/70 font-light text-center pt-2"
                >
                  {errorMsg || "Something went wrong. Please try emailing directly."}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.35)]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.15 }}
              className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0"
            >
              <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <span className="text-sm font-light">Message sent! I&apos;ll get back to you soon.</span>
            <button
              onClick={dismissToast}
              className="ml-2 text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
