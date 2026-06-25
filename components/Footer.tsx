const SOCIALS = [
  { label: "GitHub", href: "https://github.com/OmkarMishr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/omkarmishradev" },
  { label: "Email", href: "mailto:myfinvision@gmail.com" },
  { label: "Portfolio", href: "https://omkarmishradev.vercel.app" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <a href="#top" className="font-machina text-3xl font-extrabold">
            Omkar <span className="text-accent">Mishra</span>
          </a>
          <p className="max-w-md text-sm text-muted">
            Full-stack web engineer building scalable systems, fast interfaces
            and reliable web applications.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Omkar Mishra. All rights reserved.</p>
          <p>Designed &amp; built with Next.js, GSAP &amp; Lenis.</p>
        </div>
      </div>
    </footer>
  );
}
