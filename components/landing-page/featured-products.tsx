import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import {StarIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "PartyKit",
    description: "A toolkit for creating parity, products",
    tags: ["SaaS", "Pricing","Global"],
    votes: 615,
    isFeatured: true,
  },
  {
    id:2,
    name:"Modern FullStack using NextJs",
    description:"Learn to build production ready fullstack apps",
    tags: ["NextJs","FullStack","Course"],
    votes: 632,
    isFeatured:false,
  },
  {
    id:3,
    name:"React Native Complete Project",
    description:"A walkthrough of how to create fullstack applications",
    tags: ["React Native","FullStack","Course"],
    votes: 823,
    isFeatured:true,
  }
]

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
                {featuredProducts.map((product)=>
                    <ProductCard key={product.id} product={product} />
                )}
            </div>

            </div>
    </section>
  )
}

export default FeaturedProducts