'use client'
import { usePathname } from "next/navigation"
import { links } from "./Links"
import Link from "next/link"
import DropHeader from "./DropHeader"



const Header = () => {
  return (
    
    <DropHeader />
  )
}

export default Header


{/* <div className="flex gap-2 flex-wrap justify-center items-center w-full h-16 bg-pink-300 ">
        {links.map((link) => (
                <li key={link.title}>
                    <Link  className="bg-transparent text-white font-mono font-bold hover:text-gray-300" href={link.href}>{link.title} </Link>
                </li>
        ))}
    </div> */}