import SectionHeader from "@/components/common/section-header";
import {StarIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

const FeaturedProducts = () => {
  return (
    
    <section className="py-20 bg-muted/20">
      <div className = "wrapper">
        <div className="flex items-center justify-between mb-8">
           <SectionHeader title={"Featured Today"} icon={StarIcon} description = "Top picks from our community this week" />
            <Button variant="outline" render = { <Link href="/explore"></Link>} className="hidden sm:flex">
             <ArrowUpRightIcon className = "size-4" />
              View All
            </Button>
            </div>
            <div className="grid-wrapper">
                {FeaturedProducts.map((product)=>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>

            </div>
    </section>
  )
}

export default FeaturedProducts