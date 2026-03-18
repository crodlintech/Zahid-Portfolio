"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const content = [
    { type: "lead", text: "I do more than just write." },
    { type: "paragraph", text: "" },
    { type: "highlight", text: "I shape how content feels, flows, and performs." },
    { type: "paragraph", text: "" },
    { type: "service", text: "Long form blogs that people actually finish." },
    { type: "service", text: "Website content that sounds like a real voice." },
    { type: "service", text: "SEO writing that does not feel like SEO." },
    { type: "service", text: "Content structures that make reading effortless." },
    { type: "paragraph", text: "" },
    { type: "paragraph", text: "I pay attention to the small things." },
    { type: "paragraph", text: "" },
    { type: "detail", text: "The first line that pulls you in." },
    { type: "detail", text: "The pause that keeps you there." },
    { type: "detail", text: "The last sentence that stays with you." },
    { type: "paragraph", text: "" },
    { type: "final", text: "Because that is what people remember." },
  ];

  return (
    <section id="services" className="relative px-6 py-32 bg-muted/30">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs font-light uppercase tracking-widest text-muted-foreground">
            Services
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            What I Really Do
          </h2>
        </motion.div>

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
                    ? "text-xl text-foreground md:text-2xl"
                    : item.type === "highlight"
                      ? "text-lg font-medium text-foreground"
                      : item.type === "service"
                        ? "border-l-2 border-foreground/20 pl-4 text-lg text-muted-foreground"
                        : item.type === "detail"
                          ? "text-lg italic text-muted-foreground"
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
