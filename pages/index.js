import Head from 'next/head';
import Box from '../components/Box/Box';
import { Canvas } from 'react-three-fiber';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Hallowbie!</title>
            </Head>
            <main>
                <Canvas style={{ height: '100vh' }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                    <pointLight position={[-10, -10, -10]} />
                    <Box position={[0, 0, 0]} />
                </Canvas>
            </main>
        </div>
    );
}
