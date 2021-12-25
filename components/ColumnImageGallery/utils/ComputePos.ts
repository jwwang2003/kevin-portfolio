import { round } from './Round'
import { MainProps, Thumbnail } from '../types'

interface Props extends MainProps {
  WIDTH: number,
  LEFTOVER: number
}

export default function ComputePos ({ images, columns, WIDTH, LEFTOVER } : Props): [number, Thumbnail[]] {
  const thumbnails:Thumbnail[] = []
  let containerHeight = 0

  for (const { src, height, width } of images) {
    thumbnails.push({
      src: src,
      height: round(height / width * WIDTH, 0),
      width: WIDTH,
      top: 0,
      left: 0
    } as Thumbnail)
  }

  const colLeftPositions:number[] = []
  const colCurrTopPositions:number[] = []
  for (let i = 0; i < columns!; ++i) {
    colLeftPositions[i] = i * WIDTH
    colCurrTopPositions[i] = 0
  }

  for (let i = 0; i < images.length; ++i) {
    // OPTIMIZATION: find the smallest column to reduce uneven blank space
    const smolCol = colCurrTopPositions.reduce((acc, item, i) => {
      acc = item < colCurrTopPositions[acc] ? i : acc
      return acc
    }, 0)
    thumbnails[i].top = colCurrTopPositions[smolCol]
    thumbnails[i].left = colLeftPositions[smolCol]

    // BUG FIX: unused border on right side
    if (smolCol === columns! - 1) {
      thumbnails[i].width += LEFTOVER
    }

    colCurrTopPositions[smolCol] = colCurrTopPositions[smolCol] + thumbnails[i].height
    const tallestCol = colCurrTopPositions.reduce((acc, item, i) => {
      acc = item > colCurrTopPositions[acc] ? i : acc
      return acc
    }, 0)
    containerHeight = colCurrTopPositions[tallestCol]
  }
  return [containerHeight, thumbnails]
}
