import Image from "next/image"
import HeaderAbout from "../sections/HeaderAbout"
import VideoBanner from "../sections/VideoBanner"
import HoverCards from "../sections/HoverCards"


const ContAbout = () => {
    return (
        <div className="pt-10 w-full  bg-opacity-0 pr-[1.4rem] pl-[1.4rem]">
            <HeaderAbout />
            <VideoBanner />
            <HoverCards />
        </div>
    )
}

export default ContAbout



