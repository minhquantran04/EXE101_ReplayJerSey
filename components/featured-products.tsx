import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function FeaturedProducts() {
  const featuredCollections = [
    {
      id: "world-cup-1966",
      title: "World Cup 1966",
      description: "The kits that brought football home",
      image: "/placeholder.svg?height=400&width=300",
      link: "/collections/world-cup-1966",
    },
    {
      id: "european-classics",
      title: "European Classics",
      description: "Iconic continental club kits",
      image: "/placeholder.svg?height=400&width=300",
      link: "/collections/european-classics",
    },
    {
      id: "premier-league-legends",
      title: "Premier League Legends",
      description: "The shirts that defined English football",
      image: "/placeholder.svg?height=400&width=300",
      link: "/collections/premier-league-legends",
    },
    {
      id: "international-icons",
      title: "International Icons",
      description: "National team classics from around the world",
      image: "/placeholder.svg?height=400&width=300",
      link: "/collections/international-icons",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase font-serif">
              Featured Collections
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our curated collections of vintage football kits that celebrate the greatest moments in the
              beautiful game.
            </p>
          </div>
        </div>
        <div className="mx-auto py-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredCollections.map((collection) => (
                <CarouselItem key={collection.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden border-2 border-[#e2d9c2]">
                      <div className="aspect-square relative">
                        <Image
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.title}
                          fill
                          className="object-cover transition-all hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6 bg-[#f9f5e9]">
                        <h3 className="text-xl font-bold mb-2">{collection.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{collection.description}</p>
                        <Link href={collection.link}>
                          <Button
                            variant="outline"
                            className="w-full group border-[#8b0000] text-[#8b0000] hover:bg-[#8b0000] hover:text-white"
                          >
                            Explore Collection
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
