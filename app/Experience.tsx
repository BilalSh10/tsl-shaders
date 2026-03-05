"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
    <Canvas camera={{ fov: 75, near: 0.1, far: 100, position: [2, 2, 3] }}>
      <color attach="background" args={["#F5EFFF"]} />
      <OrbitControls />
      <ambientLight intensity={2} />
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 4, 20, 20]} />
        <meshStandardMaterial color="#E77728" />
      </mesh>
    </Canvas>
  );
};

export default Experience;
