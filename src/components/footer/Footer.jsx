import React from 'react'
import Social from './Social'
import Contact from '../contact/Contact'

const Footer = () => {
    return (
        <div className='w-full h-[200vh] bg-blue-700'>
            <div className='w-full flex flex-col'>
                <Social />
                <Contact />
                <h2 className='text-[2rem] sm:text-[4rem] md:text-[7rem] lg:text-[10rem] xl:text-[13rem] w-full text-center text-white font-black'>
                    FOOTER
                </h2>
            </div>
        </div>
    )
}

export default Footer