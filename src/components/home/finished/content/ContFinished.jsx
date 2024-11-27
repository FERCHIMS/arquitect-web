'use client'
import { akuraMono, neueHaasMedium, neueHaasRegular } from "@/app/fonts/Fonts"
import TextComponent from "@/components/ui/TextComponent"
import { motion  } from 'framer-motion'

const ContFinished = () => {

    const textos = "un texto para probar"

    return (
        <div className="w-full bg-orange-100 pt-10 flex h-screen">
            <div className="w-1/2 h-full">
                <div className="w-fit h-fit bg-pink-200 overflow-hidden">
                    <TextComponent
                        className="w-[80%] leading-[1]"
                    >
                        <h2 className={`text-[4rem] ${neueHaasRegular.className} `}>If we make it, we mean it.</h2>
                    </TextComponent>
                </div>
            </div>
            <div className="w-1/2 h-full gap-5 bg-green-200 flex flex-col">
                <div className="w-full h-fit flex justify-end bg-orange-500">
                    <div className={`flex flex-col  text-white ${neueHaasRegular.className} text-[0.8rem]  font-bold leading-[1.3] gap-3 w-[50%]`}>
                        {/* {textos.split("").map((texto, index) => (

                            <motion.h2
                            className="w-fit h-fit"
                            key={index}
                            initial={{opacity: 0}}
                            animate={{opacity:1}}
                            transition={{
                                duration: 1,
                                repeat: 1,
                                delay: index * 0.1
                            }}
                            >
                                {texto}
                            </motion.h2>
                        ))} */}


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
    )
}

export default ContFinished