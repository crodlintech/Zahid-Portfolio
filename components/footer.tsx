"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:connect.zahidworks@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zahidworkshere",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/elusive_ppoet",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="relative px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#hero"
              className="text-2xl font-semibold tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Zahid.
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Content Writer & Storyteller
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-12 w-12 items-center justify-center rounded-full transition-all hover:bg-muted"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5 text-muted-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="my-8 h-px bg-border"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left"
        >
          <p>
            {new Date().getFullYear()} Zahid. All rights reserved.
          </p>
          <p className="text-xs">
            Built with intention. Designed for connection.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
