import styles from "./ArrowIcon.module.scss"

const ArrowIcon = ({ theme }) => {
    return ( 
        <div className={theme === 'light' ? styles.lightArrow : styles.darkArrow}>
            <div />
            <div />
        </div>
    );
}
 
export default ArrowIcon;