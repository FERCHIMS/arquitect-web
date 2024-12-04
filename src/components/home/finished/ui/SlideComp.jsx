'use client'
import CarouselComp from '@/components/ui/carousel/CarouselComp'
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import React from 'react'
import CardsSlide from './CardsSlide';
import { ComponentCard1, ComponentCard2, ComponentCard3 } from './ComponentsCard';
/* import 'swiper/css';
import 'swiper/css/navigation'; */


const images = [
  { component: <ComponentCard1 /> },
  { component: <ComponentCard2 /> },
  { component: <ComponentCard3 /> },
];
const SlideComp = () => {
  return (
    <CarouselComp>
      <div>
        {images.map((image, index) => (
          <SwiperSlide style={{ width: "47vw", height: "fit-content" }} className='carousel-slide ' key={index}>
            {image.component}
          </SwiperSlide>
        ))}
      </div>

    </CarouselComp>
  )
}

export default SlideComp



/* { src: "https://iili.io/dNg00fj.png" },
  { src: "https://iili.io/dNg010x.png" },
  { src: "https://iili.io/dNg0EUQ.png" }, */
  /* { src: "https://iili.io/dNg0V5B.png" },
  { src: "https://iili.io/dNg0vgR.png" },
  { src: "https://iili.io/dNg0SJp.png" } */
  /* { src: "https://www.dropbox.com/scl/fi/1nxv2lyzq3pbhg16bfqiv/ScreenRecorderProject9.mp4?rlkey=6vjwifkqa434w7fq6wlsow03e&st=y12d6x9k&raw=1" },
  { src: "https://www.dropbox.com/scl/fi/kmzq7px9f8aih8st08a3b/ScreenRecorderProject8.mp4?rlkey=qum33i4uvgjvp6bbwjhfwdld5&st=zjx60rgk&raw=1" },
  { src: "https://www.dropbox.com/scl/fi/h79dsdsn8qf4h64lvenio/ScreenRecorderProject6.mp4?rlkey=uyfg3xqw54emkpsirv5qhuh4f&st=xx0w33fj&raw=1" }, */