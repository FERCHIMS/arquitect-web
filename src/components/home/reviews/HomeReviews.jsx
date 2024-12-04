import React from 'react'
import Partners from './components/Partners'
import Reviews from './components/Reviews'
import ContReviews from './content/ContReviews'

const HomeReviews = () => {
    return (
        <div className='flex flex-col justify-center bg-gray-200'>
            <ContReviews />
        </div>
    )
}

export default HomeReviews