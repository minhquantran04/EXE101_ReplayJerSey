import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import TermsPopup from "../home/TermsPopup"
export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-[#f9f5e9] py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase font-serif">Vintage Legends</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Bringing back the glory days with authentic vintage football kits that celebrate the legends of the
              beautiful game.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61556510023791" className="text-muted-foreground hover:text-[#8b0000]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/_tiemdosuy/" className="text-muted-foreground hover:text-[#8b0000]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Shop Links */}
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

        {/* Information Links */}
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
    <li className="text-muted-foreground hover:text-[#8b0000]">
        Location
    </li>
  </ul>


  <div className="mt-2 rounded overflow-hidden border" style={{ width: 220, height: 160 }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7857.863845562653!2d105.74050636977536!3d10.022476700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089bfeb370f57%3A0x18c584f1312b5d55!2zVGnhu4dtIMSQ4buTIOKAnFN1eeKAnQ!5e0!3m2!1svi!2s!4v1751198858399!5m2!1svi!2s"
      width="220"
      height="160"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Tiệm Đồ Suy"
    />
  </div>
</div>



          {/* Customer Service Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
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
           <TermsPopup />

            </ul>
          </div>
        </div>

        {/* Copyright */}
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
