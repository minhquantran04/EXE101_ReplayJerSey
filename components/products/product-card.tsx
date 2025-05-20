import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

type ProductCardProps = {
  product: {
    id: string
    name: string
    description: string
    price: number
    image: string
    rating: number
    badge: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            className="object-cover transition-transform group-hover:scale-105"
            alt={product.name}
            width={300}
            height={400}
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{product.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <span className="text-sm">{product.rating}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold">£{product.price.toFixed(2)}</span>
            <div className="rounded-full bg-[#e2d9c2] px-2 py-1 text-xs">{product.badge}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}
