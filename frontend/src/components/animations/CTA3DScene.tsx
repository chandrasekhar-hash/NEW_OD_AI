import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function CoreStructure() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.25;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.15;
      ringRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = t * 0.18;
      ringRef2.current.rotation.z = Math.cos(t * 0.25) * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Polished Metallic Torus Knot */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.32, 128, 32, 2, 3]} />
        <meshStandardMaterial
          color="#AD784B"
          emissive="#5F3A1B"
          emissiveIntensity={0.3}
          roughness={0.18}
          metalness={0.92}
        />
      </mesh>

      {/* Outer Champagne Orbital Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.4, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#FFFDFC"
          emissive="#AD784B"
          emissiveIntensity={0.5}
          roughness={0.1}
          metalness={0.95}
        />
      </mesh>

      {/* Second Perpendicular Ring */}
      <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.7, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#D9BFC1"
          emissive="#B1868A"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.85}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

export default function CTA3DScene() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-45 sm:opacity-65 mix-blend-screen">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={2.5} color="#FAF7F2" />
        <pointLight position={[-5, -5, -2]} intensity={1.5} color="#C58D54" />
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
          <CoreStructure />
        </Float>
      </Canvas>
    </div>
  );
}
