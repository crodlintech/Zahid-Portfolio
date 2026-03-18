"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = [
    { type: "lead", text: "Because content today feels predictable." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "It either sounds polished but empty," },
    { type: "paragraph", text: "or it performs but feels mechanical." },
    { type: "paragraph", text: "" },
    { type: "highlight", text: "Very rarely does it do both." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "I try to stay in that middle space." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "I pay attention to how people read," },
    { type: "paragraph", text: "where they pause," },
    { type: "paragraph", text: "what makes them continue." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "I think about structure, not just sentences." },
    { type: "paragraph", text: "Flow, not just keywords." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "I care about how something begins," },
    { type: "paragraph", text: "how it builds," },
    { type: "paragraph", text: "and where it leaves the reader." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "So when I write, it is not just about filling space." },
    { type: "highlight", text: "It is about guiding attention." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "Whether it is a brand finding its voice," },
    { type: "paragraph", text: "a startup trying to be seen," },
    { type: "paragraph", text: "or a platform trying to feel more human" },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "I make sure the content does not just exist." },
    { type: "paragraph", text: "" },
    { type: "final", text: "It connects." },
    { type: "final", text: "It holds." },
    { type: "final", text: "It does something." },
  ];

  return (
    <section className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs font-light uppercase tracking-widest text-muted-foreground">
            Philosophy
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Why This Works
          </h2>
        </motion.div>

        <div className="space-y-1">
          {content.map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.025, duration: 0.5 }}
              className={`font-light leading-relaxed ${
                item.text === ""
                  ? "h-5"
                  : item.type === "lead"
                    ? "text-xl text-foreground md:text-2xl"
                    : item.type === "highlight"
                      ? "text-lg font-medium text-foreground"
                      : item.type === "final"
                        ? "text-lg font-medium text-foreground"
                        : "text-lg text-muted-foreground"
              }`}
            >
              {item.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
