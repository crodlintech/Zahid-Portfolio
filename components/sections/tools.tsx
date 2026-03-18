"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  { name: "ChatGPT", url: "https://chat.openai.com" },
  { name: "Perplexity", url: "https://perplexity.ai" },
  { name: "Google Gemini", url: "https://gemini.google.com" },
  { name: "Claude AI", url: "https://claude.ai" },
  { name: "Ubersuggest", url: "https://neilpatel.com/ubersuggest" },
  { name: "Surfer SEO", url: "https://surferseo.com" },
  { name: "Ahrefs", url: "https://ahrefs.com" },
  { name: "Notion AI", url: "https://notion.so" },
  { name: "Google Flow", url: "https://flow.google" },
  { name: "Duplichecker", url: "https://duplichecker.com" },
  { name: "Quillbot", url: "https://quillbot.com" },
  { name: "Grammarly", url: "https://grammarly.com" },
];

// Duplicate for seamless loop
const duplicatedTools = [...tools, ...tools];

export function ToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="relative overflow-hidden px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-light uppercase tracking-widest text-muted-foreground">
            Toolkit
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Tools I Work With
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            A curated set of tools that help me research, write, optimize, and
            refine content
          </p>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative"
      >
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <motion.a
                key={`${tool.name}-${index}`}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex min-w-[180px] items-center justify-center rounded-2xl px-6 py-5 transition-all hover:bg-muted"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {tool.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

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
