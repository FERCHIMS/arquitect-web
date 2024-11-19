'use client'
import Link from "next/link";
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { links } from "./Links";
import Button from "./ui/Button";


const DropHeader = () => {
    const [isDrop, setIsDrop] = useState(false);

    const handleDrop = (e) => {
        setIsDrop(!isDrop);
    }

    const removeDrop = () => {
        setIsDrop(false)
    }

    /* useEffect(() => {
        if (isDrop) {
            document.body.classList.add("overflow-hidden");
        }else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        }

    }, [isDrop]) */

    return (
        <>

            <div className={`w-full z-50 fixed inset-0 h-screen bg-[#34343673] overflow-hidden  transition-all duration-[600ms] ease-[cubic-bezier(0.12, 0, 0.39, 0)] ${isDrop ? " translate-y-0 overflow-y-auto " : "translate-y-[-100vh]"} `}>
                <div className="w-full flex justify-center flex-col gap-2 items-center h-full">
                    {links.map((link) => (
                        <li key={link.title}>
                            <Link onClick={removeDrop} className="bg-transparent text-white text-[2.5rem] sm:text-[4rem] font-sans font-black uppercase" href={link.href} >{link.title} </Link>
                        </li>
                    ))}
                </div>
            </div>

            <div className="z-50">
                <Button handleDrop={handleDrop} />
            </div>
        </>
    )
}

export default DropHeader