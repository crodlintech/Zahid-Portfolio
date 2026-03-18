"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = [
    { type: "lead", text: "This is where it all started." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "A space where I write without rules," },
    { type: "paragraph", text: "without structure," },
    { type: "paragraph", text: "without thinking about performance." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "Just thoughts, stories, and moments" },
    { type: "paragraph", text: "that needed somewhere to exist." },
    { type: "paragraph", text: "" },
    { type: "highlight", text: "It is less about content," },
    { type: "highlight", text: "more about expression." },
    { type: "paragraph", text: "" },
    { type: "final", text: "If you want to understand how I think," },
    { type: "final", text: "this is the place." },
  ];

  return (
    <section id="blog" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs font-light uppercase tracking-widest text-muted-foreground">
            Personal Space
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            A Day With An Artist
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-1">
            {content.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.03, duration: 0.5 }}
                className={`font-light leading-relaxed ${
                  item.text === ""
                    ? "h-5"
                    : item.type === "lead"
                      ? "text-xl text-foreground"
                      : item.type === "highlight"
                        ? "text-lg font-medium text-foreground"
                        : item.type === "final"
                          ? "text-lg text-muted-foreground"
                          : "text-lg text-muted-foreground"
                }`}
              >
                {item.text}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.a
              href="https://adaywithanartist.blogspot.com/?m=1"
              target="_blank"
              rel="noopener noreferrer"
              className="glass group relative flex items-center gap-4 rounded-2xl p-8 transition-all hover:bg-muted"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="space-y-2">
                <span className="text-xs font-light uppercase tracking-widest text-muted-foreground">
                  Visit
                </span>
                <p className="text-xl font-medium">Read the Blog</p>
                <p className="text-sm text-muted-foreground">
                  adaywithanartist.blogspot.com
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-all group-hover:bg-foreground group-hover:text-background">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.a>
          </motion.div>
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
