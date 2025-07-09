import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Info, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductSpotlight } from "@/components/products/product-spotlight"
import { ProductFeatures } from "@/components/products/product-features"
import { ProductStory } from "@/components/products/product-story"
import { ProductSpecs } from "@/components/products/product-specs"
import { productsData } from "@/data/products"
import { notFound } from "next/navigation"

export default function ProductPage({ params }: { params: { slug: string } }) {
  // Find the product with the matching slug
  const product = productsData.find((p) => p.id === params.slug)

  // If product not found, return 404
  if (!product) {
    notFound()
  }

  // Find related products (excluding current product)
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 3)
    .map((p) => ({
      id: p.id,
      name: p.name,
      image: p.image,
    }))

  // Generate multiple images for the gallery (in a real app, these would come from the database)
  const productImages = Array(4).fill(product.image || "/placeholder.svg?height=600&width=600")

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-[#8b0000] mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Products
        </Link>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border bg-white aspect-square flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={product.image || "/placeholder.svg?height=600&width=600"}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border bg-white aspect-square flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} - View ${index + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-medium bg-[#e2d9c2] rounded-full">Vintage Collection</span>
                <span className="px-2 py-1 text-xs font-medium bg-[#8b0000] text-white rounded-full">
                  {product.year}
                </span>
              </div>
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
                <span className="text-sm text-muted-foreground">(124 reviews)</span>
              </div>
            </div>

            {/* Product Spotlight */}
            <ProductSpotlight
              team={product.team}
              year={product.year}
              manufacturer={product.manufacturer}
              sponsor={product.sponsor}
              colors={product.colors}
            />

            {/* Museum Display Notice */}
            <div className="rounded-lg border bg-[#f9f5e9] p-4">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-[#8b0000]" />
                <span className="font-medium">Museum Quality Display Piece</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                This item is part of our curated vintage collection, meticulously recreated for display and preservation
                of football heritage.
              </p>
            </div>

            {/* Product Tabs */}
            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="story">The Story</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p className="text-muted-foreground">{product.longDescription}</p>
              </TabsContent>
              <TabsContent value="features" className="pt-4">
                <ProductFeatures features={product.features} />
              </TabsContent>
              <TabsContent value="story" className="pt-4">
                <ProductStory story={product.story} team={product.team} year={product.year} />
              </TabsContent>
              <TabsContent value="specs" className="pt-4">
                <ProductSpecs specs={product.specs} />
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="aspect-square overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <Image
                        src={product.image || "/placeholder.svg?height=300&width=300"}
                        width={300}
                        height={300}
                        alt={product.name}
                        className="object-contain w-full h-full p-2"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
