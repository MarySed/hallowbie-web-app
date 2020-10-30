import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
let GLTFLoader;

const ZombieHeadTwo = () => {
    GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader').GLTFLoader;

    const zombieHeadRef = useRef();

    const { nodes } = useLoader(GLTFLoader, '/models/base_male_head.glb');

    return (
        <group ref={zombieHeadRef} position={[0, 0, 0]}>
            <primitive object={nodes['Scene']} />
        </group>
    );
};

export default ZombieHeadTwo;
