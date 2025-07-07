"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Upload,
  FileText,
  CheckCircle,
  Clock,
  Building2,
  Coins,
  Shield,
  Globe,
  ArrowRight,
  Eye,
  Download,
} from "lucide-react"
import Image from "next/image"

export default function TokenizationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [assetType, setAssetType] = useState("")
  const [formData, setFormData] = useState({
    assetName: "",
    assetValue: "",
    description: "",
    location: "",
    expectedYield: "",
  })

  const steps = [
    { id: 1, title: "Asset Information", icon: FileText },
    { id: 2, title: "Legal Structure", icon: Shield },
    { id: 3, title: "Due Diligence", icon: Eye },
    { id: 4, title: "Smart Contract", icon: Coins },
    { id: 5, title: "Launch", icon: Globe },
  ]

  const assetTypes = [
    { value: "real-estate", label: "Commercial Real Estate", icon: Building2 },
    { value: "private-credit", label: "Private Credit", icon: Coins },
    { value: "infrastructure", label: "Infrastructure", icon: Shield },
    { value: "ip", label: "Intellectual Property", icon: FileText },
  ]

  return (
    <div className="min-h-screen cyber-grid">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 cyber-slide-in">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Image
              src="/primeyield-logo.svg"
              alt="PrimeYield Logo"
              width={48}
              height={48}
              className="rounded-lg cyber-pulse"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-light cyber-heading mb-6">Asset Tokenization Platform</h1>
          <p className="text-xl cyber-text-secondary max-w-4xl mx-auto leading-relaxed">
            Transform your real-world assets into blockchain-based tokens with institutional-grade compliance and
            security
          </p>

          {/* Process Overview Image */}
          <div className="mt-12 cyber-card cyber-glow rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <Image
              src="/tokenization-process.svg"
              alt="Tokenization Process Overview"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    currentStep >= step.id
                      ? "cyber-button text-black"
                      : currentStep === step.id
                        ? "cyber-border cyber-text-primary"
                        : "cyber-border cyber-text-muted"
                  }`}
                >
                  {currentStep > step.id ? <CheckCircle className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                </div>
                <span
                  className={`text-sm font-light ${currentStep >= step.id ? "cyber-text-primary" : "cyber-text-muted"}`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute w-24 h-0.5 mt-6 ml-24 ${
                      currentStep > step.id ? "bg-cyan-400" : "bg-cyan-500/20"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="cyber-progress">
            <div className="cyber-progress-bar" style={{ width: `${(currentStep / steps.length) * 100}%` }}></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Asset Information */}
          {currentStep === 1 && (
            <Card className="cyber-card cyber-slide-in">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">Asset Information</CardTitle>
                <p className="cyber-text-muted">Provide basic information about your asset</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="cyber-text-muted">Asset Type</Label>
                      <Select value={assetType} onValueChange={setAssetType}>
                        <SelectTrigger className="bg-black border-cyan-500/30 text-cyan-300">
                          <SelectValue placeholder="Select asset type" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-cyan-500/30">
                          {assetTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value} className="text-cyan-300">
                              <div className="flex items-center">
                                <type.icon className="w-4 h-4 mr-2" />
                                {type.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="cyber-text-muted">Asset Name</Label>
                      <Input
                        value={formData.assetName}
                        onChange={(e) => setFormData({ ...formData, assetName: e.target.value })}
                        className="bg-black border-cyan-500/30 text-cyan-300"
                        placeholder="Enter asset name"
                      />
                    </div>

                    <div>
                      <Label className="cyber-text-muted">Asset Value (USD)</Label>
                      <Input
                        value={formData.assetValue}
                        onChange={(e) => setFormData({ ...formData, assetValue: e.target.value })}
                        className="bg-black border-cyan-500/30 text-cyan-300"
                        placeholder="Enter total asset value"
                      />
                    </div>

                    <div>
                      <Label className="cyber-text-muted">Location</Label>
                      <Input
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-black border-cyan-500/30 text-cyan-300"
                        placeholder="Asset location"
                      />
                    </div>

                    <div>
                      <Label className="cyber-text-muted">Expected Annual Yield (%)</Label>
                      <Input
                        value={formData.expectedYield}
                        onChange={(e) => setFormData({ ...formData, expectedYield: e.target.value })}
                        className="bg-black border-cyan-500/30 text-cyan-300"
                        placeholder="Expected yield percentage"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="cyber-text-muted">Asset Description</Label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="bg-black border-cyan-500/30 text-cyan-300 h-32"
                        placeholder="Detailed description of the asset"
                      />
                    </div>

                    <div>
                      <Label className="cyber-text-muted">Upload Documents</Label>
                      <div className="cyber-border rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 cyber-text-primary mx-auto mb-2" />
                        <p className="cyber-text-muted text-sm">
                          Upload property deeds, financial statements, appraisals
                        </p>
                        <Button
                          variant="outline"
                          className="mt-2 cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                        >
                          Choose Files
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => setCurrentStep(2)}
                    className="cyber-button"
                    disabled={!assetType || !formData.assetName || !formData.assetValue}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Legal Structure */}
          {currentStep === 2 && (
            <Card className="cyber-card cyber-slide-in">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">Legal Structure & Compliance</CardTitle>
                <p className="cyber-text-muted">Set up legal framework and compliance requirements</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-3">SPV Creation</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">Delaware LLC Formation</span>
                          <Badge className="bg-green-500/20 text-green-400">Completed</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">Operating Agreement</span>
                          <Badge className="cyber-badge">In Progress</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">Tax Structure Setup</span>
                          <Badge className="cyber-badge">Pending</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-3">Regulatory Compliance</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">SEC Registration</span>
                          <Badge className="cyber-badge">Required</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">KYC/AML Setup</span>
                          <Badge className="cyber-badge">In Progress</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">Investor Accreditation</span>
                          <Badge className="cyber-badge">Pending</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-3">Legal Documentation</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="cyber-text-muted text-sm">Asset Purchase Agreement</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 cyber-text-primary" />
                          <span className="cyber-text-muted text-sm">Token Purchase Agreement</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 cyber-text-primary" />
                          <span className="cyber-text-muted text-sm">Custody Agreement</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 cyber-text-primary" />
                          <span className="cyber-text-muted text-sm">Management Agreement</span>
                        </div>
                      </div>
                    </div>

                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-3">Estimated Costs</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="cyber-text-muted text-sm">Legal Setup</span>
                          <span className="cyber-text-primary text-sm">$25,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted text-sm">Compliance</span>
                          <span className="cyber-text-primary text-sm">$15,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted text-sm">Documentation</span>
                          <span className="cyber-text-primary text-sm">$10,000</span>
                        </div>
                        <div className="border-t border-cyan-500/20 pt-2 mt-2">
                          <div className="flex justify-between font-light">
                            <span className="cyber-text-primary">Total</span>
                            <span className="cyber-text-primary">$50,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    onClick={() => setCurrentStep(1)}
                    variant="outline"
                    className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                  >
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(3)} className="cyber-button">
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Due Diligence */}
          {currentStep === 3 && (
            <Card className="cyber-card cyber-slide-in">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">Due Diligence & Valuation</CardTitle>
                <p className="cyber-text-muted">Independent verification and asset valuation process</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light text-lg">Asset Appraisal</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Independent Appraiser</span>
                        <Badge className="bg-green-500/20 text-green-400">Assigned</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Market Analysis</span>
                        <Badge className="cyber-badge">In Progress</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Valuation Report</span>
                        <Badge className="cyber-badge">Pending</Badge>
                      </div>
                      <div className="pt-3 border-t border-cyan-500/20">
                        <p className="cyber-text-primary text-sm">Estimated: 5-7 days</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light text-lg">Legal Review</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Title Search</span>
                        <Badge className="bg-green-500/20 text-green-400">Completed</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Lien Check</span>
                        <Badge className="bg-green-500/20 text-green-400">Clear</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Compliance Review</span>
                        <Badge className="cyber-badge">In Progress</Badge>
                      </div>
                      <div className="pt-3 border-t border-cyan-500/20">
                        <p className="cyber-text-primary text-sm">Estimated: 3-5 days</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light text-lg">Financial Audit</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Income Verification</span>
                        <Badge className="cyber-badge">In Progress</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Expense Analysis</span>
                        <Badge className="cyber-badge">Pending</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Cash Flow Model</span>
                        <Badge className="cyber-badge">Pending</Badge>
                      </div>
                      <div className="pt-3 border-t border-cyan-500/20">
                        <p className="cyber-text-primary text-sm">Estimated: 7-10 days</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Preliminary Valuation Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Market Value</span>
                          <span className="cyber-text-primary font-light">$48,500,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Income Approach</span>
                          <span className="cyber-text-primary font-light">$51,200,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Cost Approach</span>
                          <span className="cyber-text-primary font-light">$47,800,000</span>
                        </div>
                        <div className="flex justify-between border-t border-cyan-500/20 pt-2">
                          <span className="cyber-text-primary">Average Valuation</span>
                          <span className="cyber-text-primary font-light">$49,167,000</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Annual Net Income</span>
                          <span className="cyber-text-primary font-light">$4,180,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Cap Rate</span>
                          <span className="cyber-text-primary font-light">8.5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted">Occupancy Rate</span>
                          <span className="cyber-text-primary font-light">94%</span>
                        </div>
                        <div className="flex justify-between border-t border-cyan-500/20 pt-2">
                          <span className="cyber-text-primary">Risk Rating</span>
                          <Badge className="bg-green-500/20 text-green-400">Low-Medium</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button
                    onClick={() => setCurrentStep(2)}
                    variant="outline"
                    className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                  >
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(4)} className="cyber-button">
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Smart Contract */}
          {currentStep === 4 && (
            <Card className="cyber-card cyber-slide-in">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">Smart Contract Deployment</CardTitle>
                <p className="cyber-text-muted">Configure and deploy tokenization smart contracts</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-3">Token Configuration</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="cyber-text-muted text-sm">Token Standard</span>
                          <span className="cyber-text-primary text-sm">ERC-1400</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted text-sm">Total Supply</span>
                          <span className="cyber-text-primary text-sm">49,167,000 tokens</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted text-sm">Token Price</span>
                          <span className="cyber-text-primary text-sm">$1.00 USD</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="cyber-text-muted text-sm">Min. Investment</span>
                          <span className="cyber-text-primary text-sm">$1,000</span>
                        </div>
                      </div>
                    </div>

                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-3">Compliance Features</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="cyber-text-muted text-sm">KYC/AML Integration</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="cyber-text-muted text-sm">Transfer Restrictions</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="cyber-text-muted text-sm">Accredited Investor Only</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="cyber-text-muted text-sm">Automated Distributions</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-3">Deployment Status</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">Contract Compilation</span>
                          <Badge className="bg-green-500/20 text-green-400">Completed</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">Security Audit</span>
                          <Badge className="cyber-badge">In Progress</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">Testnet Deployment</span>
                          <Badge className="cyber-badge">Pending</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="cyber-text-muted text-sm">Mainnet Deployment</span>
                          <Badge className="cyber-badge">Pending</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="cyber-card p-4">
                      <h4 className="cyber-text-primary font-light mb-3">Oracle Integration</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="cyber-text-muted text-sm">Chainlink Price Feeds</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 cyber-text-primary" />
                          <span className="cyber-text-muted text-sm">Income Verification</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 cyber-text-primary" />
                          <span className="cyber-text-muted text-sm">Valuation Updates</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 cyber-text-primary" />
                          <span className="cyber-text-muted text-sm">Compliance Monitoring</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Contract Address & Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div>
                          <Label className="cyber-text-muted text-sm">Contract Address (Testnet)</Label>
                          <div className="flex items-center space-x-2 mt-1">
                            <code className="cyber-text-primary text-sm bg-black p-2 rounded border border-cyan-500/20 flex-1">
                              0x742d35Cc6634C0532925a3b8D4C9db...
                            </code>
                            <Button
                              size="sm"
                              variant="outline"
                              className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div>
                          <Label className="cyber-text-muted text-sm">Network</Label>
                          <p className="cyber-text-primary">Arbitrum Sepolia</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Label className="cyber-text-muted text-sm">Gas Estimate</Label>
                          <p className="cyber-text-primary">~2.5M gas (~$45 USD)</p>
                        </div>
                        <div>
                          <Label className="cyber-text-muted text-sm">Deployment ETA</Label>
                          <p className="cyber-text-primary">2-3 business days</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button
                    onClick={() => setCurrentStep(3)}
                    variant="outline"
                    className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                  >
                    Back
                  </Button>
                  <Button onClick={() => setCurrentStep(5)} className="cyber-button">
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Launch */}
          {currentStep === 5 && (
            <Card className="cyber-card cyber-slide-in">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">Asset Launch & Marketing</CardTitle>
                <p className="cyber-text-muted">Prepare for public launch and investor onboarding</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center cyber-card cyber-glow p-8">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-light cyber-text-primary mb-2">Tokenization Complete!</h3>
                  <p className="cyber-text-muted mb-6">
                    Your asset has been successfully tokenized and is ready for launch
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <p className="text-3xl font-light cyber-text-primary mb-1">$49.2M</p>
                      <p className="cyber-text-muted text-sm">Asset Value</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-light cyber-text-primary mb-1">49.2M</p>
                      <p className="cyber-text-muted text-sm">Tokens Created</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-light cyber-text-primary mb-1">8.5%</p>
                      <p className="cyber-text-muted text-sm">Expected Yield</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="cyber-button">
                      Launch Asset
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Reports
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light">Marketing Materials</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Investment Deck</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Asset Summary</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Legal Documents</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Financial Projections</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cyber-card">
                    <CardHeader>
                      <CardTitle className="cyber-text-primary font-light">Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="cyber-text-muted text-sm">Set up investor portal</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="cyber-text-muted text-sm">Configure KYC/AML process</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="cyber-text-muted text-sm">Launch marketing campaign</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="cyber-text-muted text-sm">Begin investor outreach</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="cyber-text-muted text-sm">Monitor asset performance</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-between">
                  <Button
                    onClick={() => setCurrentStep(4)}
                    variant="outline"
                    className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                  >
                    Back
                  </Button>
                  <Button onClick={() => (window.location.href = "/app")} className="cyber-button">
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
