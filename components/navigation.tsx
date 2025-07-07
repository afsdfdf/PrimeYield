"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useIsMobile } from "@/hooks/use-mobile"

const appSubmenu = [
  { name: "Dashboard", href: "/app" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Governance", href: "/governance" },
  { name: "Staking", href: "/staking" },
  { name: "Demo", href: "/demo" },
  { name: "Tokenization", href: "/tokenization" },
  { name: "Compliance", href: "/compliance" },
]

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Tokenomics", href: "/tokenomics" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "Technology", href: "/technology" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  return (
    <header className="cyber-nav sticky top-0 z-50 w-full">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src="/primeyield-logo.svg"
                alt="PrimeYield Logo"
                width={isMobile ? 28 : 32}
                height={isMobile ? 28 : 32}
                className="cyber-pulse transition-transform group-hover:scale-110"
                priority
                onError={(e) => {
                  // Fallback to placeholder if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/placeholder-logo.svg";
                }}
              />
            </div>
            <div className="cyber-text-primary text-lg md:text-xl font-bold tracking-wider group-hover:text-cyan-300 transition-colors">
              {isMobile ? "PrimeY" : "PrimeYield"}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-cyan-300 relative",
                  pathname === item.href
                    ? "cyber-text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-cyan-500/50 after:to-transparent"
                    : "cyber-text-secondary",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="hidden sm:inline-flex cyber-button">
                  Launch App
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="cyber-card border-cyan-500/30">
                {appSubmenu.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="cyber-text-secondary hover:text-cyan-300 font-medium">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="cyber-text-primary p-1">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="cyber-card border-cyan-500/30 w-[85vw] max-w-[300px] p-0">
                <div className="p-4 border-b border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/primeyield-logo.svg"
                      alt="PrimeYield Logo"
                      width={24}
                      height={24}
                      className="rounded-md"
                    />
                    <span className="cyber-text-primary font-bold">PrimeYield</span>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4 cyber-text-primary" />
                  </Button>
                </div>
                <div className="flex flex-col p-4 h-full overflow-y-auto">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <div key={item.name} className="py-1">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block py-1 text-base transition-colors hover:text-cyan-300",
                            pathname === item.href ? "cyber-text-primary" : "cyber-text-secondary",
                          )}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                    <div className="py-1">
                      <p className="text-base font-medium cyber-text-primary mb-1">App</p>
                      <div className="pl-3 space-y-1 border-l border-cyan-500/20">
                        {appSubmenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "block py-1 cyber-text-secondary hover:text-cyan-300 text-sm",
                              pathname === item.href ? "cyber-text-primary" : ""
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-cyan-500/20">
                    <Link href="/app" onClick={() => setIsOpen(false)}>
                      <Button className="w-full cyber-button">Launch App</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
