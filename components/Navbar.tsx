"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-sm font-machina font-extrabold text-white">
            O
          </span>
          <span className="font-machina text-[15px] font-bold tracking-tight">
            Omkar
            <span className="text-muted"> | Full-Stack</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
