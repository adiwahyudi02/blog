import Footer from "../Footer";
import Navigation from "../Navigation";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
 
export const getLayout = page => <MainLayout>{page}</MainLayout>;

export default MainLayout;