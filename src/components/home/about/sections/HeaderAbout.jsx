import React from 'react'

const HeaderAbout = () => {
    return (
        <div className="w-full h-fit flex flex-col md:flex-row bg-purple-500 py-5">
            <div className="w-[50%] font-bold text-[1.1rem]">
                <h2>Así trabajamos</h2>
            </div>
            <div className="w-[50%] flex flex-col gap-40 justify-between ">

                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="text-[3.5rem] leading-[0.9] font-regular sm:text-[5rem] ">Esto es otro texto paraponer</h2>
                    </div>

                    <button className="w-fit p-[1.5rem] h-[40px] bg-yellow-300 flex items-center">
                        <p>ASI TRBAJAMOS</p>
                    </button>

                </div>

                <div className="flex gap-2 text-[1rem] leading-[1rem] font-medium">
                    <div className="bg-orange-400">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod fuga reprehenderit expedita in </p>
                    </div>
                    <div className="bg-orange-400">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod fuga reprehenderit expedita in </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAbout