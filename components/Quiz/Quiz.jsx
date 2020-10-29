import React from 'react';
import styles from './Quiz.module.css';

const quizContent = [
    {
        quesiton: 'Pick a Halloween treat',
        answer_one: 'Chocolate',
        answer_two: 'Brains',
    },
    {
        quesiton: 'Which actor was a scarier version of Pennywise in IT',
        answer_one: 'Bill Skarsgård',
        answer_two: 'Tim Curry',
    },
    { quesiton: 'Shaun of the Dead vs. Dawn of the Dead', answer_one: 'Shaun', answer_two: 'Dawn' },
];

const Quiz = ({ questionIndex }) => {
    return (
        <div>
            <div className={styles['quiz-header']} data-text={quizContent[questionIndex].quesiton}>
                {quizContent[questionIndex].quesiton}
            </div>
            <div className={styles['quiz-button']}>{quizContent[questionIndex].answer_one}</div>
            <div className={styles['quiz-button']}>{quizContent[questionIndex].answer_two}</div>
        </div>
    );
};

export default Quiz;
