"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Color, Mesh, MeshStandardMaterial } from "three";
import CanvasLoader from "./Loader";

function Earth() {
  const earth = useGLTF("/planet/scene.gltf");

  // Tint the globe orange by multiplying each material's colour with a warm
  // orange (final pixel = texture × colour), and add a soft orange glow.
  useMemo(() => {
    const tint = new Color("#ff8a45");
    earth.scene.traverse((child) => {
      if (child instanceof Mesh) {
        const mat = child.material as MeshStandardMaterial;
        if (mat?.color) {
          mat.color.copy(tint);
          if ("emissive" in mat && mat.emissive) {
            mat.emissive.set("#5a1e00");
            mat.emissiveIntensity = 0.35;
          }
          mat.needsUpdate = true;
        }
      }
    });
  }, [earth]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
}

export default function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/planet/scene.gltf");
