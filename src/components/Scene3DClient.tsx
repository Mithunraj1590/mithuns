 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function WireIcosahedron() {
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={ref} scale={2.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

function GlowSphere() {
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <Float speed={2} floatIntensity={1}>
      <Sphere ref={ref} args={[0.6, 32, 32]} position={[3, 1, -2]}>
        <MeshDistortMaterial
          color="#b84dff"
          transparent
          opacity={0.15}
          distort={0.4}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1} floatIntensity={2}>
      <Torus ref={ref} args={[1.2, 0.05, 16, 64]} position={[-3.5, -0.5, -1]}>
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.25} />
      </Torus>
    </Float>
  );
}

function WireBox() {
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.12;
      ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={1}>
      <Box ref={ref} args={[0.8, 0.8, 0.8]} position={[2.5, -1.5, -1.5]}>
        <meshBasicMaterial color="#b84dff" wireframe transparent opacity={0.2} />
      </Box>
    </Float>
  );
}

function Particles() {
  const count = 300;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 25;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points | null>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#00e5ff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3DClient() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#00e5ff" />
        <pointLight position={[-10, -10, -5]} intensity={0.2} color="#b84dff" />

        <WireIcosahedron />
        <GlowSphere />
        <FloatingRing />
        <WireBox />
        <Particles />
      </Canvas>
    </div>
  );
}

