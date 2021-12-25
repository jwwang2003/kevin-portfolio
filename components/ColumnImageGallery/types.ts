export interface MainProps {
  images: Image[],
  columns?: number // PLAN: could be user defined?
}

export interface RenderProps {
  thumbnails: Thumbnail[]
}

export interface Image {
  src: string,
  width: number,
  height: number
}

export interface Thumbnail extends Image{
  // positioning
  index: string,
  top: number,
  left: number
}
