import React from 'react';
import styles from './Quiz.module.css';

const quizContent = [
    {
        quesiton: 'Pick a Halloween treat',
        answer_one: 'Chocolate',
        answer_one_val: 5,
        answer_two: 'Brains',
        answer_two_val: 7,
        answer_three: 'Candy Corn',
        answer_three_val: 9,
        answer_four: 'An apple?',
        answer_four_val: 12,
    },
    {
        quesiton: 'Choose a Pennywise',
        answer_one: 'Bill Skarsgård',
        answer_one_val: 5,
        answer_two: 'Tim Curry',
        answer_two_val: 7,
    },
    {
        quesiton: 'Shaun of the Dead vs. Dawn of the Dead',
        answer_one: 'Shaun',
        answer_one_val: 5,
        answer_two: 'Dawn',
        answer_two_val: 7,
    },
    {
        quesiton: 'Best Halloween monster',
        answer_one: 'Frankenstein',
        answer_one_val: 5,
        answer_two: 'Zombie',
        answer_two_val: 7,
        answer_three: 'Vampire',
        answer_three_val: 9,
        answer_four: 'Ghost',
        answer_four_val: 12,
    },
    {
        quesiton: 'Pick your favorite holiday',
        answer_one: 'Halloween',
        answer_one_val: 5,
        answer_two: 'Halloween',
        answer_two_val: 7,
        answer_three: 'Halloween',
        answer_three_val: 9,
        answer_four: 'Halloween',
        answer_four_val: 12,
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
                    </div>
                    {quizContent[questionIndex].answer_three && (
                        <div
                            className={styles['quiz-button']}
                            onClick={() =>
                                handleAnswer(quizContent[questionIndex].answer_three_val)
                            }>
                            {quizContent[questionIndex].answer_three}
                        </div>
                    )}
                    {quizContent[questionIndex].answer_four && (
                        <div
                            className={styles['quiz-button']}
                            onClick={() =>
                                handleAnswer(quizContent[questionIndex].answer_four_val)
                            }>
                            {quizContent[questionIndex].answer_four}
                        </div>
                    )}
                </>
            ) : null}
        </div>
    );
};

export default Quiz;
