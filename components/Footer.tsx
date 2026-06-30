import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817-5.97 6.817H1.68l7.73-8.835L1.254 2.25h6.83l4.713 6.231 5.447-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

export default function Footer() {
  const socials = [
    { Icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email" },
    { Icon: GithubIcon, href: portfolioData.social.github, label: "GitHub" },
    { Icon: LinkedinIcon, href: portfolioData.social.linkedin, label: "LinkedIn" },
    { Icon: XIcon, href: portfolioData.social.twitter, label: "X" },
  ];

  const [first, ...rest] = portfolioData.name.split(" ");

  return (
    <footer className="relative px-6 py-16 text-center">
      <a
        href="#top"
        className="font-machina text-3xl font-extrabold tracking-tight text-white"
      >
        {first}{" "}
        <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
          {rest.join(" ")}
        </span>
      </a>

      <ul className="mt-7 flex items-center justify-center gap-3">
        {socials.map(({ Icon, href, label }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white/80 transition-all duration-200 hover:border-accent/60 hover:text-accent"
            >
              <Icon size={18} />
            </a>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-7 max-w-md text-sm text-white/55">
        {portfolioData.footer.tagline}
      </p>
      <p className="mt-3 text-xs text-white/35">
        {portfolioData.footer.copyright}
      </p>
    </footer>
  );
}
