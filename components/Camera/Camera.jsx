import React, { useRef } from 'react';
import { useFrame, extend, useThree } from 'react-three-fiber';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });
//https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr (need to use this here to make the camera work again)
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

    return <orbitControls ref={cameraRef} args={[camera, domElement]} />;
};

export default Camera;
