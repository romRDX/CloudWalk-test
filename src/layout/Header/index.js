'use client'
import React from "react";
import styles from "./header.module.css";
import Link from 'next/link';

const Header = () => {

    return (
        <>
            <nav className={styles['header__nav-container']}>
                <ul className={styles['header__nav-list']}>
                    <li className={styles['header__nav-item']}>
                    <Link href="/">
                        HOME
                    </Link>
                    </li>
                    <li className={styles['header__nav-item']}>
                    <Link href="/squads">
                        SQUADS
                    </Link>
                    </li>
                </ul>
            </nav>
            <header className={styles.header__container} role="banner">
                <h1 className={styles.header__title} tabIndex="0">Star Wars Characters</h1>
                <p className={styles.header__text} tabIndex="0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                </p>
            </header>
        </>
    )
}

export default Header;
