'use client'
import Image from 'next/image';
/* import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules'; */
import { Swiper, SwiperSlide } from 'swiper/react';
/* import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel, Parallax, autoPlay, EffectFade } from 'swiper/modules'; */
import 'swiper/css';
import 'swiper/css/navigation';


const CarouselComp = ({ children }) => {
    return (
        <Swiper
            /* style={{ width: '100vw', height: '100vh' }} */
            speed={200}
            /* modules={[Navigation, Pagination, A11y]} */
            /* cssMode={false} */
            /* autoPlay={true} */
            /* EffectFade={true} */
            freeMode={true}
            /* navigation={true} */
            pagination={{ clickable: true }}
            breakpoints={{
                1024: { // A partir de 640px (sm en Tailwind)
                    slidesPerView: 2, // Un slide por vista
                },
            }}
            /* mousewheel */
            spaceBetween={10}
            slidesPerView={1}
            className=' w-[100%] h-[100%] '
        >

            {children}

        </Swiper>
    )
}

export default CarouselComp;



{/* <SwiperSlide className='bg-green-400' key={index}>
                    <Image width={image.} />
                </SwiperSlide> */}