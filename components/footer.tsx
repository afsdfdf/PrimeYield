"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Github, Linkedin, Mail, MessageCircle, Send, ChevronDown, ChevronUp } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export function Footer() {
  const isMobile = useIsMobile()
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <footer className="cyber-nav border-t border-cyan-500/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-4 gap-4 md:gap-8">
          {/* Logo and social links */}
          <div className="space-y-4 cyber-slide-in">
            <div className="flex items-center space-x-2">
              <Image 
                src="/primeyield-logo.svg" 
                alt="PrimeYield Logo" 
                width={28} 
                height={28}
                priority
                onError={(e) => {
                  // Fallback to placeholder if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/placeholder-logo.svg";
                }}
              />
              <div className="text-xl font-bold cyber-text-primary">PrimeYield</div>
            </div>
            <p className="cyber-text-muted text-sm max-w-xs">
              Bridging real-world assets with decentralized finance through institutional-grade tokenization.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="cyber-text-muted hover:text-cyan-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="cyber-text-muted hover:text-cyan-300 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="cyber-text-muted hover:text-cyan-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="cyber-text-muted hover:text-cyan-300 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="cyber-text-muted hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Protocol links - collapsible on mobile */}
          <div className={cn(
            "space-y-2 cyber-slide-in border-b md:border-0 pb-2 md:pb-0",
            isMobile ? "mt-2" : ""
          )} style={{ animationDelay: "0.1s" }}>
            <div 
              className={cn(
                "flex items-center justify-between",
                isMobile ? "cursor-pointer" : ""
              )}
              onClick={isMobile ? () => toggleSection("protocol") : undefined}
            >
              <h3 className="cyber-text-primary font-light">Protocol</h3>
              {isMobile && (
                expandedSection === "protocol" ? 
                <ChevronUp className="w-4 h-4 cyber-text-primary" /> : 
                <ChevronDown className="w-4 h-4 cyber-text-primary" />
              )}
            </div>
            <div className={cn(
              "space-y-2",
              isMobile && expandedSection !== "protocol" ? "hidden" : "block"
            )}>
              <Link
                href="/demo"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Interactive Demo
              </Link>
              <Link
                href="/whitepaper"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Whitepaper
              </Link>
              <Link
                href="/tokenomics"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Tokenomics
              </Link>
              <Link
                href="/roadmap"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Roadmap
              </Link>
            </div>
          </div>

          {/* Platform links - collapsible on mobile */}
          <div className={cn(
            "space-y-2 cyber-slide-in border-b md:border-0 pb-2 md:pb-0",
            isMobile ? "mt-2" : ""
          )} style={{ animationDelay: "0.2s" }}>
            <div 
              className={cn(
                "flex items-center justify-between",
                isMobile ? "cursor-pointer" : ""
              )}
              onClick={isMobile ? () => toggleSection("platform") : undefined}
            >
              <h3 className="cyber-text-primary font-light">Platform</h3>
              {isMobile && (
                expandedSection === "platform" ? 
                <ChevronUp className="w-4 h-4 cyber-text-primary" /> : 
                <ChevronDown className="w-4 h-4 cyber-text-primary" />
              )}
            </div>
            <div className={cn(
              "space-y-2",
              isMobile && expandedSection !== "platform" ? "hidden" : "block"
            )}>
              <Link
                href="/app"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/portfolio"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/governance"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Governance
              </Link>
              <Link
                href="/staking"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Staking
              </Link>
            </div>
          </div>

          {/* Community links - collapsible on mobile */}
          <div className={cn(
            "space-y-2 cyber-slide-in border-b md:border-0 pb-2 md:pb-0",
            isMobile ? "mt-2" : ""
          )} style={{ animationDelay: "0.3s" }}>
            <div 
              className={cn(
                "flex items-center justify-between",
                isMobile ? "cursor-pointer" : ""
              )}
              onClick={isMobile ? () => toggleSection("community") : undefined}
            >
              <h3 className="cyber-text-primary font-light">Community</h3>
              {isMobile && (
                expandedSection === "community" ? 
                <ChevronUp className="w-4 h-4 cyber-text-primary" /> : 
                <ChevronDown className="w-4 h-4 cyber-text-primary" />
              )}
            </div>
            <div className={cn(
              "space-y-2",
              isMobile && expandedSection !== "community" ? "hidden" : "block"
            )}>
              <Link
                href="#"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Discord
              </Link>
              <Link
                href="#"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Telegram
              </Link>
              <Link
                href="#"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Medium
              </Link>
              <Link
                href="#"
                className="block cyber-text-muted hover:text-cyan-300 text-sm font-light transition-colors"
              >
                Newsletter
              </Link>
            </div>
          </div>
        </div>

        <div
          className="border-t border-cyan-500/20 mt-6 pt-6 text-center cyber-slide-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="cyber-text-muted text-xs md:text-sm font-light">© 2025 PrimeYield Protocol</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="#" className="cyber-text-muted hover:text-cyan-300 text-xs md:text-sm font-light transition-colors">
                Privacy
              </Link>
              <Link href="#" className="cyber-text-muted hover:text-cyan-300 text-xs md:text-sm font-light transition-colors">
                Terms
              </Link>
              <Link href="#" className="cyber-text-muted hover:text-cyan-300 text-xs md:text-sm font-light transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
