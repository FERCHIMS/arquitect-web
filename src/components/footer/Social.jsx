import React from 'react'
import { links } from '../header/Links'
import Link from 'next/link'

const Social = () => {
    return (
        <div className='w-full flex justify-between'>
            <div className='flex'>
                <h2 className='text-white'>INSTAGRAM</h2>
                <h2 className='text-white'>LINKEDIN</h2>
                <h2 className='text-white'>FACEBOOK</h2>
            </div>
            <div className='flex flex-col bg-slate-300'>
                {links.map((link) => (
                    <li key={link.title}>
                        <Link href={link.href}>{link.title} </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Social