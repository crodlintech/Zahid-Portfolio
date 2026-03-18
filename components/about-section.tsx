"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
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
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Where Words Begin to Mean Something
        </motion.p>

        <div className="space-y-1">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              className={`text-lg md:text-xl leading-relaxed ${
                line === "" ? "h-6" : ""
              } ${
                line === "For people."
                  ? "font-semibold text-foreground mt-4"
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
      </div>
    </section>
  );
}
