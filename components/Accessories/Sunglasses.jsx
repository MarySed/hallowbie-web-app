import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const Sunglasses = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const zombieHeadRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/sunglasses.glb');
    console.log(nodes);

    return (
        <group
            ref={zombieHeadRef}
            position={[0, -2, 0]}
            scale={[0.002, 0.0025, 0.0025]}
            position={[-0.06, 1.7, 1.2]}>
            <primitive object={nodes['OSG_Scene']} />
        </group>
    );
};

export default Sunglasses;
