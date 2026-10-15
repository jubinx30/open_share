 
import HeroSection from "@/components/landing-page/hero-section"
import FeaturedProducts from "@/components/landing-page/featured-products"
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-prouducts"

export default function Home() {

  return (
    <div>
     <HeroSection></HeroSection>
     <FeaturedProducts />
     <RecentlyLaunchedProducts/>
     
    </div>
  )
}
