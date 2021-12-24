import type { NextPage } from 'next'
import Skeleton from '../components/Skeleton'
import applyInternationalization from '../utils/applyInternationalization'

import MaskedHeader from '../components/MaskedHeader'

const Portfolio: NextPage = () => {
  return (
    <Skeleton title="This is the home page" description="This is the description">
      <MaskedHeader />
    </Skeleton>
  )
}

export async function getStaticProps ({ locale }:{ locale: string }) {
  return {
    props: {
      ...(await applyInternationalization({ locale: locale, namespaces: ['portfolio'] }))
    }
  }
}

export default Portfolio
