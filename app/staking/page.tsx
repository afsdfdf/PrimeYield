"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coins, TrendingUp, Clock, Zap, Lock, Unlock } from "lucide-react"
import Image from "next/image"

export default function Staking() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [unstakeAmount, setUnstakeAmount] = useState("")
  const [selectedPool, setSelectedPool] = useState("flexible")

  const stakingPools = [
    {
      id: "flexible",
      name: "Flexible Staking",
      apy: 8.5,
      lockPeriod: "None",
      minStake: 100,
      totalStaked: 2500000,
      userStaked: 5000,
      rewards: 127.5,
    },
    {
      id: "30day",
      name: "30-Day Lock",
      apy: 12.5,
      lockPeriod: "30 days",
      minStake: 500,
      totalStaked: 1800000,
      userStaked: 2500,
      rewards: 89.3,
    },
    {
      id: "90day",
      name: "90-Day Lock",
      apy: 18.2,
      lockPeriod: "90 days",
      minStake: 1000,
      totalStaked: 1200000,
      userStaked: 10000,
      rewards: 456.8,
    },
    {
      id: "governance",
      name: "Governance Staking",
      apy: 15.5,
      lockPeriod: "Variable",
      minStake: 1000,
      totalStaked: 3200000,
      userStaked: 12500,
      rewards: 612.5,
    },
  ]

  const currentPool = stakingPools.find((pool) => pool.id === selectedPool)

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
            <h1 className="text-5xl md:text-7xl font-light cyber-heading mb-6">PYT Staking</h1>
            <p className="text-xl cyber-text-secondary max-w-3xl mx-auto">
              Stake your PYT tokens to earn rewards and participate in protocol governance
            </p>
          </div>

          {/* Staking Interface Info */}
          <div className="mb-12 cyber-card cyber-glow rounded-2xl overflow-hidden max-w-4xl mx-auto p-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-light cyber-text-primary">Advanced Staking Platform</h2>
              <p className="text-lg cyber-text-secondary">
                Earn rewards by staking your PYT tokens in our flexible pools. Choose from variable lock periods 
                and earn up to 18.2% APY while participating in protocol governance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">Flexible Options</div>
                  <p className="cyber-text-muted">Multiple staking pools with different lock periods and APY rates</p>
                </div>
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">Governance Rights</div>
                  <p className="cyber-text-muted">Earn voting power by participating in governance staking</p>
                </div>
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">Real-time Rewards</div>
                  <p className="cyber-text-muted">Monitor your earnings and claim rewards at any time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Staking Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="cyber-card cyber-float">
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <Coins className="w-5 h-5" />
                  Total Staked
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">30,000 PYT</div>
                <div className="text-sm cyber-text-muted">$75,000 USD</div>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-float" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Total Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">1,286 PYT</div>
                <div className="text-sm cyber-text-muted">$3,215 USD</div>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-float" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Average APY
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">13.7%</div>
                <div className="text-sm cyber-text-muted">Weighted average</div>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-float" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Next Reward
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">2.5 PYT</div>
                <div className="text-sm cyber-text-muted">In 6 hours</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staking Pools */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 cyber-text-primary">Staking Pools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stakingPools.map((pool) => (
              <Card
                key={pool.id}
                className={`cursor-pointer transition-all ${
                  selectedPool === pool.id ? "cyber-card cyber-glow" : "cyber-card"
                }`}
                onClick={() => setSelectedPool(pool.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="cyber-text-primary font-light">{pool.name}</CardTitle>
                    <Badge className="cyber-badge">{pool.apy}% APY</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="cyber-text-muted text-sm">Lock Period</span>
                    <span className="cyber-text-primary text-sm">{pool.lockPeriod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="cyber-text-muted text-sm">Min Stake</span>
                    <span className="cyber-text-primary text-sm">{pool.minStake} PYT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="cyber-text-muted text-sm">Your Stake</span>
                    <span className="cyber-text-primary text-sm">{pool.userStaked.toLocaleString()} PYT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="cyber-text-muted text-sm">Rewards</span>
                    <span className="cyber-text-primary text-sm">{pool.rewards} PYT</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="cyber-text-muted">Pool Utilization</span>
                      <span className="cyber-text-primary">{((pool.totalStaked / 5000000) * 100).toFixed(1)}%</span>
                    </div>
                    <Progress value={(pool.totalStaked / 5000000) * 100} className="h-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Staking Interface */}
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="stake" className="w-full">
              <TabsList className="grid w-full grid-cols-3 cyber-card">
                <TabsTrigger
                  value="stake"
                  className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
                >
                  Stake Tokens
                </TabsTrigger>
                <TabsTrigger
                  value="unstake"
                  className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
                >
                  Unstake Tokens
                </TabsTrigger>
                <TabsTrigger
                  value="rewards"
                  className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
                >
                  Claim Rewards
                </TabsTrigger>
              </TabsList>

              <TabsContent value="stake" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light">Stake in {currentPool?.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="cyber-text-muted">Amount to Stake</Label>
                          <Input
                            value={stakeAmount}
                            onChange={(e) => setStakeAmount(e.target.value)}
                            className="bg-black border-cyan-500/30 text-cyan-300"
                            placeholder="Enter PYT amount"
                          />
                          <div className="flex justify-between mt-2 text-sm">
                            <span className="cyber-text-muted">Available: 50,000 PYT</span>
                            <Button
                              variant="link"
                              className="cyber-text-primary p-0 h-auto"
                              onClick={() => setStakeAmount("50000")}
                            >
                              Max
                            </Button>
                          </div>
                        </div>

                        <div className="cyber-card p-4">
                          <h5 className="cyber-text-primary font-light mb-3">Staking Details</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="cyber-text-muted text-sm">APY</span>
                              <span className="cyber-text-primary text-sm">{currentPool?.apy}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="cyber-text-muted text-sm">Lock Period</span>
                              <span className="cyber-text-primary text-sm">{currentPool?.lockPeriod}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="cyber-text-muted text-sm">Estimated Annual Rewards</span>
                              <span className="cyber-text-primary text-sm">
                                {stakeAmount
                                  ? ((Number.parseFloat(stakeAmount) * (currentPool?.apy || 0)) / 100).toFixed(2)
                                  : "0"}{" "}
                                PYT
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="cyber-text-muted text-sm">Daily Rewards</span>
                              <span className="cyber-text-primary text-sm">
                                {stakeAmount
                                  ? ((Number.parseFloat(stakeAmount) * (currentPool?.apy || 0)) / 100 / 365).toFixed(4)
                                  : "0"}{" "}
                                PYT
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full cyber-button"
                        disabled={!stakeAmount || Number.parseFloat(stakeAmount) < (currentPool?.minStake || 0)}
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        Stake {stakeAmount || "0"} PYT
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light">Pool Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Total Pool Size</span>
                          <span className="cyber-text-primary">{currentPool?.totalStaked.toLocaleString()} PYT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Your Current Stake</span>
                          <span className="cyber-text-primary">{currentPool?.userStaked.toLocaleString()} PYT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Pool Share</span>
                          <span className="cyber-text-primary">
                            {currentPool ? ((currentPool.userStaked / currentPool.totalStaked) * 100).toFixed(4) : "0"}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Minimum Stake</span>
                          <span className="cyber-text-primary">{currentPool?.minStake} PYT</span>
                        </div>
                      </div>

                      <div className="cyber-card p-4">
                        <h5 className="cyber-text-primary font-light mb-2">Reward Distribution</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Frequency</span>
                            <span className="cyber-text-primary">Every 6 hours</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Auto-compound</span>
                            <span className="cyber-text-primary">Optional</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="cyber-text-muted">Withdrawal Fee</span>
                            <span className="cyber-text-primary">0.5%</span>
                          </div>
                        </div>
                      </div>

                      <div className="cyber-card p-4">
                        <h5 className="cyber-text-primary font-light mb-2">Benefits</h5>
                        <ul className="space-y-1 text-sm cyber-text-muted">
                          <li>• Governance voting rights</li>
                          <li>• Protocol fee sharing</li>
                          <li>• Early access to new features</li>
                          <li>• Reduced platform fees</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="unstake" className="mt-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light">Unstake from {currentPool?.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="cyber-text-muted">Amount to Unstake</Label>
                          <Input
                            value={unstakeAmount}
                            onChange={(e) => setUnstakeAmount(e.target.value)}
                            className="bg-black border-cyan-500/30 text-cyan-300"
                            placeholder="Enter PYT amount"
                          />
                          <div className="flex justify-between mt-2 text-sm">
                            <span className="cyber-text-muted">
                              Staked: {currentPool?.userStaked.toLocaleString()} PYT
                            </span>
                            <Button
                              variant="link"
                              className="cyber-text-primary p-0 h-auto"
                              onClick={() => setUnstakeAmount(currentPool?.userStaked.toString() || "0")}
                            >
                              Max
                            </Button>
                          </div>
                        </div>

                        <div className="cyber-card p-4">
                          <h5 className="cyber-text-primary font-light mb-3">Unstaking Details</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="cyber-text-muted text-sm">Unstaking Fee</span>
                              <span className="cyber-text-primary text-sm">0.5%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="cyber-text-muted text-sm">Amount After Fee</span>
                              <span className="cyber-text-primary text-sm">
                                {unstakeAmount ? (Number.parseFloat(unstakeAmount) * 0.995).toFixed(2) : "0"} PYT
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="cyber-text-muted text-sm">Cooldown Period</span>
                              <span className="cyber-text-primary text-sm">
                                {currentPool?.lockPeriod === "None" ? "Instant" : currentPool?.lockPeriod}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="cyber-text-muted text-sm">Forfeited Rewards</span>
                              <span className="cyber-text-primary text-sm">
                                {currentPool?.lockPeriod === "None" ? "None" : "Partial"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full cyber-button"
                        disabled={!unstakeAmount || Number.parseFloat(unstakeAmount) > (currentPool?.userStaked || 0)}
                      >
                        <Unlock className="w-4 h-4 mr-2" />
                        Unstake {unstakeAmount || "0"} PYT
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light">Your Staking Positions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {stakingPools
                        .filter((pool) => pool.userStaked > 0)
                        .map((pool) => (
                          <div key={pool.id} className="cyber-card p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="cyber-text-primary font-light">{pool.name}</h5>
                              <Badge className="cyber-badge">{pool.apy}% APY</Badge>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="cyber-text-muted">Staked</span>
                                <span className="cyber-text-primary">{pool.userStaked.toLocaleString()} PYT</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="cyber-text-muted">Rewards</span>
                                <span className="cyber-text-primary">{pool.rewards} PYT</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="cyber-text-muted">Lock Status</span>
                                <span className="cyber-text-primary">
                                  {pool.lockPeriod === "None" ? "Unlocked" : "Locked"}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="rewards" className="mt-8">
                <div className="max-w-2xl mx-auto">
                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light text-center">Claim Staking Rewards</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-light cyber-text-primary mb-2">
                          {stakingPools.reduce((total, pool) => total + pool.rewards, 0).toFixed(2)} PYT
                        </div>
                        <div className="cyber-text-muted">Total Claimable Rewards</div>
                      </div>

                      <div className="space-y-4">
                        {stakingPools
                          .filter((pool) => pool.rewards > 0)
                          .map((pool) => (
                            <div key={pool.id} className="flex justify-between items-center cyber-card p-4">
                              <div>
                                <p className="cyber-text-primary font-light">{pool.name}</p>
                                <p className="cyber-text-muted text-sm">{pool.apy}% APY</p>
                              </div>
                              <div className="text-right">
                                <p className="cyber-text-primary">{pool.rewards} PYT</p>
                                <p className="cyber-text-muted text-sm">${(pool.rewards * 2.5).toFixed(2)} USD</p>
                              </div>
                            </div>
                          ))}
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full cyber-button">
                          <Coins className="w-4 h-4 mr-2" />
                          Claim All Rewards
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                        >
                          Auto-Compound Rewards
                        </Button>
                      </div>

                      <div className="cyber-card p-4">
                        <h5 className="cyber-text-primary font-light mb-2">Reward History</h5>
                        <div className="space-y-2">
                          {[
                            { date: "2025-01-07", amount: "2.5 PYT", pool: "Governance" },
                            { date: "2025-01-06", amount: "1.8 PYT", pool: "90-Day Lock" },
                            { date: "2025-01-05", amount: "0.9 PYT", pool: "Flexible" },
                            { date: "2025-01-04", amount: "1.2 PYT", pool: "30-Day Lock" },
                          ].map((reward, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="cyber-text-muted">
                                {reward.date} - {reward.pool}
                              </span>
                              <span className="cyber-text-primary">{reward.amount}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
