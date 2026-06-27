"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "hero")}
          className="text-xl md:text-2xl font-bold tracking-tighter"
          data-testid="link-logo"
        >
          {portfolioData.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {portfolioData.navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
                  data-testid={`link-nav-${link.toLowerCase()}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
            onClick={(e) => handleNavClick(e, "contact")}
            data-testid="button-hire-me"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-white/5"
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {portfolioData.navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-lg font-medium text-muted-foreground hover:text-white transition-colors block py-2"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-full mt-4 transition-colors"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
