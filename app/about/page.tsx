"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Users, Globe, Target, Award, Briefcase, ChevronRight, Hexagon } from "lucide-react"

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [counters, setCounters] = useState({ aum: 0, growth: 0, institutions: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCounters((prev) => ({
        aum: prev.aum < 128 ? prev.aum + 2 : 128,
        growth: prev.growth < 260 ? prev.growth + 5 : 260,
        institutions: prev.institutions < 50 ? prev.institutions + 1 : 50,
      }))
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const sections = [
    { id: 0, title: "Our Mission", icon: Target },
    { id: 1, title: "Our Vision", icon: Globe },
    { id: 2, title: "Core Values", icon: Shield },
    { id: 3, title: "Team", icon: Users },
  ]

  return (
    <div className="min-h-screen cyber-grid">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 cyber-slide-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Hexagon className="w-12 h-12 cyber-text-primary cyber-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light cyber-heading mb-6">About PrimeYield Protocol</h1>
          <p className="text-xl cyber-text-secondary max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of institutional-grade real-world asset tokenization through innovative technology and
            unwavering commitment to transparency.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="cyber-card text-center cyber-slide-in">
            <CardContent className="p-8">
              <div className="text-4xl font-light cyber-text-primary mb-2 cyber-glow">${counters.aum}B+</div>
              <div className="cyber-text-muted">RWA Market Size</div>
              <div className="text-sm cyber-text-muted mt-2">Total Addressable Market</div>
            </CardContent>
          </Card>

          <Card className="cyber-card text-center cyber-slide-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <div className="text-4xl font-light cyber-text-primary mb-2 cyber-glow">{counters.growth}%</div>
              <div className="cyber-text-muted">YoY Growth</div>
              <div className="text-sm cyber-text-muted mt-2">Market Expansion Rate</div>
            </CardContent>
          </Card>

          <Card className="cyber-card text-center cyber-slide-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <div className="text-4xl font-light cyber-text-primary mb-2 cyber-glow">{counters.institutions}+</div>
              <div className="cyber-text-muted">Institutions</div>
              <div className="text-sm cyber-text-muted mt-2">Early Adopters</div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Section Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                onClick={() => setActiveSection(section.id)}
                className={
                  activeSection === section.id
                    ? "cyber-button"
                    : "cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                }
              >
                <section.icon className="w-4 h-4 mr-2" />
                {section.title}
              </Button>
            ))}
          </div>

          {/* Mission */}
          {activeSection === 0 && (
            <Card className="cyber-card cyber-slide-in">
              <CardHeader>
                <CardTitle className="cyber-text-primary text-2xl font-light flex items-center">
                  <Target className="w-6 h-6 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="cyber-text-secondary leading-relaxed text-lg">
                  To democratize access to high-value real-world assets by creating a secure, transparent, and legally
                  compliant platform that seamlessly integrates traditional assets with the power of blockchain
                  technology and decentralized finance.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="cyber-card p-4">
                    <h4 className="cyber-text-primary font-light mb-2">Accessibility</h4>
                    <p className="cyber-text-muted text-sm">
                      Breaking down barriers to high-value investments through fractional ownership and global
                      accessibility.
                    </p>
                  </div>
                  <div className="cyber-card p-4">
                    <h4 className="cyber-text-primary font-light mb-2">Innovation</h4>
                    <p className="cyber-text-muted text-sm">
                      Leveraging cutting-edge blockchain technology to revolutionize traditional asset management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Vision */}
          {activeSection === 1 && (
            <Card className="cyber-card cyber-slide-in">
              <CardHeader>
                <CardTitle className="cyber-text-primary text-2xl font-light flex items-center">
                  <Globe className="w-6 h-6 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="cyber-text-secondary leading-relaxed text-lg">
                  To become the leading platform for real-world asset tokenization, unlocking trillions of dollars in
                  previously illiquid assets and creating a more inclusive, efficient, and transparent global financial
                  system.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center cyber-card p-4">
                    <div className="text-2xl font-light cyber-text-primary mb-2">$10T+</div>
                    <div className="cyber-text-muted text-sm">Assets to Tokenize</div>
                  </div>
                  <div className="text-center cyber-card p-4">
                    <div className="text-2xl font-light cyber-text-primary mb-2">100+</div>
                    <div className="cyber-text-muted text-sm">Countries</div>
                  </div>
                  <div className="text-center cyber-card p-4">
                    <div className="text-2xl font-light cyber-text-primary mb-2">1M+</div>
                    <div className="cyber-text-muted text-sm">Investors</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Core Values */}
          {activeSection === 2 && (
            <div className="grid md:grid-cols-3 gap-6 cyber-slide-in">
              <Card className="cyber-card text-center cyber-float">
                <CardHeader>
                  <Shield className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                  <CardTitle className="cyber-text-primary font-light">Security First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-muted">
                    Multi-layer security audits, institutional-grade custody, and comprehensive insurance coverage
                    protect all assets and investments.
                  </p>
                </CardContent>
              </Card>

              <Card className="cyber-card text-center cyber-float" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <Users className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                  <CardTitle className="cyber-text-primary font-light">Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-muted">
                    Complete transparency in asset management, yield distribution, and governance decisions through
                    blockchain technology.
                  </p>
                </CardContent>
              </Card>

              <Card className="cyber-card text-center cyber-float" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <Globe className="w-12 h-12 cyber-text-primary mx-auto mb-4" />
                  <CardTitle className="cyber-text-primary font-light">Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-muted">
                    Breaking down barriers to high-value investments through fractional ownership and global
                    accessibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Team */}
          {activeSection === 3 && (
            <div className="space-y-8 cyber-slide-in">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary text-2xl font-light flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    Leadership Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        name: "Sarah Chen",
                        role: "CEO & Co-Founder",
                        background: "Former Goldman Sachs VP, Harvard MBA",
                        expertise: "Traditional Finance, Strategy",
                      },
                      {
                        name: "Marcus Rodriguez",
                        role: "CTO & Co-Founder",
                        background: "Ex-Ethereum Foundation, MIT PhD",
                        expertise: "Blockchain Architecture, Smart Contracts",
                      },
                      {
                        name: "Dr. Emily Watson",
                        role: "Chief Legal Officer",
                        background: "Securities Law Expert, Stanford JD",
                        expertise: "Regulatory Compliance, Legal Framework",
                      },
                      {
                        name: "David Kim",
                        role: "Head of Product",
                        background: "Former Coinbase PM, Berkeley CS",
                        expertise: "Product Strategy, User Experience",
                      },
                      {
                        name: "Lisa Thompson",
                        role: "Head of Partnerships",
                        background: "Ex-BlackRock, Wharton MBA",
                        expertise: "Institutional Relations, Asset Management",
                      },
                      {
                        name: "Alex Johnson",
                        role: "Head of Security",
                        background: "Former Chainalysis, Cybersecurity Expert",
                        expertise: "Security Audits, Risk Management",
                      },
                    ].map((member, index) => (
                      <Card key={index} className="cyber-card">
                        <CardContent className="p-6">
                          <div className="w-16 h-16 cyber-border rounded-full mx-auto mb-4 flex items-center justify-center">
                            <Briefcase className="w-8 h-8 cyber-text-primary" />
                          </div>
                          <h4 className="cyber-text-primary font-light text-center mb-1">{member.name}</h4>
                          <p className="cyber-text-muted text-sm text-center mb-2">{member.role}</p>
                          <p className="cyber-text-muted text-xs text-center mb-2">{member.background}</p>
                          <Badge className="w-full justify-center cyber-badge">{member.expertise}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary text-2xl font-light flex items-center">
                    <Award className="w-6 h-6 mr-3" />
                    Advisory Board
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "Robert Sterling",
                        role: "Former SEC Commissioner",
                        expertise: "Regulatory Strategy",
                      },
                      {
                        name: "Dr. Jennifer Liu",
                        role: "Blockchain Research Director",
                        expertise: "Technical Innovation",
                      },
                      {
                        name: "Michael Brown",
                        role: "Real Estate Investment Veteran",
                        expertise: "Asset Management",
                      },
                      {
                        name: "Anna Kowalski",
                        role: "DeFi Protocol Founder",
                        expertise: "Decentralized Finance",
                      },
                    ].map((advisor, index) => (
                      <div key={index} className="flex items-center cyber-card p-4">
                        <div className="w-12 h-12 cyber-border rounded-full mr-4 flex items-center justify-center">
                          <Award className="w-6 h-6 cyber-text-primary" />
                        </div>
                        <div>
                          <h4 className="cyber-text-primary font-light">{advisor.name}</h4>
                          <p className="cyber-text-muted text-sm">{advisor.role}</p>
                          <Badge className="mt-1 cyber-badge text-xs">{advisor.expertise}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center cyber-slide-in">
          <Card className="cyber-card cyber-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light cyber-text-primary mb-4">Join Our Mission</h3>
              <p className="cyber-text-muted mb-6 max-w-2xl mx-auto">
                Be part of the revolution that's transforming how we invest in and manage real-world assets through the
                power of blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="cyber-button">
                  Join Our Community
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                >
                  View Careers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
