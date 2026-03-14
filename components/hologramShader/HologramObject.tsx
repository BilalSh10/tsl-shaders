import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { hologramShader } from "./Shaders";
import { Pane } from "tweakpane";
import { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

const PARAMS = {
  wireframe: false,
};

const HologramObject = () => {
  const [wireframe, setWireframe] = useState(PARAMS.wireframe);
  const sphereRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);


  useEffect(() => {
    const pane = new Pane();

    // Create the binding
    const binding = pane.addBinding(PARAMS, "wireframe");

    // Manually update React state when Tweakpane changes the value
    binding.on("change", (ev) => {
      setWireframe(ev.value);
    });

    return () => pane.dispose();
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = - elapsedTime * 0.1;
      sphereRef.current.rotation.y = elapsedTime * 0.2;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = - elapsedTime * 0.1;
      torusRef.current.rotation.y = elapsedTime * 0.2;
    }
  });

  return (
    <>
      <color attach="background" args={["black"]} />
      <OrbitControls />
      <ambientLight intensity={3} />

      <mesh position={[-3, 0, 0]} rotation={[-0.5, 0.5, 0.26]} ref={torusRef}>
        <torusKnotGeometry args={[1, 0.4, 100, 16]} />
        <meshBasicMaterial
          // color="#E77728"
          side={THREE.DoubleSide}
          colorNode={hologramShader()}
          wireframe={wireframe}
          transparent
        />
      </mesh>

      <mesh position={[3, 0, 0]} ref={sphereRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          // color="#E77728"
          colorNode={hologramShader()}
          wireframe={wireframe}
          transparent
        />
      </mesh>
    </>
  );
};

export default HologramObject;
