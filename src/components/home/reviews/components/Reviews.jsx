'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
/* import { Navigation, Pagination, Mousewheel } from 'swiper/modules'; */
import 'swiper/css';
import 'swiper/css/navigation';
import IntersectionComp from '@/components/ui/animations/IntersectionComp';


const reviews = [
  {
    "id": 1,
    "text": "El equipo de [Nombre del estudio] fue increíblemente profesional y atento a nuestros requerimientos. Transformaron nuestra visión en una realidad hermosa y funcional.",
    "cliente": "Ana López",
    "puesto_empresa": "Propietaria de vivienda unifamiliar"
  },
  {
    "id": 2,
    "text": "Quedamos muy satisfechos con el diseño de nuestra oficina. El estudio logró crear un espacio moderno y eficiente que refleja la identidad de nuestra empresa.",
    "cliente": "Juan Pérez",
    "puesto_empresa": "Director General de [Nombre de la empresa]"
  },
  {
    "id": 3,
    "text": "La comunicación con [Nombre del estudio] fue excelente en todo momento. Nos mantuvieron informados y resolvieron todas nuestras dudas.",
    "cliente": "María Rodríguez",
    "puesto_empresa": "Propietaria de un pequeño negocio"
  },
  {
    "id": 4,
    "text": "Recomiendo ampliamente a [Nombre del estudio]. Su creatividad y experiencia fueron clave para el éxito de nuestro proyecto de remodelación.",
    "cliente": "Pedro Gómez",
    "puesto_empresa": "Arquitecto independiente"
  },
  {
    "id": 5,
    "text": "El estudio nos ayudó a crear un hogar acogedor y funcional. Los acabados son de alta calidad y el diseño es atemporal.",
    "cliente": "Laura Martínez",
    "puesto_empresa": "Ama de casa"
  }
]

const Reviews = () => {
  return (
    <div className='w-full py-[10rem]'>
      <Swiper
        /* style={{ width: '100vw', height: '100vh' }} */
        speed={800}
        /* modules={[Mousewheel]} */
        /* cssMode={false} */
        /* autoPlay={true} */
        /* EffectFade={true} */
        freeMode={true}
        /* navigation={true} */
        pagination={{ clickable: true }}
        mousewheel
        /* spaceBetween={10} */
        slidesPerView={1}
        className='w-[100%] h-[100%]'
      >

        {reviews.map((review) => (
          <SwiperSlide
            className='flex w-full  justify-center items-center'
            key={review.id}
          >
            <div className='w-full h-full items-center flex flex-col'>
              <div className='w-full lg:w-1/2 h-full flex flex-col justify-between gap-4'>
                <div>
                  <p className='w-[100%] text-[2rem] lg:text-[4rem] font-light leading-[1]'>{review.text} </p>
                </div>
                <div className=' border-t-[1.5px] border-black leading-[1] font-regular text-[1.2rem]'>
                  <div className='flex flex-col py-5'>
                      <p>{review.cliente}</p>
                      <p>{review.puesto_empresa}</p>
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}

export default Reviews