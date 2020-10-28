import Head from 'next/head';
import { Suspense } from 'react';
import ZombieHeadOne from '../components/Heads/ZombieHeadOne';
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
                    <Suspense fallback={null}>
                        <ZombieHeadOne />
                    </Suspense>
                </Canvas>
            </main>
        </div>
    );
}
