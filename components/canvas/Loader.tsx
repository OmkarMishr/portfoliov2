"use client";

import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span className="text-xs font-medium text-white/70">
        {progress.toFixed(0)}%
      </span>
    </Html>
  );
}
