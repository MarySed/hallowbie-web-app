import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
let GLTFLoader;

// this works! Or was working before the mystery bug...
const Skull = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const skullRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/skull.glb');

    console.log(nodes);

    return (
        <group>
            <mesh visible geometry={nodes['Cube_Skul_0'].geometry}>
                <meshStandardMaterial
                    attach="material"
                    color="white"
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>
        </group>
    );
};

export default Skull;
