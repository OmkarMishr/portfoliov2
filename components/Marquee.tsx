const ITEMS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "Django",
  "Tailwind CSS",
  "MySQL",
  "Docker",
  "Git",
];

export default function Marquee() {
  return (
    <section className="border-y border-white/10 bg-bg-soft py-5">
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span
              key={i}
              className="mx-7 inline-flex items-center gap-3 font-machina text-lg font-bold uppercase tracking-tight text-muted"
            >
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
