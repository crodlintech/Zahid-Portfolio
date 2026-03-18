"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tools = [
  { name: "ChatGPT", url: "https://chat.openai.com" },
  { name: "Perplexity", url: "https://perplexity.ai" },
  { name: "Google Gemini", url: "https://gemini.google.com" },
  { name: "Claude AI", url: "https://claude.ai" },
  { name: "Ubersuggest", url: "https://neilpatel.com/ubersuggest" },
  { name: "Surfer SEO", url: "https://surferseo.com" },
  { name: "Ahrefs", url: "https://ahrefs.com" },
  { name: "Notion AI", url: "https://notion.so" },
  { name: "Google Flow", url: "https://google.com" },
  { name: "Duplichecker", url: "https://duplichecker.com" },
  { name: "Quillbot", url: "https://quillbot.com" },
  { name: "Grammarly", url: "https://grammarly.com" },
];

export function ToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const duplicatedTools = [...tools, ...tools];

  return (
    <section id="tools" className="py-28 md:py-36 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-16" ref={ref}>
        <motion.p
          className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tools I Work With
        </motion.p>
      </div>

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll-left">
          {duplicatedTools.map((tool, index) => (
            <motion.a
              key={`${tool.name}-${index}`}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-2"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="glass-strong px-6 py-4 rounded-full hover:bg-foreground/5 transition-colors duration-300">
                <span className="text-sm font-medium text-foreground whitespace-nowrap tracking-wide">
                  {tool.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
