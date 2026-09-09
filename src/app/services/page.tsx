import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/motion/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services | Riksha Agency",
  description:
    "Daily rentals, monthly leasing, airport transfers, cargo rickshaws and driver on-boarding — explore all Riksha Agency services.",
};

const process = [
  {
    step: "01",
    title: "Enquire",
    desc: "Share your requirement — rental, lease or transfer — through our contact form or WhatsApp.",
  },
  {
    step: "02",
    title: "Get Matched",
    desc: "We recommend the right riksha model and plan based on your route and usage.",
  },
  {
    step: "03",
    title: "Verify & Confirm",
    desc: "Quick document check and confirmation call to finalize the booking.",
  },
  {
    step: "04",
    title: "Hit the Road",
    desc: "Pick up your riksha or have it delivered, fully inspected and ready.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Everything you need,{" "}
            <span className="text-gradient">wrapped around a riksha</span>
          </>
        }
        description="Rentals, leasing, transfers, cargo and driver on-boarding — services designed for drivers, businesses and everyday commuters."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border bg-background-alt py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              How It Works
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Four simple steps
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 0.1}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-display text-4xl font-extrabold text-primary/30">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <Reveal className="grid items-center gap-10 rounded-3xl border border-border bg-card p-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our Promise
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold">
              Service you can measure
            </h2>
            <p className="mt-4 text-muted">
              We back every plan with clear terms and responsive support — no
              hidden charges, no surprises.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Transparent, fixed pricing on every plan",
              "Verified drivers and inspected vehicles",
              "Dedicated WhatsApp & phone support",
              "Easy plan upgrades as your needs grow",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                <FaCheckCircle className="mt-0.5 shrink-0 text-accent" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-background-alt px-8 py-14 text-center">
          <div className="blob pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-primary/25" />
          <h2 className="relative font-display text-3xl font-extrabold sm:text-4xl">
            Let&apos;s find the right plan for you
          </h2>
          <div className="relative mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-background shadow-[0_10px_30px_-6px_rgba(255,199,0,0.55)] transition-transform hover:scale-105"
            >
              Contact Us <FaArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
