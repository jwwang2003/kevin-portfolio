import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import ComputePos from './utils/ComputePos'
import Photo from './Photo'
import { MainProps, Thumbnail } from './types'

// fix for SSG error about server not using layoutEffect
const haveDOM = typeof window !== 'undefined'
const useIsoLayoutEffect = haveDOM ? useLayoutEffect : useEffect

// use memo for high-priority rendering
const Gallery = React.memo(function Gallery ({ images, columns = 0 }: MainProps) {
  const [containerWidth, setContainerWidth] = useState<number>(0)
  const galleryRef = useRef(null)
  let containerHeight:number = 0
  let thumbnails:Thumbnail[] | undefined

  // similar to useEffect but called when DOM size changes
  useIsoLayoutEffect(() => {
    let animationFrameID:number|null = null
    const observer = new ResizeObserver(entries => {
      // only do something if width changes
      const newWidth = entries[0].contentRect.width
      if (containerWidth !== newWidth) {
        // put in an animation frame to stop "benign errors" from
        // ResizObserver https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
        animationFrameID = window.requestAnimationFrame(() => {
          setContainerWidth(Math.floor(newWidth))
        })
      }
    })
    if (galleryRef !== null) observer.observe(galleryRef.current!)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrameID!)
    }
  })

  if (containerWidth > 0) {
    // calculate number of columns for viewport
    columns = Math.floor((containerWidth - 500) / 400 + 2)
    const WIDTH:number = Math.floor(containerWidth / columns)
    const LEFTOVER:number = containerWidth - columns * WIDTH

    // COMPUTE position magic
    const temp = ComputePos({ images, columns: columns, WIDTH: WIDTH, LEFTOVER: LEFTOVER })
    containerHeight = temp[0]
    thumbnails = temp[1]
  }

  return <div ref={galleryRef} className="relative w-full" style={{ height: containerHeight }}>
    {thumbnails && thumbnails.map((thumb, index) => <Photo key={index} {...thumb} />)}
  </div>
})

export default Gallery
