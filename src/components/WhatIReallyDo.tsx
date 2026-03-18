"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Long-form Blogs",
    desc: "Pieces people actually finish. Structured for flow, optimised for search, written for humans.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Website Content",
    desc: "Copy that sounds like a real voice. Not a template. Not a formula. A brand that speaks.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 012.716-6.336" />
      </svg>
    ),
  },
  {
    title: "SEO Writing",
    desc: "Content that ranks without feeling like it was written for robots. Strategy hidden in every line.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "Content Structure",
    desc: "Architecture that makes reading effortless. The invisible scaffolding behind every great piece.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

const microDetails = [
  "The first line that pulls you in.",
  "The pause that keeps you there.",
  "The last sentence that stays with you.",
];

export default function WhatIReallyDo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 max-w-lg"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-black/35 font-light">Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight">
              What I Really Do
            </h2>
            <p className="text-base text-black/50 font-light leading-relaxed mt-2">
              I do more than just write.
              <br />
              I shape how content feels, flows, and performs.
            </p>
          </motion.div>

          {/* Micro-details card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-black/[0.07] shadow-sm rounded-2xl p-8 max-w-sm"
          >
            <p className="text-sm text-black/35 font-light mb-5 uppercase tracking-widest">I pay attention to the small things.</p>
            <div className="flex flex-col gap-4">
              {microDetails.map((detail, i) => (
                <p key={i} className="text-sm md:text-base text-black/55 font-light leading-relaxed flex items-start gap-3">
                  <span className="text-black/25 mt-1">—</span>
                  {detail}
                </p>
              ))}
            </div>
            <p className="mt-6 text-sm text-black/30 font-light italic">Because that is what people remember.</p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 * i + 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-8 bg-white border border-black/[0.07] rounded-2xl hover:bg-black/[0.02] hover:border-black/15 hover:shadow-sm transition-all duration-500 overflow-hidden"
            >
              <div className="relative flex flex-col gap-5">
                <div className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center text-black/40 group-hover:text-black group-hover:border-black/25 transition-all duration-300">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium text-black">{service.title}</h3>
                  <p className="text-sm md:text-base text-black/50 font-light leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
