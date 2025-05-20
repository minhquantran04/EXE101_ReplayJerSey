import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-[#f9f5e9] py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase font-serif">Vintage Legends</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Bringing back the glory days with authentic vintage football kits that celebrate the legends of the
              beautiful game.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-[#8b0000]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#8b0000]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#8b0000]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-bold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-[#8b0000]">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections/premier-league" className="text-muted-foreground hover:text-[#8b0000]">
                  Premier League
                </Link>
              </li>
              <li>
                <Link href="/collections/international" className="text-muted-foreground hover:text-[#8b0000]">
                  International
                </Link>
              </li>
              <li>
                <Link href="/collections/european" className="text-muted-foreground hover:text-[#8b0000]">
                  European Classics
                </Link>
              </li>
              <li>
                <Link href="/collections/world-cup" className="text-muted-foreground hover:text-[#8b0000]">
                  World Cup Editions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-bold">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#8b0000]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#8b0000]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-[#8b0000]">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-[#8b0000]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-muted-foreground hover:text-[#8b0000]">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-bold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/track-order" className="text-muted-foreground hover:text-[#8b0000]">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-[#8b0000]">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-[#8b0000]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-[#8b0000]">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vintage Legends. All rights reserved.</p>
          <p className="mt-2">
            Vintage Legends is not affiliated with any football club or organization. All product names, logos, and
            brands are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}
