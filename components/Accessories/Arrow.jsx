import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const Arrow = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const zombieHeadRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/arrow.glb');

    return (
        <group ref={zombieHeadRef} scale={[0.2, 0.2, 0.2]} position={[-0.06, 1.6, 0.3]}>
            <primitive object={nodes['OSG_Scene']} />
        </group>
    );
};

export default Arrow;
