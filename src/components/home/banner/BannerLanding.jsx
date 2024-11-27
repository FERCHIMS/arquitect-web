import TextComponent from "@/components/ui/TextComponent"
import Image from "next/image"
import { neueHaasMedium, neueHaasRegular } from "@/app/fonts/Fonts"
import FooterBanner from "./FooterBanner"

const BannerLanding = () => {

  return (
    <div className="flex flex-col w-full h-screen bg-gray-300 ">

      <div className=" h-full w-full justify-end flex-wrap  py-0 z-10 flex overflow-hidden">
        <div className="w-1/2 hidden md:block h-full "></div>
        <TextComponent
          className={` ${neueHaasRegular.className} text-white lg:w-1/2  w-full  h-full flex flex-col justify-center items-start whitespace-break-spaces leading-[0.8] tracking-tight sm:text-[5rem] text-[4rem] font-medium`}
        >
          <h2>THE PASSION</h2>
          <h2>OF</h2>
          <h2>BUILDING</h2>
          <h2>QUALITY</h2>

        </TextComponent>
      </div>
      <div className="flex items-center w-full z-20 h-full justify-center">
        <FooterBanner />
      </div>
      <div className="absolute w-full flex inset-0 overflow-hidden  h-full z-0 ">
        <Image className="object-cover h-full w-full " quality={100} src="https://res.cloudinary.com/discruduz/image/upload/v1732021669/conaiweb_pj6hly.webp" width={2000} height={2000} alt="foto bannerLanding" />
        <div className="w-full object-cover bg-black bg-opacity-[40%] absolute z-10 inset-0"></div>
      </div>
    </div>
  )
}

export default BannerLanding