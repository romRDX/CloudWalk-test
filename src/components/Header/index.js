import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header__container} role="banner">
            <h1 className={styles.header__title} tabIndex="0">Star Wars Characters</h1>
            <p className={styles.header__text} tabIndex="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
            </p>
        </header>
    )
}

export default Header;
