"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Clock, Menu, Search, ShoppingBag, Star, Trophy, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [announcement, setAnnouncement] = useState("Free shipping on all orders over £75!")
  const [currentTime, setCurrentTime] = useState("")

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Update current time
  useEffect(() => {
    // Set initial time with a fixed format that won't change between server and client
    setCurrentTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "UTC", // Use UTC to ensure consistency
      }),
    )

    // Only update time on client side after initial render
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "UTC",
        }),
      )
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  // Rotating announcements
  useEffect(() => {
    const announcements = [
      "Free shipping on all orders over £75!",
      "New vintage collection just arrived!",
      "Limited edition kits - while stocks last!",
      "Use code VINTAGE10 for 10% off your first order!",
    ]

    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % announcements.length
      setAnnouncement(announcements[index])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/products",
      label: "Shop",
      active: pathname === "/products",
    },
    {
      href: "/collections",
      label: "Collections",
      active: pathname === "/collections",
    },
    {
      href: "/about",
      label: "Our&nbsp;Story",
      active: pathname === "/about",
    },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b shadow-sm bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-background",
      )}
    >
      {/* Top announcement bar */}
      <div className="bg-[#8b0000] text-white py-1 px-4 text-center relative overflow-hidden">
        <div className="flex items-center justify-center space-x-2">
          <Trophy className="h-4 w-4" />
          <p className="text-sm font-medium animate-marquee">{announcement}</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      </div>

      <div className="container flex flex-col">
        {/* Top bar with time and featured badge */}
        <div className="hidden md:flex items-center justify-between py-1 text-xs text-muted-foreground border-b">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span suppressHydrationWarning>{currentTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bell className="h-3 w-3" />
              <span>New arrivals every week</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-xs bg-[#e2d9c2] hover:bg-[#d6cdb6] border-0">
              <Star className="h-3 w-3 mr-1 fill-[#8b0000] text-[#8b0000]" />
              Featured Collection
            </Badge>
            <Badge variant="outline" className="text-xs bg-[#e2d9c2] hover:bg-[#d6cdb6] border-0">
              <ShoppingBag className="h-3 w-3 mr-1 text-[#8b0000]" />
              Limited Edition
            </Badge>
          </div>
        </div>

        {/* Main header content */}
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <div className="flex items-center md:w-1/4">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <div className="px-7">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => {
                      const sheet = document.querySelector('[data-state="open"]')
                      if (sheet) {
                        sheet.setAttribute("data-state", "closed")
                      }
                    }}
                  >
                    <span className="font-serif text-xl font-bold uppercase tracking-tight">Vintage Legends</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 px-7 py-6">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-[#8b0000]",
                        route.active ? "text-[#8b0000]" : "text-muted-foreground",
                      )}
                    >
                      <span dangerouslySetInnerHTML={{ __html: route.label }} />
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop Logo */}
            <Link href="/" className="hidden md:flex items-center space-x-2 group">
              <div className="relative overflow-hidden">
                <span className="font-serif text-xl font-bold uppercase tracking-tight group-hover:text-[#8b0000] transition-colors duration-300">
                  Vintage Legends
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8b0000] group-hover:w-full transition-all duration-300"></span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center justify-center space-x-4 text-sm font-medium md:w-1/4 whitespace-nowrap">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "transition-all hover:text-[#8b0000] whitespace-nowrap relative group",
                  route.active ? "text-[#8b0000] font-bold" : "text-muted-foreground",
                )}
              >
                <span dangerouslySetInnerHTML={{ __html: route.label }} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8b0000] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Centered Search Bar */}
          <div className="flex items-center justify-center md:w-2/4">
            <div className="relative w-full max-w-md group">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-hover:text-[#8b0000] transition-colors duration-300" />
              <Input
                type="search"
                placeholder="Search for vintage kits..."
                className="pl-10 pr-10 py-2 w-full border-[#e2d9c2] focus:border-[#8b0000] transition-all duration-300 focus:ring-1 focus:ring-[#8b0000]"
              />
              {isSearchOpen && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Clear search</span>
                </Button>
              )}
            </div>
          </div>

          {/* Empty space to balance the header on desktop */}
          <div className="hidden md:flex md:w-1/4 justify-end">{/* Intentionally left empty for balance */}</div>
        </div>
      </div>
    </header>
  )
}
