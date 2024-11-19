import Image from "next/image"


const HomeAbout = () => {
    return (
        <div className="w-full bg-gray-400">
            <h2 className="text-[1.5rem] text-blue-700 font-medium">QUIENES SOMOS</h2>
            <div className="flex flex-wrap w-full">
                <Image src="https://res.cloudinary.com/discruduz/image/upload/v1731936496/777134221794859533_or7gzg.png" width={500} height={500} alt="foto-homeabout" />
                <Image src="https://res.cloudinary.com/discruduz/image/upload/v1731936495/777126121486481211_xgtaut.png" width={500} height={500} alt="foto-homeabout" />
                <Image src="https://res.cloudinary.com/discruduz/image/upload/v1731936494/777129003409476806_w9p8ht.png" width={500} height={500} alt="foto-homeabout" />
            </div>
        </div>
    )
}

export default HomeAbout