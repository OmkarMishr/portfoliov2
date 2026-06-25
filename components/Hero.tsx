"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          ".hero-line > span",
          { yPercent: 115, duration: 1, stagger: 0.12 },
          "-=0.2",
        )
        .from(
          ".hero-sub",
          { y: 24, opacity: 0, duration: 0.7 },
          "-=0.5",
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4",
        )
        .from(
          ".hero-stat",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 },
          "-=0.4",
        );

      // Subtle parallax glow follow
      gsap.to(".hero-glow", {
        yPercent: 12,
        scrollTrigger: { trigger: el, start: "top top", scrub: 1 },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* background grid + glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black, transparent)",
        }}
      />
      <div className="hero-glow pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="hero-badge mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to internships &amp; full-time opportunities
        </div>

        <h1 className="font-machina text-[clamp(2.6rem,7vw,6rem)] font-extrabold uppercase leading-[0.95] tracking-tight">
          <span className="hero-line block overflow-hidden">
            <span>The Full-Stack</span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span>
              Engineer <span className="text-accent">Companies</span>
            </span>
          </span>
          <span className="hero-line block overflow-hidden">
            <span>Want To Hire.</span>
          </span>
        </h1>

        <p className="hero-sub mt-7 max-w-xl text-lg leading-relaxed text-muted">
          Hi, I&apos;m <span className="text-fg">Omkar Mishra</span> — I develop
          full-stack projects, polished user interfaces, and reliable web
          applications focused on scalable systems and performance.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="hero-cta rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            View my work →
          </a>
          <a
            href="/resume.pdf"
            className="hero-cta rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-fg transition-colors hover:bg-white/10"
          >
            Download résumé
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {[
            { n: "1.5+", l: "Years hands-on" },
            { n: "5+", l: "Projects delivered" },
            { n: "2", l: "Internships" },
            { n: "7.8+", l: "Academic CPI" },
          ].map((s) => (
            <div key={s.l} className="hero-stat">
              <dt className="font-machina text-3xl font-extrabold text-fg">
                {s.n}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-muted">
                {s.l}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
