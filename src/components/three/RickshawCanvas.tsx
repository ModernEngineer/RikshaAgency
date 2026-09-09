"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import RickshawModel from "./RickshawModel";

export default function RickshawCanvas() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      camera={{ position: [3.4, 1.8, 3.4], fov: 32 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 2, -3]} intensity={0.5} color="#17c964" />

      <Suspense fallback={null}>
        <RickshawModel />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -0.02, 0]}
          opacity={0.55}
          scale={8}
          blur={2.4}
          far={2}
        />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 2.1}
        autoRotate
        autoRotateSpeed={1.6}
      />
    </Canvas>
  );
}
