import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const Horns = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const hornsRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/horns.glb');

    return (
        <group ref={hornsRef} scale={[0.006, 0.006, 0.006]} position={[0, 2.2, 0.6]}>
            <primitive object={nodes['OSG_Scene']} />
        </group>
    );
};

export default Horns;
