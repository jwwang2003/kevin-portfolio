// customize the photo element here
// TODO: hovering and subtitle with redirect
import Link from 'next/link'
import { Thumbnail } from './types'

import styles from './Photo.module.scss'

const handleDragStart = (e: any) => e.preventDefault()

const Photo = ({ index, src, top, left, height, width } : Thumbnail): JSX.Element => {
  return <Link href={src} passHref><div key={`${src}-${index}`} className={styles.container} style={{
    top: top,
    left: left,
    height,
    width
  }}>
      <div className={`${styles.cover}`} style={{ height, width }}>
        <span className="text-center">
          <h1 className="text-4xl font-thin">Subtitle</h1>
          <h3 className="font-light">— View —</h3>
        </span>
      </div>
      <img onDragStart={handleDragStart} className={`${styles.image}`} src={src} alt="" height={height} width={width} />
    </div>
  </Link>
}

export default Photo
