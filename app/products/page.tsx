import { Grid3X3, List, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/products/product-card"

export default function ProductsPage() {
  const products = [
    {
      id: "arsenal-1989",
      name: "Arsenal 1989 Away Kit",
      description: "Anfield '89 - The kit that made history",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
      badge: "Limited Edition",
    },
    {
      id: "manchester-united-1999",
      name: "Man United 1999 Home Kit",
      description: "Treble winners - Camp Nou glory",
      price: 99.99,
      image: "/placeholder.svg?height=400&width=300",
      rating: 5.0,
      badge: "Bestseller",
    },
    {
      id: "liverpool-1984",
      name: "Liverpool 1984 Home Kit",
      description: "European Cup winners - Rome '84",
      price: 84.99,
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      badge: "New Arrival",
    },
    {
      id: "tottenham-1961",
      name: "Tottenham 1961 Home Kit",
      description: "Double winners - The Lilywhites' finest hour",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
      badge: "Classic",
    },
    {
      id: "newcastle-1996",
      name: "Newcastle 1996 Home Kit",
      description: "The Entertainers - Keegan's attacking side",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
      badge: "Fan Favorite",
    },
    {
      id: "chelsea-1970",
      name: "Chelsea 1970 FA Cup Kit",
      description: "FA Cup winners - Wembley triumph",
      price: 84.99,
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      badge: "Rare",
    },
    {
      id: "leeds-1992",
      name: "Leeds United 1992 Home Kit",
      description: "Last First Division champions",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.6,
      badge: "Classic",
    },
    {
      id: "everton-1985",
      name: "Everton 1985 Home Kit",
      description: "League champions and European glory",
      price: 84.99,
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
      badge: "Collector's Item",
    },
    {
      id: "aston-villa-1982",
      name: "Aston Villa 1982 Home Kit",
      description: "European Cup winners - Rotterdam '82",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      badge: "Limited Stock",
    },
  ]

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
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
