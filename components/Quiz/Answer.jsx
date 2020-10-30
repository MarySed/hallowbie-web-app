import React from 'react';
import classNames from 'classnames';
import styles from './Quiz.module.css';

const ZOMBIE_RES_ALIEN = 'Actually an Alien';
const ZOMBIE_RES_CLASSIC = 'The Classic';

const Answer = ({ score }) => {
    const zombieName = score <= 30 ? ZOMBIE_RES_ALIEN : ZOMBIE_RES_CLASSIC;
    return (
        <h1
            className={classNames(styles.answer, {
                [styles.alien]: zombieName === ZOMBIE_RES_ALIEN,
                [styles.classic]: zombieName === ZOMBIE_RES_CLASSIC,
            })}>
            {zombieName}
        </h1>
    );
};

export default Answer;
