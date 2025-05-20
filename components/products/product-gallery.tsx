import Image from "next/image"

type ProductGalleryProps = {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg border bg-white">
        <Image
          src={images[0] || "/placeholder.svg"}
          alt={name}
          width={600}
          height={600}
          className="aspect-square object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg border bg-white">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${name} - View ${index + 1}`}
              width={150}
              height={150}
              className="aspect-square object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
