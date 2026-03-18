"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lines = [
    "This is where it all started.",
    "",
    "A space where I write without rules,",
    "without structure,",
    "without thinking about performance.",
    "",
    "Just thoughts, stories, and moments",
    "that needed somewhere to exist.",
    "",
    "It is less about content,",
    "more about expression.",
    "",
    "If you want to understand how I think,",
    "this is the place.",
  ];

  return (
    <section id="blog" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          A Day With An Artist
        </motion.p>

        <div className="space-y-1 mb-12">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              className={`text-lg md:text-xl leading-relaxed ${
                line === "" ? "h-4" : "text-muted-foreground"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.a
          href="https://adaywithanartist.blogspot.com/?m=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 glass rounded-2xl font-medium text-sm text-foreground hover:bg-foreground/5 transition-colors group"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Read the Blog
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.a>
      </div>
    </section>
  );
}
