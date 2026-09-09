"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/motion/Reveal";
import { siteConfig } from "@/data/site";

const contactCards = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "Chat instantly",
    href: `https://wa.me/${siteConfig.whatsapp}`,
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    value: siteConfig.address,
    href: "#",
  },
];

type Status = "idle" | "sending" | "sent";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Frontend-only preview: booking/API integration will be wired up later.
    setTimeout(() => setStatus("sent"), 1100);
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            Let&apos;s get your{" "}
            <span className="text-gradient">riksha on the road</span>
          </>
        }
        description="Have a question about rentals, leasing or joining our driver network? Send us a message or reach out directly."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <c.icon size={20} />
                </span>
                <h3 className="mt-4 font-display font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-1 break-words text-sm text-muted">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Send a Message
            </span>
            <h2 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">
              We usually reply within a few hours
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="Your name" required />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us what you need — rental, lease, cargo riksha..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-background shadow-[0_10px_30px_-6px_rgba(255,199,0,0.55)] disabled:opacity-70"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/40 border-t-background" />
                      Sending...
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <FaCheckCircle /> Message Received
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs text-muted"
                >
                  Thanks! This is a frontend preview — form submissions will
                  be connected once the backend is ready.
                </motion.p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.15} className="relative overflow-hidden rounded-2xl border border-border bg-background-alt">
            <div className="absolute inset-0">
              <div className="blob absolute -top-10 left-10 h-52 w-52 rounded-full bg-primary/25" />
              <div className="blob absolute bottom-0 right-0 h-52 w-52 rounded-full bg-accent/20" />
            </div>
            <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center gap-4 p-10 text-center">
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary"
              >
                <FaMapMarkerAlt size={26} />
              </motion.span>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Find us in the city
              </h3>
              <p className="max-w-xs text-sm text-muted">
                {siteConfig.address}
              </p>
              <p className="text-xs text-muted">
                Map integration will be added alongside the backend.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
