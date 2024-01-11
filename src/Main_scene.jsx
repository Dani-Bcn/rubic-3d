/* eslint-disable no-unused-vars */
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
  RoundedBox,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState, Suspense } from "react";
import { Lamp3d } from "./components 3D/Lamp3d";

const MainScene = (props) => {
  const { countUp } = props;
  console.log(props);

  const cameraRef = useRef();

  const CustomCamera = () => {
    useFrame(() => {
      cameraRef.current.position.y = 0 - data.range(0, 2 / 2) * 1;
    });
    const data = useScroll();
    return (
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, -50]}
        fov={10}
      />
    );
  };
  return (
    <div>
      <Canvas shadows>
        <Environment preset="city" />
        <PerspectiveCamera
          makeDefault
          fov={50}
          rotation={[countUp,0 , 0]}
          position={[0, 1, 2]}
        />
        <ScrollControls damping={0.5}>
          <Scroll>
            <Lamp3d />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default MainScene;
