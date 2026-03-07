"use client";

import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Pane } from "tweakpane";
import { useEffect, useState } from "react";
import { flagFragmentShaderNode } from "./Shaders";

const PARAMS = {
  wireframe: false,
};

const Patterns = () => {
  const [wireframe, setWireframe] = useState(PARAMS.wireframe);

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

  //#DDF0FF
  return (
    <>
      <color attach="background" args={["black"]} /> 
      <OrbitControls />
      <ambientLight intensity={3} />
      <mesh position={[0, 0, 0]} rotation={[-0.5, 0.5, 0.26]} >
        <planeGeometry args={[4, 4, 40, 40]} />
        <meshBasicMaterial
          // color="#E77728"
          side={THREE.DoubleSide}
          colorNode={flagFragmentShaderNode()}
          wireframe={wireframe}
        />
      </mesh>
    </>
  );
};

export default Patterns;
