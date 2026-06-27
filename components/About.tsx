"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2, MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const contactItems = [
    { icon: MapPin, value: portfolioData.location },
    { icon: Mail, value: portfolioData.email },
    { icon: Phone, value: portfolioData.phone },
  ].filter((item) => item.value);

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-[2px] bg-primary" />
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            About
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: heading + bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              {portfolioData.about.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-10"
            >
              {portfolioData.about.description}
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              {contactItems.map(({ icon: Icon, value }) => (
                <div
                  key={value}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <Icon size={16} className="text-primary shrink-0" />
                  <span className="text-sm font-medium">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: stat card with profile picture + highlights */}
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
            {/* Orange corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[80px]" />
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 rounded-bl-[60px]" />

            {/* Profile picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative z-10 mb-6 flex items-center gap-4"
            >
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-primary/30">
                <Image
                  src="/profile.jpeg"
                  alt={portfolioData.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground leading-tight">
                  {portfolioData.name}
                </p>
                <p className="text-sm text-primary font-semibold">
                  {portfolioData.title}
                </p>
              </div>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-bold mb-6 text-foreground"
            >
              What I bring to the table
            </motion.h3>

            <ul className="flex flex-col gap-4">
              {portfolioData.about.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                  data-testid={`about-highlight-${i}`}
                >
                  <CheckCircle2
                    size={18}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <span className="text-foreground text-sm leading-relaxed">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 pt-6 border-t border-border"
            >
              <p className="text-sm text-muted-foreground">
                Currently based in{" "}
                <span className="text-foreground font-semibold">
                  {portfolioData.location}
                </span>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Working as{" "}
                <span className="text-primary font-semibold">
                  {portfolioData.title}
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
