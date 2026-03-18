"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const content = [
    { text: "This is where it all started.", highlight: false },
    { text: "", highlight: false },
    { text: "A space where I write without rules,", highlight: false },
    { text: "without structure,", highlight: false },
    { text: "without thinking about performance.", highlight: false },
    { text: "", highlight: false },
    { text: "Just thoughts, stories, and moments", highlight: false },
    { text: "that needed somewhere to exist.", highlight: false },
    { text: "", highlight: false },
    { text: "It is less about content,", highlight: false },
    { text: "more about expression.", highlight: true },
    { text: "", highlight: false },
    { text: "If you want to understand how I think,", highlight: false },
    { text: "this is the place.", highlight: true },
  ];

  return (
    <section id="blog" className="py-28 md:py-36 px-6">
      <div className="max-w-2xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          A Day With An Artist
        </motion.p>

        <div className="space-y-0.5 mb-12">
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
              transition={{ duration: 0.5, delay: index * 0.03 }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        <motion.a
          href="https://adaywithanartist.blogspot.com/?m=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 glass-strong rounded-full font-medium text-sm tracking-wide text-foreground hover:bg-foreground/5 transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Read the Blog
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </motion.a>
      </div>
    </section>
  );
}
