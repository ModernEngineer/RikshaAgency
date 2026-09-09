"use client";

import dynamic from "next/dynamic";

const RickshawCanvas = dynamic(() => import("./RickshawCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-border border-t-primary" />
    </div>
  ),
});

export default function RickshawStage({ className }: { className?: string }) {
  return (
    <div className={className}>
      <RickshawCanvas />
    </div>
  );
}
