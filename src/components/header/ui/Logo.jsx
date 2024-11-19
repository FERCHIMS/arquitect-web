'use client'
import { useState, useEffect } from "react"

const Logo = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    return (
        <div className="fixed z-50 top-0 left-0">
            <h2 className={` leading-[0.4] p-8 font-black tracking-tighter font-sans transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]   ${isScrolled ? "text-[#212121] text-[2rem]" : " text-white text-[4rem] sm:text-[10rem] "} `}>ARQUI</h2>
        </div>
    )
}

export default Logo