import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import { FaBullseye, FaHandshake, FaLeaf, FaUsers } from "react-icons/fa";
import { stats } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | Riksha Agency",
  description:
    "Learn about Riksha Agency's mission, journey and the values that drive our auto rickshaw rental and fleet management business.",
};

const timeline = [
  {
    year: "2016",
    title: "Riksha Agency founded",
    desc: "Started with a fleet of 5 rickshaws and a promise of fair pricing.",
  },
  {
    year: "2019",
    title: "Fleet crosses 100 rickshaws",
    desc: "Expanded to cargo and passenger models across two cities.",
  },
  {
    year: "2022",
    title: "Electric riksha launched",
    desc: "Introduced Riksha E-Volt, our first zero-emission model.",
  },
  {
    year: "2026",
    title: "Digital booking (coming soon)",
    desc: "Building an online platform to book, track and manage rides.",
  },
];

const values = [
  {
    icon: FaHandshake,
    title: "Trust First",
    desc: "Every driver is verified and every vehicle is inspected before it hits the road.",
  },
  {
    icon: FaUsers,
    title: "People Powered",
    desc: "Drivers and riders are at the center of every decision we make.",
  },
  {
    icon: FaLeaf,
    title: "Cleaner Rides",
    desc: "Growing our CNG and electric fleet to reduce emissions city-wide.",
  },
  {
    icon: FaBullseye,
    title: "Reliable Always",
    desc: "On-time pickups and transparent pricing, trip after trip.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Riksha Agency"
        title={
          <>
            Driving communities forward,{" "}
            <span className="text-gradient">one riksha at a time</span>
          </>
        }
        description="We're a local auto rickshaw rental and fleet management agency helping drivers earn a living and riders get around safely, affordably and on time."
      />

      {/* STORY */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              From five rickshaws to a city-wide fleet
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Riksha Agency began as a small family effort to help local
              drivers access well-maintained, affordable rickshaws without
              getting stuck in unfair loan terms. Over the years, that idea
              grew into a full rental and leasing agency serving hundreds of
              drivers and thousands of daily riders.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Today we manage a diverse fleet — passenger, cargo, CNG and
              electric rickshaws — backed by a dedicated support and
              maintenance team that keeps every vehicle roadworthy.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8">
              <div className="blob pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-primary/20" />
              <div className="relative grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-3xl font-extrabold text-primary">
                      <Counter value={s.value} suffix="+" />
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-wide text-muted">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-border bg-background-alt py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Our Journey
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              Milestones along the way
            </h2>
          </Reveal>

          <div className="relative mt-14 space-y-10 border-l border-border pl-8">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.1} className="relative">
                <span className="absolute -left-[2.55rem] flex h-6 w-6 items-center justify-center rounded-full border-4 border-background-alt bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {item.year}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            What We Stand For
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
            Our core values
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 0.08}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-transform hover:-translate-y-1.5"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <v.icon size={20} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-foreground">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
