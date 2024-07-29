'use client'
import React from 'react';
import styles from './squads.module.css';
import { useSquads } from '@/hooks/useSquads';
import SquadItem from '../SquadItem';

const Squads = () => {

    const { squads } = useSquads();

    return (
        <div className={styles.squads__container}>
            <h1 className={styles.squads__title}>SQUADS</h1>

            <ul className={styles.squads__list}>
                {
                    squads && squads.map((squad) => (
                        <SquadItem key={squad.id} data={squad} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Squads;
