"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  organisation: string;
  message: string;
}

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organisation: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", organisation: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = [
    { text: "If you have read this far," },
    { text: "we will probably get along." },
    { text: "" },
    { text: "If you are building something," },
    { text: "or just trying to say it better" },
    { text: "" },
    { text: "I would love to be a part of it." },
    { text: "" },
    { highlight: true, text: "just drop a hi" },
    { highlight: true, text: "good conversations start that way" },
  ];

  return (
    <section id="contact" className="relative px-6 py-32 bg-muted/30">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs font-light uppercase tracking-widest text-muted-foreground">
            Get in Touch
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s Create Something
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-1"
          >
            {content.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.03, duration: 0.5 }}
                className={`font-light leading-relaxed ${
                  item.text === ""
                    ? "h-5"
                    : item.highlight
                      ? "text-lg font-medium text-foreground"
                      : "text-lg text-muted-foreground"
                }`}
              >
                {item.text}
              </motion.p>
            ))}
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass flex flex-col items-center justify-center rounded-3xl p-12 text-center"
              >
                <CheckCircle className="mb-4 h-12 w-12 text-foreground" />
                <h3 className="mb-2 text-xl font-medium">Message Sent</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm text-muted-foreground underline-offset-4 hover:underline"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-light text-muted-foreground"
                    >
                      Name <span className="text-foreground">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass w-full rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-foreground/20"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.55, duration: 0.5 }}
                  >
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-light text-muted-foreground"
                    >
                      Email <span className="text-foreground">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass w-full rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-foreground/20"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <label
                    htmlFor="organisation"
                    className="mb-2 block text-sm font-light text-muted-foreground"
                  >
                    Organisation Name{" "}
                    <span className="text-muted-foreground/50">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="glass w-full rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-foreground/20"
                    placeholder="Company or project name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.65, duration: 0.5 }}
                >
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-light text-muted-foreground"
                  >
                    Regarding <span className="text-foreground">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="glass w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-foreground/20"
                    placeholder="Tell me about your project or idea..."
                  />
                </motion.div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-500"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-4 text-sm font-medium text-background transition-all hover:bg-foreground/90 disabled:opacity-50"
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
