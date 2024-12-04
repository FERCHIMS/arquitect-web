import Image from "next/image"

const HoverCards = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center flex-wrap justify-between border-t-[1px] py-5 group">
                <div>
                    <Image className="w-[30%] transition-all duration-700 group-hover:w-[50%]" src="https://iili.io/dNg06zX.png" width={500} height={500} alt="foto" />
                </div>
                <div>
                    <h2 className="transition-all duration-700 group-hover:text-[1.5rem] group-hover:font-bold">5 TEXTOS DE PRUEBAS</h2>
                </div>
                <div>
                    <h2>Including leaders from across multiple industries</h2>
                </div>
            </div>
            <div className="flex items-center flex-wrap justify-between border-t-[1px] py-5 group">
                <div className="">
                    <Image className="w-[30%] transition-all duration-700 group-hover:w-[80%]" src="https://iili.io/22QdPVa.png" width={500} height={500} alt="foto" />
                </div>
                <div>
                    <h2 className="transition-all duration-700 group-hover:text-[1.5rem] group-hover:font-bold">5 TEXTOS DE PRUEBAS</h2>
                </div>
                <div>
                    <h2>Including leaders from across multiple industries</h2>
                </div>
            </div>
            <div className="flex items-center flex-wrap justify-between border-t-[1px] py-5 group">
                <div>
                    <Image className="w-[30%] transition-all duration-700 group-hover:w-[50%]" src="https://iili.io/dLf139p.jpg" width={500} height={500} alt="foto" />
                </div>
                <div>
                    <h2 className="transition-all duration-700 group-hover:text-[1.5rem] group-hover:font-bold">5 TEXTOS DE PRUEBAS</h2>
                </div>
                <div>
                    <h2>Including leaders from across multiple industries</h2>
                </div>
            </div>

        </div>
    )
}

export default HoverCards