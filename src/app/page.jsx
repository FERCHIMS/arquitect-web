import HomeAbout from "@/components/home/about/HomeAbout";
import BannerLanding from "@/components/home/banner/BannerLanding";
import HomeFinished from "@/components/home/finished/HomeFinished";
import HomeReviews from "@/components/home/reviews/HomeReviews";

export default function Home() {
  return(
    <div>
      <div>
        <BannerLanding />
      </div>
      <div className="overflow-hidden">
        <HomeFinished />
      </div>
      <div>
        <HomeAbout />
      </div>
      <div>
        <HomeReviews />
      </div>
    </div>
  )
}