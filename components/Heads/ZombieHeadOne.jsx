import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const Skull = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const zombieHeadRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/ZombieHead.glb');

    return (
        <group ref={zombieHeadRef}>
            <mesh
                visible
                geometry={nodes['Base'].geometry}
                position={nodes['Base'].position}
                scale={nodes['Base'].scale}>
                <meshStandardMaterial
                    attach="material"
                    color="green"
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>
            <mesh
                visible
                geometry={nodes['Left_Eye'].geometry}
                position={nodes['Left_Eye'].position}
                scale={nodes['Left_Eye'].scale}>
                <meshStandardMaterial
                    attach="material"
                    color="red"
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>
            <mesh
                visible
                geometry={nodes['Right_Eye'].geometry}
                position={nodes['Right_Eye'].position}
                scale={nodes['Right_Eye'].scale}>
                <meshStandardMaterial
                    attach="material"
                    color="red"
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>
        </group>
    );
};

export default Skull;
