"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-20">
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I write things
              <br />
              people <span className="italic font-light">actually</span> read.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              And algorithms don&apos;t ignore.
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Words that feel right, read easy, and stay longer than they
              should. I write for people first. The internet just follows.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="https://adaywithanartist.blogspot.com/?m=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-foreground text-background rounded-full font-medium text-sm tracking-wide hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read My Work
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                className="px-7 py-3.5 glass-strong rounded-full font-medium text-sm tracking-wide text-foreground hover:bg-foreground/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Talk
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="glass-strong rounded-[2rem] overflow-hidden p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_949eaq949eaq949e-AzCccyw3gM1zzFwy0hky8BIXkNrXHw.png"
                  alt="Illustration of a person reading newspaper with coffee"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-[1.5rem]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
