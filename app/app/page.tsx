"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  Building2,
  Coins,
  TrendingUp,
  Users,
  Shield,
  Wallet,
  Settings,
  Bell,
  Search,
  Filter,
  ArrowUpRight,
  Eye,
  Zap,
  Target,
} from "lucide-react"

export default function AppPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [portfolioValue, setPortfolioValue] = useState(0)
  const [totalYield, setTotalYield] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPortfolioValue((prev) => (prev < 125750 ? prev + 2500 : 125750))
      setTotalYield((prev) => (prev < 8.5 ? prev + 0.1 : 8.5))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const connectWallet = () => {
    setIsConnected(true)
  }

  return (
    <div className="min-h-screen cyber-grid">
      {/* Header */}
      <header className="cyber-nav border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <Image
                  src="/primeyield-logo.svg"
                  alt="PrimeYield Logo"
                  width={32}
                  height={32}
                  className="cyber-pulse"
                />
                <span className="cyber-text-primary text-xl font-bold">PrimeYield</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <Button
                  variant={activeTab === "dashboard" ? "default" : "ghost"}
                  onClick={() => setActiveTab("dashboard")}
                  className={activeTab === "dashboard" ? "cyber-button" : "cyber-text-secondary hover:text-cyan-300"}
                >
                  Dashboard
                </Button>
                <Button
                  variant={activeTab === "marketplace" ? "default" : "ghost"}
                  onClick={() => setActiveTab("marketplace")}
                  className={activeTab === "marketplace" ? "cyber-button" : "cyber-text-secondary hover:text-cyan-300"}
                >
                  Marketplace
                </Button>
                <Button
                  variant={activeTab === "portfolio" ? "default" : "ghost"}
                  onClick={() => setActiveTab("portfolio")}
                  className={activeTab === "portfolio" ? "cyber-button" : "cyber-text-secondary hover:text-cyan-300"}
                >
                  Portfolio
                </Button>
                <Button
                  variant={activeTab === "governance" ? "default" : "ghost"}
                  onClick={() => setActiveTab("governance")}
                  className={activeTab === "governance" ? "cyber-button" : "cyber-text-secondary hover:text-cyan-300"}
                >
                  Governance
                </Button>
                <Button
                  variant={activeTab === "staking" ? "default" : "ghost"}
                  onClick={() => setActiveTab("staking")}
                  className={activeTab === "staking" ? "cyber-button" : "cyber-text-secondary hover:text-cyan-300"}
                >
                  Staking
                </Button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="cyber-text-primary hover:text-cyan-300">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="cyber-text-primary hover:text-cyan-300">
                <Settings className="w-4 h-4" />
              </Button>
              {!isConnected ? (
                <Button onClick={connectWallet} className="cyber-button">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              ) : (
                <div className="flex items-center space-x-2 cyber-card px-3 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full cyber-pulse"></div>
                  <span className="cyber-text-primary text-sm">0x1234...5678</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!isConnected ? (
          // Welcome Screen
          <div className="text-center py-20 cyber-slide-in">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="cyber-glow inline-block p-8 rounded-2xl">
                <Image
                  src="/primeyield-logo.svg"
                  alt="PrimeYield Logo"
                  width={64}
                  height={64}
                  className="mx-auto mb-4 cyber-float"
                />
                <h1 className="text-4xl md:text-6xl font-light cyber-heading mb-6">Welcome to PrimeYield</h1>
                <p className="text-xl cyber-text-secondary mb-8">
                  Access institutional-grade real-world asset tokenization platform
                </p>
                <Button onClick={connectWallet} size="lg" className="cyber-button text-lg px-8 py-4">
                  <Wallet className="w-5 h-5 mr-2" />
                  Connect Wallet to Continue
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Main Application
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            {/* Dashboard */}
            <TabsContent value="dashboard" className="space-y-8">
              {/* Overview Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="cyber-card cyber-slide-in">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="cyber-text-muted text-sm">Portfolio Value</p>
                        <p className="text-2xl font-light cyber-text-primary">${portfolioValue.toLocaleString()}</p>
                      </div>
                      <TrendingUp className="w-8 h-8 cyber-text-primary" />
                    </div>
                    <div className="flex items-center mt-2">
                      <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400 text-sm">+12.5%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cyber-card cyber-slide-in" style={{ animationDelay: "0.1s" }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="cyber-text-muted text-sm">Total Yield</p>
                        <p className="text-2xl font-light cyber-text-primary">{totalYield.toFixed(1)}%</p>
                      </div>
                      <Coins className="w-8 h-8 cyber-text-primary" />
                    </div>
                    <div className="flex items-center mt-2">
                      <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400 text-sm">+0.3%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cyber-card cyber-slide-in" style={{ animationDelay: "0.2s" }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="cyber-text-muted text-sm">Token Balance</p>
                        <p className="text-2xl font-light cyber-text-primary">12,500</p>
                      </div>
                      <Shield className="w-8 h-8 cyber-text-primary" />
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="cyber-text-muted text-sm">Staked: 8,500</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cyber-card cyber-slide-in" style={{ animationDelay: "0.3s" }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="cyber-text-muted text-sm">Active Assets</p>
                        <p className="text-2xl font-light cyber-text-primary">8</p>
                      </div>
                      <Building2 className="w-8 h-8 cyber-text-primary" />
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="cyber-text-muted text-sm">Across 4 categories</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity & Quick Actions */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            type: "Investment",
                            asset: "Manhattan Office Building",
                            amount: "+$5,000",
                            time: "2 hours ago",
                            status: "completed",
                          },
                          {
                            type: "Yield",
                            asset: "SME Loan Portfolio",
                            amount: "+$127.50",
                            time: "1 day ago",
                            status: "completed",
                          },
                          {
                            type: "Staking",
                            asset: "Token Staking Pool",
                            amount: "+2,500 Tokens",
                            time: "3 days ago",
                            status: "completed",
                          },
                          {
                            type: "Governance",
                            asset: "Proposal #PYP-001",
                            amount: "Voted",
                            time: "1 week ago",
                            status: "active",
                          },
                        ].map((activity, index) => (
                          <div key={index} className="flex items-center justify-between p-3 cyber-card">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-2 h-2 rounded-full ${activity.status === "completed" ? "bg-green-400" : "bg-cyan-400"} cyber-pulse`}
                              ></div>
                              <div>
                                <p className="cyber-text-primary font-light">{activity.type}</p>
                                <p className="cyber-text-muted text-sm">{activity.asset}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="cyber-text-primary">{activity.amount}</p>
                              <p className="cyber-text-muted text-sm">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full cyber-button" onClick={() => setActiveTab("marketplace")}>
                        <Building2 className="w-4 h-4 mr-2" />
                        Browse Assets
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                        onClick={() => setActiveTab("staking")}
                      >
                        <Coins className="w-4 h-4 mr-2" />
                        Stake PYT
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                        onClick={() => setActiveTab("governance")}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Vote on Proposals
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light">Market Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Total TVL</span>
                        <span className="cyber-text-primary">$128.5M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Active Assets</span>
                        <span className="cyber-text-primary">247</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Avg. APY</span>
                        <span className="cyber-text-primary">9.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">PYT Price</span>
                        <span className="cyber-text-primary">$0.80</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Other tabs content would follow the same pattern with cyber styling... */}
            {/* For brevity, I'll show the marketplace tab as an example */}

            <TabsContent value="marketplace" className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-3xl font-light cyber-heading">Asset Marketplace</h2>
                  <p className="cyber-text-muted">Discover and invest in tokenized real-world assets</p>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="cyber-border cyber-text-primary bg-transparent">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" className="cyber-border cyber-text-primary bg-transparent">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>

              {/* Asset Categories */}
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { name: "Real Estate", count: 89, icon: Building2 },
                  { name: "Private Credit", count: 67, icon: Coins },
                  { name: "Infrastructure", count: 45, icon: Zap },
                  { name: "Intellectual Property", count: 23, icon: Target },
                ].map((category, index) => (
                  <Card key={index} className="cyber-card hover:cyber-glow cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <category.icon className="w-8 h-8 cyber-text-primary mx-auto mb-2" />
                      <h3 className="cyber-text-primary font-light">{category.name}</h3>
                      <p className="cyber-text-muted text-sm">{category.count} assets</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Featured Assets */}
              <div className="grid lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Manhattan Office Complex",
                    type: "Commercial Real Estate",
                    value: "$50,000,000",
                    yield: "8.5%",
                    available: "30%",
                    minInvestment: "$1,000",
                    location: "New York, NY",
                    status: "Active",
                  },
                  {
                    name: "SME Loan Portfolio",
                    type: "Private Credit",
                    value: "$25,000,000",
                    yield: "12.3%",
                    available: "45%",
                    minInvestment: "$500",
                    location: "Multi-State",
                    status: "Active",
                  },
                  {
                    name: "Solar Farm Project",
                    type: "Green Infrastructure",
                    value: "$75,000,000",
                    yield: "9.2%",
                    available: "60%",
                    minInvestment: "$2,500",
                    location: "California",
                    status: "Funding",
                  },
                ].map((asset, index) => (
                  <Card key={index} className="cyber-card hover:cyber-glow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="cyber-text-primary font-light">{asset.name}</CardTitle>
                          <Badge className="mt-2 cyber-badge">{asset.type}</Badge>
                        </div>
                        <Badge
                          className={`${asset.status === "Active" ? "bg-green-500/20 text-green-400" : "cyber-badge"}`}
                        >
                          {asset.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="cyber-text-muted">Total Value</p>
                          <p className="cyber-text-primary font-light">{asset.value}</p>
                        </div>
                        <div>
                          <p className="cyber-text-muted">Expected Yield</p>
                          <p className="cyber-text-primary font-light">{asset.yield}</p>
                        </div>
                        <div>
                          <p className="cyber-text-muted">Available</p>
                          <p className="cyber-text-primary font-light">{asset.available}</p>
                        </div>
                        <div>
                          <p className="cyber-text-muted">Min. Investment</p>
                          <p className="cyber-text-primary font-light">{asset.minInvestment}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="cyber-text-muted">Funding Progress</span>
                          <span className="cyber-text-primary">{100 - Number.parseInt(asset.available)}%</span>
                        </div>
                        <div className="cyber-progress">
                          <div
                            className="cyber-progress-bar"
                            style={{ width: `${100 - Number.parseInt(asset.available)}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="flex-1 cyber-button">Invest Now</Button>
                        <Button variant="outline" className="cyber-border cyber-text-primary bg-transparent">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
