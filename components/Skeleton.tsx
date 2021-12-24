import { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
// import { motion } from 'framer-motion'
import Nav from './Nav'
import Footer from './Footer'

type Props = {
  children: ReactNode
  title: string
  description: string
}

// const animationVariants = {
//   hidden: { opacity: 0, x: 0, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: 0 }
// }

function Skeleton ({ children, title, description }: Props): JSX.Element {
  return (
    <>
      <NextSeo title={title} description={description} openGraph={{ title, description }} />
      <Nav />
      {/* <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={animationVariants}
        transition={{ type: 'linear' }}
      > */}
      <div className="pb-20">
        {children}
      </div>
      {/* </motion.main> */}
      <Footer />
    </>
  )
}

export default Skeleton
