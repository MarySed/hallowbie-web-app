import Head from 'next/head';
import { Suspense, useState } from 'react';
import ZombieHeadOne from '../components/Heads/ZombieHeadOne';
import ZombieHeadTwo from '../components/Heads/ZombieHeadTwo';
import ZombieBodyOne from '../components/Bodies/ZombieBodyOne';
import ZombieBodyTwo from '../components/Bodies/ZombieBodyTwo';
import Layout from '../components/layout';
import { Canvas } from 'react-three-fiber';
import dynamic from 'next/dynamic';
import styles from './index.module.css';
import Quiz from '../components/Quiz/Quiz';

const Camera = dynamic(() => import('../components/Camera/Camera'), { ssr: false });

export default function Home() {
    const [questionIndex, setQuestionIndex] = useState(0);

    return (
        <Layout>
            <Head>
                <title>Hallowbie!</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <Canvas style={{ height: '100vh' }}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <pointLight position={[-10, -10, -10]} />
                        <Camera />
                        <Suspense fallback={null}>
                            <ZombieHeadOne />
                            <ZombieHeadTwo />
                        </Suspense>
                    </Canvas>
                </div>
                <div className={styles['quiz-container']}>
                    <Quiz questionIndex={questionIndex} />
                </div>
            </main>
        </Layout>
    );
}
