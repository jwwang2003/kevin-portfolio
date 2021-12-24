import type { NextPage } from 'next'
import Skeleton from '../components/Skeleton'
import applyInternationalization from '../utils/applyInternationalization'

const Bio: NextPage = () => {
  return (
    <Skeleton title="This is the home page" description="This is the description">

    </Skeleton>
  )
}

export async function getStaticProps ({ locale }:{ locale: string }) {
  return {
    props: {
      ...(await applyInternationalization({ locale: locale, namespaces: ['bio'] }))
    }
  }
}

export default Bio
