import Image from "next/image"


const BannerLanding = () => {
  return (
    <div className="flex justify-center items-end w-full h-screen bg-blue-700">
      {/* <h2 className="text-[8rem] font-light text-white font-sans tracking-wider">ARQUITECTURA</h2> */}
      <div className="absolute w-full h-full z-1 ">
        <Image className="object-cover inset-0 w-fit h-fit " quality={100}  src="https://res.cloudinary.com/discruduz/image/upload/v1732021669/conaiweb_pj6hly.webp" layout="fill" objectFit="cover" alt="foto bannerLanding" />
      </div>
    </div>
  )
}

export default BannerLanding