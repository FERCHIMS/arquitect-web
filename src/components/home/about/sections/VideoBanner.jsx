import React from 'react'

const VideoBanner = () => {
    return (
        <div className="w-full pt-5">
            <div className="w-full  h-[40rem] overflow-hidden ">

                <div className="w-full  overflow-hidden flex justify-center h-full relative">
                    <div className=" text-[500%] flex justify-center flex-wrap gap-10 items-center w-full z-50 h-full  ">
                        <h2 className="text-white">IDEAS</h2>
                        <h2 className="text-white">PARA</h2>
                        <div>
                            <svg style={{ backgroundColor: "transparent" }} width="137" height="73" viewBox="0 0 137 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="37.534" x2="133.67" y2="37.534" stroke="white" strokeWidth="3.32512" />
                                <path d="M120 1L135 37.2014L120 72" stroke="white" strokeWidth="3.32512" />
                            </svg>


                        </div>
                        <h2 className="text-white">ADELANTE</h2>
                    </div>
                    <video className="w-full h-full object-cover absolute" loop muted autoPlay>
                        <source src="https://res.cloudinary.com/dtxyn8cnq/video/upload/v1724865778/fw22_you_ve_got_mail_the_sunday_collective_1080p_fvfnyg.mp4" />
                    </video>
                    <div className='w-full h-full object-cover absolute opacity-[30%] bg-black'></div>
                </div>

            </div>
            <div className="flex flex-col text-white leading-[1] w-full h-[40rem] text-[4rem] md:text-[8rem] sm:text-[6rem] overflow-hidden">
                <div>
                    <h2>NUESTROS</h2>
                </div>
                <div className="flex flex-wrap justify-between">
                    <h2>DISEÑOS</h2>
                    <h2>MEJORADOS</h2>
                </div>
            </div>
        </div>
    )
}

export default VideoBanner