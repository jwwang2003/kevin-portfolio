import type { NextPage } from 'next'
import applyInternationalization from '../utils/applyInternationalization'
import Gallery from '../components/ColumnImageGallery'
import Skeleton from '../components/Skeleton'

interface Test {
  src: string,
  width: number,
  height: number
}

const Home: NextPage<{images: Test[] }> = ({ images }: { images: Test[] }) => {
  return (
    <Skeleton title="This is the home page" description="This is the description">
      <Gallery images={images} />
    </Skeleton>
  )
}

export async function getStaticProps ({ locale }:{ locale: string }) {
  const test = require('../images/test.json')

  return {
    props: {
      images: test.featured,
      ...(await applyInternationalization({ locale: locale, namespaces: ['home'] }))
    }
  }
}

export default Home
