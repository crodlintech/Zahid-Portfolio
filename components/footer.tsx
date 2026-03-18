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
    <footer className="py-10 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-sm text-muted-foreground tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {new Date().getFullYear()} Zahid. Words that matter.
          </motion.p>

          <div className="flex items-center gap-5">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass-strong text-muted-foreground hover:text-foreground transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.05 }}
                aria-label={link.name}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
