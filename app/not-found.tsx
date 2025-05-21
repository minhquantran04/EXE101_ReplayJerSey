import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center px-4">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-[#8b0000]">404</h1>
        <h2 className="text-2xl font-semibold">Product Not Found</h2>
        <p className="text-muted-foreground">
          Sorry, we couldn't find the vintage football kit you're looking for. It might have been sold out or moved to a
          different collection.
        </p>
        <div className="flex justify-center">
          <Link href="/products">
            <Button className="bg-[#8b0000] text-white hover:bg-[#6b0000]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
