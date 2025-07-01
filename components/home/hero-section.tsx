"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="
        w-full min-h-[480px] md:min-h-[880px] flex items-center justify-center
        bg-[#f9f5e9]
        bg-[url('/images/arsenal2.jpg')]
        bg-no-repeat bg-center bg-cover
        relative overflow-hidden
      "
      // Nếu muốn ảnh luôn hiện đầy đủ (có thể có khoảng trống hai bên), đổi bg-cover thành bg-contain
      // bg-cover = ảnh luôn phủ kín, có thể bị crop
      // bg-contain = ảnh luôn hiện đầy đủ, có thể có khoảng trống
    >
      <div className="container px-4 md:px-6 flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl bg-[#f9f5e9]/90 rounded-lg p-6 m-4 shadow-lg"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#e2d9c2] px-3 py-1 text-sm font-medium">
              Limited Edition Collection
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl uppercase font-serif">
              Bring Back The Legend
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Rediscover the glory days with our authentic vintage football kits. Each piece tells a story of triumph, passion, and sporting heritage.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
            <Link href="/products">
              <Button className="bg-[#8b0000] text-white hover:bg-[#6b0000]">
                <ShoppingBag className="mr-2 h-4 w-4" /> Shop Collection
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000] hover:text-white"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
