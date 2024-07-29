'use client'
import React from 'react';
import styles from './squadItem.module.css';
import MemberItem from '../MemberItem';

const SquadItem = ({ data }) => {

    return (
        <li className={styles['squad-item__container']}>
            <p className={styles['squad-item__name']}>{data.name}</p>

            <div className={styles['squad-item__content']}>
                <p className={styles['squad-item__text']}>Membros</p>
                <ul className={styles['squad-item__members']}>
                    {
                        data.members.map((member) => (
                            <MemberItem key={member.id} data={member} />
                        ))
                    }
                </ul>
            </div>
        </li>
    );
};

export default SquadItem;
