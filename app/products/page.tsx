import Link from "next/link"
import Image from "next/image"
import { Grid3X3, List, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { productsData } from "@/data/products"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f5e9]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase font-serif">Legendary Kits</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our collection of meticulously recreated vintage football kits that defined eras and created
                legends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  <span>Filters</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <Grid3X3 className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">View</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2">
                      <Grid3X3 className="h-3.5 w-3.5" />
                      <span>Grid</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <List className="h-3.5 w-3.5" />
                      <span>List</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Input placeholder="Search kits..." className="h-8 w-full sm:w-[250px]" />
                <Select defaultValue="featured">
                  <SelectTrigger className="h-8 w-full sm:w-[150px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="aspect-square overflow-hidden relative">
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <Image
                          src={product.image || "/placeholder.svg?height=400&width=300"}
                          width={300}
                          height={300}
                          alt={product.name}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 right-2 px-2 py-1 text-xs font-medium bg-[#8b0000] text-white rounded-full">
                        {product.badge}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{product.name}</h3>
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
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-bold">£{product.price.toFixed(2)}</span>
                        <span className="text-xs text-[#8b0000] font-medium">View Details</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000] hover:text-white">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
