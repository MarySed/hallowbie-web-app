import React, { useRef } from 'react';
import { useFrame, extend, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Camera = () => {
    const {
        camera,
        gl: { domElement },
    } = useThree();

    const cameraRef = useRef(null);

    useFrame(() => {
        if (cameraRef.current) {
            cameraRef.current?.update();
        }
    });

    return <orbitControls ref={cameraRef} args={[camera, domElement]} panSpeed={4} />;
};

export default Camera;
