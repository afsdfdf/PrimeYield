"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Wallet, Play } from "lucide-react"
import Image from "next/image"

export default function DemoPage() {
  const [selectedAsset, setSelectedAsset] = useState("real-estate")
  const [investmentAmount, setInvestmentAmount] = useState("1000")
  const [isConnected, setIsConnected] = useState(false)

  const assets = {
    "real-estate": {
      name: "Manhattan Office Building",
      type: "Commercial Real Estate",
      value: "$50,000,000",
      yield: "8.5%",
      tokens: "50,000,000",
      price: "$1.00",
      available: "15,000,000",
      description: "Prime Manhattan office building with long-term tenants",
    },
    "private-credit": {
      name: "SME Loan Portfolio",
      type: "Private Credit",
      value: "$25,000,000",
      yield: "12.3%",
      tokens: "25,000,000",
      price: "$1.00",
      available: "8,500,000",
      description: "Diversified portfolio of small business loans",
    },
    infrastructure: {
      name: "Solar Farm Project",
      type: "Green Infrastructure",
      value: "$75,000,000",
      yield: "9.2%",
      tokens: "75,000,000",
      price: "$1.00",
      available: "22,000,000",
      description: "Renewable energy infrastructure with government backing",
    },
  }

  const currentAsset = assets[selectedAsset as keyof typeof assets]

  return (
    <div className="min-h-screen cyber-grid">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 cyber-slide-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="relative">
              <Image
                src="/primeyield-logo.svg"
                alt="PrimeYield Logo"
                width={48}
                height={48}
                className="rounded-lg cyber-pulse"
                priority
                onError={(e) => {
                  // Fallback to placeholder if logo fails to load
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/placeholder-logo.svg";
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-light cyber-heading mb-6">PrimeYield Protocol Demo</h1>
          <p className="text-xl cyber-text-secondary max-w-4xl mx-auto leading-relaxed">
            Experience the future of real-world asset tokenization with our interactive demo platform
          </p>

          {/* Demo Preview Image */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Image
              src="/hero-dashboard.png"
              alt="Demo Platform Preview"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl"
              priority
            />
          </div>
        </div>

        <Tabs defaultValue="marketplace" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 cyber-card">
            <TabsTrigger
              value="marketplace"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              Asset Marketplace
            </TabsTrigger>
            <TabsTrigger
              value="tokenization"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              Tokenization Process
            </TabsTrigger>
            <TabsTrigger
              value="portfolio"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              Portfolio Management
            </TabsTrigger>
            <TabsTrigger
              value="governance"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              DAO Governance
            </TabsTrigger>
          </TabsList>

          {/* Asset Marketplace */}
          <TabsContent value="marketplace" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Asset Selection */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-2xl font-light cyber-text-primary">Available Assets</h2>
                <div className="grid gap-4">
                  {Object.entries(assets).map(([key, asset]) => (
                    <Card
                      key={key}
                      className={`cursor-pointer transition-all ${
                        selectedAsset === key ? "cyber-card cyber-glow" : "cyber-card"
                      }`}
                      onClick={() => setSelectedAsset(key)}
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <h3 className="text-lg font-light cyber-text-primary">{asset.name}</h3>
                            <Badge className="cyber-badge">{asset.type}</Badge>
                            <p className="cyber-text-muted text-sm">{asset.description}</p>
                          </div>
                          <div className="text-right space-y-1">
                            <div className="text-2xl font-light cyber-text-primary">{asset.yield}</div>
                            <div className="text-sm cyber-text-muted">APY</div>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="cyber-text-muted">Total Value</div>
                            <div className="cyber-text-primary font-light">{asset.value}</div>
                          </div>
                          <div>
                            <div className="cyber-text-muted">Token Price</div>
                            <div className="cyber-text-primary font-light">{asset.price}</div>
                          </div>
                          <div>
                            <div className="cyber-text-muted">Available</div>
                            <div className="cyber-text-primary font-light">{asset.available}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Investment Panel */}
              <div className="space-y-6">
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Invest in {currentAsset.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {!isConnected ? (
                      <Button onClick={() => setIsConnected(true)} className="w-full cyber-button">
                        <Wallet className="mr-2 w-4 h-4" />
                        Connect Wallet
                      </Button>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <Label className="cyber-text-muted">Investment Amount (USD)</Label>
                          <Input
                            value={investmentAmount}
                            onChange={(e) => setInvestmentAmount(e.target.value)}
                            className="bg-black border-cyan-500/30 text-cyan-300"
                            placeholder="Enter amount"
                          />
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Tokens to receive:</span>
                            <span className="cyber-text-primary">{investmentAmount || "0"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Estimated annual yield:</span>
                            <span className="cyber-text-primary">
                              $
                              {(
                                (Number.parseFloat(investmentAmount || "0") * Number.parseFloat(currentAsset.yield)) /
                                100
                              ).toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Platform fee (0.5%):</span>
                            <span className="cyber-text-primary">
                              ${(Number.parseFloat(investmentAmount || "0") * 0.005).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <Button className="w-full cyber-button">
                          Invest Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </CardContent>
                </Card>

                {/* Asset Details */}
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Asset Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Asset Type:</span>
                        <span className="cyber-text-primary">{currentAsset.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Total Supply:</span>
                        <span className="cyber-text-primary">{currentAsset.tokens}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Liquidity:</span>
                        <span className="cyber-text-primary">High</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Risk Level:</span>
                        <span className="cyber-text-primary">Medium</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="cyber-text-muted">Funding Progress</span>
                        <span className="cyber-text-primary">68%</span>
                      </div>
                      <div className="cyber-progress">
                        <div className="cyber-progress-bar" style={{ width: "68%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Tokenization Process */}
          <TabsContent value="tokenization" className="space-y-8">
            <div className="text-center mb-8">
              <div className="cyber-card cyber-glow rounded-2xl overflow-hidden max-w-4xl mx-auto">
                <Image
                  src="/tokenization-process.png"
                  alt="Tokenization Process"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Tokenization Workflow</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        step: 1,
                        title: "Asset Evaluation",
                        status: "completed",
                        description: "Independent valuation and due diligence",
                      },
                      {
                        step: 2,
                        title: "Legal Structuring",
                        status: "completed",
                        description: "SPV creation and regulatory compliance",
                      },
                      {
                        step: 3,
                        title: "Smart Contract Deployment",
                        status: "in-progress",
                        description: "Token creation and distribution logic",
                      },
                      {
                        step: 4,
                        title: "Oracle Integration",
                        status: "pending",
                        description: "Real-time asset data feeds",
                      },
                      {
                        step: 5,
                        title: "Market Launch",
                        status: "pending",
                        description: "Public trading availability",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            item.status === "completed"
                              ? "bg-green-500 text-black"
                              : item.status === "in-progress"
                                ? "cyber-button text-black"
                                : "cyber-border cyber-text-primary"
                          }`}
                        >
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="cyber-text-primary font-light">{item.title}</h4>
                          <p className="cyber-text-muted text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Technical Architecture</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-2">Smart Contracts</h4>
                      <ul className="cyber-text-muted text-sm space-y-1">
                        <li>• ERC-1400 Security Token Standard</li>
                        <li>• Automated yield distribution</li>
                        <li>• Compliance modules</li>
                        <li>• Governance integration</li>
                      </ul>
                    </div>

                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-2">Oracle Network</h4>
                      <ul className="cyber-text-muted text-sm space-y-1">
                        <li>• Chainlink price feeds</li>
                        <li>• Asset valuation updates</li>
                        <li>• Income verification</li>
                        <li>• Compliance monitoring</li>
                      </ul>
                    </div>

                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-2">Legal Framework</h4>
                      <ul className="cyber-text-muted text-sm space-y-1">
                        <li>• Delaware SPV structure</li>
                        <li>• SEC compliance</li>
                        <li>• KYC/AML integration</li>
                        <li>• Multi-jurisdiction support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Portfolio Management */}
          <TabsContent value="portfolio" className="space-y-8">
            <div className="text-center mb-8">
              <div className="cyber-card cyber-glow rounded-2xl overflow-hidden max-w-4xl mx-auto">
                <Image
                  src="/portfolio-analytics.png"
                  alt="Portfolio Analytics"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Portfolio Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-light cyber-text-primary mb-2">$25,750</div>
                        <div className="cyber-text-muted">Total Value</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-light text-green-400 mb-2">+8.5%</div>
                        <div className="cyber-text-muted">Total Return</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-light cyber-text-primary mb-2">9.2%</div>
                        <div className="cyber-text-muted">Avg. APY</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="cyber-text-primary font-light">Asset Allocation</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="cyber-text-muted">Real Estate (60%)</span>
                            <span className="cyber-text-primary">$15,450</span>
                          </div>
                          <div className="cyber-progress">
                            <div className="cyber-progress-bar" style={{ width: "60%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="cyber-text-muted">Private Credit (25%)</span>
                            <span className="cyber-text-primary">$6,437</span>
                          </div>
                          <div className="cyber-progress">
                            <div className="cyber-progress-bar" style={{ width: "25%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="cyber-text-muted">Infrastructure (15%)</span>
                            <span className="cyber-text-primary">$3,863</span>
                          </div>
                          <div className="cyber-progress">
                            <div className="cyber-progress-bar" style={{ width: "15%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          type: "Investment",
                          asset: "Manhattan Office Building",
                          amount: "+$5,000",
                          date: "2 days ago",
                          status: "completed",
                        },
                        {
                          type: "Yield",
                          asset: "SME Loan Portfolio",
                          amount: "+$127.50",
                          date: "1 week ago",
                          status: "completed",
                        },
                        {
                          type: "Investment",
                          asset: "Solar Farm Project",
                          amount: "+$2,500",
                          date: "2 weeks ago",
                          status: "completed",
                        },
                        {
                          type: "Yield",
                          asset: "Manhattan Office Building",
                          amount: "+$89.25",
                          date: "3 weeks ago",
                          status: "completed",
                        },
                      ].map((tx, index) => (
                        <div key={index} className="flex justify-between items-center cyber-card p-3">
                          <div>
                            <div className="cyber-text-primary font-light">{tx.type}</div>
                            <div className="cyber-text-muted text-sm">{tx.asset}</div>
                          </div>
                          <div className="text-right">
                            <div className="cyber-text-primary">{tx.amount}</div>
                            <div className="cyber-text-muted text-sm">{tx.date}</div>
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
                    <CardTitle className="cyber-text-primary font-light">Yield Analytics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Monthly Yield:</span>
                        <span className="cyber-text-primary">$198.75</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">YTD Yield:</span>
                        <span className="cyber-text-primary">$1,847.50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Next Distribution:</span>
                        <span className="cyber-text-primary">Jan 15, 2025</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">$PYT Rewards</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-light cyber-text-primary mb-2">1,247 PYT</div>
                      <div className="cyber-text-muted">Available to Claim</div>
                    </div>
                    <Button className="w-full cyber-button">Claim Rewards</Button>
                    <div className="text-center text-sm cyber-text-muted">Staking APY: 15.5%</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* DAO Governance */}
          <TabsContent value="governance" className="space-y-8">
            <div className="text-center mb-8">
              <div className="cyber-card cyber-glow rounded-2xl overflow-hidden max-w-4xl mx-auto">
                <Image
                  src="/governance-voting.png"
                  alt="Governance Voting"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Active Proposals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      id: "PYP-001",
                      title: "Add Tokenized Art Collection",
                      description: "Proposal to tokenize a $10M contemporary art collection",
                      votes: { for: 75, against: 25 },
                      timeLeft: "3 days",
                      status: "active",
                    },
                    {
                      id: "PYP-002",
                      title: "Reduce Platform Fees",
                      description: "Reduce tokenization fees from 0.5% to 0.3%",
                      votes: { for: 60, against: 40 },
                      timeLeft: "1 week",
                      status: "active",
                    },
                    {
                      id: "PYP-003",
                      title: "Treasury Diversification",
                      description: "Allocate 20% of treasury to stablecoins",
                      votes: { for: 85, against: 15 },
                      timeLeft: "Ended",
                      status: "passed",
                    },
                  ].map((proposal) => (
                    <div key={proposal.id} className="cyber-card p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="cyber-text-primary font-light">{proposal.title}</h4>
                          <p className="cyber-text-muted text-sm">{proposal.description}</p>
                        </div>
                        <Badge
                          className={`${
                            proposal.status === "active"
                              ? "cyber-badge"
                              : "bg-green-500/20 text-green-400 border-green-500/30"
                          }`}
                        >
                          {proposal.status}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="cyber-text-muted">For: {proposal.votes.for}%</span>
                          <span className="cyber-text-muted">Against: {proposal.votes.against}%</span>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: `${proposal.votes.for}%` }}></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted text-sm">{proposal.timeLeft}</span>
                          {proposal.status === "active" && (
                            <Button size="sm" className="cyber-button">
                              Vote
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Your Voting Power</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-light cyber-text-primary mb-2">12,500 PYT</div>
                      <div className="cyber-text-muted">Staked for Governance</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Voting Power:</span>
                        <span className="cyber-text-primary">0.125%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Proposals Created:</span>
                        <span className="cyber-text-primary">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Votes Cast:</span>
                        <span className="cyber-text-primary">15</span>
                      </div>
                    </div>
                    <Button className="w-full cyber-button">Create Proposal</Button>
                  </CardContent>
                </Card>

                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">DAO Treasury</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-light cyber-text-primary mb-2">$2.5M</div>
                      <div className="cyber-text-muted">Total Treasury Value</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">PYT Tokens:</span>
                        <span className="cyber-text-primary">60%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">Stablecoins:</span>
                        <span className="cyber-text-primary">25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted">RWA Tokens:</span>
                        <span className="cyber-text-primary">15%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
