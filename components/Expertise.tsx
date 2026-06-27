"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GROUPS = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 82 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "Docker", level: 70 },
    ],
  },
  {
    title: "DevOps & Tooling",
    skills: [
      { name: "Git", level: 90 },
      { name: "Linux", level: 75 },
      { name: "CI/CD", level: 72 },
      { name: "Nginx", level: 70 },
    ],
  },
];

export default function Expertise() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".skill-fill").forEach((bar) => {
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: bar.dataset.level + "%",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: bar, start: "top 90%", once: true },
          },
        );
      });

      gsap.from(".skill-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skill-grid", start: "top 80%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" ref={root} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-muted">
            Expertise &amp; Tech Stack
          </span>
          <h2 className="mt-6 font-machina text-4xl font-extrabold leading-tight sm:text-5xl">
            Product-minded full-stack
            <br />
            <span className="text-accent">engineering.</span>
          </h2>
          <p className="mt-5 text-muted">
            Focused on scalable systems, performance, and polished user
            experiences — from database to deployed interface.
          </p>
        </div>

        <div className="skill-grid mt-16 grid gap-5 md:grid-cols-2">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="skill-card rounded-2xl border border-white/10 bg-bg-soft p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-machina text-lg font-bold">
                  {group.title}
                </h3>
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <ul className="space-y-5">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-fg/90">{skill.name}</span>
                      <span className="text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="skill-fill h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                        data-level={skill.level}
                        style={{ width: 0 }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
