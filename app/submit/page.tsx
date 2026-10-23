import SectionHeader from "@/components/common/section-header";
import {SparklesIcon} from "lucide-react";
import ProductSubmitForm from "@/components/products/product-submit-form";
export default function SubmitPage() {
    return (
        <div>
            <SectionHeader
                title = "Submit Your Product"
                icon={SparklesIcon}
                description="Share your creation with the
                community. Your submission will be reviewed before going live">
            </SectionHeader>

            <div className = "max-w-2xl mx-auto">
                <ProductSubmitForm />
            </div>
                </div>

    )
}