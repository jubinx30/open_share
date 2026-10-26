"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/forms/form-field";
import {Button} from "@/components/ui/button"
import {SparklesIcon} from "lucide-react"

export default function ProductSubmitForm() {
  return (
    <form className="space-y-6">
      <Label htmlFor="name">Product Name</Label>
        <FormField
          label="Product Name"       
          id="name"
          name="name"
          placeholder="My Awesome Product"
          required
          onChange={()=>{}}
          error=""
        />

        <FormField
          label="Slug"       
          id="slug"
          name="slug"
          placeholder="my-awesome-product"
          required
          onChange={()=>{}}
          error=""
          helperText="URL-friendly version of your product name"
        />

     
        <FormField
            label="Tagline"
            name="tagline"
            id="tagline"
            placeholder="A brief, catchy description"
            required
            onChange={()=>{}}
            error=""
        />

           <FormField
            label="Description"
            name="description"
            id="description"
            placeholder="Tell us more 
            about your prodcuct..."
            required
            onChange={()=>{}}
            error=""
            textArea
        />

        <FormField
            label="Website URL"
            name="websiteUrl"
            id="websiteUrl"
            placeholder="https://www.yourproduct.com"
            required
            onChange={()=>{}}
            error=""
            helperText="Enter your product's website or landing page"
        />
        <FormField
            label="Tags"
            name="tags"
            id="tags"
            placeholder="AI, Productivity, SaaS"
            required
            onChange={()=>{}}
            error=""
            helperText="Enter your product's website or landing page"
        />
        
        <Button type="submit" size="lg" className="w-full"> 
        <SparklesIcon className="size-4"/>
        Submit Product</Button>
        
    </form>
  );
}
