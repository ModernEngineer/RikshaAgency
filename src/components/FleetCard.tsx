"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { TbSteeringWheel } from "react-icons/tb";

type Props = {
  name: string;
  type: string;
  desc: string;
  color: string;
  index?: number;
};

export default function FleetCard({ name, type, desc, color, index = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const transform = useMotionTemplate`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(-py * 14);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6"
    >
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25 blur-3xl"
        style={{ background: color }}
      />

      <div className="relative flex items-center justify-between">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl"
          style={{ background: `${color}22`, color }}
        >
          <TbSteeringWheel />
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
          {type}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-xl font-bold text-foreground">
        {name}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">{desc}</p>

      <div className="relative mt-5 flex items-center gap-2">
        {[0, 1, 2].map((w) => (
          <span
            key={w}
            className="h-2 w-2 rounded-full"
            style={{ background: color, opacity: 0.9 - w * 0.25 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
