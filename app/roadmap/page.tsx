"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, Rocket, Building, Globe, Hexagon } from "lucide-react"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen cyber-grid">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 cyber-slide-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Hexagon className="w-12 h-12 cyber-text-primary cyber-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light cyber-heading mb-6">Development Roadmap</h1>
          <p className="text-xl cyber-text-secondary max-w-4xl mx-auto leading-relaxed">
            Our strategic roadmap outlines the phased development and deployment of PrimeYield Protocol, ensuring robust
            infrastructure and sustainable growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {/* Phase 1 */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 cyber-button rounded-full mr-4">
                <Rocket className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-light cyber-text-primary">Phase 1: Foundation & Core Protocol Launch</h2>
                <p className="cyber-text-muted">Q3 2025 - Q4 2025</p>
              </div>
              <Badge className="ml-auto bg-green-500/20 text-green-400 border-green-500/50">In Progress</Badge>
            </div>

            <Card className="cyber-card ml-16">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="cyber-text-secondary">Smart Contract Development & Audits</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="cyber-text-secondary">Testnet Deployment</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 cyber-text-primary mr-3" />
                      <span className="cyber-text-secondary">Legal Framework Establishment</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 cyber-text-primary mr-3" />
                      <span className="cyber-text-secondary">Core Team Expansion</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">Initial RWA Onboarding</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">PrimeYield DApp (Alpha)</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">Community Building & Awareness</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">Initial Exchange Listing (DEX & CEX)</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 cyber-card cyber-glow p-4">
                  <h4 className="font-light cyber-text-primary mb-2">Key Milestone: Exchange Listing</h4>
                  <p className="cyber-text-secondary text-sm">
                    Target date: <strong>August 6, 2025</strong> - Initial $PYT token listing on select exchanges with
                    $10M+ in tokenized assets.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 cyber-border rounded-full mr-4">
                <Building className="w-6 h-6 cyber-text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-light cyber-text-secondary">
                  Phase 2: Platform Expansion & Ecosystem Growth
                </h2>
                <p className="cyber-text-muted">Q1 2026 - Q2 2026</p>
              </div>
              <Badge variant="outline" className="ml-auto cyber-badge">
                Planned
              </Badge>
            </div>

            <Card className="cyber-card ml-16">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">Expanded RWA Asset Classes</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">Advanced DApp Features</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">Decentralized Governance (DAO Launch)</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">Oracle Integration Enhancement</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">Strategic Partnerships</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">Global Regulatory Outreach</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">RWA Marketplace Launch</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-secondary">DeFi Protocol Integrations</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 cyber-card p-4">
                  <h4 className="font-light cyber-text-primary mb-2">Target: $500M TVL</h4>
                  <p className="cyber-text-secondary text-sm">
                    Expand to intellectual property royalties, sustainable infrastructure, and achieve break-even
                    profitability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 cyber-border rounded-full mr-4">
                <Globe className="w-6 h-6 cyber-text-muted" />
              </div>
              <div>
                <h2 className="text-2xl font-light cyber-text-muted">
                  Phase 3: Interoperability & Institutional Adoption
                </h2>
                <p className="cyber-text-muted">Q3 2026 and Beyond</p>
              </div>
              <Badge variant="outline" className="ml-auto cyber-badge">
                Future
              </Badge>
            </div>

            <Card className="cyber-card ml-16">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-muted">Cross-Chain RWA Tokenization</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-muted">Institutional Onboarding Solutions</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-muted">Advanced Financial Products</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-muted">Secondary Market Development</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-muted">Global Expansion</span>
                    </div>
                    <div className="flex items-center">
                      <Circle className="w-5 h-5 cyber-text-muted mr-3" />
                      <span className="cyber-text-muted">Research & Development</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 cyber-card p-4">
                  <h4 className="font-light cyber-text-primary mb-2">Vision: $10B+ AUM</h4>
                  <p className="cyber-text-secondary text-sm">
                    Establish market leadership with institutional-grade solutions and cross-chain interoperability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-20">
          <h2 className="text-3xl font-light cyber-text-primary text-center mb-12">Projected Growth Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="cyber-card text-center">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">2025 Q4</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">$10M</div>
                <div className="cyber-text-muted">Assets Under Management</div>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">2026 Q2</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">$500M</div>
                <div className="cyber-text-muted">Assets Under Management</div>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">2026 Q4</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">$1B</div>
                <div className="cyber-text-muted">Assets Under Management</div>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">2027+</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-light cyber-text-primary mb-2">$10B+</div>
                <div className="cyber-text-muted">Market Leadership</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="cyber-card cyber-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light cyber-text-primary mb-4">Join Our Journey</h3>
              <p className="cyber-text-secondary mb-6 max-w-2xl mx-auto">
                Be part of the revolution that's transforming how we tokenize and invest in real-world assets. Follow
                our progress and get involved in the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50 px-4 py-2">
                  Phase 1 Active - Join Now
                </Badge>
                <Badge variant="outline" className="cyber-badge px-4 py-2">
                  Target Launch: Aug 2025
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
