import { useState, useEffect, useRef } from "react"
import React from 'react'

const IntersectionComp = ({children}) => {
    const [isInView, setIsInVIew] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        let esto = divRef.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInVIew(entry.isIntersecting)
            }
        )
        if(esto) {
            observer.observe(esto)
        }
        
        return () => {
            if(esto) {
                observer.unobserve(esto)
            }
        }
    },[])

  return (
    <div className={`w-full bg-green-200 transition-all duration-[1200ms] ${isInView ? "opacity-0" : "opacity-100"} `} >
        {children}
    </div>
  )
}

export default IntersectionComp