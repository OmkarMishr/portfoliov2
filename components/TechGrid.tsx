import Reveal from "./Reveal";

const TECH = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Python",
  "Django",
  "Tailwind",
  "Docker",
  "Git",
  "Linux",
];

export default function TechGrid() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-muted">
              Toolbox
            </span>
            <h2 className="mt-6 font-machina text-4xl font-extrabold sm:text-5xl">
              Tools I reach for.
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            The stack I use day to day to take ideas from prototype to
            production.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {TECH.map((t) => (
            <div
              key={t}
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-bg-soft px-5 py-4 transition-colors hover:border-accent/50"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 font-machina text-sm font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                {t.slice(0, 2)}
              </span>
              <span className="font-medium">{t}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
