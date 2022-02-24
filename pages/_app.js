import { AnimatePresence } from 'framer-motion';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  return getLayout(
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps}></Component>
    </AnimatePresence>
  );
}

export default MyApp
