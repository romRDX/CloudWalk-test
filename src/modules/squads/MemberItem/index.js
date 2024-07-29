import React from 'react';
import styles from './memberItem.module.css';

const MemberItem = ({ data, isUser }) => {
    
    return (
        <li
            className={
                `${styles['member-item__container']} 
                 ${isUser && styles['member-item__container--you']}
                `
            }
            key={data.id}
        >
            <p>{data.name}</p>
        </li>
    );
};

export default MemberItem;
