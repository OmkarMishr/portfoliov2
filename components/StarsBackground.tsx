"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/canvas/Stars"), {
  ssr: false,
});

export default function StarsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <StarsCanvas />
    </div>
  );
}
