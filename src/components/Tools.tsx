"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tools = [
  { name: "ChatGPT", icon: "✦", url: "https://chat.openai.com", category: "AI Writing" },
  { name: "Perplexity", icon: "◈", url: "https://www.perplexity.ai", category: "Research" },
  { name: "Google Gemini", icon: "◇", url: "https://gemini.google.com", category: "AI Writing" },
  { name: "Claude AI", icon: "◉", url: "https://claude.ai", category: "AI Writing" },
  { name: "Ubersuggest", icon: "↗", url: "https://neilpatel.com/ubersuggest", category: "SEO" },
  { name: "Surfer SEO", icon: "⟁", url: "https://surferseo.com", category: "SEO" },
  { name: "Ahrefs", icon: "▣", url: "https://ahrefs.com", category: "SEO" },
  { name: "Notion AI", icon: "▢", url: "https://www.notion.so", category: "Productivity" },
  { name: "Google Flow", icon: "⥁", url: "https://flow.google.com", category: "AI" },
  { name: "Duplichecker", icon: "⊟", url: "https://www.duplichecker.com", category: "Quality" },
  { name: "Quillbot", icon: "⌘", url: "https://quillbot.com", category: "Editing" },
  { name: "Grammarly", icon: "✓", url: "https://www.grammarly.com", category: "Editing" },
];

function ToolCard({ tool }: { tool: typeof tools[0] }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 flex items-center gap-5 px-7 py-5
                 bg-white border border-black/[0.08] rounded-2xl shadow-sm
                 hover:bg-black/[0.02] hover:border-black/20 hover:shadow-md transition-all duration-400
                 min-w-[200px] cursor-pointer"
    >
      <span className="text-xl text-black/30 group-hover:text-black/70 transition-colors duration-300 font-light w-8 text-center">
        {tool.icon}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-black/70 group-hover:text-black transition-colors whitespace-nowrap">
          {tool.name}
        </span>
        <span className="text-xs text-black/30 font-light">{tool.category}</span>
      </div>
    </a>
  );
}

export default function Tools() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const doubled = [...tools, ...tools];

  return (
    <section id="tools" ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-black/35 font-light">Arsenal</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
              Tools of the Trade
            </h2>
            <p className="text-sm text-black/40 font-light max-w-xs leading-relaxed">
              The stack behind every piece — research, writing, optimising, polishing.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f9f7f4] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f9f7f4] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="carousel-track flex gap-4 w-max">
            {doubled.map((tool, i) => (
              <ToolCard key={`${tool.name}-${i}`} tool={tool} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
