import { akuraMono } from '@/app/fonts/Fonts'
import { links } from '@/components/header/Links'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterBanner = () => {
    return (
        <div className='w-full h-full flex justify-end flex-col '>
            <div className='flex justify-between pb-2 border-b-2 text-white w-full h-fit items-center '>
                <div className={`w-fit flex gap-3 text-[0.7rem] leading-3  text-white ${akuraMono.className} `}>
                    <p className='w-[50%]  uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>14 TRUCK</p>
                </div>
                <div className='flex w-full h-full leading-3 text-[0.8rem] font-bold items-start'>
                    <h3 className=''>Utilities for controlling an element Utilities for controlling </h3>
                </div>
            </div>

            <div>

                <div className='w-full h-[100%] flex items-center justify-between'>
                    <div className='flex justify-between gap-5 w-full h-full items-center'>
                        <div className='w-full flex h-full'>
                            <Image src="https://iili.io/dLCAvpt.jpg" width={500} height={500} alt='foto-banner-footer' />
                        </div>
                        <div className='flex flex-col w-full h-full justify-between '>
                            <div className='w-full h-full flex flex-col text-white'>
                                <h2>esto esun titulo</h2>
                                <h2>YMAS 3</h2>
                            </div>
                            <div className='w-full h-full flex items-end text-white'>
                                <h2>Disponible ya</h2>
                            </div>
                        </div>
                        <div className='w-full h-full text-white'>
                            <h2>Mirabel</h2>
                        </div>
                    </div>

                    <div className='flex h-full justify-between px-4 items-center '>
                        {/* <div className='w-[50%] flex h-full p-1 leading-4 text-white'>
                            <p>At Edifis, we bring passion and purpose to everything we build – from industrial spaces that make room for bold ideas to residential and mixed-used projects that help communities grow.</p>
                        </div> */}
                        {/* <div className='w-fit text-white py-4'>
                            {links.map((link) => (
                                <li key={link.title}>
                                    <Link className='bg-[transparent] ' href={link.href}>{link.title} </Link>
                                </li>
                            ))}
                        </div> */}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FooterBanner