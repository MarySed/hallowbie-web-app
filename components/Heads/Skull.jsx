import React from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const Skull = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

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
