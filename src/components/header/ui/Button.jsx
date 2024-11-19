'use client'


const Button = ({ handleDrop }) => {
    return (
        <div onClick={handleDrop} className="fixed flex justify-center  top-0 right-0 z-50 mr-8 mt-8 w-fit h-[20px] ">
            <svg style={{backgroundColor: "transparent"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 28">
                <path stroke="#F1F1F1" strokeWidth="5" d="M0 3h63.5M0 14h63.5M0 25h63.5" />
            </svg>
        </div>
    )
}

export default Button