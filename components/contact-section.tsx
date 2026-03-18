"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", organisation: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const ctaContent = [
    { text: "If you have read this far,", highlight: false },
    { text: "we will probably get along.", highlight: true },
    { text: "", highlight: false },
    { text: "If you are building something,", highlight: false },
    { text: "or just trying to say it better", highlight: false },
    { text: "", highlight: false },
    { text: "I would love to be a part of it.", highlight: true },
    { text: "", highlight: false },
    { text: "just drop a hi", highlight: false },
    { text: "good conversations start that way", highlight: false },
  ];

  const inputClasses =
    "w-full px-5 py-4 glass-strong rounded-2xl bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all duration-300";

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-muted/40">
      <div className="max-w-2xl mx-auto" ref={ref}>
        {/* CTA Text */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Get In Touch
          </motion.p>

          <div className="space-y-0.5">
            {ctaContent.map((line, index) => (
              <motion.p
                key={index}
                className={`text-lg md:text-xl leading-relaxed ${
                  line.text === "" ? "h-5" : ""
                } ${
                  line.highlight
                    ? "font-medium text-foreground"
                    : "text-muted-foreground"
                }`}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.03 }}
              >
                {line.text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={inputClasses}
            />
          </div>

          <input
            type="text"
            name="organisation"
            placeholder="Organisation Name (optional)"
            value={formData.organisation}
            onChange={(e) =>
              setFormData({ ...formData, organisation: e.target.value })
            }
            className={inputClasses}
          />

          <textarea
            name="message"
            placeholder="What's on your mind?"
            rows={5}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 text-foreground py-4"
            >
              <CheckCircle2 size={20} />
              <span className="font-medium">
                Message sent! I&apos;ll get back to you soon.
              </span>
            </motion.div>
          ) : (
            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full font-medium text-sm tracking-wide hover:opacity-90 transition-all duration-300 disabled:opacity-50"
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
