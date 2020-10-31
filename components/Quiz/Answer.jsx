import React from 'react';
import classNames from 'classnames';
import styles from './Quiz.module.css';

const ZOMBIE_RES_ALIEN = 'Actually an Alien';
const ZOMBIE_RES_CLASSIC = 'The Classic';
const ZOMBIE_RES_SKULL = 'A Little Decayed';
const ZOMBIE_RES_DEVIL = 'Devil x Zombie';

const Answer = ({ score, randomProp }) => {
    const zombieName = () => {
        // if (randomProp === 7) {
        //     return ZOMBIE_RES_DEVIL;
        // }

        // if (score <= 15) {
        //     return ZOMBIE_RES_ALIEN;
        // }

        // if (score <= 21) {
        //     return ZOMBIE_RES_CLASSIC;
        // }

        // if (score <= 41) {
        //     return ZOMBIE_RES_SKULL;
        // }

        return ZOMBIE_RES_SKULL;
    };

    const zombieSubtitle = () => {
        if (randomProp === 1) {
            return "Luckily you aren't a vampire";
        }
        if (randomProp === 2) {
            return 'A cat and a poptart?';
        }
        if (randomProp === 3) {
            return 'I thought this only happened in Skyrim';
        }
        if (randomProp === 4) {
            return 'A gentleman';
        }
        if (randomProp === 5) {
            return 'Your heart is in the right place';
        }
        if (randomProp === 6) {
            return 'Yer a witch, Harry';
        }
        if (randomProp === 7) {
            return 'Something something Doom reference';
        }
    };
    return (
        <div className={styles['quiz-wrapper']}>
            <h1
                className={classNames(styles.answer, {
                    [styles.alien]: zombieName() === ZOMBIE_RES_ALIEN,
                    [styles.classic]: zombieName() === ZOMBIE_RES_CLASSIC,
                    [styles.skull]: zombieName() === ZOMBIE_RES_SKULL,
                    [styles.devil]: zombieName() === ZOMBIE_RES_DEVIL,
                })}>
                {zombieName()}
            </h1>
            <p
                className={classNames(styles.subtitle, {
                    [styles['subtitle-alien']]: zombieName() === ZOMBIE_RES_ALIEN,
                    [styles['subtitle-classic']]: zombieName() === ZOMBIE_RES_CLASSIC,
                    [styles['subtitle-skull']]: zombieName() === ZOMBIE_RES_SKULL,
                    [styles['subtitle-devil']]: zombieName() === ZOMBIE_RES_DEVIL,
                })}>
                {zombieSubtitle()}
            </p>
        </div>
    );
};

export default Answer;
