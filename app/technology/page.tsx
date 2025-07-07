"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Globe, Lock, Database, Network, Hexagon } from "lucide-react"

export default function TechnologyPage() {
  return (
    <div className="min-h-screen cyber-grid">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 cyber-slide-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Hexagon className="w-12 h-12 cyber-text-primary cyber-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light cyber-heading mb-6">Technology Architecture</h1>
          <p className="text-xl cyber-text-secondary max-w-4xl mx-auto leading-relaxed">
            PrimeYield Protocol leverages cutting-edge blockchain technology and robust infrastructure to ensure secure,
            scalable, and compliant RWA tokenization.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-light cyber-text-primary text-center mb-12">System Architecture</h2>
          <div className="grid lg:grid-cols-4 gap-6">
            <Card className="cyber-card text-center cyber-float">
              <CardHeader>
                <Network className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                <CardTitle className="cyber-text-primary font-light">Blockchain Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="cyber-text-muted text-sm">
                  EVM-compatible foundation on Ethereum L2 or Polygon for security and scalability.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center cyber-float" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <Database className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                <CardTitle className="cyber-text-primary font-light">Oracle Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="cyber-text-muted text-sm">
                  Chainlink integration for secure off-chain data feeds and asset valuations.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center cyber-float" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <Lock className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                <CardTitle className="cyber-text-primary font-light">Asset Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="cyber-text-muted text-sm">
                  Off-chain legal entities and custodians for physical asset management.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card text-center cyber-float" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <Globe className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                <CardTitle className="cyber-text-primary font-light">Application Layer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="cyber-text-muted text-sm">
                  User-friendly DApp and APIs for seamless interaction with the protocol.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="cyber-text-primary font-light">Blockchain Infrastructure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-light cyber-text-primary mb-2">Primary Networks</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="cyber-badge">Ethereum L2 (Arbitrum)</Badge>
                  <Badge className="cyber-badge">Optimism</Badge>
                  <Badge className="cyber-badge">Polygon</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-light cyber-text-primary mb-2">Smart Contract Standards</h4>
                <ul className="cyber-text-secondary text-sm space-y-1">
                  <li>• ERC-20 for $PYT utility token</li>
                  <li>• ERC-1400 for security tokens</li>
                  <li>• ERC-721/1155 for unique assets</li>
                  <li>• Custom compliance modules</li>
                </ul>
              </div>
              <div>
                <h4 className="font-light cyber-text-primary mb-2">Security Features</h4>
                <ul className="cyber-text-secondary text-sm space-y-1">
                  <li>• Multi-signature wallets</li>
                  <li>• Time-lock mechanisms</li>
                  <li>• Emergency pause functionality</li>
                  <li>• Upgradeable proxy patterns</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="cyber-text-primary font-light">Oracle & Data Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-light cyber-text-primary mb-2">Chainlink Oracles</h4>
                <ul className="cyber-text-secondary text-sm space-y-1">
                  <li>• Asset valuation feeds</li>
                  <li>• Income stream verification</li>
                  <li>• Compliance status updates</li>
                  <li>• Market data integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-light cyber-text-primary mb-2">Data Sources</h4>
                <ul className="cyber-text-secondary text-sm space-y-1">
                  <li>• Independent appraisers</li>
                  <li>• Financial auditors</li>
                  <li>• Legal compliance firms</li>
                  <li>• Market data providers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-light cyber-text-primary mb-2">Update Frequency</h4>
                <ul className="cyber-text-secondary text-sm space-y-1">
                  <li>• Real-time for market data</li>
                  <li>• Daily for income streams</li>
                  <li>• Monthly for valuations</li>
                  <li>• As-needed for compliance</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-light cyber-text-primary text-center mb-12">Security & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="cyber-card">
              <CardHeader>
                <Shield className="w-8 h-8 cyber-text-primary mb-2" />
                <CardTitle className="cyber-text-primary font-light">Smart Contract Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="cyber-text-secondary text-sm space-y-2">
                  <li>• Multiple third-party audits</li>
                  <li>• Formal verification methods</li>
                  <li>• Bug bounty programs</li>
                  <li>• Continuous monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Lock className="w-8 h-8 cyber-text-primary mb-2" />
                <CardTitle className="cyber-text-primary font-light">Asset Custody</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="cyber-text-secondary text-sm space-y-2">
                  <li>• Regulated custodians</li>
                  <li>• Insurance coverage</li>
                  <li>• Legal title protection</li>
                  <li>• Regular audits</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="cyber-card">
              <CardHeader>
                <Database className="w-8 h-8 cyber-text-primary mb-2" />
                <CardTitle className="cyber-text-primary font-light">Compliance Framework</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="cyber-text-secondary text-sm space-y-2">
                  <li>• KYC/AML procedures</li>
                  <li>• Regulatory reporting</li>
                  <li>• Multi-jurisdiction compliance</li>
                  <li>• Privacy protection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Performance & Scalability */}
        <div className="mb-16">
          <h2 className="text-3xl font-light cyber-text-primary text-center mb-12">Performance Metrics</h2>
          <Card className="cyber-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-light cyber-text-primary mb-2">1000+</div>
                  <div className="cyber-text-secondary">TPS Capacity</div>
                  <div className="cyber-text-muted text-sm">Transactions per second</div>
                </div>
                <div>
                  <div className="text-3xl font-light cyber-text-primary mb-2">{"<$0.01"}</div>
                  <div className="cyber-text-secondary">Transaction Cost</div>
                  <div className="cyber-text-muted text-sm">Average gas fees</div>
                </div>
                <div>
                  <div className="text-3xl font-light cyber-text-primary mb-2">{"<2s"}</div>
                  <div className="cyber-text-secondary">Block Time</div>
                  <div className="cyber-text-muted text-sm">Transaction finality</div>
                </div>
                <div>
                  <div className="text-3xl font-light cyber-text-primary mb-2">99.9%</div>
                  <div className="cyber-text-secondary">Uptime</div>
                  <div className="cyber-text-muted text-sm">Network availability</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Integration Capabilities */}
        <div className="text-center">
          <Card className="cyber-card cyber-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light cyber-text-primary mb-4">Built for Integration</h3>
              <p className="cyber-text-secondary mb-6 max-w-2xl mx-auto">
                PrimeYield Protocol is designed with interoperability in mind, enabling seamless integration with
                existing DeFi protocols and traditional financial systems.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <Badge variant="outline" className="cyber-badge p-3">
                  DeFi Protocol APIs
                </Badge>
                <Badge variant="outline" className="cyber-badge p-3">
                  Traditional Finance Bridges
                </Badge>
                <Badge variant="outline" className="cyber-badge p-3">
                  Cross-Chain Compatibility
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
