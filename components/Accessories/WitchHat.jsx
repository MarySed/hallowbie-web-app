import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const WitchHat = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const hatRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/witchhat.glb');

    return (
        <group ref={hatRef} scale={[0.02, 0.02, 0.02]} position={[-0.06, 8.2, -5.5]}>
            <primitive object={nodes['OSG_Scene']} />
        </group>
    );
};

export default WitchHat;
