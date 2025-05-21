"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
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
    <motion.div
      className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg?height=400&width=300"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 300px"
            priority
          />
          <div className="absolute top-2 right-2 px-2 py-1 text-xs font-medium bg-[#8b0000] text-white rounded-full z-10">
            {product.badge}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{product.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <span className="text-sm">{product.rating}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold">£{product.price.toFixed(2)}</span>
            <motion.span className="text-xs font-medium text-[#8b0000] underline" whileHover={{ scale: 1.05 }}>
              View Details
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
