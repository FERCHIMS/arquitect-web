import Head from "next/head"
import Partners from "../components/Partners"
import Reviews from "../components/Reviews"
import HeaderReview from "../components/HeaderReview"


const ContReviews = () => {
    return (
        <div className="w-full  pt-10 pr-[1.4rem] pl-[1.4rem]">
            <HeaderReview />
            <Partners />
            <Reviews />
        </div>
    )
}

export default ContReviews