import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const ZombieHeadOne = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const zombieHeadRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/ZombieHead.glb');

    return (
        <group ref={zombieHeadRef} position={[0, -2, 0]}>
            <primitive object={nodes['Scene']} />
        </group>
    );
};

export default ZombieHeadOne;
