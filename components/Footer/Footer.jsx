import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";
import { FaSnowflake } from "react-icons/fa";

const Footer = () => {
    const router = useRouter();

    return ( 
        <footer className={styles.footer}>
            <div>
                <FaSnowflake className={styles.icon}/>
            </div>
            <nav className={styles.navMenu}>
                <Link href="/more-cases">
                    <a className={router.pathname == "/more-cases" ? styles.active : ""}>More cases</a>
                </Link>
                <Link href="/careers">
                    <a className={router.pathname == "/careers" ? styles.active : ""}>Careers</a>
                </Link>
                <Link href="/articles">
                    <a className={router.pathname == "/articles" ? styles.active : ""}>Articles</a>
                </Link>
                <Link href="/newsletter">
                    <a className={router.pathname == "/newsletter" ? styles.active : ""}>Newsletter</a>
                </Link>
            </nav>
        </footer>
    );
}
 
export default Footer;