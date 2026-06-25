import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-bg-soft px-6 py-20 text-center sm:px-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
        <div className="relative">
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-muted">
            Let&apos;s build something
          </span>
          <h2 className="mx-auto mt-7 max-w-3xl font-machina text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Engineer of reliable,
            <br />
            <span className="text-accent">efficient applications.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            Open to internships &amp; full-time opportunities. Let&apos;s talk
            about how I can help your team ship.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/resume.pdf"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-95"
            >
              Download résumé
            </a>
            <a
              href="https://www.linkedin.com/in/omkarmishradev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-fg transition-colors hover:bg-white/10"
            >
              Connect on LinkedIn
            </a>
            <a
              href="mailto:myfinvision@gmail.com"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-fg transition-colors hover:bg-white/10"
            >
              Email me
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
