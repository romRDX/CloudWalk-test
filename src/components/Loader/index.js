import React from 'react';
import styles from './loader.module.css';

const Loader = ({ size }) => {
    return (
        <div
            className={
                `${styles.loader} ${styles[`loader--${size}`]}`
            }
        />
    );
};

export default Loader;
