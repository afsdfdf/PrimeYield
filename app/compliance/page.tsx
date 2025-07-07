"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertTriangle, Clock, FileText, Upload, Download, RefreshCw, Search } from "lucide-react"
import Image from "next/image"

export default function CompliancePage() {
  const [kycStatus, setKycStatus] = useState("pending")
  const [amlScore, setAmlScore] = useState(85)

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
          <h1 className="text-4xl md:text-6xl font-light cyber-heading mb-6">Compliance Center</h1>
          <p className="text-xl cyber-text-secondary max-w-4xl mx-auto leading-relaxed">
            Comprehensive KYC/AML compliance and regulatory monitoring for institutional-grade security
          </p>

          {/* Compliance Dashboard Info - replaced image with text-based content */}
          <div className="mt-12 cyber-card cyber-glow rounded-2xl overflow-hidden max-w-4xl mx-auto p-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-light cyber-text-primary">Enterprise-Grade Compliance Solutions</h2>
              <p className="text-lg cyber-text-secondary">
                PrimeYield's compliance dashboard provides institutional-grade KYC/AML solutions, real-time transaction monitoring, 
                and comprehensive regulatory reporting tools to ensure full adherence to global financial regulations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">KYC Verification</div>
                  <p className="cyber-text-muted">Multi-layer identity verification with institutional-grade security</p>
                </div>
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">AML Monitoring</div>
                  <p className="cyber-text-muted">Advanced transaction screening and risk assessment</p>
                </div>
                <div className="text-center">
                  <div className="cyber-text-primary text-xl mb-2">Regulatory Compliance</div>
                  <p className="cyber-text-muted">Automated reporting and regulatory documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="kyc" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 cyber-card">
            <TabsTrigger
              value="kyc"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              KYC Verification
            </TabsTrigger>
            <TabsTrigger
              value="aml"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              AML Monitoring
            </TabsTrigger>
            <TabsTrigger
              value="reporting"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              Regulatory Reporting
            </TabsTrigger>
            <TabsTrigger
              value="audit"
              className="cyber-text-secondary data-[state=active]:cyber-button data-[state=active]:text-black"
            >
              Audit Trail
            </TabsTrigger>
          </TabsList>

          {/* KYC Verification */}
          <TabsContent value="kyc" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Identity Verification</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="cyber-text-muted">Full Name</Label>
                          <Input
                            className="bg-black border-cyan-500/30 text-cyan-300"
                            placeholder="Enter full legal name"
                          />
                        </div>
                        <div>
                          <Label className="cyber-text-muted">Date of Birth</Label>
                          <Input type="date" className="bg-black border-cyan-500/30 text-cyan-300" />
                        </div>
                        <div>
                          <Label className="cyber-text-muted">Nationality</Label>
                          <Input
                            className="bg-black border-cyan-500/30 text-cyan-300"
                            placeholder="Country of citizenship"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label className="cyber-text-muted">Address</Label>
                          <Input
                            className="bg-black border-cyan-500/30 text-cyan-300"
                            placeholder="Full residential address"
                          />
                        </div>
                        <div>
                          <Label className="cyber-text-muted">Phone Number</Label>
                          <Input
                            className="bg-black border-cyan-500/30 text-cyan-300"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <Label className="cyber-text-muted">Email Address</Label>
                          <Input
                            type="email"
                            className="bg-black border-cyan-500/30 text-cyan-300"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="cyber-text-primary font-light">Document Upload</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="cyber-border rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 cyber-text-primary mx-auto mb-2" />
                          <p className="cyber-text-muted text-sm mb-2">Government ID</p>
                          <Button
                            variant="outline"
                            className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                          >
                            Upload Document
                          </Button>
                        </div>
                        <div className="cyber-border rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 cyber-text-primary mx-auto mb-2" />
                          <p className="cyber-text-muted text-sm mb-2">Proof of Address</p>
                          <Button
                            variant="outline"
                            className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                          >
                            Upload Document
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Accredited Investor Verification</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="cyber-card p-4">
                      <h5 className="cyber-text-primary font-light mb-2">Income Verification</h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="cyber-text-muted text-sm">Annual Income</Label>
                          <Input className="bg-black border-cyan-500/30 text-cyan-300" placeholder="$200,000+" />
                        </div>
                        <div>
                          <Label className="cyber-text-muted text-sm">Net Worth</Label>
                          <Input className="bg-black border-cyan-500/30 text-cyan-300" placeholder="$1,000,000+" />
                        </div>
                      </div>
                    </div>
                    <div className="cyber-border rounded-lg p-6 text-center">
                      <FileText className="w-8 h-8 cyber-text-primary mx-auto mb-2" />
                      <p className="cyber-text-muted text-sm mb-2">Upload Financial Statements</p>
                      <Button
                        variant="outline"
                        className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                      >
                        Choose Files
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Verification Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div
                        className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                          kycStatus === "approved"
                            ? "bg-green-500/20"
                            : kycStatus === "pending"
                              ? "cyber-border"
                              : "bg-red-500/20"
                        }`}
                      >
                        {kycStatus === "approved" ? (
                          <CheckCircle className="w-8 h-8 text-green-400" />
                        ) : kycStatus === "pending" ? (
                          <Clock className="w-8 h-8 cyber-text-primary" />
                        ) : (
                          <AlertTriangle className="w-8 h-8 text-red-400" />
                        )}
                      </div>
                      <p className="cyber-text-primary font-light mb-2">
                        {kycStatus === "approved"
                          ? "Verified"
                          : kycStatus === "pending"
                            ? "Under Review"
                            : "Action Required"}
                      </p>
                      <Badge
                        className={`${
                          kycStatus === "approved"
                            ? "bg-green-500/20 text-green-400"
                            : kycStatus === "pending"
                              ? "cyber-badge"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {kycStatus.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Identity Check</span>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Address Verification</span>
                        <Clock className="w-4 h-4 cyber-text-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Accreditation</span>
                        <Clock className="w-4 h-4 cyber-text-primary" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="cyber-text-muted text-sm">Background Check</span>
                        <AlertTriangle className="w-4 h-4 cyber-text-primary" />
                      </div>
                    </div>

                    <Button className="w-full cyber-button">Submit for Review</Button>
                  </CardContent>
                </Card>

                <Card className="cyber-card">
                  <CardHeader>
                    <CardTitle className="cyber-text-primary font-light">Required Documents</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="cyber-text-muted text-sm">Government-issued ID</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 cyber-text-primary" />
                      <span className="cyber-text-muted text-sm">Proof of address</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 cyber-text-primary" />
                      <span className="cyber-text-muted text-sm">Financial statements</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 cyber-text-primary" />
                      <span className="cyber-text-muted text-sm">Tax returns (if applicable)</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* AML Monitoring */}
          <TabsContent value="aml" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">AML Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-light cyber-text-primary mb-2">{amlScore}/100</div>
                    <p className="cyber-text-muted mb-4">Risk Score</p>
                    <Badge className="bg-green-500/20 text-green-400">Low Risk</Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="cyber-text-muted text-sm">Identity Verification</span>
                        <span className="cyber-text-primary text-sm">95/100</span>
                      </div>
                      <div className="cyber-progress">
                        <div className="cyber-progress-bar" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="cyber-text-muted text-sm">Transaction History</span>
                        <span className="cyber-text-primary text-sm">88/100</span>
                      </div>
                      <div className="cyber-progress">
                        <div className="cyber-progress-bar" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="cyber-text-muted text-sm">Source of Funds</span>
                        <span className="cyber-text-primary text-sm">92/100</span>
                      </div>
                      <div className="cyber-progress">
                        <div className="cyber-progress-bar" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="cyber-text-muted text-sm">Geographic Risk</span>
                        <span className="cyber-text-primary text-sm">78/100</span>
                      </div>
                      <div className="cyber-progress">
                        <div className="cyber-progress-bar" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Monitoring Alerts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between cyber-card p-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-green-400 text-sm font-light">No Suspicious Activity</p>
                        <p className="cyber-text-muted text-xs">Last checked: 2 hours ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h5 className="cyber-text-primary font-light">Recent Checks</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center cyber-card p-2">
                        <span className="cyber-text-muted text-sm">Sanctions Screening</span>
                        <Badge className="bg-green-500/20 text-green-400">Clear</Badge>
                      </div>
                      <div className="flex justify-between items-center cyber-card p-2">
                        <span className="cyber-text-muted text-sm">PEP Check</span>
                        <Badge className="bg-green-500/20 text-green-400">Clear</Badge>
                      </div>
                      <div className="flex justify-between items-center cyber-card p-2">
                        <span className="cyber-text-muted text-sm">Adverse Media</span>
                        <Badge className="bg-green-500/20 text-green-400">Clear</Badge>
                      </div>
                      <div className="flex justify-between items-center cyber-card p-2">
                        <span className="cyber-text-muted text-sm">Transaction Pattern</span>
                        <Badge className="cyber-badge">Normal</Badge>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full cyber-button">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Run New Check
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="cyber-text-primary font-light">Transaction Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "2025-01-07",
                      type: "Investment",
                      amount: "$5,000",
                      asset: "Manhattan Office",
                      status: "cleared",
                    },
                    {
                      date: "2025-01-05",
                      type: "Yield Payment",
                      amount: "$127.50",
                      asset: "SME Loans",
                      status: "cleared",
                    },
                    {
                      date: "2025-01-03",
                      type: "Investment",
                      amount: "$2,500",
                      asset: "Solar Farm",
                      status: "cleared",
                    },
                    { date: "2025-01-01", type: "Staking", amount: "2,500 PYT", asset: "PYT Pool", status: "cleared" },
                  ].map((tx, index) => (
                    <div key={index} className="flex items-center justify-between cyber-card p-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div>
                          <p className="cyber-text-primary font-light">{tx.type}</p>
                          <p className="cyber-text-muted text-sm">{tx.asset}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="cyber-text-primary">{tx.amount}</p>
                        <p className="cyber-text-muted text-sm">{tx.date}</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">{tx.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Regulatory Reporting */}
          <TabsContent value="reporting" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Compliance Reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Monthly AML Report", date: "Jan 2025", status: "Generated", type: "AML" },
                    { name: "Quarterly SEC Filing", date: "Q4 2024", status: "Submitted", type: "SEC" },
                    { name: "Annual Compliance Review", date: "2024", status: "Complete", type: "Internal" },
                    { name: "Transaction Summary", date: "Dec 2024", status: "Available", type: "Financial" },
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between cyber-card p-3">
                      <div>
                        <p className="cyber-text-primary font-light">{report.name}</p>
                        <p className="cyber-text-muted text-sm">
                          {report.date} • {report.type}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-500/20 text-green-400">{report.status}</Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="cyber-text-primary font-light">Regulatory Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="cyber-text-muted">SEC Registration</span>
                      <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="cyber-text-muted">FINRA Compliance</span>
                      <Badge className="bg-green-500/20 text-green-400">Current</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="cyber-text-muted">State Registrations</span>
                      <Badge className="cyber-badge">12 States</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="cyber-text-muted">International Compliance</span>
                      <Badge className="cyber-badge">EU, UK, CA</Badge>
                    </div>
                  </div>

                  <div className="cyber-card p-4">
                    <h5 className="cyber-text-primary font-light mb-2">Next Compliance Deadlines</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="cyber-text-muted text-sm">Q1 2025 SEC Filing</span>
                        <span className="cyber-text-primary text-sm">Apr 15, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted text-sm">Annual AML Review</span>
                        <span className="cyber-text-primary text-sm">Mar 31, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="cyber-text-muted text-sm">State Renewal (NY)</span>
                        <span className="cyber-text-primary text-sm">Feb 28, 2025</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Audit Trail */}
          <TabsContent value="audit" className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-light cyber-text-primary">Audit Trail</h3>
                <p className="cyber-text-muted">Complete record of all compliance activities</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
                <Button
                  variant="outline"
                  className="cyber-border cyber-text-primary bg-transparent hover:bg-cyan-950/20"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <Card className="cyber-card">
              <CardContent className="p-0">
                <div className="space-y-0">
                  {[
                    {
                      timestamp: "2025-01-07 14:30:22",
                      user: "System",
                      action: "AML Check Completed",
                      details: "User ID: 12345 - Risk Score: 85",
                      status: "success",
                    },
                    {
                      timestamp: "2025-01-07 14:25:15",
                      user: "John Doe",
                      action: "Document Uploaded",
                      details: "Proof of Address - utility_bill.pdf",
                      status: "info",
                    },
                    {
                      timestamp: "2025-01-07 14:20:08",
                      user: "Compliance Officer",
                      action: "KYC Review Started",
                      details: "Manual review initiated for high-value investor",
                      status: "warning",
                    },
                    {
                      timestamp: "2025-01-07 14:15:33",
                      user: "System",
                      action: "Transaction Monitored",
                      details: "$5,000 investment in Manhattan Office - Cleared",
                      status: "success",
                    },
                    {
                      timestamp: "2025-01-07 14:10:45",
                      user: "Jane Smith",
                      action: "Profile Updated",
                      details: "Address information modified",
                      status: "info",
                    },
                    {
                      timestamp: "2025-01-07 14:05:12",
                      user: "System",
                      action: "Sanctions Check",
                      details: "OFAC screening completed - No matches",
                      status: "success",
                    },
                    {
                      timestamp: "2025-01-07 14:00:00",
                      user: "System",
                      action: "Daily AML Scan",
                      details: "Automated screening of all active accounts",
                      status: "success",
                    },
                  ].map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border-b border-cyan-500/10 last:border-b-0"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            entry.status === "success"
                              ? "bg-green-400"
                              : entry.status === "warning"
                                ? "bg-cyan-400"
                                : "bg-blue-400"
                          }`}
                        ></div>
                        <div>
                          <p className="cyber-text-primary font-light">{entry.action}</p>
                          <p className="cyber-text-muted text-sm">{entry.details}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="cyber-text-muted text-sm">{entry.user}</p>
                        <p className="cyber-text-muted text-xs">{entry.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
