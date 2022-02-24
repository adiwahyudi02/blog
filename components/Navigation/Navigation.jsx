import Link from "next/link";
import styles from "./Navigation.module.scss"

const Navigation = () => {
    return ( 
        <nav className={styles.navMenu}>
            <Link href="/">
                <a>Work</a>
            </Link>
            <Link href="/studio">
                <a>Studio</a>
            </Link>
            <Link href="/play">
                <a>Play</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
            <div className={styles.dot} />
        </nav>
    );
}
 
export default Navigation;