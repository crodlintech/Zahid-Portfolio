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
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {new Date().getFullYear()} Zahid. Words that matter.
          </motion.p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                aria-label={link.name}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
