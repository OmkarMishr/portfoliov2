"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Clock, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

type Job = (typeof portfolioData.experience)[number] & {
  type?: string;
  location?: string;
  logo?: string;
};

function StatChip({
  icon: Icon,
  value,
  label,
  orange,
}: {
  icon: typeof Clock;
  value: string;
  label: string;
  orange: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
          orange ? "bg-white/20 text-white" : "bg-primary/15 text-primary"
        }`}
      >
        <Icon size={18} />
      </span>
      <span className="leading-tight">
        <span
          className={`block text-sm font-bold ${
            orange ? "text-white" : "text-foreground"
          }`}
        >
          {value}
        </span>
        <span
          className={`block text-xs ${
            orange ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {label}
        </span>
      </span>
    </div>
  );
}

function ExperienceCard({ job, index }: { job: Job; index: number }) {
  // Alternate the deck colours like the reference (dark / orange / dark …).
  const orange = index % 2 === 1;

  return (
    <div
      className="sticky"
      style={{
        top: `calc(6rem + ${index} * 3.5rem)`,
        zIndex: index + 1,
      }}
    >
      <div
        className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] md:p-10 ${
          orange
            ? "border-primary bg-primary text-white"
            : "border-white/10 bg-[#0d0d0f] text-foreground"
        }`}
      >
        {/* Header: small logo beside the role/company, Present badge on the right */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {job.logo ? (
              <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1.5">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </span>
            ) : (
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-lg font-bold ${
                  orange ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
                }`}
              >
                {job.company.charAt(0)}
              </span>
            )}
            <div>
              <h3 className="text-xl font-bold tracking-tight md:text-3xl">
                {job.role}
              </h3>
              <p
                className={`text-sm font-semibold ${
                  orange ? "text-white/80" : "text-primary"
                }`}
              >
                {job.company}
                {"location" in job && job.location ? (
                  <span
                    className={orange ? "text-white/60" : "text-muted-foreground"}
                  >
                    {" "}
                    · {job.location}
                  </span>
                ) : null}
              </p>
            </div>
          </div>

          {job.period.includes("Present") && (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Present
            </span>
          )}
        </div>

        {/* Description — spans the full card */}
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {job.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2
                size={17}
                className={`mt-0.5 shrink-0 ${
                  orange ? "text-white" : "text-primary"
                }`}
              />
              <span
                className={`text-sm leading-relaxed ${
                  orange ? "text-white/90" : "text-muted-foreground"
                }`}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* Stat chips */}
        <div
          className={`mt-8 flex flex-wrap gap-x-10 gap-y-5 border-t pt-6 ${
            orange ? "border-white/20" : "border-white/10"
          }`}
        >
          <StatChip
            icon={Clock}
            value={job.period}
            label="Timeline"
            orange={orange}
          />
          <StatChip
            icon={Briefcase}
            value={job.type ?? "—"}
            label="Role type"
            orange={orange}
          />
          <StatChip
            icon={MapPin}
            value={("location" in job && job.location) || "Remote"}
            label="Location"
            orange={orange}
          />
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-100px" });
  const jobs = portfolioData.experience as Job[];

  return (
    <section id="experience" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div ref={headRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-3 flex items-center gap-3"
          >
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              What I have done so far
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight md:text-5xl"
          >
            Work Experience.
          </motion.h2>
        </div>

        {/* Stacking deck */}
        <div className="mt-12 flex flex-col gap-10 pb-[22vh]">
          {jobs.map((job, i) => (
            <ExperienceCard key={`${job.company}-${i}`} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
