"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const handleContactScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-black/[0.02] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-black/[0.02] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* LEFT — Text */}
        <div className="flex flex-col gap-8">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-3"
          >
            <span className="w-8 h-px bg-black/30" />
            <span className="text-xs uppercase tracking-[0.3em] text-black/40 font-light">
              Content Writer · SEO · Storytelling
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="flex flex-col gap-2">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-black"
            >
              I write things
              <br />
              <span className="text-black/40 font-light italic">people actually</span>
              <br />
              read.
            </motion.h1>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-black/35 tracking-tight"
            >
              And algorithms don&apos;t ignore.
            </motion.h2>
          </div>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-base md:text-lg text-black/50 font-light leading-relaxed max-w-md"
          >
            Words that feel right, read easy, and stay longer than they should.
            <br />
            <span className="text-black/35">I write for people first. The internet just follows.</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="https://adaywithanartist.blogspot.com/?m=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/85 transition-all duration-300 hover:gap-3"
            >
              Read My Work
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button
              onClick={handleContactScroll}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-black/20 text-black/70 text-sm font-light rounded-full hover:border-black/50 hover:text-black transition-all duration-300"
            >
              Let&apos;s Talk
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex gap-10 mt-4 pt-8 border-t border-black/10"
          >
            {[
              { num: "3+", label: "Years Writing" },
              { num: "50+", label: "Pieces Published" },
              { num: "∞", label: "Ideas Left" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-black">{stat.num}</span>
                <span className="text-xs text-black/40 font-light tracking-wide">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-black/[0.06]" />
            <div className="absolute -inset-8 rounded-[3rem] border border-black/[0.03]" />

            {/* Image container */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-black/[0.03] border border-black/[0.08]">
              <Image
                src="/hero-nobg.png"
                alt="Writer illustration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain img-curvy"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-5 -left-5 backdrop-blur-xl bg-white/80 border border-black/[0.08] shadow-sm rounded-2xl px-5 py-3.5 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-black/60 font-light">Available for work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          const el = document.querySelector("#about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs text-black/30 tracking-widest uppercase font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-black/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
