import { motion } from "framer-motion";

const SlideTransition = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, x: -100, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 100 },
    }
    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', duration: 0.4 }}
        >
            {children}
        </motion.main>
     );
}
 
export default SlideTransition;