import styles from '../styles/Skeleton.module.scss'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './Navbar';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 200 },
}

export default function Skeleton({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>

      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'ease' }}
        className={styles.content}>
          {children}
      </motion.main>

      {/* This layer overlays everything */}
      <div className={styles.mask}>

      </div>
      <div className={styles.popout}>

      </div>

      <footer className={styles.footer}>
        This is the footer
      </footer>
    </>
  )
}