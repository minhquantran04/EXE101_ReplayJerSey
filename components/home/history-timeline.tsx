import Image from "next/image"

export function HistoryTimeline() {
  const timelineEvents = [
    {
      year: "1960s",
      title: "The Birth of Iconic Designs",
      description: "Simple, elegant kits with minimal branding defined football's golden era.",
      image: "/images/chat1.png",
      alt: "1960s football kit",
    },
    {
      year: "1970s",
      title: "Revolution in Materials",
      description: "New synthetic fabrics changed how kits were designed and worn on the pitch.",
      image: "/images/chat2.png",
      alt: "1970s football kit",
    },
    {
      year: "1980s",
      title: "Bold Patterns Emerge",
      description: "Geometric patterns and vibrant colors transformed football fashion forever.",
      image: "/images/chat3.png",
      alt: "1980s football kit",
    },
    {
      year: "1990s",
      title: "The Golden Age",
      description: "Arguably the most creative period in football kit design history.",
      image: "/images/chat4.png",
      alt: "1990s football kit",
    },
  ]

  return (
    <section className="w-full py-8 md:py-12 bg-[#f9f5e9]">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl uppercase font-serif">
            The Evolution of Football Kits
          </h2>
          <p className="mt-2 text-muted-foreground max-w-[700px] mx-auto">
            Journey through the decades and discover how football kits have evolved from simple cotton jerseys to the
            iconic designs we celebrate today.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-24 relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center">
                {/* Left side content */}
                <div className="md:w-[45%] flex justify-end">
                  {index % 2 === 0 ? (
                    <div className="bg-white p-4 rounded-lg shadow-md border border-[#e2d9c2] max-w-[90%]">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-[#8b0000] text-white rounded-full mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  ) : (
                    <div className="bg-white p-2 rounded-lg shadow-md border border-[#e2d9c2] overflow-hidden max-w-[250px]">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.alt}
                        width={200}
                        height={200}
                        className="object-cover w-full h-auto rounded transition-transform hover:scale-105"
                      />
                    </div>
                  )}
                </div>

                {/* Timeline center */}
                <div className="md:w-[10%] relative flex justify-center">
                  <div className="hidden md:block absolute top-0 bottom-0 w-1 bg-[#8b0000] opacity-20"></div>
                  <div className="hidden md:block w-4 h-4 rounded-full bg-[#8b0000] z-10 relative"></div>
                </div>

                {/* Right side content */}
                <div className="md:w-[45%] flex justify-start">
                  {index % 2 === 0 ? (
                    <div className="bg-white p-2 rounded-lg shadow-md border border-[#e2d9c2] overflow-hidden max-w-[250px]">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.alt}
                        width={200}
                        height={200}
                        className="object-cover w-full h-auto rounded transition-transform hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="bg-white p-4 rounded-lg shadow-md border border-[#e2d9c2] max-w-[90%]">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-[#8b0000] text-white rounded-full mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
