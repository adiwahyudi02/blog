import Navigation from "../navigation/Navigation";

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    );
}
 
export const getLayout = page => <MainLayout>{page}</MainLayout>;

export default MainLayout;