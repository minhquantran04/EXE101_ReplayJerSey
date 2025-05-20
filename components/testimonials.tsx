import Image from "next/image"
import { Quote } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      quote: "The quality is exceptional. It feels like I'm wearing the exact same kit my heroes wore in the 80s.",
      author: "James Wilson",
      title: "Arsenal Fan",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote: "These vintage kits bring back so many memories. The attention to detail is incredible.",
      author: "Sarah Thompson",
      title: "Liverpool Supporter",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote: "I bought the '99 United kit and it's perfect. The fabric, the stitching, everything is spot on.",
      author: "Michael Chen",
      title: "Man United Fan",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f5e9]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl uppercase font-serif">What Fans Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Hear from football fans who have rediscovered their passion through our
              vintage kits.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-[#e2d9c2]">
              <CardHeader className="pb-0">
                <Quote className="h-8 w-8 text-[#8b0000] opacity-50" />
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-lg italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="border-t pt-4 flex items-center gap-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
