"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Content Writer
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I write things people{" "}
              <span className="italic font-light">actually</span> read.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              And algorithms don&apos;t ignore.
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Words that feel right, read easy, and stay longer than they should.
              <br />
              I write for people first. The internet just follows.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="https://adaywithanartist.blogspot.com/?m=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-foreground text-background rounded-2xl font-medium text-sm hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read My Work
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 glass rounded-2xl font-medium text-sm text-foreground hover:bg-foreground/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Talk
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_949eaq949eaq949e-AzCccyw3gM1zzFwy0hky8BIXkNrXHw.png"
                  alt="Illustration of a person reading newspaper with coffee"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-border rounded-full opacity-30" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-border rounded-full opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
