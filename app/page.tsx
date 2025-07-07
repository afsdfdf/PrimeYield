"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Coins, Shield, ArrowRight, TrendingUp, Zap, Users, Globe, Star, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [stats, setStats] = useState({ tvl: 0, yield: 0, assets: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setStats((prev) => ({
        tvl: prev.tvl < 72.5 ? prev.tvl + 1.2 : 72.5,
        yield: prev.yield < 5.7 ? prev.yield + 0.1 : 5.7,
        assets: prev.assets < 126 ? prev.assets + 2 : 126,
      }))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen cyber-grid">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8 cyber-slide-in">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 cyber-card px-6 py-3 cyber-float">
                  <div className="relative">
                    <Image
                      src="/primeyield-logo.svg"
                      alt="PrimeYield Logo"
                      width={48}
                      height={48}
                      className="rounded-lg"
                      priority
                      onError={(e) => {
                        // Fallback to placeholder if logo fails to load
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "/primeyield-logo-alt.svg";
                      }}
                    />
                  </div>
                  <div className="text-sm cyber-text-secondary">
                    <div className="font-semibold">PrimeYield Protocol</div>
                    <div className="cyber-text-muted">Next-Gen RWA Platform</div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light cyber-heading leading-tight">
                  THE FUTURE
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    OF ASSET
                  </span>
                  <br />
                  TOKENIZATION
                </h1>

                <p className="text-xl cyber-text-secondary max-w-2xl leading-relaxed">
                  Institutional-grade real-world asset tokenization bridging TradFi and DeFi through advanced blockchain
                  infrastructure and regulatory compliance.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="cyber-card p-4">
                      <div className="text-2xl font-light cyber-text-primary mb-1">${stats.tvl.toFixed(1)}M</div>
                      <div className="cyber-text-muted text-sm">Total Value Locked</div>
                    </div>
                    <div className="cyber-card p-4">
                      <div className="text-2xl font-light cyber-text-primary mb-1">{stats.yield.toFixed(1)}%</div>
                      <div className="cyber-text-muted text-sm">Average APY</div>
                    </div>
                    <div className="cyber-card p-4">
                      <div className="text-2xl font-light cyber-text-primary mb-1">{stats.assets}</div>
                      <div className="cyber-text-muted text-sm">Assets Tokenized</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/app">
                  <Button className="cyber-button text-lg px-8 py-4">
                    Launch Platform
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    variant="outline"
                    className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20 text-lg px-8 py-4"
                  >
                    Try Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm cyber-text-muted">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>SEC Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Institutional Grade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>Multi-Chain</span>
                </div>
              </div>
            </div>

            {/* Right Side - Dashboard Preview */}
            <div className="relative cyber-slide-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <Image
                  src="/hero-dashboard.png"
                  alt="PrimeYield Dashboard Preview"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  priority
                  onError={(e) => {
                    // Fallback to placeholder if logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/primeyield-logo-alt.svg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 cyber-border-t cyber-border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="cyber-text-muted text-sm">Trusted by leading institutions and backed by</p>
          </div>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 cyber-text-primary" />
              <span className="cyber-text-secondary font-semibold">SEC Registered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-6 h-6 cyber-text-primary" />
              <span className="cyber-text-secondary font-semibold">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 cyber-text-primary" />
              <span className="cyber-text-secondary font-semibold">Insured Assets</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light cyber-heading mb-6">Revolutionizing Asset Investment</h2>
            <p className="text-xl cyber-text-secondary max-w-3xl mx-auto">
              Unlock liquidity in traditionally illiquid assets through blockchain technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="cyber-card text-center cyber-float">
              <CardContent className="p-8">
                <Building2 className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                <h3 className="text-xl font-light cyber-text-primary mb-3">Real Estate</h3>
                <p className="cyber-text-muted text-sm">
                  Commercial properties, residential complexes, and REITs tokenized for fractional ownership
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center cyber-float" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <Coins className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                <h3 className="text-xl font-light cyber-text-primary mb-3">Private Credit</h3>
                <p className="cyber-text-muted text-sm">
                  SME loans, trade finance, and structured credit products with transparent yields
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center cyber-float" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <Zap className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                <h3 className="text-xl font-light cyber-text-primary mb-3">Infrastructure</h3>
                <p className="cyber-text-muted text-sm">
                  Renewable energy projects, transportation, and utility infrastructure investments
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center cyber-float" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-8">
                <Shield className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                <h3 className="text-xl font-light cyber-text-primary mb-3">IP Assets</h3>
                <p className="cyber-text-muted text-sm">
                  Patents, royalties, and intellectual property rights monetized through tokenization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 cyber-border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="cyber-text-primary text-4xl font-light">$128B+</div>
              <div className="cyber-text-muted">Total RWA Market Size</div>
            </div>
            <div className="space-y-2">
              <div className="cyber-text-primary text-4xl font-light">260%</div>
              <div className="cyber-text-muted">YoY Growth Rate</div>
            </div>
            <div className="space-y-2">
              <div className="cyber-text-primary text-4xl font-light">Aug 2025</div>
              <div className="cyber-text-muted">Target Launch Date</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
