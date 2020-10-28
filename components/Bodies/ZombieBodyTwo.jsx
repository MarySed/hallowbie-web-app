import React, { useRef } from 'react';

const ZombieBodyTwo = () => {
    const zombieBodyRef = useRef();

    return (
        <group ref={zombieBodyRef} position={[3, 1.6, 0]}>
            <mesh visible>
                <boxBufferGeometry args={[1, 2, 1]} />
                <meshStandardMaterial
                    attach="material"
                    color="blue"
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>
        </group>
    );
};

export default ZombieBodyTwo;
