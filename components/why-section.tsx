"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const content = [
    { text: "Because content today feels predictable.", highlight: false },
    { text: "", highlight: false },
    { text: "It either sounds polished but empty,", highlight: false },
    { text: "or it performs but feels mechanical.", highlight: false },
    { text: "", highlight: false },
    { text: "Very rarely does it do both.", highlight: true },
    { text: "", highlight: false },
    { text: "I try to stay in that middle space.", highlight: false },
    { text: "", highlight: false },
    { text: "I pay attention to how people read,", highlight: false },
    { text: "where they pause,", highlight: false },
    { text: "what makes them continue.", highlight: false },
    { text: "", highlight: false },
    { text: "I think about structure, not just sentences.", highlight: false },
    { text: "Flow, not just keywords.", highlight: false },
    { text: "", highlight: false },
    { text: "I care about how something begins,", highlight: false },
    { text: "how it builds,", highlight: false },
    { text: "and where it leaves the reader.", highlight: false },
    { text: "", highlight: false },
    { text: "So when I write, it is not just about filling space.", highlight: false },
    { text: "It is about guiding attention.", highlight: true },
    { text: "", highlight: false },
    { text: "Whether it is a brand finding its voice,", highlight: false },
    { text: "a startup trying to be seen,", highlight: false },
    { text: "or a platform trying to feel more human", highlight: false },
    { text: "", highlight: false },
    { text: "I make sure the content does not just exist.", highlight: false },
    { text: "", highlight: false },
    { text: "It connects.", highlight: true },
    { text: "It holds.", highlight: true },
    { text: "It does something.", highlight: true },
  ];

  return (
    <section id="why" className="py-28 md:py-36 px-6 bg-muted/40">
      <div className="max-w-2xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why This Works
        </motion.p>

        <div className="space-y-0.5">
          {content.map((line, index) => (
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
              transition={{ duration: 0.5, delay: index * 0.025 }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
