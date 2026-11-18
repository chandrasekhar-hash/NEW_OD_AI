import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, Line } from '@react-three/drei';
import * as THREE from 'three';

// Key innovation and talent nodes in Odisha with realistic relative coordinates
export interface OdishaNode {
  id: string;
  name: string;
  role: string;
  x: number;
  y: number;
  z: number;
  isHQ?: boolean;
}

const ODISHA_NODES: OdishaNode[] = [
  { id: 'berhampur', name: 'Berhampur (HQ)', role: 'OD AI HUB Central Campus & Innovation Center', x: -0.65, y: -0.95, z: 0.1, isHQ: true },
  { id: 'bhubaneswar', name: 'Bhubaneswar', role: 'State Capital & Tech Corridor Link', x: 0.25, y: -0.2, z: 0.05 },
  { id: 'cuttack', name: 'Cuttack', role: 'Innovation Research & Academia', x: 0.35, y: -0.05, z: 0.08 },
  { id: 'rourkela', name: 'Rourkela', role: 'Advanced Robotics & Heavy Computing Node', x: 0.1, y: 1.1, z: 0.05 },
  { id: 'sambalpur', name: 'Sambalpur', role: 'Western Regional Talent Incubator', x: -0.85, y: 0.55, z: 0.03 },
  { id: 'balasore', name: 'Balasore', role: 'Defense AI & Coastal Systems', x: 1.25, y: 0.65, z: 0.04 },
  { id: 'puri', name: 'Puri Coast', role: 'Smart Marine & Tourism AI Lab', x: 0.45, y: -0.6, z: 0.06 },
  { id: 'koraput', name: 'Koraput', role: 'Agri-Tech & Drone Vision Outpost', x: -1.3, y: -1.2, z: 0.02 },
];

// Stylized perimeter points outlining Odisha's distinctive geographic contour
const ODISHA_CONTOUR_COORDS: [number, number][] = [
  [-1.35, -1.3],
  [-1.0, -1.2],
  [-0.65, -0.98], // Berhampur coastal notch
  [-0.1, -0.75], // Chilika lagoon sweep
  [0.45, -0.6],  // Puri coast
  [0.85, -0.25], // Mahanadi delta / Paradeep
  [1.15, 0.2],   // Dhamra
  [1.35, 0.65],  // Balasore / Chandipur coast
  [1.3, 0.95],   // Northern Subarnarekha border
  [0.9, 1.25],   // Mayurbhanj hill curve
  [0.45, 1.35],  // Similipal ridge
  [0.1, 1.25],   // Rourkela / Sundargarh border
  [-0.45, 1.05], // Ib river basin
  [-0.9, 0.65],  // Sambalpur western boundary
  [-1.15, 0.2],  // Bargarh / Bolangir border
  [-1.25, -0.3], // Kalahandi plateau
  [-1.4, -0.8],  // Rayagada hills
  [-1.35, -1.3], // Closed loop
];

// Connections between the nodes
const CONNECTIONS: [string, string][] = [
  ['berhampur', 'bhubaneswar'],
  ['berhampur', 'puri'],
  ['berhampur', 'koraput'],
  ['bhubaneswar', 'cuttack'],
  ['bhubaneswar', 'puri'],
  ['cuttack', 'balasore'],
  ['cuttack', 'sambalpur'],
  ['sambalpur', 'rourkela'],
  ['rourkela', 'cuttack'],
  ['sambalpur', 'berhampur'],
  ['balasore', 'rourkela'],
];

