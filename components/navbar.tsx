"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Story" },
  { href: "#why", label: "Why" },
  { href: "#work", label: "Work" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong py-4"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            className="text-lg font-semibold tracking-tight text-foreground"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            zahid.
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              onClick={toggleTheme}
              className="ml-2 p-2.5 rounded-full glass-strong hover:scale-105 transition-transform duration-300"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass-strong"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-24 glass-strong md:hidden"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xl font-light text-foreground tracking-wide"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
