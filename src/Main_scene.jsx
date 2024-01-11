/* eslint-disable no-unused-vars */
import { Environment, PerspectiveCamera, OrbitControls, RoundedBox, Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState, Suspense } from 'react';


const MainScene = () => {

   
    const cameraRef = useRef()
  
    const CustomCamera = (() => {
        useFrame(() => {
            cameraRef.current.position.y = 0 - data.range(0, 2 / 2) * 1
        })
        const data = useScroll()
        return (
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[0, 0, -50]}
                fov={10}
            />
        )
    })
    return (
        <div>
            <Canvas
                shadows
            >            
                <ScrollControls
                    pages={2}
                    damping={0.5}
                >
                    <Scroll>
                        <CustomCamera />                      
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}

export default MainScene;