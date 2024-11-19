import Image from "next/image"


const HomeFinished = () => {
    return (
        <div className="w-full bg-white">
            <h2 className="text-[4rem] text-[#5486db] font-bold ">FINISHED</h2>
            <div className="flex flex-wrap">
                <Image src="https://res.cloudinary.com/discruduz/image/upload/v1731935649/out-0_9_bskztz.webp" height={500} width={500} alt="foto HomeFinished" />
                <Image src="https://res.cloudinary.com/discruduz/image/upload/v1731935619/6464wywyw_i2yr2a.webp" height={500} width={500} alt="foto HomeFinished" />
            </div>
        </div>
    )
}

export default HomeFinished