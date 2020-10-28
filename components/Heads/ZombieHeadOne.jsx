import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
let GLTFLoader;

const Skull = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const skullRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/ZombieHead.glb');

    console.log(nodes);

    return (
        <group>
            <mesh>
                {/* <meshStandardMaterial
                    attach="material"
                    color="white"
                    roughness={0.1}
                    metalness={0.1}
                /> */}
            </mesh>
        </group>
    );
};

export default Skull;
