import React from 'react';
import styles from './Quiz.module.css';

const quizContent = [
    {
        quesiton: 'Pick a Halloween treat',
        answer_one: 'Chocolate',
        answer_one_val: 10,
        answer_two: 'Brains',
        answer_two_val: 20,
    },
    {
        quesiton: 'Choose a Pennywise',
        answer_one: 'Bill Skarsgård',
        answer_one_val: 10,
        answer_two: 'Tim Curry',
        answer_two_val: 20,
    },
    {
        quesiton: 'Shaun of the Dead vs. Dawn of the Dead',
        answer_one: 'Shaun',
        answer_one_val: 10,
        answer_two: 'Dawn',
        answer_two_val: 20,
    },
];

const Quiz = ({ questionIndex, handleAnswer }) => {
    return (
        <div className={styles['quiz-wrapper']}>
            {questionIndex < quizContent.length ? (
                <>
                    <div
                        className={styles['quiz-header']}
                        data-text={quizContent[questionIndex].quesiton}>
                        {quizContent[questionIndex].quesiton}
                    </div>
                    <div
                        className={styles['quiz-button']}
                        onClick={() => handleAnswer(quizContent[questionIndex].answer_one_val)}>
                        {quizContent[questionIndex].answer_one}
                    </div>
                    <div
                        className={styles['quiz-button']}
                        onClick={() => handleAnswer(quizContent[questionIndex].answer_two_val)}>
                        {quizContent[questionIndex].answer_two}
                    </div>{' '}
                </>
            ) : null}
        </div>
    );
};

export default Quiz;
