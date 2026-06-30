"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  image?: string;
  live?: string;
  github?: string;
  featured?: boolean;
};

const PROJECTS = portfolioData.projects as Project[];

function ProjectCard({ p }: { p: Project }) {
  const [imgOk, setImgOk] = useState(Boolean(p.image));

  return (
    <article className="group/card relative mx-3 flex w-[330px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0f] transition-transform duration-500 hover:z-10 hover:scale-[1.05] sm:w-[380px]">
      {/* Big image */}
      <div className="relative h-48 w-full overflow-hidden bg-black/40 sm:h-52">
        {p.image && imgOk ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="380px"
            className="object-contain p-2 transition-transform duration-500 group-hover/card:scale-[1.03]"
            onError={() => setImgOk(false)}
          />
        ) : (
          // Branded gradient fallback until a real screenshot is added.
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 via-[#1a120e] to-[#0d0d0f]">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />
            <span className="px-6 text-center font-machina text-xl font-extrabold text-white/90">
              {p.title}
            </span>
          </div>
        )}
        {p.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-machina text-xl font-extrabold leading-tight text-white">
          {p.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {p.blurb}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
          {p.tags.length > 4 && (
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
              +{p.tags.length - 4}
            </span>
          )}
        </div>

        <div className="mt-6 flex gap-3 pt-1 text-sm font-medium">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-white transition-colors hover:bg-primary/90"
            >
              Live <ExternalLink size={14} />
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2 text-white transition-colors hover:bg-white/10"
            >
              Code <GithubIcon size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...PROJECTS, ...PROJECTS];

  return (
    <section id="projects" className="overflow-hidden bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            Selected Work
          </span>
          <h2 className="mt-6 font-machina text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Projects that ship,
            <br />
            scale and stay reliable.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hover any card to pause the reel and focus it.
          </p>
        </Reveal>
      </div>

      {/* Auto-scrolling reel (full-bleed with edge fades).
          group/reel: hovering the reel pauses the motion and blurs the
          non-hovered cards. */}
      <div
        className="proj-reel group/reel relative mt-14"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div className="proj-track flex w-max flex-nowrap py-2 group-hover/reel:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <ProjectCard key={`${p.title}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
