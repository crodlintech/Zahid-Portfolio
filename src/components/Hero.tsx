"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const letterAnimation = {
  hidden: { opacity: 0, y: 80, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.04,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

function AnimatedText({ text, className, startIndex = 0 }: { text: string; className?: string; startIndex?: number }) {
  return (
    <span className={className} style={{ display: "inline-flex", flexWrap: "wrap", perspective: "600px" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterAnimation}
          initial="hidden"
          animate="visible"
          custom={startIndex + i}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleContactScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Animated background elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[16%] w-[500px] h-[500px] rounded-full bg-black/[0.03] blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[16%] w-[400px] h-[400px] rounded-full bg-black/[0.03] blur-[80px]"
        />
        {/* Decorative grid dots */}
        <div className="absolute top-20 right-20 opacity-[0.04]">
          <svg width="120" height="120" viewBox="0 0 120 120">
            {Array.from({ length: 36 }).map((_, i) => (
              <circle key={i} cx={(i % 6) * 20 + 10} cy={Math.floor(i / 6) * 20 + 10} r="1.5" fill="#111" />
            ))}
          </svg>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* LEFT — Text */}
        <motion.div className="flex flex-col gap-8" style={{ y: textY }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-black/30 block"
            />
            <span className="text-xs uppercase tracking-[0.3em] text-black/40 font-light">
              Content Writer · SEO · Storytelling
            </span>
          </motion.div>

          {/* Main Headline — letter by letter */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-black">
              <AnimatedText text="I write things" startIndex={0} />
              <br />
              <span className="text-black/40 font-light italic">
                <AnimatedText text="people actually" className="text-black/40 font-light italic" startIndex={14} />
              </span>
              <br />
              <AnimatedText text="read." startIndex={29} />
            </h1>
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-black/35 tracking-tight"
            >
              And algorithms don&apos;t ignore.
            </motion.h2>
          </div>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-black/50 font-light leading-relaxed max-w-md"
          >
            Words that feel right, read easy, and stay longer than they should.
            <br />
            <span className="text-black/35">I write for people first. The internet just follows.</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.4 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="https://adaywithanartist.blogspot.com/?m=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-500 hover:gap-3 hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.3)]"
            >
              <span className="relative">Read My Work</span>
              <svg className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button
              onClick={handleContactScroll}
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-black/20 text-black/70 text-sm font-light rounded-full hover:border-black/50 hover:text-black hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              Let&apos;s Talk
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border border-black/20 text-black/70 text-sm font-light rounded-full hover:border-black/50 hover:text-black hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              Resume
              <svg className="w-4 h-4 text-black/40 group-hover:text-black transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </a>
          </motion.div>

          {/* Stats — animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.7 }}
            className="flex gap-10 mt-4 pt-8 border-t border-black/10"
          >
            {[
              { num: "3+", label: "Years Writing" },
              { num: "50+", label: "Pieces Published" },
              { num: "∞", label: "Ideas Left" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9 + i * 0.15, duration: 0.6 }}
                className="flex flex-col gap-1 group"
              >
                <span className="text-2xl font-semibold text-black transition-colors duration-300">{stat.num}</span>
                <span className="text-xs text-black/40 font-light tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Hero Image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Animated decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-[2.5rem] border border-black/[0.06] border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-[3rem] border border-black/[0.03] border-dashed"
            />

            {/* Image container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-black/[0.03] border border-black/[0.08] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)]"
            >
              <Image
                src="/hero-nobg.png"
                alt="Writer illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain img-curvy"
                priority
              />
              {/* Overlay shimmer */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6, type: "spring", stiffness: 200 }}
              className="absolute -bottom-5 -left-5 backdrop-blur-xl bg-white/80 border border-black/[0.08] shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] rounded-2xl px-5 py-3.5 flex items-center gap-3"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75" />
              </div>
              <span className="text-xs text-black/60 font-light">Available for work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          const el = document.querySelector("#about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs text-black/30 tracking-widest uppercase font-light">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-black/20 flex items-start justify-center pt-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-black/30"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
