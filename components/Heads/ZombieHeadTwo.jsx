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

            <group position={nodes['Tooth'].position}>
                <mesh
                    visible
                    geometry={nodes['Tooth'].children[0].geometry}
                    position={nodes['Tooth'].children[0].position}
                    scale={nodes['Tooth'].children[0].scale}
                    rotation={nodes['Tooth'].children[0].rotation}
                    up={nodes['Tooth'].children[0].up}
                    material={nodes['Tooth'].children[0].material}
                />
                <mesh
                    visible
                    geometry={nodes['Tooth'].children[1].geometry}
                    position={nodes['Tooth'].children[1].position}
                    scale={nodes['Tooth'].children[1].scale}
                    rotation={nodes['Tooth'].children[1].rotation}
                    up={nodes['Tooth'].children[1].up}
                    material={nodes['Tooth'].children[1].material}
                />
                <mesh
                    visible
                    geometry={nodes['Tooth'].children[2].geometry}
                    position={nodes['Tooth'].children[2].position}
                    scale={nodes['Tooth'].children[2].scale}
                    rotation={nodes['Tooth'].children[2].rotation}
                    up={nodes['Tooth'].children[2].up}
                    material={nodes['Tooth'].children[2].material}
                />

                <mesh
                    visible
                    geometry={nodes['Tooth'].children[3].geometry}
                    position={nodes['Tooth'].children[3].position}
                    scale={nodes['Tooth'].children[3].scale}
                    rotation={nodes['Tooth'].children[3].rotation}
                    up={nodes['Tooth'].children[3].up}
                    material={nodes['Tooth'].children[3].material}
                />

                <mesh
                    visible
                    geometry={nodes['Tooth'].children[4].geometry}
                    position={nodes['Tooth'].children[4].position}
                    scale={nodes['Tooth'].children[4].scale}
                    rotation={nodes['Tooth'].children[4].rotation}
                    up={nodes['Tooth'].children[4].up}
                    material={nodes['Tooth'].children[4].material}
                />

                <mesh
                    visible
                    geometry={nodes['Tooth'].children[5].geometry}
                    position={nodes['Tooth'].children[5].position}
                    scale={nodes['Tooth'].children[5].scale}
                    rotation={nodes['Tooth'].children[5].rotation}
                    up={nodes['Tooth'].children[5].up}
                    material={nodes['Tooth'].children[5].material}
                />
                <mesh
                    visible
                    geometry={nodes['Tooth'].children[6].geometry}
                    position={nodes['Tooth'].children[6].position}
                    scale={nodes['Tooth'].children[6].scale}
                    rotation={nodes['Tooth'].children[6].rotation}
                    up={nodes['Tooth'].children[6].up}
                    material={nodes['Tooth'].children[6].material}
                />

                <mesh
                    visible
                    geometry={nodes['Tooth'].children[7].geometry}
                    position={nodes['Tooth'].children[7].position}
                    scale={nodes['Tooth'].children[7].scale}
                    rotation={nodes['Tooth'].children[7].rotation}
                    up={nodes['Tooth'].children[7].up}
                    material={nodes['Tooth'].children[7].material}
                />
                <mesh
                    visible
                    geometry={nodes['Tooth'].children[8].geometry}
                    position={nodes['Tooth'].children[8].position}
                    scale={nodes['Tooth'].children[8].scale}
                    rotation={nodes['Tooth'].children[8].rotation}
                    up={nodes['Tooth'].children[8].up}
                    material={nodes['Tooth'].children[8].material}
                />

                <mesh
                    visible
                    geometry={nodes['Tooth'].children[9].geometry}
                    position={nodes['Tooth'].children[9].position}
                    scale={nodes['Tooth'].children[9].scale}
                    rotation={nodes['Tooth'].children[9].rotation}
                    up={nodes['Tooth'].children[9].up}
                    material={nodes['Tooth'].children[9].material}
                />

                <mesh
                    visible
                    geometry={nodes['Tooth'].children[10].geometry}
                    position={nodes['Tooth'].children[10].position}
                    scale={nodes['Tooth'].children[10].scale}
                    rotation={nodes['Tooth'].children[10].rotation}
                    up={nodes['Tooth'].children[10].up}
                    material={nodes['Tooth'].children[10].material}
                />
            </group>
        </group>
    );
};

export default ZombieHeadTwo;
