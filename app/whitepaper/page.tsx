"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, ExternalLink, Shield, Building2, TrendingUp, Users, Hexagon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [isTocSticky, setIsTocSticky] = useState(false)

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduction",
        "problem-statement",
        "solution",
        "architecture",
        "legal",
        "tokenomics",
        "governance",
        "roadmap",
        "risk",
        "conclusion"
      ]

      // Make TOC sticky after scrolling past the header
      if (window.scrollY > 400) {
        setIsTocSticky(true)
      } else {
        setIsTocSticky(false)
      }

      // Find the current active section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen cyber-grid">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 cyber-slide-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Hexagon className="w-12 h-12 cyber-text-primary cyber-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light cyber-heading mb-6">PrimeYield Protocol Whitepaper</h1>
          <p className="text-xl cyber-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
            Bridging Real-World Assets with Decentralized Finance Through Institutional-Grade Tokenization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cyber-button">
              <Download className="mr-2 w-4 h-4" />
              Download PDF
            </Button>
            <Button variant="outline" className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20">
              <ExternalLink className="mr-2 w-4 h-4" />
              View on GitHub
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sticky Table of Contents */}
          <div className={`hidden lg:block ${isTocSticky ? 'sticky top-20' : ''}`}>
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="cyber-text-primary flex items-center font-light">
                  <FileText className="mr-2 w-5 h-5" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div
                    onClick={() => scrollToSection("introduction")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "introduction" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    1. Introduction & Market Overview
                  </div>
                  <div
                    onClick={() => scrollToSection("problem-statement")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "problem-statement" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    2. Problem Statement & Market Gaps
                  </div>
                  <div
                    onClick={() => scrollToSection("solution")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "solution" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    3. PrimeYield Protocol Solution
                  </div>
                  <div
                    onClick={() => scrollToSection("architecture")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "architecture" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    4. Technical Architecture
                  </div>
                  <div
                    onClick={() => scrollToSection("legal")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "legal" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    5. Legal & Regulatory Framework
                  </div>
                  <div
                    onClick={() => scrollToSection("tokenomics")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "tokenomics" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    6. Tokenomics & Token Utility
                  </div>
                  <div
                    onClick={() => scrollToSection("governance")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "governance" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    7. Governance & DAO Structure
                  </div>
                  <div
                    onClick={() => scrollToSection("roadmap")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "roadmap" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    8. Development Roadmap
                  </div>
                  <div
                    onClick={() => scrollToSection("risk")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "risk" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    9. Risk Assessment & Mitigation
                  </div>
                  <div
                    onClick={() => scrollToSection("conclusion")}
                    className={`cursor-pointer transition-colors ${
                      activeSection === "conclusion" 
                        ? "cyber-text-primary" 
                        : "cyber-text-muted hover:text-cyan-300"
                    }`}
                  >
                    10. Conclusion & Future Outlook
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Executive Summary */}
            <section className="mb-16">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-2xl cyber-text-primary font-light">Executive Summary</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <p className="cyber-text-secondary leading-relaxed mb-4">
                    The global financial system stands at an inflection point. While decentralized finance (DeFi) has
                    demonstrated remarkable innovation in creating permissionless, transparent, and efficient financial
                    protocols, it remains largely disconnected from the $300+ trillion real-world asset economy. PrimeYield
                    Protocol addresses this critical gap by providing institutional-grade infrastructure for tokenizing,
                    managing, and trading real-world assets on-chain.
                  </p>
                  <p className="cyber-text-secondary leading-relaxed mb-4">
                    Our protocol enables the seamless tokenization of high-value assets including commercial real estate,
                    private credit, infrastructure projects, and intellectual property. Through a combination of robust
                    legal frameworks, advanced smart contract architecture, and comprehensive compliance systems, PrimeYield
                    Protocol unlocks unprecedented liquidity and accessibility for traditionally illiquid assets.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center cyber-card p-4">
                      <div className="text-3xl font-light cyber-text-primary mb-2">$128B+</div>
                      <div className="cyber-text-muted">Current RWA Market</div>
                    </div>
                    <div className="text-center cyber-card p-4">
                      <div className="text-3xl font-light cyber-text-primary mb-2">260%</div>
                      <div className="cyber-text-muted">YoY Growth Rate</div>
                    </div>
                    <div className="text-center cyber-card p-4">
                      <div className="text-3xl font-light cyber-text-primary mb-2">$1T+</div>
                      <div className="cyber-text-muted">Addressable Market</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-2xl cyber-text-primary font-light">
                    1. Introduction & Market Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <p className="cyber-text-secondary leading-relaxed mb-4">
                    The financial landscape is undergoing a profound transformation, driven by the convergence of
                    traditional finance (TradFi) and decentralized finance (DeFi). While DeFi has demonstrated immense
                    potential for innovation, accessibility, and transparency, its growth has often been limited by its
                    detachment from the vast and stable real-world economy.
                  </p>
                  <p className="cyber-text-secondary leading-relaxed mb-4">
                    Real-World Assets (RWAs) represent the next frontier in this evolution, offering a pathway to onboard
                    tangible and intangible assets from the physical world onto the blockchain, unlocking unprecedented
                    liquidity, efficiency, and investment opportunities.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-4">Market Drivers</h4>
                      <ul className="space-y-2 cyber-text-muted">
                        <li>• Institutional demand for yield-generating assets</li>
                        <li>• Regulatory clarity in major jurisdictions</li>
                        <li>• Technological maturity of blockchain infrastructure</li>
                        <li>• Growing acceptance of tokenized securities</li>
                      </ul>
                    </div>
                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-4">Key Opportunities</h4>
                      <ul className="space-y-2 cyber-text-muted">
                        <li>• $300T+ global real estate market</li>
                        <li>• $50T+ private credit market</li>
                        <li>• $100T+ infrastructure investment needs</li>
                        <li>• Growing IP monetization market</li>
                      </ul>
                    </div>
                  </div>

                  <p className="cyber-text-secondary leading-relaxed">
                    PrimeYield Protocol emerges as a pioneering force in this burgeoning RWA sector. Our mission is to
                    seamlessly bridge high-value, income-generating real-world assets with the decentralized financial
                    ecosystem, creating a robust and transparent platform for tokenization, fractionalization, and yield
                    generation.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Problem Statement */}
            <section id="problem-statement" className="mb-12">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-2xl cyber-text-primary font-light">
                    2. Problem Statement & Market Gaps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-secondary leading-relaxed mb-6">
                    Despite the immense potential of Real-World Assets (RWAs) in the blockchain space, several significant
                    challenges hinder their widespread adoption and seamless integration with DeFi:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="cyber-card p-4">
                        <div className="flex items-center mb-3">
                          <Shield className="w-6 h-6 cyber-text-primary mr-3" />
                          <h3 className="text-xl font-light cyber-text-primary">Legal & Regulatory Complexity</h3>
                        </div>
                        <p className="cyber-text-secondary leading-relaxed">
                          Tokenizing RWAs involves navigating complex legal jurisdictions, property laws, securities
                          regulations, and tax implications. Current solutions lack comprehensive legal frameworks that
                          ensure enforceability and compliance across multiple jurisdictions.
                        </p>
                      </div>

                      <div className="cyber-card p-4">
                        <div className="flex items-center mb-3">
                          <Building2 className="w-6 h-6 cyber-text-primary mr-3" />
                          <h3 className="text-xl font-light cyber-text-primary">Off-Chain Asset Management</h3>
                        </div>
                        <p className="cyber-text-secondary leading-relaxed">
                          RWAs exist in the physical world, requiring robust mechanisms for custody, maintenance, and
                          ongoing verification. This includes secure custody, accurate valuation, existence verification,
                          and legal enforceability of tokenized representations.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="cyber-card p-4">
                        <div className="flex items-center mb-3">
                          <TrendingUp className="w-6 h-6 cyber-text-primary mr-3" />
                          <h3 className="text-xl font-light cyber-text-primary">Liquidity Fragmentation</h3>
                        </div>
                        <p className="cyber-text-secondary leading-relaxed">
                          Many high-value RWAs are inherently illiquid in traditional markets. The nascent RWA market
                          on-chain suffers from fragmentation across various platforms and limited trading pairs, leading to
                          inefficient price discovery and poor user experience.
                        </p>
                      </div>

                      <div className="cyber-card p-4">
                        <div className="flex items-center mb-3">
                          <Users className="w-6 h-6 cyber-text-primary mr-3" />
                          <h3 className="text-xl font-light cyber-text-primary">Lack of Standardization</h3>
                        </div>
                        <p className="cyber-text-secondary leading-relaxed">
                          The RWA tokenization space lacks universally accepted technical and legal standards, making it
                          difficult for investors to assess risks and for protocols to integrate diverse RWA types
                          seamlessly. This creates barriers to institutional adoption.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 cyber-card cyber-glow p-6">
                    <h4 className="cyber-text-primary font-light mb-4">Market Impact</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-light cyber-text-primary mb-2">$2.3T</div>
                        <div className="cyber-text-muted">Locked in illiquid assets</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light cyber-text-primary mb-2">15-25%</div>
                        <div className="cyber-text-muted">Liquidity discount</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light cyber-text-primary mb-2">$500B+</div>
                        <div className="cyber-text-muted">Annual opportunity cost</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Solution */}
            <section id="solution" className="mb-12">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-2xl cyber-text-primary font-light">3. PrimeYield Protocol Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-secondary leading-relaxed mb-6">
                    PrimeYield Protocol is designed as a comprehensive, end-to-end solution for the tokenization,
                    management, and utilization of Real-World Assets within the decentralized finance ecosystem. Our
                    protocol addresses each of the identified market gaps through innovative technology and robust legal
                    frameworks.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <Card className="cyber-card">
                      <CardHeader>
                        <CardTitle className="cyber-text-primary font-light">Supported Asset Classes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="cyber-card p-3">
                            <h5 className="cyber-text-primary font-light mb-2">Commercial Real Estate</h5>
                            <p className="cyber-text-muted text-sm">
                              Office buildings, retail centers, industrial properties
                            </p>
                          </div>
                          <div className="cyber-card p-3">
                            <h5 className="cyber-text-primary font-light mb-2">Private Credit & Loans</h5>
                            <p className="cyber-text-muted text-sm">SME loans, trade finance, structured credit</p>
                          </div>
                          <div className="cyber-card p-3">
                            <h5 className="cyber-text-primary font-light mb-2">Infrastructure Projects</h5>
                            <p className="cyber-text-muted text-sm">Renewable energy, transportation, utilities</p>
                          </div>
                          <div className="cyber-card p-3">
                            <h5 className="cyber-text-primary font-light mb-2">Intellectual Property</h5>
                            <p className="cyber-text-muted text-sm">Patents, royalties, licensing agreements</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="cyber-card">
                      <CardHeader>
                        <CardTitle className="cyber-text-primary font-light">Core Protocol Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="cyber-card p-3">
                            <h5 className="cyber-text-primary font-light mb-2">Legal Structuring & Compliance</h5>
                            <p className="cyber-text-muted text-sm">SPV creation, regulatory compliance, KYC/AML</p>
                          </div>
                          <div className="cyber-card p-3">
                            <h5 className="cyber-text-primary font-light mb-2">Due Diligence & Valuation</h5>
                            <p className="cyber-text-muted text-sm">Independent appraisals, risk assessment</p>
                          </div>
                          <div className="cyber-card p-3">
                            <h5 className="cyber-text-primary font-light mb-2">Smart Contract Tokenization</h5>
                            <p className="cyber-text-muted text-sm">ERC-1400 security tokens, automated compliance</p>
                          </div>
                          <div className="cyber-card p-3">
                            <h5 className="cyber-text-primary font-light mb-2">Automated Income Distribution</h5>
                            <p className="cyber-text-muted text-sm">Real-time yield distribution, transparent reporting</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-light cyber-text-primary">PrimeYield Token Utility Framework</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Badge variant="secondary" className="cyber-badge p-3 text-center">
                        Protocol Fee Collection
                      </Badge>
                      <Badge variant="secondary" className="cyber-badge p-3 text-center">
                        Staking & Yield Rewards
                      </Badge>
                      <Badge variant="secondary" className="cyber-badge p-3 text-center">
                        DAO Governance Rights
                      </Badge>
                      <Badge variant="secondary" className="cyber-badge p-3 text-center">
                        Yield Amplification
                      </Badge>
                      <Badge variant="secondary" className="cyber-badge p-3 text-center">
                        Liquidity Mining Incentives
                      </Badge>
                      <Badge variant="secondary" className="cyber-badge p-3 text-center">
                        Collateral for DeFi
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-8 cyber-card cyber-glow p-6">
                    <h4 className="cyber-text-primary font-light mb-4">Competitive Advantages</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="cyber-text-primary font-light mb-2">Institutional-Grade Infrastructure</h5>
                        <p className="cyber-text-muted text-sm">
                          Built from the ground up with enterprise security, compliance, and scalability requirements
                        </p>
                      </div>
                      <div>
                        <h5 className="cyber-text-primary font-light mb-2">Comprehensive Legal Framework</h5>
                        <p className="cyber-text-muted text-sm">
                          Multi-jurisdiction compliance with established legal precedents and regulatory clarity
                        </p>
                      </div>
                      <div>
                        <h5 className="cyber-text-primary font-light mb-2">Advanced Oracle Integration</h5>
                        <p className="cyber-text-muted text-sm">
                          Real-time asset valuation and income verification through Chainlink and custom oracles
                        </p>
                      </div>
                      <div>
                        <h5 className="cyber-text-primary font-light mb-2">Cross-Chain Compatibility</h5>
                        <p className="cyber-text-muted text-sm">
                          Multi-chain deployment for maximum liquidity and accessibility across DeFi ecosystems
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Technical Architecture - New Section */}
            <section id="architecture" className="mb-12">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-2xl cyber-text-primary font-light">4. Technical Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-secondary leading-relaxed mb-6">
                    PrimeYield Protocol's architecture is built on a modular, upgradeable framework that ensures security,
                    scalability, and interoperability across multiple blockchain networks. Our technical stack combines
                    battle-tested smart contract patterns with innovative solutions for RWA-specific challenges.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="cyber-card p-6">
                        <h4 className="cyber-text-primary font-light mb-3">Smart Contract Architecture</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Asset Tokenization Layer</h5>
                            <p className="cyber-text-muted text-sm">
                              ERC-1400 compliant security tokens with transfer restrictions, investor qualification checks,
                              and regulatory compliance features. Each asset class has specialized token contracts that handle
                              unique requirements for that asset type.
                            </p>
                          </div>
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Registry & Identity Layer</h5>
                            <p className="cyber-text-muted text-sm">
                              Maintains on-chain records of asset ownership, investor accreditation status, and compliance
                              requirements. Integrates with decentralized identity solutions for KYC/AML verification while
                              preserving privacy.
                            </p>
                          </div>
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Governance Layer</h5>
                            <p className="cyber-text-muted text-sm">
                              DAO-based governance system for protocol upgrades, parameter adjustments, and asset onboarding
                              decisions. Time-locked execution and multi-signature security for critical operations.
                            </p>
                          </div>
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Finance Layer</h5>
                            <p className="cyber-text-muted text-sm">
                              Yield distribution, fee collection, and revenue sharing mechanisms. Automated treasury
                              management and liquidity provision for RWA tokens.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="cyber-card p-6">
                        <h4 className="cyber-text-primary font-light mb-3">Security Infrastructure</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Audit & Verification</h5>
                            <p className="cyber-text-muted text-sm">
                              All smart contracts undergo rigorous auditing by multiple independent security firms.
                              Formal verification of critical components ensures mathematical correctness.
                            </p>
                          </div>
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Tiered Access Control</h5>
                            <p className="cyber-text-muted text-sm">
                              Role-based permissions with multi-signature requirements for administrative functions.
                              Time-locked upgrades with transparent proposal and review processes.
                            </p>
                          </div>
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Emergency Protocols</h5>
                            <p className="cyber-text-muted text-sm">
                              Circuit breakers and pause mechanisms to mitigate risks during extreme market conditions
                              or security incidents. Decentralized monitoring and alert systems.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="cyber-card p-6">
                        <h4 className="cyber-text-primary font-light mb-3">Oracle & Data Systems</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Asset Valuation Oracles</h5>
                            <p className="cyber-text-muted text-sm">
                              Decentralized oracle networks provide real-time valuation data from multiple independent
                              appraisers and market sources. Outlier detection and consensus mechanisms ensure accuracy.
                            </p>
                          </div>
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Income Verification</h5>
                            <p className="cyber-text-muted text-sm">
                              Automated tracking and verification of income generated by underlying assets. Integration
                              with traditional financial reporting systems and bank APIs for real-time data.
                            </p>
                          </div>
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Legal Event Monitoring</h5>
                            <p className="cyber-text-muted text-sm">
                              Tracking of relevant legal events affecting tokenized assets, including ownership transfers,
                              regulatory changes, and compliance requirements.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="cyber-card p-6">
                        <h4 className="cyber-text-primary font-light mb-3">Interoperability Framework</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">Cross-Chain Bridges</h5>
                            <p className="cyber-text-muted text-sm">
                              Secure bridging infrastructure for RWA tokens across Ethereum, Polygon, Avalanche, and other
                              EVM-compatible networks. Atomic swaps and state verification ensure consistency.
                            </p>
                          </div>
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">DeFi Integrations</h5>
                            <p className="cyber-text-muted text-sm">
                              Standardized interfaces for integrating RWA tokens with lending protocols, DEXs, yield
                              aggregators, and other DeFi primitives. Adapter contracts handle protocol-specific requirements.
                            </p>
                          </div>
                          <div>
                            <h5 className="cyber-text-primary font-light mb-1">API & SDK Suite</h5>
                            <p className="cyber-text-muted text-sm">
                              Comprehensive development tools for building applications on top of the PrimeYield Protocol.
                              GraphQL API for data querying and event subscriptions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cyber-card cyber-glow p-6 mt-8">
                    <h4 className="cyber-text-primary font-light mb-4">Technical Implementation Roadmap</h4>
                    <div className="grid md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="cyber-text-primary font-light mb-2">Q2 2025</div>
                        <div className="cyber-text-muted text-sm">Core Protocol Launch</div>
                      </div>
                      <div>
                        <div className="cyber-text-primary font-light mb-2">Q3 2025</div>
                        <div className="cyber-text-muted text-sm">Multi-chain Expansion</div>
                      </div>
                      <div>
                        <div className="cyber-text-primary font-light mb-2">Q4 2025</div>
                        <div className="cyber-text-muted text-sm">DeFi Integration Suite</div>
                      </div>
                      <div>
                        <div className="cyber-text-primary font-light mb-2">Q1 2026</div>
                        <div className="cyber-text-muted text-sm">Full DAO Governance</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Legal & Regulatory Framework - New Section */}
            <section id="legal" className="mb-12">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-2xl cyber-text-primary font-light">5. Legal & Regulatory Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-secondary leading-relaxed mb-6">
                    PrimeYield Protocol operates within a comprehensive legal framework designed to ensure compliance with
                    securities laws, property regulations, and financial requirements across multiple jurisdictions. Our
                    approach combines traditional legal structures with blockchain innovation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-3">Legal Structure</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Special Purpose Vehicles (SPVs)</h5>
                          <p className="cyber-text-muted text-sm">
                            Each tokenized asset is held by a dedicated legal entity (SPV) that maintains clear ownership
                            rights and responsibilities. SPVs are structured to provide bankruptcy remoteness and legal
                            isolation of individual assets.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Trust Arrangements</h5>
                          <p className="cyber-text-muted text-sm">
                            Independent trustees oversee asset management and ensure compliance with legal requirements.
                            Trust deeds establish clear rights and obligations for all parties involved.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Legal Enforceability</h5>
                          <p className="cyber-text-muted text-sm">
                            Smart contracts are paired with traditional legal agreements that establish the relationship
                            between on-chain tokens and underlying real-world rights. These agreements are enforceable in
                            relevant jurisdictions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-3">Regulatory Compliance</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Securities Compliance</h5>
                          <p className="cyber-text-muted text-sm">
                            Tokenized assets are structured to comply with securities regulations in target jurisdictions,
                            utilizing appropriate exemptions and registration pathways as required.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">KYC/AML Framework</h5>
                          <p className="cyber-text-muted text-sm">
                            Comprehensive Know Your Customer and Anti-Money Laundering procedures for all participants.
                            On-chain compliance verification while preserving privacy where possible.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Tax Optimization</h5>
                          <p className="cyber-text-muted text-sm">
                            Efficient tax structures for international investors, with automated reporting and withholding
                            mechanisms. Clear documentation of income sources and capital gains.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cyber-card p-6 mt-8">
                    <h4 className="cyber-text-primary font-light mb-3">Jurisdictional Approach</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="cyber-text-primary font-light mb-1">Tier 1: Full Support</h5>
                        <p className="cyber-text-muted text-sm">
                          Singapore, Switzerland, UAE, Luxembourg - Complete legal framework and regulatory approvals
                        </p>
                      </div>
                      <div>
                        <h5 className="cyber-text-primary font-light mb-1">Tier 2: Partial Support</h5>
                        <p className="cyber-text-muted text-sm">
                          UK, EU, US (accredited) - Available with additional compliance requirements
                        </p>
                      </div>
                      <div>
                        <h5 className="cyber-text-primary font-light mb-1">Tier 3: Roadmap</h5>
                        <p className="cyber-text-muted text-sm">
                          Japan, Australia, Canada - In regulatory discussion, planned for future expansion
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Tokenomics & Token Utility - New Section */}
            <section id="tokenomics" className="mb-12">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-2xl cyber-text-primary font-light">6. Tokenomics & Token Utility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-secondary leading-relaxed mb-6">
                    The PrimeYield Token is designed as a multi-utility token that aligns incentives among all ecosystem 
                    participants while capturing value from protocol growth. The token economics are structured to ensure 
                    long-term sustainability and value accrual.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-3">Token Distribution</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Ecosystem Development</span>
                          <Badge className="cyber-badge">35%</Badge>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: "35%" }}></div>
                        </div>
                        <p className="text-sm cyber-text-muted mt-1">
                          350M Tokens - Grants, partnerships, liquidity incentives
                        </p>

                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Community & Treasury</span>
                          <Badge className="cyber-badge">25%</Badge>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: "25%" }}></div>
                        </div>
                        <p className="text-sm cyber-text-muted mt-1">
                          250M Tokens - DAO treasury, community initiatives
                        </p>

                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Team & Advisors</span>
                          <Badge className="cyber-badge">20%</Badge>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: "20%" }}></div>
                        </div>
                        <p className="text-sm cyber-text-muted mt-1">
                          200M Tokens - 4-year vesting, 1-year cliff
                        </p>

                        <div className="flex justify-between items-center">
                          <span className="cyber-text-muted">Private & Public Sale</span>
                          <Badge className="cyber-badge">20%</Badge>
                        </div>
                        <div className="cyber-progress">
                          <div className="cyber-progress-bar" style={{ width: "20%" }}></div>
                        </div>
                        <p className="text-sm cyber-text-muted mt-1">
                          200M Tokens - Strategic investors and public distribution
                        </p>
                      </div>
                    </div>

                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-3">Token Utility</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Governance Rights</h5>
                          <p className="cyber-text-muted text-sm">
                            Token holders can vote on protocol upgrades, parameter adjustments, asset onboarding, and treasury
                            allocations. Voting power is proportional to token holdings with optional time-locking multipliers.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Fee Sharing</h5>
                          <p className="cyber-text-muted text-sm">
                            50% of all protocol fees are distributed to token stakers, creating a sustainable yield mechanism
                            tied directly to platform usage and growth.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Access & Discounts</h5>
                          <p className="cyber-text-muted text-sm">
                            Token holders receive preferential access to new asset offerings, reduced fees, and higher yield
                            opportunities based on their tier level.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Liquidity Provision</h5>
                          <p className="cyber-text-muted text-sm">
                            Tokens can be staked in liquidity pools to earn additional rewards while supporting efficient
                            trading of RWA tokens across multiple platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="cyber-card p-6 mt-8">
                    <h4 className="cyber-text-primary font-light mb-3">Value Accrual Mechanisms</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="cyber-text-primary font-light mb-1">Fee Buybacks</h5>
                        <p className="cyber-text-muted text-sm">
                          30% of protocol fees are used to buy back tokens from the market, creating consistent demand
                          and reducing circulating supply.
                        </p>
                      </div>
                      <div>
                        <h5 className="cyber-text-primary font-light mb-1">Deflationary Mechanisms</h5>
                        <p className="cyber-text-muted text-sm">
                          Tokens used for certain premium features are partially burned, creating a deflationary pressure
                          that increases with protocol adoption.
                        </p>
                      </div>
                      <div>
                        <h5 className="cyber-text-primary font-light mb-1">Treasury Growth</h5>
                        <p className="cyber-text-muted text-sm">
                          20% of fees are allocated to the protocol treasury, which is used for strategic investments,
                          partnerships, and ecosystem development.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Governance & DAO Structure - New Section */}
            <section id="governance" className="mb-12">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-2xl cyber-text-primary font-light">7. Governance & DAO Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="cyber-text-secondary leading-relaxed mb-6">
                    PrimeYield Protocol is governed by a Decentralized Autonomous Organization (DAO) that enables token holders
                    to collectively manage the protocol. The governance system is designed to balance decentralization with
                    operational efficiency and security.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-3">Governance Framework</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Proposal System</h5>
                          <p className="cyber-text-muted text-sm">
                            Any token holder with sufficient tokens (100K minimum) can submit governance proposals. Proposals
                            undergo a structured process including discussion, formal submission, voting, and implementation.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Voting Mechanism</h5>
                          <p className="cyber-text-muted text-sm">
                            Token-weighted voting with optional time-locking for increased voting power. Snapshot-based
                            off-chain voting for gas efficiency with on-chain execution of passed proposals.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Delegation</h5>
                          <p className="cyber-text-muted text-sm">
                            Token holders can delegate their voting power to trusted community members or specialized delegates
                            who focus on specific aspects of governance (e.g., technical, legal, financial).
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-3">Governance Scopes</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Protocol Parameters</h5>
                          <p className="cyber-text-muted text-sm">
                            Fee structures, staking rewards, collateralization ratios, and other economic parameters that
                            affect protocol operation.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Asset Onboarding</h5>
                          <p className="cyber-text-muted text-sm">
                            Approval of new asset types, risk assessment frameworks, and specific high-value assets for
                            tokenization on the platform.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Treasury Management</h5>
                          <p className="cyber-text-muted text-sm">
                            Allocation of treasury funds for grants, partnerships, liquidity provision, and other strategic
                            initiatives to grow the ecosystem.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Protocol Upgrades</h5>
                          <p className="cyber-text-muted text-sm">
                            Technical improvements, smart contract upgrades, and new feature implementations to enhance
                            the protocol's capabilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-3">Governance Councils</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Technical Council</h5>
                          <p className="cyber-text-muted text-sm">
                            Elected experts who review and provide recommendations on technical proposals, ensuring security
                            and technical feasibility.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Risk Council</h5>
                          <p className="cyber-text-muted text-sm">
                            Specialists who assess risk parameters for assets and provide analysis on potential protocol
                            vulnerabilities and mitigations.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Legal Council</h5>
                          <p className="cyber-text-muted text-sm">
                            Legal experts who ensure governance decisions comply with relevant regulations and provide
                            guidance on legal implications.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="cyber-card p-6">
                      <h4 className="cyber-text-primary font-light mb-3">Governance Safeguards</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Timelock Mechanisms</h5>
                          <p className="cyber-text-muted text-sm">
                            All governance actions are subject to a timelock period (24-72 hours depending on impact) before
                            execution, allowing for community review and emergency intervention if necessary.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Quorum Requirements</h5>
                          <p className="cyber-text-muted text-sm">
                            Minimum participation thresholds (4% of total supply) ensure decisions have sufficient community
                            backing. Higher thresholds apply for critical decisions.
                          </p>
                        </div>
                        <div>
                          <h5 className="cyber-text-primary font-light mb-1">Emergency Procedures</h5>
                          <p className="cyber-text-muted text-sm">
                            Defined processes for handling critical security issues, including an emergency multisig that can
                            pause specific functions in case of detected vulnerabilities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Download CTA */}
            <div className="text-center mt-16">
              <Card className="cyber-card cyber-glow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-light cyber-text-primary mb-4">Complete Whitepaper Available</h3>
                  <p className="cyber-text-muted mb-6">
                    Download the full 45-page whitepaper for detailed technical specifications, legal framework analysis,
                    comprehensive tokenomics, risk assessment, and complete implementation roadmap.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="cyber-button">
                      <Download className="mr-2 w-4 h-4" />
                      Download Full Whitepaper (PDF)
                    </Button>
                    <Link href="/demo">
                      <Button
                        variant="outline"
                        className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                      >
                        Try Interactive Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
