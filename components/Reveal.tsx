"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** vertical offset to animate from (px) */
  y?: number;
  /** delay in seconds */
  delay?: number;
  /** stagger direct children instead of the element itself */
  stagger?: boolean;
};

export default function Reveal({
  children,
  className,
  as,
  y = 40,
  delay = 0,
  stagger = false,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.12 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [y, delay, stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
