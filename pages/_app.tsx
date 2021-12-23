import 'normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps, router }: AppProps) {
  return <>
    <Nav />
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
    <Footer />
  </>
}

export default MyApp
