import Head from 'next/head';
import { Suspense } from 'react';
import Box from '../components/Box/Box';
import ZombieHeadOne from '../components/Heads/ZombieHeadOne';
import Skull from '../components/Heads/Skull';
import Camera from '../components/Camera/Camera';
import { Canvas } from 'react-three-fiber';
import dynamic from 'next/dynamic';

const Camera = dynamic(() => import('../components/Camera/Camera'), { ssr: false });

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Hallowbie!</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <main>
                <Canvas style={{ height: '100vh' }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Camera />
                    <Box position={[0, 0, 0]} />
                    <Suspense fallback={null}>
                        {/* <ZombieHeadOne /> */}
                        <Skull />
                    </Suspense>
                </Canvas>
            </main>
        </div>
    );
}
