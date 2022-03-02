import Image from "next/image";
import ArrowIcon from "../../ArrowIcon";
import styles from "./About.module.scss";

const About = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.boxAbout}>
                <div className={styles.textAbout}>
                    <p><b>We're an Amsterdam based digital design agency. </b>
                        <br /><br />
                        Since 2008, we’ve been on a mission to help brands become more human in the digital era. Today we’re a tight-knit team of 20 strategists, creatives and developers, focusing on one thing: taking care of your brand across multiple digital touch-points. 
                        <br /><br />
                        We believe that brands become more human when they’re accessible, social and emotional. As a strategic partner we craft effective brand strategies, digital first identities and online products that make brand stand out and become more human.
                    </p>
                </div>
                <div className={styles.textContact}>
                    <p><b>Amsterdam</b>
                        <br />
                        Since 2008
                    </p>
                    <p><b>Become</b>
                        <br />
                        human
                    </p>
                    <p><b>Creatives</b>
                        <br />
                        been on a mission to help brands become more
                    </p>
                </div>
            </div>
            <div className={styles.boxMoreCases}>
                <div className={styles.image}>
                    <Image 
                        src="/images/image-more-casses.jpg"
                        layout="fill"
                        alt="image more cases"
                        priority
                    />
                </div>
                <div className={styles.link}>
                    <div className={styles.boxArrow}>
                        <ArrowIcon theme="light" />
                    </div>
                    <h5 style={{color: 'white', margin: 0}}>More Casses</h5>
                </div>
            </div>
        </div>
    );
}
 
export default About;