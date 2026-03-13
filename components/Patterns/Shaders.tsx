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
  length,
  distance,
  float,
  rotate,
  atan,
  PI,
  smoothstep,
} from "three/tsl";

export const flagFragmentShaderNode = () => {
  // fragment shader

  // pattern 3
  // const strength = uv().x;

  // // pattern 4
  // const strength = uv().y;

  // // pattern 5
  // const strength = abs(uv().y.sub(1));

  // // pattern 6
  // const strength = uv().y.mul(10);

  // // pattern 7
  // const strength = mod(uv().y.mul(10), 1);

  // pattern 8
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
  // const strengthX = floor(uv().x.mul(10)).div(10);
  // const strengthY = floor(uv().y.mul(10).add(uv().x.mul(5))).div(10);

  // const gridUV = vec2(strengthX, strengthY);
  // const strength = rand(gridUV);

  // // pattern 26
  // const strength = length(uv());

  // // pattern 27
  // const strength = length(uv().sub(vec2(0.5, 0.5)));

  // // pattern 28
  // const strength = distance(uv(), vec2(0.5, 0.5));
  
  // // pattern 29
  // const strength = float(1).sub(distance(uv(), vec2(0.5, 0.5)));

  // // pattern 30
  // const strength = float(0.015).div(distance(uv(), vec2(0.5, 0.5)));

  // // pattern 31
  // const controlledUV = vec2(
  //   uv().x.mul(0.2).add(0.4),
  //   uv().y.mul(0.5).add(0.25),
  // )
  // const strength = float(0.01).div(distance(controlledUV, vec2(0.5, 0.5)));


  // // pattern 32
  // const controlledUVX = vec2(
  //   uv().x.mul(0.2).add(0.4),
  //   uv().y.mul(0.5).add(0.25),
  // )
  // const strengthX = float(0.01).div(distance(controlledUVX, vec2(0.5, 0.5)));

  // const controlledUVY = vec2(
  //   uv().x.mul(0.5).add(0.25),
  //   uv().y.mul(0.2).add(0.4),
  // )
  // const strengthY = float(0.01).div(distance(controlledUVY, vec2(0.5, 0.5)));

  // const strength = strengthX.mul(strengthY);


  // // pattern 33
  // const controlledUVX = vec2(
  //   uv().x.mul(0.2).add(0.4),
  //   uv().y.mul(0.5).add(0.25),
  // )

  // const strengthX = float(0.01).div(
  //   max(distance(controlledUVX, vec2(0.5,0.5)), float(0.0001))
  // )

  // const controlledUVY = vec2(
  //   uv().x.mul(0.5).add(0.25),
  //   uv().y.mul(0.2).add(0.4),
  // )

  // const strengthY = float(0.01).div(
  //   max(distance(controlledUVY, vec2(0.5,0.5)), float(0.0001))
  // )

  // const rotated = rotate(
  //   vec2(strengthX.mul(strengthY), 0),
  //   time.mul(0.5)
  // )

  // const strength = rotated.x;


  // // pattern 34
  // const centeredUV = uv().sub(vec2(0.5, 0.5));
  // const rotatedUV = rotate(centeredUV, PI.mul(0.25));
  // const finalUV = rotatedUV.add(vec2(0.5, 0.5));

  //   const controlledUVX = vec2(
  //   finalUV.x.mul(0.2).add(0.4),
  //   finalUV.y.mul(0.5).add(0.25),
  // )

  // const strengthX = float(0.01).div(
  //   max(distance(controlledUVX, vec2(0.5,0.5)), float(0.0001))
  // )

  // const controlledUVY = vec2(
  //   finalUV.x.mul(0.5).add(0.25),
  //   finalUV.y.mul(0.2).add(0.4),
  // )

  // const strengthY = float(0.01).div(
  //   max(distance(controlledUVY, vec2(0.5,0.5)), float(0.0001))
  // )

  // const strength = strengthX.mul(strengthY)


  // // pattern 35
  // const strength = step(0.25, length(uv().sub(vec2(0.5, 0.5))));


  // // pattern 36
  // const strength = abs(length(uv().sub(vec2(0.5, 0.5))).sub(0.25));


  // // pattern 37
  // const strength = step(0.01, abs(length(uv().sub(vec2(0.5, 0.5))).sub(0.25)));

  // // pattern 38
  // const strength = float(1).sub(step(0.01, abs(length(uv().sub(vec2(0.5, 0.5))).sub(0.25))));

  // // pattern 39
  // const waveUV = vec2(
  //   uv().x,
  //   uv().y.add(sin(uv().x.mul(30)).mul(0.1)),
  // );
  // const strength = float(1).sub(step(0.01, abs(length(waveUV.sub(vec2(0.5, 0.5))).sub(0.25))));


  // // pattern 40
  // const waveUV = vec2(
  //   uv().x.add(sin(uv().y.mul(30)).mul(0.1)),
  //   uv().y.add(sin(uv().x.mul(30)).mul(0.1)),
  // );
  // const strength = float(1).sub(step(0.01, abs(length(waveUV.sub(vec2(0.5, 0.5))).sub(0.25))));


  // // pattern 41
  // const waveUV = vec2(
  //   uv().x.add(sin(uv().y.mul(100)).mul(0.1)),
  //   uv().y.add(sin(uv().x.mul(100)).mul(0.1)),
  // );
  // const strength = float(1).sub(step(0.01, abs(length(waveUV.sub(vec2(0.5, 0.5))).sub(0.25))));


  // // pattern 42
  // const waveUV = vec2(
  //   uv().x.add(sin(uv().y.mul(100)).mul(0.1)),
  //   uv().y.add(sin(uv().x.mul(100)).mul(0.1)),
  // );
  // const strength = float(1).sub(step(0.01, abs(length(waveUV.sub(vec2(0.5, 0.5))).sub(0.25))));


  // // pattern 43
  // const angle = atan(uv().x, uv().y);
  // const strength = angle;

  // // pattern 44
  // const newUV = uv().sub(vec2(0.5, 0.5));
  // const angle = atan(newUV.x, newUV.y);
  // const strength = angle;

  // // pattern 45
  // const newUV = uv().sub(vec2(0.5, 0.5));
  // const angle = atan(newUV.x, newUV.y);
  // const strength = angle.add(PI).mul(0.1);


  // // pattern 46
  // const newUV = uv().sub(vec2(0.5, 0.5));
  // const angle = atan(newUV.x, newUV.y);
  // const newAngle = angle.add(PI).mul(3);
  // const strength = mod(newAngle, 1);

  // // pattern 47
  // const centerdUV = uv().sub(vec2(0.5, 0.5));
  // const rotateUV = rotate(centerdUV, time.mul(0.1));
  // const angle = atan(rotateUV.x, rotateUV.y);
  // const newAngle = angle.add(PI).mul(3);
  // const strength = mod(newAngle, 1);


  // // pattern 48
  // const centerdUV = uv().sub(vec2(0.5, 0.5));
  // const rotateUV = rotate(centerdUV, time.mul(0.1));
  // const angle = atan(rotateUV.x, rotateUV.y);
  // const newAngle = angle.add(PI).mul(7);
  // const strength = sin(newAngle);


  // // pattern 49
  // const centerdUV = uv().sub(vec2(0.5, 0.5));
  // const rotateUV = rotate(centerdUV, time.mul(0.1));
  // const angle = atan(rotateUV.x, rotateUV.y);
  // const newAngle = angle.add(PI).mul(10);
  // const sinusoid = sin(newAngle);

  // const raduis = float(0.25).add(sinusoid.mul(0.02));
  // const strength = float(1).sub(step(0.01, abs(length(uv().sub(vec2(0.5, 0.5))).sub(raduis))));


  // pattern 49
  const centerdUV = uv().sub(vec2(0.5, 0.5));
  const rotateUV = rotate(centerdUV, time.mul(0.1));
  const angle = atan(rotateUV.x, rotateUV.y);
  const newAngle = angle.add(PI).mul(10);
  const sinusoid = sin(newAngle);

  const raduis = float(0.25).add(sinusoid.mul(0.02));
  const strength = float(1).sub(step(0.01, abs(length(uv().sub(vec2(0.5, 0.5))).sub(raduis))));

  const colorNode = vec3(strength, strength, strength);
  return colorNode;
};
