'use client'
import { useState, useEffect, useRef } from "react"

const TextComponent = ({ children, className = "", rootMargin, threshold }) => {
    const [isInView, setIsInView] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            {
                rootMargin: rootMargin,
                threshold: threshold
            }
        )
        if (textRef.current) {
            observer.observe(textRef.current)
        }

        const refRemove = textRef.current

        return () => {
            if (refRemove) {
                observer.unobserve(refRemove)
            }
        }
    }, [rootMargin, threshold])

    /* const preventWidow = (text) => {
        const words = text.trim().split(" ");
        if (words.length > 1) {
            return `${words.slice(0, -1).join(" ")}\u00A0${words.slice(-1)}`;
        }
        return text;
    }; */

    return (
        <div ref={textRef} className={`${className}  transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} `}>
            {children}
        </div>
    )
}

export default TextComponent