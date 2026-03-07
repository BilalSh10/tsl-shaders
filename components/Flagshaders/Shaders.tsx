"use client";

import * as THREE from "three";
import { vec3, positionLocal, sin, time, texture, uv } from "three/tsl";
import { uFrequency, uAmplitude } from "./Uniforms";

// Define the logic once
export const flagVertexShaderNode = () => {
  const pos = positionLocal;

  const waveX = sin(pos.x.mul(uFrequency).add(time)).mul(uAmplitude);
  const waveY = sin(pos.y.mul(uFrequency).sub(time)).mul(uAmplitude);

  const wave = waveX.add(waveY);

  const displacedPosition = vec3(
    pos.x,
    pos.y,
    pos.z.add(wave)
  );

  return { displacedPosition, wave };
};

export const flagFragmentShaderNode = (wave: THREE.Node<"float">, flagTexture: THREE.Texture) => {
  // fragment shader
  // Create a reactive color based on height
  const colorNode = texture(flagTexture, uv());
  const modulatedColor = colorNode.rgb.mul(wave.mul(0.5).add(0.3)); // Modulate color by wave height
  return modulatedColor;
};