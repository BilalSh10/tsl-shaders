'use client';

import { Canvas } from "@react-three/fiber";
import * as THREE from "three/webgpu";
import Experience from "./Experience";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 100, position: [2, 2, 3] }}
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer(props as any);
          await renderer.init();
          return renderer;
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}
