 
import HeroSection from "@/components/landing-page/hero-section"
import FeaturedProducts from "@/components/landing-page/featured-products"
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-prouducts"
import { Suspense } from "react"
import { LoaderIcon } from "lucide-react"
export default function Home() {

  return (
    <div>
     <HeroSection />
     <FeaturedProducts />
     <Suspense
  fallback={
    <div className="wrapper flex items-center gap-2">
      <span>Loading... Recently Launched Products</span>
      <LoaderIcon className="size-4 animate-spin" />
    </div>
  }
>
     <RecentlyLaunchedProducts/>
     </Suspense>
     </div>
  )
}
