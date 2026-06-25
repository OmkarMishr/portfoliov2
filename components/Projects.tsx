import Reveal from "./Reveal";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  live?: string;
  code?: string;
  featured?: boolean;
};

// Representative projects — edit these with your real work + links.
const PROJECTS: Project[] = [
  {
    title: "Realtime Collaboration App",
    blurb:
      "Full-stack MERN platform with live chat, presence and shared workspaces powered by Socket.IO and an optimistic UI.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
    live: "#",
    code: "#",
    featured: true,
  },
  {
    title: "E-commerce Dashboard",
    blurb:
      "Next.js storefront + admin with Stripe checkout, server actions, and analytics. Built for scale and fast first paint.",
    tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    live: "#",
    code: "#",
  },
  {
    title: "Task & Project Manager",
    blurb:
      "Kanban-style productivity tool with drag-and-drop, role-based access, and a REST API backed by MySQL.",
    tags: ["React", "Express", "MySQL", "JWT"],
    live: "#",
    code: "#",
  },
  {
    title: "Developer Portfolio & Blog",
    blurb:
      "Content-driven site with MDX, animated transitions, and a fully static, SEO-optimized build.",
    tags: ["Next.js", "MDX", "GSAP", "Tailwind"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-cream py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-block rounded-full border border-ink/15 bg-ink/5 px-4 py-1 text-xs uppercase tracking-widest text-ink/60">
            Selected Work
          </span>
          <h2 className="mt-6 font-machina text-4xl font-extrabold leading-tight sm:text-5xl">
            Projects that ship,
            <br />
            scale and stay reliable.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p) => (
            <Reveal
              key={p.title}
              y={50}
              className={`group flex flex-col justify-between rounded-3xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                p.featured
                  ? "border-transparent bg-accent text-white"
                  : "border-ink/10 bg-cream-soft"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-machina text-2xl font-extrabold">
                    {p.title}
                  </h3>
                  {p.featured && (
                    <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] uppercase tracking-wide">
                      Featured
                    </span>
                  )}
                </div>
                <p
                  className={`mt-4 leading-relaxed ${
                    p.featured ? "text-white/90" : "text-ink/70"
                  }`}
                >
                  {p.blurb}
                </p>
              </div>

              <div className="mt-7">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`rounded-full px-3 py-1 text-xs ${
                        p.featured
                          ? "bg-white/15 text-white"
                          : "bg-ink/5 text-ink/70"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 text-sm font-medium">
                  <a
                    href={p.live}
                    className={`rounded-full px-5 py-2 transition-colors ${
                      p.featured
                        ? "bg-white text-accent hover:bg-white/90"
                        : "bg-ink text-cream hover:bg-ink/85"
                    }`}
                  >
                    Live demo →
                  </a>
                  <a
                    href={p.code}
                    className={`rounded-full border px-5 py-2 transition-colors ${
                      p.featured
                        ? "border-white/40 hover:bg-white/10"
                        : "border-ink/20 hover:bg-ink/5"
                    }`}
                  >
                    Code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
