"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const content = [
    { text: "I didn't start with SEO.", highlight: false },
    { text: "I started with writing.", highlight: false },
    { text: "", highlight: false },
    { text: "The kind where you sit with a thought too long", highlight: false },
    { text: "and slowly turn it into something that feels honest.", highlight: false },
    { text: "", highlight: false },
    { text: "Somewhere along the way, that changed.", highlight: false },
    { text: "Not the writing, but what it could do.", highlight: false },
    { text: "", highlight: false },
    { text: "It started reaching people.", highlight: true },
    { text: "It started working.", highlight: true },
    { text: "", highlight: false },
    { text: "Today, I write at the intersection of", highlight: false },
    { text: "storytelling, strategy, and attention.", highlight: false },
    { text: "", highlight: false },
    { text: "From AI platforms to healthcare brands,", highlight: false },
    { text: "I've helped ideas find their place online", highlight: false },
    { text: "without losing their voice.", highlight: false },
    { text: "", highlight: false },
    { text: "And even now, after all the structure and intent,", highlight: false },
    { text: "I still write the same way I started.", highlight: false },
    { text: "", highlight: false },
    { text: "For people.", highlight: true },
  ];

  return (
    <section id="about" className="py-28 md:py-36 px-6">
      <div className="max-w-2xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Where Words Begin to Mean Something
        </motion.p>

        <div className="space-y-0.5">
          {content.map((line, index) => (
            <motion.p
              key={index}
              className={`text-lg md:text-xl leading-relaxed transition-colors duration-300 ${
                line.text === "" ? "h-6" : ""
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
      </div>
    </section>
  );
}
