import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="item" data-value="1">
    <img src="/Carousel/p1.jpg" onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item" data-value="2">
    <img src="/Carousel/p2.jpg" onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="item grid h-screen" data-value="3">
    <img className="max-w-full max-h-full" src="/Carousel/p3-1.jpg" onDragStart={handleDragStart} role="presentation" />
  </div>
  ,
  <div className="item grid grid-cols-3 gap-4" data-value="4">
    <img src="/Carousel/p3-1.jpg" onDragStart={handleDragStart} role="presentation" />
    <img src="/Carousel/p3-2.jpg" onDragStart={handleDragStart} role="presentation" />
    <img src="/Carousel/p3-3.jpg" onDragStart={handleDragStart} role="presentation" />
  </div>,
];

export default function ImageCarousel() {
  return (
    <AliceCarousel 
      autoHeight
      autoPlay
      autoPlayStrategy="all"
      animationType="slide" 
      autoPlayInterval={3500}
      animationDuration={800}
      disableButtonsControls
      infinite
      disableDotsControls
      items={items}
      mouseTracking
      touchTracking
      keyboardNavigation />
  )
}