"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    {
      lines: [
        "Because content today feels predictable.",
        "",
        "It either sounds polished but empty,",
        "or it performs but feels mechanical.",
        "",
        "Very rarely does it do both.",
      ],
    },
    {
      lines: [
        "I try to stay in that middle space.",
        "",
        "I pay attention to how people read,",
        "where they pause,",
        "what makes them continue.",
      ],
    },
    {
      lines: [
        "I think about structure, not just sentences.",
        "Flow, not just keywords.",
        "",
        "I care about how something begins,",
        "how it builds,",
        "and where it leaves the reader.",
      ],
    },
    {
      lines: [
        "So when I write, it is not just about filling space.",
        "It is about guiding attention.",
        "",
        "Whether it is a brand finding its voice,",
        "a startup trying to be seen,",
        "or a platform trying to feel more human",
        "",
        "I make sure the content does not just exist.",
        "",
        "It connects.",
        "It holds.",
        "It does something.",
      ],
    },
  ];

  return (
    <section id="why" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why This Works
        </motion.p>

        <div className="space-y-12">
          {paragraphs.map((paragraph, pIndex) => (
            <div key={pIndex} className="space-y-1">
              {paragraph.lines.map((line, lIndex) => (
                <motion.p
                  key={`${pIndex}-${lIndex}`}
                  className={`text-lg md:text-xl leading-relaxed ${
                    line === "" ? "h-4" : ""
                  } ${
                    line === "It connects." ||
                    line === "It holds." ||
                    line === "It does something."
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: pIndex * 0.2 + lIndex * 0.03,
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
