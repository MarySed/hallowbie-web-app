import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const TopHat = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const tophatRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/tophat.glb');

    return (
        <group ref={tophatRef} scale={[0.2, 0.2, 0.2]} position={[-0.06, 2, 0.3]}>
            <primitive object={nodes['OSG_Scene']} />
        </group>
    );
};

export default TopHat;
