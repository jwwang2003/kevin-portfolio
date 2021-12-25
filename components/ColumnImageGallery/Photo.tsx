// customize the photo element here
// TODO: hovering and subtitle with redirect
import { Thumbnail } from './types'

const Photo = ({ index, src, top, left, height, width } : Thumbnail): JSX.Element => {
  return <div key={`${src}-${index}`} style={{
    position: 'absolute',
    top: top,
    left: left
  }}>
      <img src={src} alt="" height={height} width={width} />
    </div>
}

export default Photo
