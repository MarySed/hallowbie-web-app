import Head from 'next/head';
import { Suspense } from 'react';
import ZombieHeadOne from '../components/Heads/ZombieHeadOne';
import ZombieHeadTwo from '../components/Heads/ZombieHeadTwo';
import ZombieBodyOne from '../components/Bodies/ZombieBodyOne';
import ZombieBodyTwo from '../components/Bodies/ZombieBodyTwo';
import Layout from '../components/layout';
import { Canvas } from 'react-three-fiber';
import dynamic from 'next/dynamic';
import styles from './index.module.css';

const Camera = dynamic(() => import('../components/Camera/Camera'), { ssr: false });

export default function Home() {
    return (
        <Layout>
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
                        <ZombieHeadTwo />
                        <ZombieBodyOne />
                        <ZombieBodyTwo />
                    </Suspense>
                </Canvas>
                <div className={styles.question}>
                    <div>QUESTION 1!!!!</div>
                    <div>PICK A FAVORITE HALLOWEEN CANDY</div>
                    <div>- CHOCOLATE</div>
                    <div>- BRAINS</div>
                </div>
            </main>
        </Layout>
    );
}
