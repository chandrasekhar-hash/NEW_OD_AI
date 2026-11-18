import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RibbonStrand({
  offset,
  color,
  width = 0.35,
  speed = 0.4,
  opacity = 0.85,
}: {
  offset: number;
  color: string;
  width?: number;
  speed?: number;
  opacity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Generate a smooth 3D ribbon path
  const { geometry } = useMemo(() => {
    const pointsCount = 120;
    const curvePoints: THREE.Vector3[] = [];

    for (let i = 0; i <= pointsCount; i++) {
      const u = (i / pointsCount) * Math.PI * 2;
      const x = Math.sin(u) * 3.8 + Math.sin(u * 2 + offset) * 0.8;
      const y = Math.cos(u * 1.5 + offset) * 1.2 + Math.sin(u * 0.8) * 0.6;
      const z = Math.sin(u * 2.2 + offset) * 1.5;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(curvePoints, true, 'centripetal', 0.5);
    const geom = new THREE.TubeGeometry(curve, 180, width, 16, true);
    return { geometry: geom };
  }, [offset, width]);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() * speed;
      meshRef.current.rotation.x = Math.sin(t * 0.3 + offset) * 0.15;
      meshRef.current.rotation.y = t * 0.2 + offset;
      meshRef.current.rotation.z = Math.cos(t * 0.25 + offset) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color={color}
        metalness={0.88}
        roughness={0.22}
        transparent
        opacity={opacity}
        wireframe={false}
      />
    </mesh>
  );
}

function FloatingSculpture() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (groupRef.current) {
      // Gentle mouse parallax tilt
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.25,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.15,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Primary Warm Bronze Ribbon */}
      <RibbonStrand offset={0} color="#AD784B" width={0.18} speed={0.35} opacity={0.8} />
      {/* Secondary Soft Champagne Ribbon */}
      <RibbonStrand offset={Math.PI / 3} color="#E8D4B5" width={0.12} speed={0.28} opacity={0.65} />
      {/* Tertiary Dusty Rose Accent Ribbon */}
      <RibbonStrand offset={(Math.PI * 2) / 3} color="#D9BFC1" width={0.09} speed={0.32} opacity={0.5} />
    </group>
  );
}

export default function FlowingRibbonsCanvas({
  className = 'w-full h-full pointer-events-none',
}: {
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[6, 8, 5]} intensity={2.2} color="#FFFFFF" />
        <directionalLight position={[-6, -4, -3]} intensity={0.9} color="#C58D54" />
        <pointLight position={[0, 0, 3]} intensity={0.6} color="#E8D8C3" />
        <FloatingSculpture />
      </Canvas>
    </div>
  );
}
