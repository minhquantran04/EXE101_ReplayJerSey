import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { Testimonials } from "@/components/home/testimonials"
import { Newsletter } from "@/components/shared/newsletter"
import { FeaturedKit } from "@/components/home/featured-kit"
import { HistoryTimeline } from "@/components/home/history-timeline"

export default function Home() {
  const productData = [
    {
      slug: "arsenal-1989",
      title: "Arsenal 1989 Away Kit",
      description: "Anfield '89 - The kit that made history",
      price: 89.99,
      badge: "Limited Edition",
      rating: 4.9,
      image: "/images/arsenal.jpg",
    },
    {
      slug: "manchester-united-1999",
      title: "Man United 1999 Home Kit",
      description: "Treble winners - Camp Nou glory",
      price: 99.99,
      badge: "Bestseller",
      rating: 5.0,
      image: "/images/manutd.jpg",
    },
    {
      slug: "liverpool-1984",
      title: "Liverpool 1984 Home Kit",
      description: "European Cup winners - Rome '84",
      price: 84.99,
      badge: "New Arrival",
      rating: 4.8,
      image: "/images/liverpool.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Featured Kit Section - NEW */}
      <FeaturedKit />

      {/* History Timeline - NEW */}
      <HistoryTimeline />

      {/* Legendary Kits Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#f9f5e9]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e2d9c2] px-3 py-1 text-sm font-medium">Our Collection</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase font-serif">Legendary Kits</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rediscover the glory days with our collection of meticulously recreated vintage football kits that
                defined eras and created legends.
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 lg:grid-cols-3 lg:gap-12">
            {productData.map((product, index) => (
              <ProductCard
                key={index}
                slug={product.slug}
                title={product.title}
                description={product.description}
                price={product.price}
                badge={product.badge}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/products">
              <Button
                variant="outline"
                className="group border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000] hover:text-white"
              >
                View All Legendary Kits
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* The Legend Lives On Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#8b0000] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl uppercase font-serif">
                  The Legend Lives On
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Every stitch tells a story. Every badge carries history. Our vintage kits are more than just
                  clothing—they're a connection to the moments that defined the beautiful game.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="bg-white text-[#8b0000] hover:bg-[#e2d9c2] border-2 border-white font-medium">
                    Our Story
                  </Button>
                </Link>
                <Link href="/products">
                  <Button className="bg-white text-[#8b0000] hover:bg-[#e2d9c2]">Shop Collection</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                alt="Vintage football memorabilia"
                className="rounded-xl object-cover"
                height={400}
                src="/images/inter.jpg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </div>
  )
}

// Helper component for product cards
function ProductCard({
  slug,
  title,
  description,
  price,
  badge,
  rating,
  image,
}: {
  slug: string
  title: string
  description: string
  price: number
  badge: string
  rating: number
  image: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl">
      <Link href={`/products/${slug}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            className="object-cover transition-transform group-hover:scale-105"
            alt={title}
            width={600}
            height={600}
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{title}</h3>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 fill-current text-yellow-500"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-sm">{rating}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold">£{price.toFixed(2)}</span>
            <div className="rounded-full bg-[#e2d9c2] px-2 py-1 text-xs">{badge}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
