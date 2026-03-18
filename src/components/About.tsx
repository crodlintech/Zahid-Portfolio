"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const paragraphs = [
  { text: "I didn't start with SEO.", delay: 0.1 },
  { text: "I started with writing.", delay: 0.2, italic: true },
  { text: "The kind where you sit with a thought too long\nand slowly turn it into something that feels honest.", delay: 0.3 },
  { text: "Somewhere along the way, that changed.\nNot the writing, but what it could do.", delay: 0.4 },
  { text: "It started reaching people.\nIt started working.", delay: 0.5 },
  { text: "Today, I write at the intersection of\nstorytelling, strategy, and attention.", delay: 0.6 },
  { text: "From AI platforms to healthcare brands,\nI've helped ideas find their place online\nwithout losing their voice.", delay: 0.7 },
  { text: "And even now, after all the structure and intent,\nI still write the same way I started.", delay: 0.8 },
  { text: "For people.", delay: 0.9, bold: true },
];

const tags = ["Storytelling", "SEO Strategy", "Brand Voice", "AI Platforms", "Healthcare"];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-12 origin-left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Left — Title + Illustration */}
          <div className="lg:sticky lg:top-32 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={inView ? { opacity: 1, width: "auto" } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs uppercase tracking-[0.35em] text-black/35 font-light overflow-hidden inline-block"
              >
                Story
              </motion.span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-black">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="block"
                >
                  Where Words Begin
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="text-black/35 font-light italic block"
                >
                  to Mean Something
                </motion.span>
              </h2>

              {/* SVG Writing Illustration with parallax */}
              <motion.div style={{ y: parallaxY }} className="mt-6 rounded-2xl overflow-hidden border border-black/[0.07] bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.06)] card-hover">
                <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                  <rect width="320" height="240" fill="#fefefe"/>
                  <rect x="20" y="170" width="280" height="6" rx="3" fill="#e8e4de"/>
                  <rect x="60" y="90" width="140" height="90" rx="6" fill="#f0ede8" stroke="#d4cfc9" strokeWidth="1"/>
                  <rect x="60" y="90" width="8" height="90" rx="2" fill="#d4cfc9"/>
                  <line x1="80" y1="110" x2="185" y2="110" stroke="#ccc" strokeWidth="1" opacity="0.7"/>
                  <line x1="80" y1="122" x2="175" y2="122" stroke="#ccc" strokeWidth="1" opacity="0.7"/>
                  <line x1="80" y1="134" x2="185" y2="134" stroke="#ccc" strokeWidth="1" opacity="0.7"/>
                  <line x1="80" y1="146" x2="160" y2="146" stroke="#ccc" strokeWidth="1" opacity="0.7"/>
                  <line x1="80" y1="158" x2="185" y2="158" stroke="#ccc" strokeWidth="1" opacity="0.7"/>
                  <rect x="190" y="95" width="8" height="60" rx="4" transform="rotate(20 190 95)" fill="#222"/>
                  <polygon points="210,148 214,165 206,165" fill="#333"/>
                  <rect x="220" y="130" width="35" height="40" rx="5" fill="#fff" stroke="#ddd" strokeWidth="1.5"/>
                  <path d="M255 142 Q268 142 268 152 Q268 162 255 162" stroke="#ddd" strokeWidth="1.5" fill="none"/>
                  <ellipse cx="237" cy="130" rx="17" ry="5" fill="#e8e4de"/>
                  <path d="M230 122 Q232 116 230 110" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M237 120 Q239 113 237 107" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M244 122 Q246 116 244 110" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <rect x="40" y="140" width="14" height="30" rx="3" fill="#c4b99a"/>
                  <ellipse cx="47" cy="115" rx="16" ry="30" fill="#4a7c59" opacity="0.7"/>
                  <ellipse cx="35" cy="125" rx="12" ry="20" fill="#3d6b4a" opacity="0.6"/>
                  <ellipse cx="59" cy="128" rx="11" ry="18" fill="#4a7c59" opacity="0.5"/>
                  <rect x="260" y="60" width="3" height="110" rx="1" fill="#666"/>
                  <path d="M240 60 Q263 40 286 60" fill="#f0ec98" stroke="#ddd" strokeWidth="1"/>
                  <ellipse cx="263" cy="80" rx="30" ry="15" fill="#fffde0" opacity="0.4"/>
                  <circle cx="100" cy="50" r="2" fill="#ddd"/>
                  <circle cx="120" cy="40" r="1.5" fill="#eee"/>
                  <circle cx="80" cy="45" r="1" fill="#ddd"/>
                </svg>
              </motion.div>

              {/* Tags — animated stagger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-5 bg-black/[0.02] border border-black/[0.07] rounded-2xl backdrop-blur-sm"
              >
                <div className="flex flex-col gap-3">
                  {tags.map((tag, i) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                      className="flex items-center gap-3 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-black/50 transition-colors duration-300"
                      />
                      <span className="text-sm text-black/50 font-light group-hover:text-black/70 transition-colors duration-300">{tag}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Body text with staggered reveal */}
          <div className="flex flex-col gap-6">
            {paragraphs.map((para, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.9,
                  delay: para.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p
                  className={`whitespace-pre-line leading-relaxed ${
                    para.bold
                      ? "text-xl md:text-2xl font-medium text-black"
                      : para.italic
                      ? "text-base md:text-lg font-light italic text-black/45"
                      : "text-base md:text-lg font-light text-black/55"
                  }`}
                >
                  {para.text}
                </p>
                {para.bold && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="mt-2 h-0.5 w-12 bg-black/20 origin-left rounded-full"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
