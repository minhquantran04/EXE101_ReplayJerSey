"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

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
      label: "Our Story",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
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
                  {route.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="mr-6 hidden md:flex items-center space-x-2">
          <span className="font-serif text-xl font-bold uppercase tracking-tight">Vintage Legends</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "transition-colors hover:text-[#8b0000]",
                route.active ? "text-[#8b0000] font-bold" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="relative">
              <Input type="search" placeholder="Search..." className="w-[200px] sm:w-[300px]" autoFocus />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search"
              className="text-muted-foreground"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" aria-label="Account" className="text-muted-foreground">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Shopping cart" className="text-muted-foreground relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8b0000] text-[10px] font-medium text-white">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
