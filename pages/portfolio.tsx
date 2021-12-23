import type { NextPage } from 'next'
import Skeleton from '../components/Skeleton'

import MaskedHeader from '../components/MaskedHeader'

const Portfolio: NextPage = () => {
  return (
    <Skeleton title="This is the home page" description="This is the description">
      <MaskedHeader />
    </Skeleton>
  )
}

export default Portfolio
