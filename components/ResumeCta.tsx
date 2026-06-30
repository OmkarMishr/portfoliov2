import Reveal from "./Reveal";
import { portfolioData } from "@/data/portfolio";

const HIGHLIGHTS = [
  "Full-stack expertise",
  "5+ production-ready projects",
  "Strong DSA & problem-solving",
  "7.8 CPI academic excellence",
];

export default function ResumeCta() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-bg-soft px-6 py-20 text-center sm:px-12">
        {/* Orange glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />

        <div className="relative">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-muted-foreground">
            Résumé
          </span>
          <h2 className="mx-auto mt-7 max-w-3xl font-machina text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl">
            Engineer of Reliable,
            <br />
            <span className="text-accent">Efficient Applications.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Open to internships &amp; full-time opportunities. Here&apos;s a
            quick look at what I bring to the table.
          </p>

          {/* Highlight chips */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {HIGHLIGHTS.map((h) => (
              <span
                key={h}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                {h}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/Resume/OmkarMishra_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
            >
              Download Résumé
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
