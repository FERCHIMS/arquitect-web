'use client'
import { useSwiper } from 'swiper/react';

const ButtonsSlide = () => {
  const swiper = useSwiper()
  return (
    <div className='flex w-[30%] h-[5%] gap-[20%] border-t-[1px] absolute top-0 right-0 pt-5 z-50'>
      <button className='w-fit h-[80%] transition-all duration-200 hover:translate-x-0 sm:hover:translate-x-[-0.5rem]' onClick={() => swiper.slidePrev()}>
        <svg style={{ backgroundColor: "transparent", height: "100%" }} viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="29" y1="6" x2="1.99995" y2="6" stroke="white" strokeWidth="1" />
          <path d="M7.91679 1.5L2 6L7.91679 11" stroke="white" strokeWidth="1" />
        </svg>
      </button>
      
      <button className='w-fit h-[80%] transition-all duration-200 hover:translate-x-0 sm:hover:translate-x-[0.5rem]' onClick={() => swiper.slideNext()}>
        <svg style={{ backgroundColor: "transparent", height: "100%" }} viewBox="0 0 29 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="6" x2="27" y2="6" stroke="white" strokeWidth="1" />
          <path d="M21.0832 10.5L27 6L21.0832 1" stroke="white" strokeWidth="1" />
        </svg>



      </button>
    </div>
  )
}

export default ButtonsSlide