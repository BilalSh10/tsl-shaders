'use client';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Experience = () => {
  return (
      <Canvas camera={{fov: 55, near: 0.1, far: 100, position: [2, 2, 2]}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
     </Canvas>
  )
}

export default Experience
