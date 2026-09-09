"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import type { Group, Mesh } from "three";

function Wheel({ position }: { position: [number, number, number] }) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.x += delta * 4;
  });
  return (
    <mesh ref={ref} position={position} rotation={[0, 0, Math.PI / 2]} castShadow>
      <cylinderGeometry args={[0.42, 0.42, 0.28, 24]} />
      <meshStandardMaterial color="#111111" roughness={0.6} metalness={0.2} />
    </mesh>
  );
}

export default function RickshawModel() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.08;
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    }
  });

  return (
    <group ref={group} position={[0, 0.1, 0]} scale={1.15}>
      {/* base chassis */}
      <RoundedBox args={[1.9, 0.18, 1.15]} radius={0.06} position={[0, 0.05, 0]} castShadow>
        <meshStandardMaterial color="#1c1a17" roughness={0.5} metalness={0.3} />
      </RoundedBox>

      {/* rear cabin body */}
      <RoundedBox args={[1.15, 0.75, 1.05]} radius={0.12} position={[-0.35, 0.55, 0]} castShadow>
        <meshStandardMaterial color="#ffc700" roughness={0.35} metalness={0.15} />
      </RoundedBox>

      {/* roof canopy */}
      <RoundedBox args={[1.3, 0.1, 1.15]} radius={0.05} position={[-0.35, 1.0, 0]} castShadow>
        <meshStandardMaterial color="#141312" roughness={0.6} />
      </RoundedBox>
      {/* canopy support pillars */}
      {[
        [0.15, 0.55],
        [-0.85, 0.55],
      ].map(([x], i) => (
        <mesh key={i} position={[x, 0.78, 0.5]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.48, 8]} />
          <meshStandardMaterial color="#141312" />
        </mesh>
      ))}
      {[
        [0.15, 0.55],
        [-0.85, 0.55],
      ].map(([x], i) => (
        <mesh key={`b-${i}`} position={[x, 0.78, -0.5]} castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.48, 8]} />
          <meshStandardMaterial color="#141312" />
        </mesh>
      ))}

      {/* rear seat back */}
      <RoundedBox args={[0.12, 0.55, 1.0]} radius={0.05} position={[-0.85, 0.55, 0]}>
        <meshStandardMaterial color="#171412" roughness={0.7} />
      </RoundedBox>

      {/* front hood leading to single wheel */}
      <RoundedBox args={[0.75, 0.55, 0.7]} radius={0.14} position={[0.62, 0.42, 0]} castShadow>
        <meshStandardMaterial color="#ffc700" roughness={0.3} metalness={0.15} />
      </RoundedBox>

      {/* windshield */}
      <mesh position={[0.98, 0.58, 0]} rotation={[0, 0, -0.35]}>
        <boxGeometry args={[0.05, 0.4, 0.55]} />
        <meshPhysicalMaterial
          color="#9fd8ff"
          transparent
          opacity={0.45}
          roughness={0.05}
          metalness={0.1}
        />
      </mesh>

      {/* headlight */}
      <mesh position={[1.0, 0.32, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#fff6d0" emissive="#ffe27a" emissiveIntensity={1.2} />
      </mesh>

      {/* handlebar */}
      <mesh position={[0.85, 0.68, 0]}>
        <torusGeometry args={[0.16, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#0d0c0b" />
      </mesh>

      {/* wheels */}
      <Wheel position={[0.75, 0.05, 0]} />
      <Wheel position={[-0.85, 0.05, 0.62]} />
      <Wheel position={[-0.85, 0.05, -0.62]} />
    </group>
  );
}
