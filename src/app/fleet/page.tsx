import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/motion/Reveal";
import FleetCard from "@/components/FleetCard";
import { fleet } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Fleet | Riksha Agency",
  description:
    "Explore Riksha Agency's full fleet of passenger, cargo, CNG and electric auto rickshaws available for rent or lease.",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Fleet"
        title={
          <>
            A riksha ready for{" "}
            <span className="text-gradient">every kind of journey</span>
          </>
        }
        description="Petrol, CNG, electric and cargo models — every riksha in our fleet is inspected, insured and ready to roll."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((f, i) => (
            <FleetCard key={f.name} {...f} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background-alt py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="grid items-center gap-8 rounded-3xl border border-border bg-card p-10 text-center md:flex md:justify-between md:text-left">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Not sure which riksha fits your need?
              </h2>
              <p className="mt-2 text-muted">
                Tell us your route and usage — we&apos;ll recommend the right
                model for you.
              </p>
            </div>
            <Link
              href="/contact"
              className="mx-auto inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-105 md:mx-0"
            >
              Talk to Us <FaArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
