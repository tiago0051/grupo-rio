import GlobalStyle from '../styles/global';
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
        <GlobalStyle />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
