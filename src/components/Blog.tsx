"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="blog" ref={ref} className="relative py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-12 origin-left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xs uppercase tracking-[0.35em] text-black/35 font-light"
              >The Blog</motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="block"
                >
                  A Day With
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45, duration: 0.7 }}
                  className="text-black/35 font-light italic block"
                >
                  An Artist
                </motion.span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-base font-light leading-relaxed text-black/50">
              {[
                { text: "This is where it all started.", delay: 0.5 },
                { text: "A space where I write without rules, without structure, without thinking about performance.", delay: 0.6 },
                { text: "Just thoughts, stories, and moments that needed somewhere to exist.", delay: 0.7, italic: true },
                { text: "It is less about content,\nmore about expression.", delay: 0.8 },
                { text: "If you want to understand how I think, this is the place.", delay: 0.9, bold: true },
              ].map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: item.delay, duration: 0.6 }}
                  className={`whitespace-pre-line ${item.italic ? "text-black/30 italic" : ""} ${item.bold ? "text-black/70 font-normal" : ""}`}
                >
                  {item.text}
                </motion.p>
              ))}
            </div>

            <motion.a
              href="https://adaywithanartist.blogspot.com/?m=1"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 self-start px-7 py-3.5 border border-black/20 text-black/70 text-sm font-medium rounded-full hover:bg-black hover:text-white hover:border-black hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.25)] transition-all duration-500"
            >
              Read the Blog
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-[-15deg]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right — SVG journal illustration with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white border border-black/[0.06] shadow-[0_12px_40px_-8px_rgba(0,0,0,0.06)]">
              <svg viewBox="0 0 360 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect width="360" height="450" fill="#fefefe"/>
                <rect x="40" y="60" width="280" height="330" rx="10" fill="#f5f2ed" stroke="#e0dbd4" strokeWidth="1.5"/>
                <rect x="170" y="60" width="20" height="330" fill="#e8e3db"/>
                <line x1="180" y1="60" x2="180" y2="390" stroke="#d4cfc9" strokeWidth="0.5"/>
                {[100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310, 325].map((y, i) => (
                  <line key={`l${i}`} x1="60" y1={y} x2="162" y2={y} stroke="#d8d3cc" strokeWidth="0.8" opacity="0.8"/>
                ))}
                {[100, 115, 130, 145, 160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310, 325].map((y, i) => (
                  <line key={`r${i}`} x1="198" y1={y} x2="300" y2={y} stroke="#d8d3cc" strokeWidth="0.8" opacity="0.8"/>
                ))}
                <rect x="60" y="98" width="80" height="3" rx="1.5" fill="#b8b3ac" opacity="0.6"/>
                <rect x="60" y="113" width="95" height="3" rx="1.5" fill="#b8b3ac" opacity="0.5"/>
                <rect x="60" y="128" width="70" height="3" rx="1.5" fill="#b8b3ac" opacity="0.6"/>
                <rect x="60" y="143" width="88" height="3" rx="1.5" fill="#b8b3ac" opacity="0.4"/>
                <rect x="60" y="158" width="65" height="3" rx="1.5" fill="#b8b3ac" opacity="0.6"/>
                <rect x="60" y="173" width="90" height="3" rx="1.5" fill="#b8b3ac" opacity="0.5"/>
                <rect x="60" y="188" width="55" height="3" rx="1.5" fill="#b8b3ac" opacity="0.4"/>
                <rect x="60" y="230" width="90" height="3" rx="1.5" fill="#b8b3ac" opacity="0.5"/>
                <rect x="60" y="245" width="75" height="3" rx="1.5" fill="#b8b3ac" opacity="0.6"/>
                <rect x="60" y="260" width="88" height="3" rx="1.5" fill="#b8b3ac" opacity="0.4"/>
                <circle cx="100" cy="210" r="20" stroke="#ccc" strokeWidth="1" fill="none" opacity="0.5"/>
                <line x1="100" y1="190" x2="100" y2="200" stroke="#ccc" strokeWidth="1" opacity="0.5"/>
                <line x1="100" y1="220" x2="100" y2="230" stroke="#ccc" strokeWidth="1" opacity="0.5"/>
                <line x1="80" y1="210" x2="90" y2="210" stroke="#ccc" strokeWidth="1" opacity="0.5"/>
                <line x1="110" y1="210" x2="120" y2="210" stroke="#ccc" strokeWidth="1" opacity="0.5"/>
                <rect x="198" y="90" width="88" height="5" rx="2.5" fill="#555" opacity="0.7"/>
                <rect x="198" y="98" width="40" height="3" rx="1.5" fill="#999" opacity="0.5"/>
                <rect x="198" y="113" width="95" height="2" rx="1" fill="#ccc" opacity="0.7"/>
                <rect x="198" y="120" width="88" height="2" rx="1" fill="#ccc" opacity="0.6"/>
                <rect x="198" y="127" width="78" height="2" rx="1" fill="#ccc" opacity="0.7"/>
                <rect x="198" y="134" width="90" height="2" rx="1" fill="#ccc" opacity="0.5"/>
                <rect x="198" y="141" width="60" height="2" rx="1" fill="#ccc" opacity="0.6"/>
                <rect x="198" y="158" width="88" height="2" rx="1" fill="#ccc" opacity="0.7"/>
                <rect x="198" y="165" width="70" height="2" rx="1" fill="#ccc" opacity="0.6"/>
                <rect x="198" y="172" width="88" height="2" rx="1" fill="#ccc" opacity="0.5"/>
                <rect x="198" y="179" width="50" height="2" rx="1" fill="#ccc" opacity="0.7"/>
                <rect x="198" y="196" width="88" height="2" rx="1" fill="#ccc" opacity="0.6"/>
                <rect x="198" y="203" width="80" height="2" rx="1" fill="#ccc" opacity="0.5"/>
                <rect x="198" y="210" width="88" height="2" rx="1" fill="#ccc" opacity="0.7"/>
                <rect x="198" y="217" width="55" height="2" rx="1" fill="#ccc" opacity="0.6"/>
                <text x="285" y="300" fontSize="20" fill="#ddd" textAnchor="middle">✦</text>
                <rect x="290" y="55" width="12" height="50" rx="2" fill="#333" opacity="0.8"/>
                <polygon points="290,105 302,105 296,118" fill="#333" opacity="0.8"/>
                <circle cx="252" cy="340" r="22" stroke="#e0d8ce" strokeWidth="1.5" fill="none" opacity="0.6"/>
                <circle cx="252" cy="340" r="18" stroke="#e8e0d6" strokeWidth="0.5" fill="none" opacity="0.4"/>
                <line x1="30" y1="380" x2="340" y2="370" stroke="#222" strokeWidth="5" strokeLinecap="round"/>
                <ellipse cx="335" cy="370" rx="7" ry="3" fill="#444" transform="rotate(-2 335 370)"/>
              </svg>

              {/* Corner label */}
              <div className="absolute top-5 left-5 text-xs text-black/25 tracking-widest uppercase font-light">
                A Day With An Artist
              </div>

              {/* Shimmer overlay */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={inView ? { x: "200%" } : {}}
                transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: 6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
              />
            </motion.div>
            {/* Decorative ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -inset-3 rounded-[2.5rem] border border-black/[0.04] -z-10"
            />
            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              style={{ animation: "float 5s ease-in-out infinite" }}
              className="absolute -bottom-4 -right-4 backdrop-blur-xl bg-white/80 border border-black/[0.06] rounded-xl px-4 py-2 shadow-sm"
            >
              <span className="text-xs text-black/40 font-light">Since 2021</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mt-12 origin-right"
        />
      </div>
    </section>
  );
}
