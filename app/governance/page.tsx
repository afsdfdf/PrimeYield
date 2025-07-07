"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Vote, Users, TrendingUp, Clock, CheckCircle, X } from "lucide-react"
import Image from "next/image"

export default function Governance() {
  const [userVotingPower, setUserVotingPower] = useState(12500)
  const [selectedProposal, setSelectedProposal] = useState(null)

  const proposals = [
    {
      id: 1,
      title: "Increase Platform Fee to 0.75%",
      description:
        "Proposal to increase the platform fee from 0.5% to 0.75% to fund additional security audits and platform improvements.",
      status: "active",
      votesFor: 75000,
      votesAgainst: 25000,
      totalVotes: 100000,
      timeLeft: "3 days",
      proposer: "PrimeYield Team",
      category: "Economic",
    },
    {
      id: 2,
      title: "Add Support for Tokenized Art",
      description: "Enable tokenization of fine art and collectibles as a new asset class on the platform.",
      status: "active",
      votesFor: 60000,
      votesAgainst: 40000,
      totalVotes: 100000,
      timeLeft: "1 week",
      proposer: "Community Member",
      category: "Product",
    },
    {
      id: 3,
      title: "Treasury Diversification Strategy",
      description: "Allocate 20% of protocol treasury to stablecoins and 10% to blue-chip DeFi tokens.",
      status: "passed",
      votesFor: 85000,
      votesAgainst: 15000,
      totalVotes: 100000,
      timeLeft: "Ended",
      proposer: "Treasury Committee",
      category: "Treasury",
    },
    {
      id: 4,
      title: "Implement Cross-Chain Bridge",
      description: "Deploy PrimeYield on Polygon and Arbitrum with cross-chain asset bridging capabilities.",
      status: "failed",
      votesFor: 35000,
      votesAgainst: 65000,
      totalVotes: 100000,
      timeLeft: "Ended",
      proposer: "Technical Team",
      category: "Technical",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "cyber-badge"
      case "passed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "failed":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "cyber-badge"
    }
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
            <h1 className="text-5xl md:text-7xl font-light cyber-heading mb-6">DAO Governance</h1>
            <p className="text-xl cyber-text-secondary max-w-3xl mx-auto">
              Shape the future of PrimeYield through decentralized governance and community voting
            </p>
          </div>

          {/* Governance Info */}
          <div className="mb-12 cyber-card cyber-glow rounded-2xl overflow-hidden max-w-4xl mx-auto p-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-light cyber-text-primary">Decentralized Governance</h2>
              <p className="text-lg cyber-text-secondary">
                Participate in shaping the future of PrimeYield Protocol through our DAO governance system.
                Vote on proposals, submit your ideas, and help drive the platform's evolution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">Democratic Voting</div>
                  <p className="cyber-text-muted">One token, one vote system with transparent decision-making</p>
                </div>
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">Community Proposals</div>
                  <p className="cyber-text-muted">Anyone can submit ideas and improvements for consideration</p>
                </div>
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">On-chain Execution</div>
                  <p className="cyber-text-muted">Passed proposals are implemented through on-chain execution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Governance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="cyber-card cyber-float">
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <Vote className="w-5 h-5" />
                  Your Voting Power
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">
                  {userVotingPower.toLocaleString()} PYT
                </div>
                <div className="text-sm cyber-text-muted">0.125% of total supply</div>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-float" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Active Voters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">2,847</div>
                <div className="text-sm cyber-text-muted">28.5% participation rate</div>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-float" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Proposals Passed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">23</div>
                <div className="text-sm cyber-text-muted">76% success rate</div>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-float" style={{ animationDelay: "0.3s" }}>
              <CardHeader className="pb-3">
                <CardTitle className="cyber-text-primary flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Active Proposals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">2</div>
                <div className="text-sm cyber-text-muted">Voting in progress</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proposals Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light text-center mb-12 cyber-text-primary">Governance Proposals</h2>

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-4 cyber-card">
              <TabsTrigger
                value="active"
                className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="passed"
                className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
              >
                Passed
              </TabsTrigger>
              <TabsTrigger
                value="failed"
                className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
              >
                Failed
              </TabsTrigger>
              <TabsTrigger
                value="all"
                className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
              >
                All
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="mt-8">
              <div className="space-y-6">
                {proposals
                  .filter((p) => p.status === "active")
                  .map((proposal) => (
                    <Card key={proposal.id} className="cyber-card">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="cyber-text-primary font-light">{proposal.title}</CardTitle>
                            <p className="cyber-text-muted mt-2">{proposal.description}</p>
                            <div className="flex items-center gap-4 mt-3">
                              <Badge className={getStatusColor(proposal.status)}>{proposal.status}</Badge>
                              <Badge variant="outline" className="cyber-border cyber-text-primary">
                                {proposal.category}
                              </Badge>
                              <span className="cyber-text-muted text-sm">by {proposal.proposer}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="cyber-text-primary font-light">{proposal.timeLeft}</div>
                            <div className="cyber-text-muted text-sm">remaining</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="cyber-text-muted">For</span>
                                <span className="cyber-text-primary">
                                  {proposal.votesFor.toLocaleString()} PYT (
                                  {((proposal.votesFor / proposal.totalVotes) * 100).toFixed(1)}%)
                                </span>
                              </div>
                              <Progress value={(proposal.votesFor / proposal.totalVotes) * 100} className="h-2" />
                            </div>
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="cyber-text-muted">Against</span>
                                <span className="cyber-text-primary">
                                  {proposal.votesAgainst.toLocaleString()} PYT (
                                  {((proposal.votesAgainst / proposal.totalVotes) * 100).toFixed(1)}%)
                                </span>
                              </div>
                              <Progress value={(proposal.votesAgainst / proposal.totalVotes) * 100} className="h-2" />
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <Button className="cyber-button flex-1">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Vote For
                            </Button>
                            <Button
                              variant="outline"
                              className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20 flex-1"
                            >
                              <X className="w-4 h-4 mr-2" />
                              Vote Against
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="passed" className="mt-8">
              <div className="space-y-6">
                {proposals
                  .filter((p) => p.status === "passed")
                  .map((proposal) => (
                    <Card key={proposal.id} className="cyber-card">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="cyber-text-primary font-light">{proposal.title}</CardTitle>
                            <p className="cyber-text-muted mt-2">{proposal.description}</p>
                            <div className="flex items-center gap-4 mt-3">
                              <Badge className={getStatusColor(proposal.status)}>{proposal.status}</Badge>
                              <Badge variant="outline" className="cyber-border cyber-text-primary">
                                {proposal.category}
                              </Badge>
                              <span className="cyber-text-muted text-sm">by {proposal.proposer}</span>
                            </div>
                          </div>
                          <CheckCircle className="w-8 h-8 text-green-400" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="cyber-text-muted">For</span>
                              <span className="cyber-text-primary">
                                {proposal.votesFor.toLocaleString()} PYT (
                                {((proposal.votesFor / proposal.totalVotes) * 100).toFixed(1)}%)
                              </span>
                            </div>
                            <Progress value={(proposal.votesFor / proposal.totalVotes) * 100} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="cyber-text-muted">Against</span>
                              <span className="cyber-text-primary">
                                {proposal.votesAgainst.toLocaleString()} PYT (
                                {((proposal.votesAgainst / proposal.totalVotes) * 100).toFixed(1)}%)
                              </span>
                            </div>
                            <Progress value={(proposal.votesAgainst / proposal.totalVotes) * 100} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="failed" className="mt-8">
              <div className="space-y-6">
                {proposals
                  .filter((p) => p.status === "failed")
                  .map((proposal) => (
                    <Card key={proposal.id} className="cyber-card">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="cyber-text-primary font-light">{proposal.title}</CardTitle>
                            <p className="cyber-text-muted mt-2">{proposal.description}</p>
                            <div className="flex items-center gap-4 mt-3">
                              <Badge className={getStatusColor(proposal.status)}>{proposal.status}</Badge>
                              <Badge variant="outline" className="cyber-border cyber-text-primary">
                                {proposal.category}
                              </Badge>
                              <span className="cyber-text-muted text-sm">by {proposal.proposer}</span>
                            </div>
                          </div>
                          <X className="w-8 h-8 text-red-400" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="cyber-text-muted">For</span>
                              <span className="cyber-text-primary">
                                {proposal.votesFor.toLocaleString()} PYT (
                                {((proposal.votesFor / proposal.totalVotes) * 100).toFixed(1)}%)
                              </span>
                            </div>
                            <Progress value={(proposal.votesFor / proposal.totalVotes) * 100} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="cyber-text-muted">Against</span>
                              <span className="cyber-text-primary">
                                {proposal.votesAgainst.toLocaleString()} PYT (
                                {((proposal.votesAgainst / proposal.totalVotes) * 100).toFixed(1)}%)
                              </span>
                            </div>
                            <Progress value={(proposal.votesAgainst / proposal.totalVotes) * 100} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="all" className="mt-8">
              <div className="space-y-6">
                {proposals.map((proposal) => (
                  <Card key={proposal.id} className="cyber-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="cyber-text-primary font-light">{proposal.title}</CardTitle>
                          <p className="cyber-text-muted mt-2">{proposal.description}</p>
                          <div className="flex items-center gap-4 mt-3">
                            <Badge className={getStatusColor(proposal.status)}>{proposal.status}</Badge>
                            <Badge variant="outline" className="cyber-border cyber-text-primary">
                              {proposal.category}
                            </Badge>
                            <span className="cyber-text-muted text-sm">by {proposal.proposer}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          {proposal.status === "active" ? (
                            <>
                              <div className="cyber-text-primary font-light">{proposal.timeLeft}</div>
                              <div className="cyber-text-muted text-sm">remaining</div>
                            </>
                          ) : proposal.status === "passed" ? (
                            <CheckCircle className="w-8 h-8 text-green-400" />
                          ) : (
                            <X className="w-8 h-8 text-red-400" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="cyber-text-muted">For</span>
                              <span className="cyber-text-primary">
                                {proposal.votesFor.toLocaleString()} PYT (
                                {((proposal.votesFor / proposal.totalVotes) * 100).toFixed(1)}%)
                              </span>
                            </div>
                            <Progress value={(proposal.votesFor / proposal.totalVotes) * 100} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="cyber-text-muted">Against</span>
                              <span className="cyber-text-primary">
                                {proposal.votesAgainst.toLocaleString()} PYT (
                                {((proposal.votesAgainst / proposal.totalVotes) * 100).toFixed(1)}%)
                              </span>
                            </div>
                            <Progress value={(proposal.votesAgainst / proposal.totalVotes) * 100} className="h-2" />
                          </div>
                        </div>
                        {proposal.status === "active" && (
                          <div className="flex gap-4">
                            <Button className="cyber-button flex-1">
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Vote For
                            </Button>
                            <Button
                              variant="outline"
                              className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20 flex-1"
                            >
                              <X className="w-4 h-4 mr-2" />
                              Vote Against
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Voting Power Section */}
      <section className="py-20 px-4 cyber-border-t">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-center mb-12 cyber-text-primary">Your Governance Power</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Staked PYT Tokens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-light cyber-text-primary mb-2">
                      {userVotingPower.toLocaleString()}
                    </div>
                    <div className="cyber-text-muted">PYT Tokens Staked</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="cyber-text-muted">Voting Power</span>
                      <span className="cyber-text-primary">0.125%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted">Staking Rewards</span>
                      <span className="cyber-text-primary">15.5% APY</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted">Lock Period</span>
                      <span className="cyber-text-primary">30 days</span>
                    </div>
                  </div>
                  <Button className="w-full cyber-button">Stake More PYT</Button>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Voting History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="cyber-text-muted">Proposals Voted</span>
                      <span className="cyber-text-primary">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted">Participation Rate</span>
                      <span className="cyber-text-primary">93.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted">Proposals Created</span>
                      <span className="cyber-text-primary">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="cyber-text-muted">Delegation Status</span>
                      <span className="cyber-text-primary">Self-Voting</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                  >
                    Create Proposal
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
