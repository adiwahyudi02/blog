import Footer from "../Footer";
import Navigation from "../Navigation";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}
 
export const getLayout = page => <MainLayout>{page}</MainLayout>;

export default MainLayout;