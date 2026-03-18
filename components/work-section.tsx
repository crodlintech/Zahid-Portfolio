"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const offerings = [
    "Long form blogs that people actually finish.",
    "Website content that sounds like a real voice.",
    "SEO writing that does not feel like SEO.",
    "Content structures that make reading effortless.",
  ];

  const details = [
    "The first line that pulls you in.",
    "The pause that keeps you there.",
    "The last sentence that stays with you.",
  ];

  return (
    <section id="work" className="py-28 md:py-36 px-6 bg-muted/40">
      <div className="max-w-2xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What I Really Do
        </motion.p>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I do more than just write.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-14"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          I shape how content feels, flows, and performs.
        </motion.p>

        <div className="space-y-3 mb-16">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              className="glass-strong p-5 rounded-2xl cursor-default"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
            >
              <p className="text-foreground font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-muted-foreground mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I pay attention to the small things.
        </motion.p>

        <div className="space-y-1 mb-8">
          {details.map((item, index) => (
            <motion.p
              key={index}
              className="text-muted-foreground italic text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
            >
              {item}
            </motion.p>
          ))}
        </div>

        <motion.p
          className="text-lg font-medium text-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Because that is what people remember.
        </motion.p>
      </div>
    </section>
  );
}
