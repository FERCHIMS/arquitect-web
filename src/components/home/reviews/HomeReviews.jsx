import React from 'react'
import Partners from './components/Partners'
import Reviews from './components/Reviews'

const HomeReviews = () => {
    return (
        <div className='flex flex-col justify-center bg-gray-200'>
            <h2 className='text-[1.5rem] font-medium text-blue-700'>Reviews and Partners</h2>
            <div className='flex flex-wrap'>
                <Partners />
                <Reviews />
            </div>
        </div>
    )
}

export default HomeReviews