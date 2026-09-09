"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaQuoteLeft, FaStar } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import RickshawStage from "@/components/three/RickshawStage";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import ServiceCard from "@/components/ServiceCard";
import FleetCard from "@/components/FleetCard";
import {
  faqs,
  fleet,
  services,
  siteConfig,
  stats,
  testimonials,
} from "@/data/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="blob pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-primary/25" />
        <div className="blob pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-accent/20" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              Auto Riksha Rental &amp; Fleet Partner
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Your City. <span className="text-gradient">Your Riksha.</span>
              <br /> Every Corner Covered.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted"
            >
              Riksha Agency rents, leases and maintains auto rickshaws for
              drivers, businesses and riders — verified vehicles, fair
              pricing, always on the move.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-background shadow-[0_10px_30px_-6px_rgba(255,199,0,0.55)] transition-transform hover:scale-105"
              >
                Book a Riksha
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Explore Fleet
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
            >
              {["Verified Drivers", "Transparent Pricing", "24/7 Support"].map(
                (t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <FaCheckCircle className="text-accent" /> {t}
                  </span>
                )
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[340px] sm:h-[420px] lg:h-[480px]"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-border bg-card/40" />
            <RickshawStage className="relative h-full w-full" />
            <span className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] text-muted backdrop-blur">
              Drag to rotate • Riksha Classic
            </span>
          </motion.div>
        </div>

        {/* marquee */}
        <div className="relative border-y border-border bg-card/50 py-4">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {[...fleet, ...fleet].map((f, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-muted"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: f.color }}
                />
                {f.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background-alt">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 sm:grid-cols-4 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                <Counter value={s.value} suffix="+" />
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted sm:text-sm">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Services built around your riksha
          </h2>
          <p className="mt-4 text-muted">
            From daily rentals to full fleet leasing — everything a driver or
            business needs, in one place.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all services <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="border-t border-border bg-background-alt py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our Fleet
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              A riksha for every route
            </h2>
            <p className="mt-4 text-muted">
              Petrol, CNG and electric models — maintained, inspected and
              ready to roll out.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.slice(0, 3).map((f, i) => (
              <FleetCard key={f.name} {...f} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              See full fleet <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Why Riksha Agency
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Built for drivers. Trusted by riders.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              We handle verification, maintenance and support so drivers can
              focus on the road and riders can trust every trip.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                {
                  title: "Verified & Insured Fleet",
                  desc: "Every riksha is inspected regularly and covered under insurance.",
                },
                {
                  title: "Flexible Rental Plans",
                  desc: "Daily, weekly or monthly — pick a plan that fits your work.",
                },
                {
                  title: "Real Support, Real People",
                  desc: "A dedicated support line for breakdowns, queries and bookings.",
                },
              ].map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <FaCheckCircle />
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10">
              <div className="blob pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-primary/20" />
              <div className="relative grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border bg-background/60 p-5 text-center animate-float"
                  >
                    <div className="font-display text-2xl font-extrabold text-primary">
                      <Counter value={s.value} suffix="+" />
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-wide text-muted">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border bg-background-alt py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Testimonials
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              What our drivers &amp; riders say
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 0.1}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <FaQuoteLeft className="text-2xl text-primary/60" />
                <p className="mt-4 text-sm leading-relaxed text-foreground">
                  {t.quote}
                </p>
                <div className="mt-5 flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} size={12} />
                  ))}
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            FAQs
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-background-alt px-8 py-14 text-center">
          <div className="blob pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-primary/25" />
          <div className="blob pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-accent/20" />
          <h2 className="relative font-display text-3xl font-extrabold sm:text-4xl">
            Ready to hit the road with us?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-muted">
            Reach out to {siteConfig.name} today — enquire about rentals,
            leasing or joining our driver network.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-background shadow-[0_10px_30px_-6px_rgba(255,199,0,0.55)] transition-transform hover:scale-105"
            >
              Get in Touch <FaArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="overflow-hidden rounded-xl border border-border bg-card"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-primary"
        >
          <HiChevronDown size={18} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{a}</p>
      </motion.div>
    </motion.div>
  );
}
