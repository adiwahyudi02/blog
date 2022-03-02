import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ArrowIcon from "../../ArrowIcon";
import styles from "./Content.module.scss";

const Content = ({ item }) => {
    const { title, category, image } = item;

    const controls = useAnimation();
    const [ref, inView] = useInView();

    const contentVariants = {
        visible: { opacity: 1, scale: 1.2, transition: { duration: 0.7, delay: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
    };

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    return (
        <div className={styles.container}>
            <motion.div ref={ref}
                animate={controls}
                variants={contentVariants}  
                className={styles.box}
            >
                <Image 
                    src={`/images/${image}`} 
                    layout="fill"
                    alt={item.title}
                    priority
                />
                <div className={styles.boxTitle}>
                    <div>
                        <p>{category}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.boxArrow}>
                        <ArrowIcon theme="light" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
 
export default Content;