"use client";

import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaTruckPickup,
} from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  clock: FaClock,
  calendar: FaCalendarAlt,
  map: FaMapMarkedAlt,
  truck: FaTruckPickup,
  steering: TbSteeringWheel,
  shield: FaShieldAlt,
};

type Props = {
  title: string;
  desc: string;
  icon: string;
  index?: number;
};

export default function ServiceCard({ title, desc, icon, index = 0 }: Props) {
  const Icon = iconMap[icon] ?? FaClock;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110 group-hover:rotate-6">
        <Icon size={22} />
      </div>
      <h3 className="relative mt-5 font-display text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">{desc}</p>
    </motion.div>
  );
}
