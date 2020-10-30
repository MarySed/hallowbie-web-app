import Head from 'next/head';
import { Suspense, useState } from 'react';
import ZombieHeadOne from '../components/Heads/ZombieHeadOne';
import ZombieHeadTwo from '../components/Heads/ZombieHeadTwo';
import Plate from '../components/Plate/Plate';
import Layout from '../components/layout';
import { Canvas } from 'react-three-fiber';
import dynamic from 'next/dynamic';
import styles from './index.module.css';
import Quiz from '../components/Quiz/Quiz';
import Answer from '../components/Quiz/Answer';

const Camera = dynamic(() => import('../components/Camera/Camera'), { ssr: false });

const QUIZ_LENGTH = 3;

export default function Home() {
    const [questionIndex, setQuestionIndex] = useState(0);
    // Generate zombie based on user score after answering all questions
    const [score, setScore] = useState(0);

    const handleAnswer = (value) => {
        setScore(score + value);
        setQuestionIndex(questionIndex + 1);
    };

    // TODO: Update scores lol
    const zombieResult = () => {
        if (score <= 30) {
            return <ZombieHeadOne />;
        }

        if (score <= 60) {
            return <ZombieHeadTwo />;
        }
    };

    return (
        <Layout>
            <Head>
                <title>Hallowbie!</title>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <main>
                <div
                    className={
                        questionIndex === QUIZ_LENGTH ? styles.complete : styles['in-progress']
                    }>
                    <Canvas className={styles.canvas}>
                        <ambientLight intensity={0.8} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={0.4}
                        />
                        <pointLight position={[-10, -10, -10]} color="white" />
                        <Camera />
                        <Suspense fallback={null}>{zombieResult()}</Suspense>
                        <Plate />
                    </Canvas>
                </div>
                <div className={styles['quiz-container']}>
                    {/* Display result when you complete quiz */}
                    {questionIndex === QUIZ_LENGTH ? (
                        <Answer score={score} />
                    ) : (
                        <Quiz questionIndex={questionIndex} handleAnswer={handleAnswer} />
                    )}
                </div>
            </main>
        </Layout>
    );
}
