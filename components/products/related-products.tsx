"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

type RelatedProductsProps = {
  products: {
    id: string
    name: string
    price: number
    image: string
  }[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="mt-16">
      <motion.h2
        className="text-2xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        You May Also Like
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <Link href={`/products/${product.id}`}>
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  className="object-cover transition-transform group-hover:scale-105"
                  alt={product.name}
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <div className="mt-2 font-bold">VNĐ{product.price.toFixed(2)}</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
