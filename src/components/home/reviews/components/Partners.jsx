import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-between gap-2 flex-wrap'>
        {[...Array(5)].map((_, i) => (
            <Image key={i} className='w-fit' src="https://iili.io/2ETJBS9.png" height={500} width={500} alt="foto HomeFinished" />
        ))}

      </div>
    </div>
  )
}

export default Partners