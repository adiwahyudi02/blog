import HorizontalScroll from 'react-scroll-horizontal';
import ArrowIcon from '../components/ArrowIcon';
import { getLayout } from '../components/layout/MainLayout';
import SlideTransition from '../components/transition/SlideTransition';
import About from '../components/work/About';
import Content from '../components/work/Content';
import styles from "../styles/pages/work.module.scss";

const contents = [
  {
    id: 1,
    title: 'Digital Livestream Platform',
    category: 'Eurosonic Noordeslag',
    image: 'image1.jpg',
    description: 'Eurosonic Noorderslag (ESNS) is a non-profit, European artist only, 100% showcase festival and music conference. Selling out each year ESNS attracts over 4.000 professional delegates, including 400 international festivals, and showcases around 350 European artists for over 40.000 visitors total.',
  },
  {
    id: 2,
    title: 'Custom Platform & Custom Built Voting System',
    category: 'Change Inc.',
    image: 'image2.jpg',
    description: 'Eurosonic Noorderslag (ESNS) is a non-profit, European artist only, 100% showcase festival and music conference. Selling out each year ESNS attracts over 4.000 professional delegates, including 400 international festivals, and showcases around 350 European artists for over 40.000 visitors total.',
  },
  {
    id: 3,
    title: 'A Digital Conference & Livestream Platform',
    category: 'Amsterdam Dance Event',
    image: 'image3.jpg',
    description: 'Eurosonic Noorderslag (ESNS) is a non-profit, European artist only, 100% showcase festival and music conference. Selling out each year ESNS attracts over 4.000 professional delegates, including 400 international festivals, and showcases around 350 European artists for over 40.000 visitors total.',
  },
  {
    id: 4,
    title: 'A Platform For The New Generation Leader',
    category: 'Ebbinge',
    image: 'image4.jpg',
    description: 'Eurosonic Noorderslag (ESNS) is a non-profit, European artist only, 100% showcase festival and music conference. Selling out each year ESNS attracts over 4.000 professional delegates, including 400 international festivals, and showcases around 350 European artists for over 40.000 visitors total.',
  },
];

function Work() {

  const renderContents = () =>  {
    return contents.map(item => <Content key={item.id} item={item} />);
  }

  return (
    <SlideTransition>
      <div className={styles.container}>
        <div className={styles.boxTitle}>
          <div>
            <div>
              <h1 className={styles.title}>Strategy, branding & <br /> experiences for the digital <br /> era.</h1>
            </div>
            <div className={styles.boxDescription}>
              <ArrowIcon />
              <p className={styles.textDescription}>what i do best</p>
            </div>
          </div>
        </div>

        <HorizontalScroll 
          reverseScroll={true} 
          config={{ stiffness: 70, damping: 10 }} 
          animValues={500}
          className={styles.contentLaptop}
        >
          <div className={styles.boxContentTransparent}>
            <div />
          </div>
          {renderContents()}
          <About />
        </HorizontalScroll>

        <div className={styles.contentTablet}>
            {renderContents()}
            <About />
        </div>
      </div>
    </SlideTransition>
  )
}

Work.getLayout = getLayout
export default Work