import Head from 'next/head';
import { Suspense, useState } from 'react';
import ZombieHeadOne from '../components/Heads/ZombieHeadOne';
import ZombieHeadTwo from '../components/Heads/ZombieHeadTwo';
import Plate from '../components/Plate/Plate';
import Sunglasses from '../components/Accessories/Sunglasses';
import Layout from '../components/layout';
import { Canvas } from 'react-three-fiber';
import dynamic from 'next/dynamic';
import styles from './index.module.css';
import Quiz from '../components/Quiz/Quiz';
import Answer from '../components/Quiz/Answer';
import Arrow from '../components/Accessories/Arrow';
import Nyan from '../components/Accessories/Nyan';
import TopHat from '../components/Accessories/TopHat';
import Heart from '../components/Accessories/Heart';
import WitchHat from '../components/Accessories/WitchHat';

const Camera = dynamic(() => import('../components/Camera/Camera'), { ssr: false });

const QUIZ_LENGTH = 3;
const RANDOM_PROP = Math.floor(Math.random() * 6) + 1; // generate random number between 1 and 6 for props

export default function Home() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0); // generate zombie based on user score after answering all questions
    const [lighting, setLighting] = useState('white'); // TODO: maybe use this to have randomized lighting....

    const handleAnswer = (value) => {
        setScore(score + value);
        setQuestionIndex(questionIndex + 1);
    };

    console.log(RANDOM_PROP);

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
                        <ambientLight intensity={0.8} color={lighting} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={0.5}
                            color={lighting}
                        />
                        <pointLight position={[-10, -10, -10]} color={lighting} intensity={0.5} />
                        <Camera />
                        <Suspense fallback={null}>
                            {zombieResult()}
                            {RANDOM_PROP === 1 && <Sunglasses />}
                            {RANDOM_PROP === 2 && <Nyan />}
                            {RANDOM_PROP === 3 && <Arrow />}
                            {RANDOM_PROP === 4 && <TopHat />}
                            {RANDOM_PROP === 5 && <Heart />}
                            {RANDOM_PROP === 6 && <WitchHat />}
                        </Suspense>
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
