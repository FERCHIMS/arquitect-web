'use client'
import { useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
/* import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel, Parallax, autoPlay, EffectFade } from 'swiper/modules'; */
import 'swiper/css';
import 'swiper/css/navigation';



const CarouselComp = ({ children }) => {
    const swiper = useSwiper()
    return (
        <div className=' '>
            <Swiper
                /* style={{height: '150vh', display:"flex", alignItems: 'center', justifyContent:"center" }} */
                speed={400}
                modules={[Navigation, Pagination, A11y]}
                /* cssMode={false} */
                /* autoPlay={true} */
                
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
                className='w-[100%] h-[100%]'
            >
                {/* <div className='h-[200px] w-full bg-yellow-400 absolute inset-0 z-[10000]'>

                </div> */}
                {children}
            </Swiper>
        </div>
    )
}

export default CarouselComp;



{/* <SwiperSlide className='bg-green-400' key={index}>
                    <Image width={image.} />
                </SwiperSlide> */}