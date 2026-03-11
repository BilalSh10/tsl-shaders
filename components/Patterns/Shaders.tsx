"use client";

import * as THREE from "three";
import {
  vec3,
  positionLocal,
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
} from "three/tsl";

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

  // // pattern 13
  // let strength = mod(uv().x.mul(10), 1);
  // strength = step(0.4, strength);

  // let strengthY = mod(uv().y.mul(10), 1);
  // strengthY = step(0.8, strengthY);

  // const strengthF = strength.mul(strengthY);

  // // pattern 14
  // let strengthOneX = mod(uv().x.mul(10), 1);
  // strengthOneX = step(0.4, strengthOneX);

  // let strengthOneY = mod(uv().y.mul(10), 1);
  // strengthOneY = step(0.8, strengthOneY );

  // const strengthOne = strengthOneX.mul(strengthOneY);

  // let strengthTwoX = mod(uv().x.mul(10), 1);
  // strengthTwoX = step(0.8, strengthTwoX);

  // let strengthTwoY = mod(uv().y.mul(10), 1);
  // strengthTwoY = step(0.4, strengthTwoY );

  // const strengthTwo = strengthTwoX.mul(strengthTwoY);

  // const strengthFinal = strengthOne.add(strengthTwo);

  // // pattern 15
  // let strengthOneX = mod(uv().x.mul(10), 1);
  // strengthOneX = step(0.4, strengthOneX);

  // let strengthOneY = mod(uv().y.mul(10).add(0.2), 1);
  // strengthOneY = step(0.8, strengthOneY );

  // const strengthOne = strengthOneX.mul(strengthOneY);

  // let strengthTwoX = mod(uv().x.mul(10).add(0.2), 1);
  // strengthTwoX = step(0.8, strengthTwoX);

  // let strengthTwoY = mod(uv().y.mul(10), 1);
  // strengthTwoY = step(0.4, strengthTwoY );

  // const strengthTwo = strengthTwoX.mul(strengthTwoY);

  // const strengthFinal = strengthOne.add(strengthTwo);

  // // pattern 16
  // let strength = abs(uv().x.sub(0.5));

  //  // pattern 17
  // let strengthX = abs(uv().x.sub(0.5));
  // let strengthY = abs(uv().y.sub(0.5));
  // let strength = min(strengthX, strengthY);

  // // pattern 18
  // let strengthX = abs(uv().x.sub(0.5));
  // let strengthY = abs(uv().y.sub(0.5));
  // let strength = max(strengthX, strengthY);

  // // pattern 19
  // const strengthXTwo = abs(uv().x.sub(0.5));
  // const strengthYTwo = abs(uv().y.sub(0.5));
  // const strength = step(0.2, max(strengthXTwo, strengthYTwo));

  // // pattern 20
  // const strengthXTwo = abs(uv().x.sub(0.5));
  // const strengthYTwo = abs(uv().y.sub(0.5));
  // const strength = step(0.4, max(strengthXTwo, strengthYTwo));

  // // pattern 21
  // const strength = floor(uv().x.mul(10)).div(10);

  // // pattern 22
  // const strengthX = floor(uv().x.mul(10)).div(10);
  // const strengthY = floor(uv().y.mul(10)).div(10);

  // const strength = strengthX.mul(strengthY);


  // // pattern 23
  // const strength = rand(uv());


  // // pattern 24
  // const strengthX = floor(uv().x.mul(10)).div(10);
  // const strengthY = floor(uv().y.mul(10)).div(10);
  
  // const gridUV = vec2(strengthX, strengthY);

  // const strength = rand(gridUV);


  // pattern 25
  const strengthX = floor(uv().x.mul(10)).div(10);
  const strengthY = floor(uv().y.mul(10).add(uv().x.mul(5))).div(10);
  
  const gridUV = vec2(strengthX, strengthY);

  const strength = rand(gridUV);

  const colorNode = color(strength, strength, strength);
  return colorNode;
};
