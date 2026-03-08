"use client";

import * as THREE from "three";
import { vec3, positionLocal, sin, time, texture, uv, color, abs, mod, step } from "three/tsl";

export const flagFragmentShaderNode = () => {
  // fragment shader

  // // pattern 3
  // const strength = uv().x;
  
  // // pattern 4
  // const strength = uv().y;

  // // pattern 5
  // const strength = abs(uv().y.sub(1));

  // // pattern 6
  // const strength = uv().y.mul(10);

  // // pattern 7
  // const strength = mod(uv().y.mul(10), 1);

  // // pattern 8
  // let strength = mod(uv().y.mul(10), 1);
  // strength = step(0.5, strength);

  // // pattern 9
  // let strength = mod(uv().y.mul(10), 1);
  // strength = step(0.8, strength);

  // // pattern 10
  // let strength = mod(uv().x.mul(10), 1);
  // strength = step(0.8, strength);

  // // pattern 11
  // let strength = mod(uv().x.mul(10), 1);
  // strength = step(0.8, strength);
  
  // let strengthY = mod(uv().y.mul(10), 1);
  // strengthY = step(0.8, strengthY);

  // const strength1 = strength.add(strengthY);

  // // pattern 12
  // let strength = mod(uv().x.mul(10), 1);
  // strength = step(0.8, strength);
  
  // let strengthY = mod(uv().y.mul(10), 1);
  // strengthY = step(0.8, strengthY);

  // const strengthF = strength.mul(strengthY);

  // pattern 13
  let strength = mod(uv().x.mul(10), 1);
  strength = step(0.4, strength);
  
  let strengthY = mod(uv().y.mul(10), 1);
  strengthY = step(0.8, strengthY);

  const strengthF = strength.mul(strengthY);

  const colorNode = color(strengthF, strengthF, strengthF);
  return colorNode;
};
