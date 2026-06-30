"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { portfolioData } from "@/data/portfolio";

const EarthCanvas = dynamic(() => import("@/components/canvas/Earth"), {
  ssr: false,
});

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // No EmailJS keys configured yet → fall back to the mail client.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name}\nReply to: ${form.email}`,
      );
      window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: portfolioData.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const inputClass =
    "rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/30";

  const sending = status === "sending";

  return (
    <section id="contact" className="relative px-6 py-24 md:px-12 md:py-28">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]"
      >
        {/* Left: form card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0f] p-8 sm:p-10"
        >
          {/* Orange glow accent */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

          <p className="relative text-sm font-medium uppercase tracking-widest text-accent">
            {portfolioData.contact.label}
          </p>
          <h2 className="relative mt-2 font-machina text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {portfolioData.contact.heading}
          </h2>

          <form onSubmit={handleSubmit} className="relative mt-8 flex flex-col gap-6">
            <label className="flex flex-col gap-2.5">
              <span className="text-sm font-medium text-white">Your Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="What's your good name?"
                required
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2.5">
              <span className="text-sm font-medium text-white">Your email</span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="What's your web address?"
                required
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2.5">
              <span className="text-sm font-medium text-white">
                Your Message
              </span>
              <textarea
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What you want to say?"
                required
                className={`${inputClass} resize-none`}
              />
            </label>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={sending}
                className="w-fit rounded-xl bg-accent px-8 py-3 text-sm font-bold text-white shadow-lg shadow-black/30 transition-transform hover:scale-[1.03] active:scale-95 disabled:opacity-60"
              >
                {sending
                  ? "Sending..."
                  : status === "sent"
                    ? "Sent ✓"
                    : portfolioData.contact.ctaText}
              </button>
              {status === "error" && (
                <span className="text-sm text-red-400">
                  Something went wrong — try again or email me directly.
                </span>
              )}
              {status === "sent" && (
                <span className="text-sm text-emerald-400">
                  Thanks! I&apos;ll get back to you soon.
                </span>
              )}
            </div>
          </form>
        </motion.div>

        {/* Right: Earth globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[350px] w-full sm:h-[450px] lg:h-[550px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
}
