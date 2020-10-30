import React, { useRef } from 'react';

const Plate = () => {
    const plateRef = useRef();

    return (
        <group ref={plateRef} position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
            <mesh visible>
                <cylinderBufferGeometry args={[1.5, 1, 0.2, 12]} />
                <meshStandardMaterial
                    attach="material"
                    color="white"
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>
        </group>
    );
};

export default Plate;
