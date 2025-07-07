"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, DollarSign, PieChart, Activity } from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [selectedAsset, setSelectedAsset] = useState("all")

  const portfolioData = {
    totalValue: 125000,
    totalGain: 15750,
    gainPercentage: 14.4,
    assets: [
      {
        id: "real-estate",
        name: "Real Estate Tokens",
        symbol: "RET",
        value: 45000,
        allocation: 36,
        change: 8.5,
        tokens: 450,
        apy: 12.5,
      },
      {
        id: "commodities",
        name: "Commodity Tokens",
        symbol: "CMT",
        value: 32000,
        allocation: 25.6,
        change: -2.3,
        tokens: 320,
        apy: 9.8,
      },
      {
        id: "bonds",
        name: "Bond Tokens",
        symbol: "BDT",
        value: 28000,
        allocation: 22.4,
        change: 5.2,
        tokens: 280,
        apy: 7.2,
      },
      {
        id: "equity",
        name: "Equity Tokens",
        symbol: "EQT",
        value: 20000,
        allocation: 16,
        change: 12.8,
        tokens: 200,
        apy: 15.3,
      },
    ],
  }

  return (
    <div className="min-h-screen cyber-grid">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 cyber-slide-in">
            <div className="inline-flex items-center space-x-3 mb-6">
              <Image
                src="/primeyield-logo.svg"
                alt="PrimeYield Logo"
                width={48}
                height={48}
                className="rounded-lg cyber-pulse"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-light cyber-heading mb-6">Portfolio Dashboard</h1>
            <p className="text-xl cyber-text-secondary max-w-3xl mx-auto">
              Monitor and manage your tokenized asset portfolio with real-time analytics
            </p>
          </div>

          {/* Portfolio Analytics Info */}
          <div className="mb-12 cyber-card cyber-glow rounded-2xl overflow-hidden max-w-4xl mx-auto p-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-light cyber-text-primary">Advanced Portfolio Analytics</h2>
              <p className="text-lg cyber-text-secondary">
                Track your tokenized assets with real-time portfolio analytics. Monitor performance, 
                asset allocation, and yield generation across multiple asset classes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">Performance Tracking</div>
                  <p className="cyber-text-muted">Real-time analytics and historical performance data</p>
                </div>
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">Asset Diversity</div>
                  <p className="cyber-text-muted">Balanced exposure across multiple asset classes</p>
                </div>
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">Yield Optimization</div>
                  <p className="cyber-text-muted">Maximize returns with smart yield strategies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="cyber-card cyber-float">
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Total Portfolio Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-light cyber-text-primary mb-2">
                  ${portfolioData.totalValue.toLocaleString()}
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">
                    +${portfolioData.totalGain.toLocaleString()} ({portfolioData.gainPercentage}%)
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-float" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Asset Allocation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {portfolioData.assets.map((asset) => (
                    <div key={asset.id} className="flex justify-between items-center">
                      <span className="text-sm cyber-text-muted">{asset.symbol}</span>
                      <span className="cyber-text-primary font-semibold">{asset.allocation}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-float" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">+{portfolioData.gainPercentage}%</div>
                <div className="text-sm cyber-text-muted mb-3">30-day return</div>
                <Progress value={portfolioData.gainPercentage} className="h-2" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Asset Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 cyber-text-primary">Asset Holdings</h2>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 cyber-card">
              <TabsTrigger
                value="all"
                className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
              >
                All Assets
              </TabsTrigger>
              <TabsTrigger
                value="real-estate"
                className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
              >
                Real Estate
              </TabsTrigger>
              <TabsTrigger
                value="commodities"
                className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
              >
                Commodities
              </TabsTrigger>
              <TabsTrigger
                value="bonds"
                className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
              >
                Bonds
              </TabsTrigger>
              <TabsTrigger
                value="equity"
                className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
              >
                Equity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.assets.map((asset) => (
                  <Card key={asset.id} className="cyber-card cyber-float">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="cyber-text-primary font-light">{asset.name}</CardTitle>
                          <p className="cyber-text-muted">{asset.symbol}</p>
                        </div>
                        <Badge
                          variant={asset.change > 0 ? "default" : "destructive"}
                          className={
                            asset.change > 0
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                          }
                        >
                          {asset.change > 0 ? "+" : ""}
                          {asset.change}%
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Value</span>
                          <span className="cyber-text-primary font-semibold">${asset.value.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Tokens</span>
                          <span className="cyber-text-primary">{asset.tokens}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">APY</span>
                          <span className="cyber-text-primary">{asset.apy}%</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="cyber-text-muted">Allocation</span>
                            <span className="cyber-text-primary">{asset.allocation}%</span>
                          </div>
                          <Progress value={asset.allocation} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {portfolioData.assets.map((asset) => (
              <TabsContent key={asset.id} value={asset.id} className="mt-8">
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">{asset.name} Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="cyber-text-primary font-light">Performance Metrics</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Current Value</span>
                            <span className="cyber-text-primary">${asset.value.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">30-day Change</span>
                            <span className={asset.change > 0 ? "text-green-400" : "text-red-400"}>
                              {asset.change > 0 ? "+" : ""}
                              {asset.change}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Annual Yield</span>
                            <span className="cyber-text-primary">{asset.apy}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Portfolio Weight</span>
                            <span className="cyber-text-primary">{asset.allocation}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="cyber-text-primary font-light">Holdings</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Token Balance</span>
                            <span className="cyber-text-primary">
                              {asset.tokens} {asset.symbol}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Average Cost</span>
                            <span className="cyber-text-primary">${(asset.value / asset.tokens).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Unrealized P&L</span>
                            <span className={asset.change > 0 ? "text-green-400" : "text-red-400"}>
                              ${((asset.value * asset.change) / 100).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-20 px-4 cyber-border-t">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 cyber-text-primary">Recent Activity</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="cyber-card">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {[
                    {
                      type: "Buy",
                      asset: "Real Estate Tokens",
                      amount: "50 RET",
                      value: "$5,000",
                      date: "2 hours ago",
                      status: "completed",
                    },
                    {
                      type: "Yield",
                      asset: "Bond Tokens",
                      amount: "2.5 BDT",
                      value: "$250",
                      date: "1 day ago",
                      status: "completed",
                    },
                    {
                      type: "Sell",
                      asset: "Commodity Tokens",
                      amount: "25 CMT",
                      value: "$2,500",
                      date: "3 days ago",
                      status: "completed",
                    },
                    {
                      type: "Buy",
                      asset: "Equity Tokens",
                      amount: "100 EQT",
                      value: "$10,000",
                      date: "1 week ago",
                      status: "completed",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-6 border-b border-cyan-500/10 last:border-b-0"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            activity.type === "Buy"
                              ? "bg-green-400"
                              : activity.type === "Sell"
                                ? "bg-red-400"
                                : "bg-cyan-400"
                          }`}
                        ></div>
                        <div>
                          <p className="cyber-text-primary font-light">
                            {activity.type} {activity.asset}
                          </p>
                          <p className="cyber-text-muted text-sm">{activity.amount}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="cyber-text-primary">{activity.value}</p>
                        <p className="cyber-text-muted text-sm">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
