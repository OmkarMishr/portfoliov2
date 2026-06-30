"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import type { Points as ThreePoints } from "three";

// Fill a Float32Array with random points inside a sphere (replaces maath).
function randomInSphere(count: number, radius: number) {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    let x = 0;
    let y = 0;
    let z = 0;
    let d = 0;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      d = x * x + y * y + z * z;
    } while (d > 1 || d === 0);
    const r = radius * Math.cbrt(Math.random());
    const norm = r / Math.sqrt(d);
    arr[i * 3] = x * norm;
    arr[i * 3 + 1] = y * norm;
    arr[i * 3 + 2] = z * norm;
  }
  return arr;
}

function Stars() {
  const ref = useRef<ThreePoints>(null);
  const [sphere] = useState(() => randomInSphere(5000, 1.2));

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ff6a36"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
