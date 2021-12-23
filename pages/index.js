import Skeleton from '../components/Skeleton'

import ImageCarousel from '../components/ImageCarousel';

export default function Home() {
  return (
    <Skeleton>
      <div className='flex items-center w-full'>
        <ImageCarousel />
      </div>
      <span className="md:absolute w-full p-8 sm:mt-32 md:mt-48 lg:mt-64 text-center"
        style={{ color: 'rgb(65,65,65)'}}>
        <h1 className='text-gold text-2xl md:text-6xl font-thin'>Kevin Jia Wen Wang</h1>
        <h3>Portrait | Street | Landscape Photographer</h3>
      </span>
    </Skeleton>
  )
}
