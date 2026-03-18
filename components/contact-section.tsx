"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", organisation: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const inputClasses =
    "w-full px-6 py-4 glass rounded-2xl bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* CTA Text */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            Get In Touch
          </motion.p>

          <div className="space-y-1">
            {[
              "If you have read this far,",
              "we will probably get along.",
              "",
              "If you are building something,",
              "or just trying to say it better",
              "",
              "I would love to be a part of it.",
              "",
              "just drop a hi",
              "good conversations start that way",
            ].map((line, index) => (
              <motion.p
                key={index}
                className={`text-lg md:text-xl leading-relaxed ${
                  line === "" ? "h-4" : ""
                } ${
                  line === "just drop a hi" || line === "good conversations start that way"
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClasses}
            />
          </div>

          <input
            type="text"
            name="organisation"
            placeholder="Organisation Name (optional)"
            value={formData.organisation}
            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
            className={inputClasses}
          />

          <textarea
            name="message"
            placeholder="What's on your mind?"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputClasses} resize-none`}
          />

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm"
            >
              {errorMessage}
            </motion.p>
          )}

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 text-foreground"
            >
              <CheckCircle2 size={20} />
              <span>Message sent successfully! I&apos;ll get back to you soon.</span>
            </motion.div>
          ) : (
            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-2xl font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </motion.button>
          )}
        </motion.form>
      </div>
    </section>
  );
}
