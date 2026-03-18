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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicate tools for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools];

  return (
    <section id="tools" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12" ref={ref}>
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tools I Work With
        </motion.p>
      </div>

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedTools.map((tool, index) => (
            <motion.a
              key={`${tool.name}-${index}`}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-3"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="glass px-8 py-5 rounded-2xl min-w-[160px] text-center hover:bg-foreground/5 transition-colors">
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
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
