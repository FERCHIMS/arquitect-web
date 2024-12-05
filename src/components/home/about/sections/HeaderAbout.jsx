import React from 'react'

const HeaderAbout = () => {
    return (
        <div className="w-full h-fit text-white flex flex-col md:flex-row py-5">
            <div className="w-[50%] font-bold text-[1.1rem]">
                <h2>Así trabajamos</h2>
            </div>
            <div className="w-[50%]  flex flex-col gap-40 justify-between ">

                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="text-[3.5rem] leading-[0.9] font-regular sm:text-[5rem] ">Esto es otro texto paraponer</h2>
                    </div>

                    <button className="w-fit p-[1.5rem] h-[40px] border border-white  flex items-center">
                        <p>ASI TRBAJAMOS</p>
                    </button>

                </div>

                <div className="flex gap-2 text-[1rem] leading-[1rem] font-medium">
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod fuga reprehenderit expedita in </p>
                    </div>
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod fuga reprehenderit expedita in </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAbout