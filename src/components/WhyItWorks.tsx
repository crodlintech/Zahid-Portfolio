"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const points = [
  {
    num: "01",
    heading: "People don't read. They scan.",
    body: "I pay attention to how people read, where they pause, what makes them continue. Every sentence earns its place.",
  },
  {
    num: "02",
    heading: "Structure before sentences.",
    body: "Flow, not just keywords. I think about how something begins, how it builds, and where it leaves the reader.",
  },
  {
    num: "03",
    heading: "Content that actually does something.",
    body: "Whether it is a brand finding its voice, a startup trying to be seen, or a platform trying to feel more human — I make sure it connects.",
  },
  {
    num: "04",
    heading: "Style and substance together.",
    body: "Very rarely does content do both. I try to stay in that middle space — polished but real, strategic but felt.",
  },
];

export default function WhyItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why" ref={ref} className="relative py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-20" />

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
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

        {/* Large editorial quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-24 pl-8 border-l-2 border-black/15"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-black/55 leading-relaxed italic">
            &ldquo;When I write, it is not just about filling space.
            <br />
            It is about guiding attention.&rdquo;
          </p>
        </motion.blockquote>

        {/* Points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.07] rounded-3xl overflow-hidden">
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
              className="group relative bg-[#f9f7f4] p-8 md:p-10 hover:bg-black/[0.02] transition-colors duration-500"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs text-black/20 font-light tracking-widest">{point.num}</span>
                <h3 className="text-lg md:text-xl font-medium text-black leading-snug">{point.heading}</h3>
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
            <span className="text-black/60">It holds.</span>{" "}
            <span className="text-black font-medium">It does something.</span>
          </p>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mt-20" />
      </div>
    </section>
  );
}
