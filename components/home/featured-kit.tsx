import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function FeaturedKit() {
  return (
    <section className="w-full py-8 md:py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-[#8b0000] px-3 py-1 text-sm font-medium text-white mb-2">
              Featured Kit of the Month
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-serif">
              Barcelona 1999 Centenary Kit
            </h2>
            <p className="text-muted-foreground">
              Celebrating 100 years of FC Barcelona, this iconic kit features the club's traditional blaugrana stripes
              with a special centenary badge. Worn by legends like Rivaldo, Luis Figo, and Patrick Kluivert during the
              1999-2000 season.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center rounded-md bg-[#e2d9c2] px-2 py-1 text-xs font-medium">
                Limited Stock
              </span>
              <span className="inline-flex items-center rounded-md bg-[#e2d9c2] px-2 py-1 text-xs font-medium">
                Authentic Replica
              </span>
              <span className="inline-flex items-center rounded-md bg-[#e2d9c2] px-2 py-1 text-xs font-medium">
                Nike
              </span>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div>
            
              </div>
              <Link href="/products/barcelona-1999">
                <Button className="bg-[#8b0000] text-white hover:bg-[#6b0000]">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-lg border-2 border-[#e2d9c2] p-2 bg-white shadow-lg">
              <Image
                src="/images/barca2.jpg"
                alt="Barcelona 1999 Centenary Kit"
                width={500}
                height={600}
                className="object-cover transition-all hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
