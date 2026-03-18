"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const points = [
  {
    num: "01",
    heading: "People don't read. They scan.",
    body: "I pay attention to how people read, where they pause, what makes them continue. Every sentence earns its place.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: "02",
    heading: "Structure before sentences.",
    body: "Flow, not just keywords. I think about how something begins, how it builds, and where it leaves the reader.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    num: "03",
    heading: "Content that actually does something.",
    body: "Whether it is a brand finding its voice, a startup trying to be seen, or a platform trying to feel more human — I make sure it connects.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    num: "04",
    heading: "Style and substance together.",
    body: "Very rarely does content do both. I try to stay in that middle space — polished but real, strategic but felt.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

export default function WhyItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="why" ref={ref} className="relative py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-12 origin-center"
        />

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 max-w-lg"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-black/35 font-light">Method</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-black">
              Why This Works
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-black/40 font-light max-w-sm leading-relaxed"
          >
            Because content today feels predictable. It either sounds polished but empty, or it performs but feels mechanical.
          </motion.p>
        </div>

        {/* Large editorial quote with animated reveal */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-24 pl-8"
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 bottom-0 w-0.5 bg-black/15 origin-top"
          />
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-black/55 leading-relaxed italic">
            &ldquo;When I write, it is not just about filling space.
            <br />
            It is about <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-black/80 font-normal not-italic"
            >guiding attention</motion.span>.&rdquo;
          </p>
        </motion.blockquote>

        {/* Points grid with hover interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 rounded-3xl overflow-hidden">
          {points.map((point, i) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 * i + 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-[#f9f7f4] p-8 md:p-10 border border-black/[0.05] transition-all duration-500 hover:bg-white hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)]"
            >
              {/* Corner accent on hover */}
              <motion.div
                initial={{ width: 0, height: 0 }}
                animate={hoveredCard === i ? { width: 40, height: 40 } : { width: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 right-0 border-t-2 border-r-2 border-black/10 rounded-tr-3xl"
              />
              <div className="relative flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-black/20 font-light tracking-widest">{point.num}</span>
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl bg-black/[0.03] border border-black/[0.07] flex items-center justify-center text-black/30 group-hover:text-black/60 group-hover:bg-black/[0.05] transition-all duration-400"
                  >
                    {point.icon}
                  </motion.div>
                </div>
                <h3 className="text-lg md:text-xl font-medium text-black leading-snug group-hover:translate-x-1 transition-transform duration-500">{point.heading}</h3>
                <p className="text-sm md:text-base text-black/50 font-light leading-relaxed">{point.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom prose */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 max-w-2xl mx-auto text-center"
        >
          <p className="text-base md:text-lg text-black/40 font-light leading-relaxed">
            It connects.{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="text-black/60"
            >It holds.</motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.3 }}
              className="text-black font-medium"
            >It does something.</motion.span>
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mt-12 origin-center"
        />
      </div>
    </section>
  );
}
