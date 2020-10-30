import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const Nyan = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const nyanRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/nyancat.glb');

    return (
        <group ref={nyanRef} scale={[0.5, 0.5, 0.5]} position={[-0.06, 0, 1]}>
            <primitive object={nodes['OSG_Scene']} />
        </group>
    );
};

export default Nyan;
