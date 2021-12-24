import type { NextPage } from 'next'
import applyInternationalization from '../utils/applyInternationalization'

import Skeleton from '../components/Skeleton'

const Home: NextPage = () => {
  return (
    <Skeleton title="This is the home page" description="This is the description">

    </Skeleton>
  )
}

export async function getStaticProps ({ locale }:{ locale: string }) {
  return {
    props: {
      ...(await applyInternationalization({ locale: locale, namespaces: ['home'] }))
    }
  }
}

export default Home
