import Reveal from "./Reveal";

const MINE = [
  "Ships end-to-end: database → API → polished UI",
  "Performance & accessibility treated as features",
  "Strong DSA & problem-solving foundation",
  "Production-ready code, tests and clean Git history",
  "Clear async communication, owns outcomes",
];

const OTHERS = [
  "Stops at the layer they're comfortable with",
  "Performance bolted on at the very end",
  "Glue code without fundamentals",
  "\"Works on my machine\" hand-offs",
  "Needs constant hand-holding",
];

export default function WhyMe() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-muted">
            Why work with me
          </span>
          <h2 className="mt-6 font-machina text-4xl font-extrabold sm:text-5xl">
            What sets my work apart.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-accent/40 bg-gradient-to-b from-accent/10 to-transparent p-8">
            <h3 className="font-machina text-xl font-bold text-accent">
              Working with Omkar
            </h3>
            <ul className="mt-6 space-y-4">
              {MINE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[11px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-fg/90">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-3xl border border-white/10 bg-bg-soft p-8"
          >
            <h3 className="font-machina text-xl font-bold text-muted">
              The typical hire
            </h3>
            <ul className="mt-6 space-y-4">
              {OTHERS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 text-[11px] text-muted">
                    ✕
                  </span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
