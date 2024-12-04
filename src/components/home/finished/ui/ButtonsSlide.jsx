'use client'
import { useSwiper } from 'swiper/react';

const ButtonsSlide = () => {
    const swiper = useSwiper()
  return (
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  )
}

export default ButtonsSlide