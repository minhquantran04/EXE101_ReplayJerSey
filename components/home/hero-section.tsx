"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
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
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#f9f5e9] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{ backgroundImage: "url('/placeholder.svg?height=100&width=100')" }}
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#e2d9c2] px-3 py-1 text-sm font-medium">
                Limited Edition Collection
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none uppercase font-serif">
                Bring Back The Legend
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Rediscover the glory days with our authentic vintage football kits. Each piece tells a story of triumph,
                passion, and sporting heritage.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/images/arsenal2.jpg"
                  alt="Vintage Football Kit"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute -top-4 -right-4 bg-[#e2d9c2] rounded-full p-4 shadow-lg transform rotate-12">
                  <div className="text-center">
                    <div className="text-xs font-medium">FROM</div>
                    <div className="text-2xl font-bold">£79.99</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
