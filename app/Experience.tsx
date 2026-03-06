"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { vec3, positionLocal, sin, time, attribute, uniform, texture, uv } from "three/tsl";
import { Pane } from "tweakpane";
import { useEffect, useState, useMemo } from "react";
import { useTexture } from "@react-three/drei";

const uFrequency = uniform(1);
const uAmplitude = uniform(0.2);

// Define the logic once
export const oceanWaveVertexShaderNode = () => {
  const pos = positionLocal;
  // const random = attribute("aRandom");

  const wave = sin(pos.x.mul(uFrequency).add(time)).mul(uAmplitude);
  // const displacedPosition = vec3(pos.x, pos.y, pos.z.add(random.mul(0.1).add(wave)));
    const displacedPosition = vec3(pos.x, pos.y, pos.z.add(wave));

  return { displacedPosition, wave };
};

export const oceanWaveFragmentShaderNode = (wave: THREE.Node<"float">, flagTexture: THREE.Texture) => {
  // fragment shader
  // Create a reactive color based on height
  const colorNode = texture(flagTexture, uv());
  return colorNode;
};

const PARAMS = {
  wireframe: false,
  frequency: 1.0,
  amplitude: 0.2,
};

const Experience = () => {
  const [wireframe, setWireframe] = useState(PARAMS.wireframe);
  const flagTexture = useTexture("/flag.jpg");

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(6, 4, 40, 40);

    const count = geo.attributes.position.count;

    const random = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      random[i] = Math.random();
    }
    geo.setAttribute("aRandom", new THREE.BufferAttribute(random, 1));
    
    return geo;
  }, []);

  useEffect(() => {
    const pane = new Pane();

    // Create the binding
    const binding = pane.addBinding(PARAMS, "wireframe");
    pane.addBinding(PARAMS, "frequency", { min: 0, max: 10, step: 0.1 }).on("change", (ev) => {
      uFrequency.value = ev.value;
    });
     pane.addBinding(PARAMS, "amplitude", { min: 0, max: 10, step: 0.1 }).on("change", (ev) => {
      uAmplitude.value = ev.value;
    });

    // Manually update React state when Tweakpane changes the value
    binding.on("change", (ev) => {
      setWireframe(ev.value);
    });

    return () => pane.dispose();
  }, []);

  const { displacedPosition, wave } = oceanWaveVertexShaderNode();
  const colorNode = oceanWaveFragmentShaderNode(wave, flagTexture);

  return (
    <>
      <color attach="background" args={["#F5EFFF"]} />
      <OrbitControls />
      <ambientLight intensity={3} />
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} geometry={geometry}>
        <meshBasicMaterial
          color="#E77728"
          side={THREE.DoubleSide}
          positionNode={displacedPosition}
          colorNode={colorNode}
          wireframe={wireframe}
        />
      </mesh>
    </>
  );
};

export default Experience;
