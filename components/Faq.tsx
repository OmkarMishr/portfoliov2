"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Are you open to internships or full-time roles?",
    a: "Yes — I'm actively open to both internships and full-time opportunities as a full-stack web engineer, on-site or remote.",
  },
  {
    q: "What's your core stack?",
    a: "React, Next.js and TypeScript on the frontend; Node.js, Express, Python and Django on the backend; MongoDB and MySQL for data, with Docker and Git for tooling.",
  },
  {
    q: "Can you own a feature end-to-end?",
    a: "Absolutely. I'm comfortable taking a feature from schema design and API work through to a polished, accessible, performant interface.",
  },
  {
    q: "How do you approach performance and quality?",
    a: "Performance, accessibility and clean code are treated as first-class requirements — not afterthoughts. I write tested, readable code with a clear Git history.",
  },
  {
    q: "How can I reach you?",
    a: "Email me at omkarmishra591@gmail.com or connect on LinkedIn. I usually reply within a day.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-machina text-lg font-bold">{q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/20 text-lg transition-transform duration-300 ${
            open ? "rotate-45 bg-accent text-white" : "text-muted"
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
        }}
      >
        <div className="min-h-0">
          <p className="pb-6 pr-10 leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-muted">
            FAQ
          </span>
          <h2 className="mt-6 font-machina text-4xl font-extrabold leading-tight sm:text-5xl">
            Frequently
            <br />
            asked questions.
          </h2>
          <p className="mt-5 text-muted">
            Still curious? Drop me a message and I&apos;ll get back to you.
          </p>
        </div>

        <div>
          {FAQS.map((f) => (
            <Item key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