function ConstellationMesh({ onHoverNode }: { onHoverNode: (node: OdishaNode | null) => void }) {
  const meshRef = useRef<THREE.Group>(null);
  const packetsRef = useRef<THREE.InstancedMesh>(null);

  // Generate smooth spline contour points
  const contourPoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < ODISHA_CONTOUR_COORDS.length; i++) {
      const [x, y] = ODISHA_CONTOUR_COORDS[i];
      points.push(new THREE.Vector3(x * 1.5, y * 1.5, 0));
    }
    const curve = new THREE.CatmullRomCurve3(points, true, 'centripetal', 0.5);
    return curve.getPoints(120);
  }, []);

  // Connection line curves
  const connectionCurves = useMemo(() => {
    const curves: { curve: THREE.CatmullRomCurve3; points: THREE.Vector3[] }[] = [];
    const nodeMap = new Map(ODISHA_NODES.map((n) => [n.id, n]));

    CONNECTIONS.forEach(([fromId, toId]) => {
      const fromNode = nodeMap.get(fromId);
      const toNode = nodeMap.get(toId);
      if (fromNode && toNode) {
        const p1 = new THREE.Vector3(fromNode.x * 1.5, fromNode.y * 1.5, fromNode.z * 1.5);
        const p2 = new THREE.Vector3(toNode.x * 1.5, toNode.y * 1.5, toNode.z * 1.5);
        const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
        mid.z += 0.22; // gentle arch in 3D
        const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
        curves.push({ curve, points: curve.getPoints(20) });
      }
    });
    return curves;
  }, []);

  // Prepare animated data packets that travel across lines
  const packetCount = 24;
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Gentle global floating & rotation
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.08;
      meshRef.current.rotation.x = Math.cos(t * 0.25) * 0.05 + 0.12;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.04;
    }

    // Animate data packets along the network connections
    if (packetsRef.current) {
      for (let i = 0; i < packetCount; i++) {
        const lineIdx = i % connectionCurves.length;
        const curve = connectionCurves[lineIdx].curve;
        const speed = 0.2 + (i % 3) * 0.1;
        const progress = (t * speed + i / packetCount) % 1;
        const pos = curve.getPoint(progress);

        dummy.position.copy(pos);
        const scale = Math.sin(progress * Math.PI) * 0.04 + 0.015;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        packetsRef.current.setMatrixAt(i, dummy.matrix);
      }
      packetsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Luminous Odisha Perimeter Contour */}
      <Line
        points={contourPoints}
        color="#AD784B"
        lineWidth={1.8}
        opacity={0.8}
        transparent
      />

      {/* Outer Contour Glow */}
      <Line
        points={contourPoints}
        color="#E8D4B5"
        lineWidth={3.5}
        opacity={0.35}
        transparent
      />

      {/* Network Connection Lines */}
      {connectionCurves.map((conn, idx) => (
        <Line
          key={idx}
          points={conn.points}
          color="#AD784B"
          lineWidth={1.2}
          opacity={0.5}
          transparent
        />
      ))}

      {/* Instanced Data Packets traveling along routes */}
      <instancedMesh ref={packetsRef} args={[undefined, undefined, packetCount]}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial color="#FFFDFC" transparent opacity={0.9} />
      </instancedMesh>

      {/* Network Nodes (Cities/Hubs) */}
      {ODISHA_NODES.map((node) => {
        const pos: [number, number, number] = [node.x * 1.5, node.y * 1.5, node.z * 1.5];
        return (
          <group
            key={node.id}
            position={pos}
            onPointerOver={(e) => {
              e.stopPropagation();
              onHoverNode(node);
            }}
            onPointerOut={() => onHoverNode(null)}
          >
            {/* Core Node */}
            <mesh>
              <sphereGeometry args={[node.isHQ ? 0.08 : 0.05, 16, 16]} />
              <meshStandardMaterial
                color={node.isHQ ? '#AD784B' : '#E8D4B5'}
                emissive={node.isHQ ? '#7B4F2A' : '#AD784B'}
                emissiveIntensity={node.isHQ ? 1.6 : 0.9}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>

            {/* Glowing Halo around Berhampur HQ */}
            {node.isHQ && (
              <mesh>
                <ringGeometry args={[0.1, 0.16, 32]} />
                <meshBasicMaterial color="#AD784B" opacity={0.65} transparent side={THREE.DoubleSide} />
              </mesh>
            )}

            {/* Subtle HTML Label for Berhampur HQ */}
            {node.isHQ && (
              <Html
                position={[0, -0.18, 0]}
                center
                distanceFactor={10}
                style={{ pointerEvents: 'none' }}
              >
                <div className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap bg-plum/90 text-champagne-100 border border-champagne-200/40 shadow-sm backdrop-blur-sm">
                  Berhampur (HQ)
                </div>
              </Html>
            )}
          </group>
        );
      })}

      {/* Ambient background particle dust in 3D space */}
      <AtmosphericParticles count={120} />
    </group>
  );
}

function AtmosphericParticles({ count }: { count: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 6;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 5;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#C58D54"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

export default function OdishaConstellationCanvas() {
  const [hoveredNode, setHoveredNode] = useState<OdishaNode | null>(null);

  return (
    <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px]">
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 8, 4]} intensity={1.5} color="#FAF7F2" />
        <pointLight position={[-3, -3, 2]} intensity={0.8} color="#C58D54" />
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
          <ConstellationMesh onHoverNode={setHoveredNode} />
        </Float>
      </Canvas>

      {/* Floating Active Node Info Card Overlay */}
      {hoveredNode && (
        <div className="absolute bottom-3 left-4 right-4 sm:left-auto sm:right-6 sm:w-72 glass-panel p-3.5 rounded-2xl shadow-elevated transition-all duration-300 pointer-events-none z-10 border border-bronze-200/60 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-bronze-300 animate-pulse" />
            <span className="text-xs font-semibold text-plum tracking-wide uppercase">
              {hoveredNode.isHQ ? 'HQ Central Hub' : 'Innovation Node'}
            </span>
          </div>
          <h4 className="text-sm font-bold text-plum font-serif">{hoveredNode.name}</h4>
          <p className="text-xs text-mauve-deep mt-0.5 leading-snug">{hoveredNode.role}</p>
        </div>
      )}
    </div>
  );
}
