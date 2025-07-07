"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coins, TrendingUp, Shield, Users, Zap, Target, PieChart, BarChart3, Calculator, Hexagon } from "lucide-react"

export default function TokenomicsPage() {
  const [selectedMetric, setSelectedMetric] = useState("supply")
  const [animatedValues, setAnimatedValues] = useState({
    ecosystem: 0,
    community: 0,
    team: 0,
    private: 0,
    public: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedValues((prev) => ({
        ecosystem: prev.ecosystem < 35 ? prev.ecosystem + 1 : 35,
        community: prev.community < 25 ? prev.community + 1 : 25,
        team: prev.team < 20 ? prev.team + 1 : 20,
        private: prev.private < 10 ? prev.private + 1 : 10,
        public: prev.public < 10 ? prev.public + 1 : 10,
      }))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const tokenMetrics = [
    { id: "supply", label: "Total Supply", value: "1B PrimeYield Token", icon: Coins },
    { id: "price", label: "Launch Price", value: "$0.10", icon: TrendingUp },
    { id: "mcap", label: "Market Cap", value: "$100M", icon: BarChart3 },
    { id: "utility", label: "Utility Score", value: "9.5/10", icon: Zap },
  ]

  return (
    <div className="min-h-screen cyber-grid">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 cyber-slide-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Hexagon className="w-12 h-12 cyber-text-primary cyber-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light cyber-heading mb-6">PrimeYield Token Tokenomics</h1>
          <p className="text-xl cyber-text-secondary max-w-4xl mx-auto leading-relaxed">
            The PrimeYield Token is the native utility and governance token designed to align incentives and
            capture value within the PrimeYield ecosystem through innovative tokenomics.
          </p>
        </div>

        {/* Interactive Token Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {tokenMetrics.map((metric) => (
            <Card
              key={metric.id}
              className={`text-center cursor-pointer transition-all duration-300 ${
                selectedMetric === metric.id ? "cyber-card cyber-glow" : "cyber-card"
              }`}
              onClick={() => setSelectedMetric(metric.id)}
            >
              <CardHeader>
                <metric.icon className="w-8 h-8 cyber-text-primary mx-auto mb-2" />
                <CardTitle className="cyber-text-primary font-light">{metric.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary cyber-pulse">{metric.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="allocation" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 cyber-card">
            <TabsTrigger
              value="allocation"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              Token Allocation
            </TabsTrigger>
            <TabsTrigger
              value="utility"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              Utility Framework
            </TabsTrigger>
            <TabsTrigger
              value="vesting"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              Vesting Schedule
            </TabsTrigger>
            <TabsTrigger
              value="economics"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              Token Economics
            </TabsTrigger>
          </TabsList>

          {/* Token Allocation */}
          <TabsContent value="allocation" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="cyber-card cyber-slide-in">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light flex items-center">
                    <PieChart className="w-5 h-5 mr-2" />
                    Distribution Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="cyber-text-muted">Ecosystem Development</span>
                      <Badge className="cyber-badge">{animatedValues.ecosystem}%</Badge>
                    </div>
                    <div className="cyber-progress">
                      <div className="cyber-progress-bar" style={{ width: `${animatedValues.ecosystem}%` }}></div>
                    </div>
                    <p className="text-sm cyber-text-muted mt-1">
                      350M PrimeYield Token - Grants, partnerships, liquidity incentives
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="cyber-text-muted">Community & Treasury</span>
                      <Badge className="cyber-badge">{animatedValues.community}%</Badge>
                    </div>
                    <div className="cyber-progress">
                      <div className="cyber-progress-bar" style={{ width: `${animatedValues.community}%` }}></div>
                    </div>
                    <p className="text-sm cyber-text-muted mt-1">250M PrimeYield Token - DAO treasury, community initiatives</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="cyber-text-muted">Team & Advisors</span>
                      <Badge className="cyber-badge">{animatedValues.team}%</Badge>
                    </div>
                    <div className="cyber-progress">
                      <div className="cyber-progress-bar" style={{ width: `${animatedValues.team}%` }}></div>
                    </div>
                    <p className="text-sm cyber-text-muted mt-1">200M PrimeYield Token - 4-year vesting, 1-year cliff</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="cyber-text-muted">Private Sale</span>
                      <Badge className="cyber-badge">{animatedValues.private}%</Badge>
                    </div>
                    <div className="cyber-progress">
                      <div className="cyber-progress-bar" style={{ width: `${animatedValues.private}%` }}></div>
                    </div>
                    <p className="text-sm cyber-text-muted mt-1">100M PrimeYield Token - Strategic investors, vesting schedule</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="cyber-text-muted">Public Sale & Liquidity</span>
                      <Badge className="cyber-badge">{animatedValues.public}%</Badge>
                    </div>
                    <div className="cyber-progress">
                      <div className="cyber-progress-bar" style={{ width: `${animatedValues.public}%` }}></div>
                    </div>
                    <p className="text-sm cyber-text-muted mt-1">100M PrimeYield Token - Public distribution, DEX liquidity</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card cyber-slide-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Allocation Rationale</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="cyber-card p-4">
                    <h4 className="font-light cyber-text-primary mb-2">Ecosystem Development (35%)</h4>
                    <p className="cyber-text-muted text-sm">
                      Largest allocation ensures continuous protocol growth, developer grants, strategic partnerships,
                      and liquidity incentives to bootstrap the ecosystem and drive adoption.
                    </p>
                  </div>

                  <div className="cyber-card p-4">
                    <h4 className="font-light cyber-text-primary mb-2">Community & Treasury (25%)</h4>
                    <p className="cyber-text-muted text-sm">
                      Empowers the community through DAO governance and provides resources for long-term protocol
                      sustainability, innovation, and community-driven initiatives.
                    </p>
                  </div>

                  <div className="cyber-card p-4">
                    <h4 className="font-light cyber-text-primary mb-2">Team & Advisors (20%)</h4>
                    <p className="cyber-text-muted text-sm">
                      Aligns team incentives with long-term success through extended vesting periods, ensuring
                      commitment to protocol development and sustainable growth.
                    </p>
                  </div>

                  <div className="cyber-card p-4">
                    <h4 className="font-light cyber-text-primary mb-2">Fundraising (20%)</h4>
                    <p className="cyber-text-muted text-sm">
                      Balanced approach between private strategic investment and public accessibility, ensuring both
                      adequate funding and broad token distribution.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Utility Framework */}
          <TabsContent value="utility" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="cyber-card cyber-float">
                <CardHeader>
                  <Coins className="w-8 h-8 cyber-text-primary mb-2" />
                  <CardTitle className="cyber-text-primary font-light">Protocol Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-muted mb-4">
                    All protocol fees are collected in PrimeYield Token or converted to PrimeYield Token, creating consistent demand and
                    enabling buyback mechanisms for token holders.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Tokenization Fee:</span>
                      <span className="cyber-text-primary text-sm">0.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Management Fee:</span>
                      <span className="cyber-text-primary text-sm">1.0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Performance Fee:</span>
                      <span className="cyber-text-primary text-sm">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card cyber-float" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <TrendingUp className="w-8 h-8 cyber-text-primary mb-2" />
                  <CardTitle className="cyber-text-primary font-light">Staking Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-muted mb-4">
                    Stake PrimeYield Token to earn a share of protocol fees and participate in network security while earning
                    competitive yields and governance rights.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Base APY:</span>
                      <span className="cyber-text-primary text-sm">12-18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Boosted APY:</span>
                      <span className="cyber-text-primary text-sm">Up to 25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Lock Period:</span>
                      <span className="cyber-text-primary text-sm">Flexible</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card cyber-float" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <Users className="w-8 h-8 cyber-text-primary mb-2" />
                  <CardTitle className="cyber-text-primary font-light">Governance Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-muted mb-4">
                    Vote on key protocol decisions including asset onboarding, fee structures, and treasury management
                    through decentralized governance.
                  </p>
                  <div className="space-y-2">
                    <Badge className="w-full justify-center cyber-badge">1 Token = 1 Vote</Badge>
                    <Badge className="w-full justify-center cyber-badge">Proposal Threshold: 100K Tokens</Badge>
                    <Badge className="w-full justify-center cyber-badge">Quorum: 4% of Supply</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card cyber-float" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <Zap className="w-8 h-8 cyber-text-primary mb-2" />
                  <CardTitle className="cyber-text-primary font-light">Yield Boosting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-muted mb-4">
                    Staking PrimeYield Token provides boosted yields on RWA investments and preferential access to new investment
                    opportunities and exclusive deals.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Tier 1 (1K+ Tokens):</span>
                      <span className="cyber-text-primary text-sm">+5% Yield</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Tier 2 (10K+ Tokens):</span>
                      <span className="cyber-text-primary text-sm">+10% Yield</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Tier 3 (100K+ Tokens):</span>
                      <span className="cyber-text-primary text-sm">+15% Yield</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card cyber-float" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <Shield className="w-8 h-8 cyber-text-primary mb-2" />
                  <CardTitle className="cyber-text-primary font-light">Liquidity Incentives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-muted mb-4">
                    Earn PrimeYield Token rewards by providing liquidity for RWA tokens and PrimeYield Token pairs on decentralized exchanges
                    and protocol-owned liquidity.
                  </p>
                  <div className="space-y-2">
                    <Badge className="w-full justify-center cyber-badge">LP Rewards: 2-5% APR</Badge>
                    <Badge className="w-full justify-center cyber-badge">Bonus Multipliers Available</Badge>
                    <Badge className="w-full justify-center cyber-badge">Impermanent Loss Protection</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card cyber-float" style={{ animationDelay: "0.5s" }}>
                <CardHeader>
                  <Target className="w-8 h-8 cyber-text-primary mb-2" />
                  <CardTitle className="cyber-text-primary font-light">DeFi Collateral</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-muted mb-4">
                    Use PrimeYield Token as collateral in future lending/borrowing protocols within the PrimeYield ecosystem and
                    partner platforms.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Collateral Ratio:</span>
                      <span className="cyber-text-primary text-sm">75%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Liquidation Threshold:</span>
                      <span className="cyber-text-primary text-sm">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted text-sm">Borrow Rate:</span>
                      <span className="cyber-text-primary text-sm">Variable</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Vesting Schedule */}
          <TabsContent value="vesting" className="space-y-8">
            <Card className="cyber-card cyber-slide-in">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">Token Release Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="cyber-text-primary font-light">Team & Advisors Vesting</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Cliff Period</span>
                          <Badge className="cyber-badge">12 months</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Vesting Duration</span>
                          <Badge className="cyber-badge">48 months</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Release Schedule</span>
                          <Badge className="cyber-badge">Linear</Badge>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: "25%" }}></div>
                        </div>
                        <p className="text-sm cyber-text-muted">
                          25% released after 12 months, then linear over 36 months
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="cyber-text-primary font-light">Private Sale Vesting</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Cliff Period</span>
                          <Badge className="cyber-badge">6 months</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Vesting Duration</span>
                          <Badge className="cyber-badge">24 months</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Release Schedule</span>
                          <Badge className="cyber-badge">Linear</Badge>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: "40%" }}></div>
                        </div>
                        <p className="text-sm cyber-text-muted">
                          20% at TGE, 20% after 6 months, then linear over 18 months
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="cyber-card cyber-glow p-6">
                    <h4 className="cyber-text-primary font-light mb-4">Circulating Supply Timeline</h4>
                    <div className="grid md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-light cyber-text-primary mb-2">15%</div>
                        <div className="cyber-text-muted text-sm">At Launch</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light cyber-text-primary mb-2">35%</div>
                        <div className="cyber-text-muted text-sm">Year 1</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light cyber-text-primary mb-2">65%</div>
                        <div className="cyber-text-muted text-sm">Year 2</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light cyber-text-primary mb-2">100%</div>
                        <div className="cyber-text-muted text-sm">Year 4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Token Economics */}
          <TabsContent value="economics" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="cyber-card cyber-slide-in">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light flex items-center">
                    <Calculator className="w-5 h-5 mr-2" />
                    Value Accrual Mechanisms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="cyber-card p-4">
                    <h5 className="cyber-text-primary font-light mb-2">Fee Buybacks</h5>
                    <p className="cyber-text-muted text-sm mb-2">
                      50% of protocol fees used for $PYT buybacks and burns, reducing supply and increasing scarcity.
                    </p>
                    <div className="cyber-text-primary text-sm">Estimated: $2-5M annually</div>
                  </div>

                  <div className="cyber-card p-4">
                    <h5 className="cyber-text-primary font-light mb-2">Staking Yield</h5>
                    <p className="cyber-text-muted text-sm mb-2">
                      Stakers receive protocol revenue share, creating sustainable yield for long-term holders.
                    </p>
                    <div className="cyber-text-primary text-sm">Target APY: 12-25%</div>
                  </div>

                  <div className="cyber-card p-4">
                    <h5 className="cyber-text-primary font-light mb-2">Utility Demand</h5>
                    <p className="cyber-text-muted text-sm mb-2">
                      Required for governance, yield boosting, and accessing premium features drives organic demand.
                    </p>
                    <div className="cyber-text-primary text-sm">Growing with platform adoption</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card cyber-slide-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Economic Projections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center cyber-card p-4">
                      <div className="text-2xl font-light cyber-text-primary mb-2">$500M</div>
                      <div className="cyber-text-muted text-sm">Year 1 TVL Target</div>
                    </div>
                    <div className="text-center cyber-card p-4">
                      <div className="text-2xl font-light cyber-text-primary mb-2">$5M</div>
                      <div className="cyber-text-muted text-sm">Annual Fee Revenue</div>
                    </div>
                    <div className="text-center cyber-card p-4">
                      <div className="text-2xl font-light cyber-text-primary mb-2">60%</div>
                      <div className="cyber-text-muted text-sm">Staking Participation</div>
                    </div>
                    <div className="text-center cyber-card p-4">
                      <div className="text-2xl font-light cyber-text-primary mb-2">$1.50</div>
                      <div className="cyber-text-muted text-sm">Year 2 Price Target</div>
                    </div>
                  </div>

                  <div className="cyber-card cyber-glow p-4">
                    <h5 className="cyber-text-primary font-light mb-3">Token Burn Schedule</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="cyber-text-muted text-sm">Quarterly Burns:</span>
                        <span className="cyber-text-primary text-sm">0.5-2% of supply</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted text-sm">Max Supply Reduction:</span>
                        <span className="cyber-text-primary text-sm">30% over 10 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted text-sm">Burn Trigger:</span>
                        <span className="cyber-text-primary text-sm">Protocol revenue milestones</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Launch Timeline */}
        <div className="text-center cyber-slide-in">
          <Card className="cyber-card cyber-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light cyber-text-primary mb-4">Token Launch Timeline</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center cyber-float">
                  <div className="text-3xl font-light cyber-text-primary mb-2 cyber-pulse">Q3 2025</div>
                  <div className="cyber-text-muted">Private Sale & Partnerships</div>
                  <Badge className="mt-2 cyber-badge">In Progress</Badge>
                </div>
                <div className="text-center cyber-float" style={{ animationDelay: "0.1s" }}>
                  <div className="text-3xl font-light cyber-text-primary mb-2 cyber-pulse">Aug 2025</div>
                  <div className="cyber-text-muted">Public Launch & TGE</div>
                  <Badge className="mt-2 cyber-badge">Upcoming</Badge>
                </div>
                <div className="text-center cyber-float" style={{ animationDelay: "0.2s" }}>
                  <div className="text-3xl font-light cyber-text-primary mb-2 cyber-pulse">Q4 2025</div>
                  <div className="cyber-text-muted">DAO Governance Live</div>
                  <Badge className="mt-2 cyber-badge">Planned</Badge>
                </div>
              </div>
              <Button className="mt-8 cyber-button">Join Token Sale Waitlist</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
