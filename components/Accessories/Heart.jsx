import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const Heart = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const heartRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/heart.glb');

    return (
        <group ref={heartRef} scale={[0.01, 0.01, 0.01]} position={[-0.06, 2.3, 0.3]}>
            <primitive object={nodes['OSG_Scene']} />
        </group>
    );
};

export default Heart;
