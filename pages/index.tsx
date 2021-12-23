import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Skeleton from '../components/Skeleton'

const Home: NextPage = () => {
  return (
    <Skeleton title="This is the home page" description="This is the description">
      
    </Skeleton>
  )
}

export default Home
