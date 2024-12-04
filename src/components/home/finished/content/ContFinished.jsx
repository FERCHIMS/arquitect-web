'use client'
import { akuraMono, neueHaasMedium, neueHaasRegular } from "@/app/fonts/Fonts"
import TextComponent from "@/components/ui/texts/TextComponent"
import { motion } from 'framer-motion'
import SlideComp from "../ui/SlideComp"
import CarouselComp from "@/components/ui/carousel/CarouselComp"
import ButtonsSlide from "../ui/ButtonsSlide"

const ContFinished = () => {

    const textos = "un texto para probar"

    return (
        <div className="w-full flex flex-col pr-[1.4rem] pl-[1.4rem] gap-y-32 bg-orange-100 pt-10 h-full">
            <div className="w-full  flex fle-col ">
                <div className="w-1/2 h-fit">
                    <div className="w-fit h-fit bg-pink-200 overflow-hidden">
                        <TextComponent
                            className="w-[80%] leading-[1]"
                        >
                            <h2 className={`text-[4rem] ${neueHaasRegular.className} `}>FINISHED If we make it, we mean it.</h2>
                        </TextComponent>
                    </div>
                </div>
                <div className="w-1/2 h-fit gap-5 bg-green-200 flex flex-col">
                    <div className="w-full h-fit flex justify-end bg-orange-500">
                        <div className={`flex flex-col  text-white ${neueHaasRegular.className} text-[0.8rem]  font-bold leading-[1.3] gap-3 w-[50%]`}>
                            <p >Whatever the project, we build it well, we build it to last, and we build it with you in mind.</p>
                            <p>With industrial space for rent in key Montreal locations, our modern buildings’ durable, modular design will meet your needs at scale. Whether you’re in manufacturing, distribution, or warehousing, our units offer customization, ecological energy efficiency, and long-term use so you can you thrive.</p>
                        </div>
                    </div>
                    <div className="w-full flex bg-orange-300 justify-end">
                        <div className="w-1/2 flex bg-blue-300">
                            <div className="w-[10rem] h-[3.4rem] border border-blue-900 bg-red-200 flex justify-center items-center">
                                <p>boton</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" pb-10">
                <div>
                    <ButtonsSlide />
                </div>
                <div>
                    <SlideComp />
                </div>
            </div>
        </div>
    )
}

export default ContFinished