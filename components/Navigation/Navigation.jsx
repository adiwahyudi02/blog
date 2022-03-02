import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navigation.module.scss";

const Navigation = () => {
    const router = useRouter();

    return ( 
        <nav className={styles.navMenu}>
            <Link href="/">
                <a className={router.pathname == "/" ? styles.active : ""}>Work</a>
            </Link>
            <Link href="/studio">
                <a className={router.pathname == "/studio" ? styles.active : ""}>Studio</a>
            </Link>
            <Link href="/play">
                <a className={router.pathname == "/play" ? styles.active : ""}>Play</a>
            </Link>
            <Link href="/contact">
                <a className={router.pathname == "/contact" ? styles.active : ""}>Contact</a>
            </Link>
            <div className={styles.underline} />
        </nav>
    );
}
 
export default Navigation;