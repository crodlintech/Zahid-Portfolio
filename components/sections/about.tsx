"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    "I didn't start with SEO.",
    "I started with writing.",
    "",
    "The kind where you sit with a thought too long",
    "and slowly turn it into something that feels honest.",
    "",
    "Somewhere along the way, that changed.",
    "Not the writing, but what it could do.",
    "",
    "It started reaching people.",
    "It started working.",
    "",
    "Today, I write at the intersection of",
    "storytelling, strategy, and attention.",
    "",
    "From AI platforms to healthcare brands,",
    "I've helped ideas find their place online",
    "without losing their voice.",
    "",
    "And even now, after all the structure and intent,",
    "I still write the same way I started.",
    "",
    "For people.",
  ];

  return (
    <section id="about" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs font-light uppercase tracking-widest text-muted-foreground">
            The Story
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Where Words Begin
            <br />
            <span className="text-muted-foreground">To Mean Something</span>
          </h2>
        </motion.div>

        <div className="space-y-1">
          {paragraphs.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.03, duration: 0.6 }}
              className={`text-lg font-light leading-relaxed ${
                line === ""
                  ? "h-6"
                  : line === "For people."
                    ? "mt-4 text-xl font-medium text-foreground"
                    : "text-muted-foreground"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        className="mx-auto mt-24 h-px max-w-md bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </section>
  );
}
