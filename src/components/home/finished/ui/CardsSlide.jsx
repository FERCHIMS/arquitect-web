
import Image from "next/image"


const CardsSlide = ({ svg, title, title2, icon, title3, image, backImage }) => {
  return (
    <div className='w-full flex items-end  h-[50rem] relative'>
      <div className="w-full h-[70%] z-50 p-5 bg-black bg-opacity-[10%] flex flex-col relative ">

        <div className=" w-full px-5 h-[40%] overflow-hidden flex items-center bg-black bg-opacity-20 ">
          {svg}
        </div>

        <div className="flex relative w-full z-[20] px-5 text-white h-[60%] flex-col justify-around">

          <div className=" w-full font-bold ">
            <h2 className="">{title}</h2>
          </div>

          <div className="w-full flex">
          
            <div className="w-full gap-2 flex">
              <div>
                {icon}
              </div>
              <div>
                <p>{title2}</p>
              </div>
            </div>

            <div>
              <p>{title3}</p>
            </div>
            
          </div>

        </div>
        {/* esta imagen */}
        <div className="absolute z-10 inset-0 w-fit h-full overflow-hidden">
        <Image
          className="w-full brightness-[0.2] h-full object-cover"
          src={backImage}
          width={1500}
          height={1500}
          alt="foto-back"
        />
      </div>
      </div>
      
      <div className="absolute inset-0 w-full overflow-hidden">
        <Image className="w-full  left-0 h-full object-cover" src={image} width={1500} height={1500} alt="foto-back" />
      </div>
    </div>
  )
}

export default CardsSlide