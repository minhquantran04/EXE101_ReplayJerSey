import Link from "next/link"
import { ArrowLeft, Check, Heart, ShoppingBag, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductGallery } from "@/components/products/product-gallery"
import { RelatedProducts } from "@/components/products/related-products"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // This would normally come from a database or API
  const product = {
    id: params.slug,
    name: "Arsenal 1989 Away Kit",
    description:
      "The iconic yellow away kit worn during Arsenal's dramatic title win at Anfield in 1989. Michael Thomas' last-minute goal secured the Gunners the league title on goal difference in one of the most dramatic finishes to a season in English football history.",
    price: 89.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviewCount: 124,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: [
      "Authentic replica of the 1989 Arsenal away kit",
      "100% polyester with embroidered crest",
      "Classic Adidas design with iconic three stripes",
      "JVC sponsor logo as worn in the 1988-89 season",
      "Meticulously recreated details and stitching",
      "Comes in vintage-style packaging",
    ],
    story:
      "On May 26, 1989, Arsenal needed to win by two clear goals at Anfield to snatch the title from Liverpool. With the score at 1-0 and the clock ticking down, Michael Thomas burst through the Liverpool defense in injury time to score the goal that won Arsenal the title. This iconic yellow kit became forever associated with one of the most dramatic moments in English football history.",
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    relatedProducts: [
      {
        id: "arsenal-1971",
        name: "Arsenal 1971 Home Kit",
        price: 84.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "arsenal-1994",
        name: "Arsenal 1994 Away Kit",
        price: 79.99,
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "arsenal-2004",
        name: "Arsenal 2004 Home Kit",
        price: 89.99,
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#8b0000] mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Product Gallery */}
          <ProductGallery images={product.images} name={product.name} />

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-current text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">£{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    £{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Check className="h-4 w-4" />
                <span>In stock and ready to ship</span>
              </div>
            </div>

            {/* Size Selector and Add to Cart */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="size" className="text-sm font-medium">
                  Size
                </label>
                <Select>
                  <SelectTrigger id="size" className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-[#8b0000] text-white hover:bg-[#6b0000]">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000] hover:text-white"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="rounded-lg border bg-[#f9f5e9] p-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-[#8b0000]" />
                <span className="font-medium">Free shipping on orders over £75</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Estimated delivery: 3-5 business days</p>
            </div>

            {/* Product Tabs */}
            <Tabs defaultValue="description">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="story">The Story</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p className="text-muted-foreground">{product.description}</p>
              </TabsContent>
              <TabsContent value="features" className="pt-4">
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="story" className="pt-4">
                <p className="text-muted-foreground">{product.story}</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts products={product.relatedProducts} />
      </div>
    </div>
  )
}
