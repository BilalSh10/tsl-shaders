"use client";

import * as THREE from "three";
import {
  vec3,
  positionLocal,
  positionWorld,
  modelPosition,
  positionView,
  normalLocal,
  positionGeometry,
  sin,
  time,
  texture,
  uv,
  color,
  abs,
  mod,
  step,
  min,
  max,
  vec2,
  floor,
  rand,
  length,
  distance,
  float,
  rotate,
  atan,
  PI,
  vec4,
  mix,
  smoothstep,
  pow,
} from "three/tsl";

export const hologramShader = () => {

    const blackColor = vec3(0, 0, 0);
    const whiteColor = vec3(1, 1, 1);
    const myColor = color("#0FFF50");

    const strength = smoothstep(0.6, 0.9, mod(modelPosition.y.mul(10).add(time), 1));
    // const strength = pow(mod(uv().y.mul(30), 1), 3);

    const fresnel = distance(positionView , normalLocal);

    // const mixer = mix(blackColor, myColor, strength);
    const colorNode = vec4(1, 1, 1, fresnel);
    return colorNode;
}