import 'normalize.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next'

function MyApp ({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
};

export default appWithTranslation(MyApp)
