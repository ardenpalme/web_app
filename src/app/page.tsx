'use client';
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, BarChart3, Eye, MapPin, TrendingUp, Users2, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function () {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                Fine-Tune your Ads with
                <span className="text-blue-600"> Expert Audience Analytics</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your mall's digital advertising revenue with AI-powered audience insights. Maximize DOOH ad
                performance, understand shopper behavior, and increase tenant satisfaction with precise demographic
                targeting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="mailto:info@intuitus-ads.com">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white text-blue-900 border-2 border-blue-500 hover:bg-blue-50 cursor-pointer"
                  >
                  Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Check className="h-4 w-4 text-green-500" />
                <span>30-day pilot program</span>
                <span>•</span>
                <span>ROI guarantee</span>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 flex items-center justify-center">
                <Image
                  src="/mall_dooh.jpg"
                  alt="LaunchPad AI Sensor System - Advanced IoT sensors with cameras, radar, and edge-AI processing for retail analytics"
                  width={800}
                  height={500}
                  className="rounded-xl"
                  priority
                />
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Eye className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Real-Time Analytics</div>
                    <div className="text-xs text-gray-500">Edge-AI Processing</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Privacy Compliant</div>
                    <div className="text-xs text-gray-500">GDPR & CCPA</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">45% Revenue Boost</div>
                    <div className="text-xs text-gray-500">Average Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Maximize Your Mall's Digital Revenue</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced DOOH analytics that help mall owners optimize advertising spaces, understand shopper patterns,
              and deliver measurable results to advertisers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Real-Time Audience Measurement</CardTitle>
                <CardDescription>
                  Track foot traffic, dwell time, and audience demographics in real-time across all your digital
                  displays. Provide advertisers with verified impression data and engagement metrics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Shopper Behavior Analytics</CardTitle>
                <CardDescription>
                  Understand peak hours, popular zones, and shopper journey patterns. Optimize store layouts and
                  advertising placement to maximize tenant revenue and customer satisfaction.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Location Intelligence</CardTitle>
                <CardDescription>
                  AI-powered zone analysis identifies high-value advertising locations. Increase ad rates with
                  data-backed premium placement recommendations and performance guarantees.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Revenue Optimization</CardTitle>
                <CardDescription>
                  Dynamic pricing recommendations based on audience density and demographics. Maximize DOOH revenue with
                  automated yield management and performance-based advertising packages.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users2 className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Demographic Targeting</CardTitle>
                <CardDescription>
                  Precise age, gender, and interest profiling enables targeted advertising campaigns. Help brands reach
                  their ideal customers while increasing ad effectiveness and renewal rates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Advertiser Reporting</CardTitle>
                <CardDescription>
                  Comprehensive campaign reports with verified metrics, audience insights, and ROI analysis. Build
                  advertiser confidence with transparent, measurable results and detailed performance data.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Turn Your Mall Into a Data-Driven Revenue Machine
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Increase Ad Revenue by 40-60%</h3>
                    <p className="text-gray-600">
                      Data-backed premium pricing and optimized ad placement strategies that maximize your digital
                      advertising income.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Attract Premium Advertisers</h3>
                    <p className="text-gray-600">
                      Verified audience metrics and demographic insights help you secure long-term contracts with
                      high-value brands.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Optimize Tenant Mix & Layout</h3>
                    <p className="text-gray-600">
                      Shopper flow analytics help you make informed decisions about store placement and common area
                      optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center order-first lg:order-last">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-Time Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Monitor all your mall's digital advertising performance, foot traffic patterns, and revenue metrics from
                one comprehensive dashboard.
              </p>
              <Link href="/dashboard">
                <Button variant="outline" className="cursor-pointer">View Demo Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Maximize Your Mall's Digital Revenue?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Provide key insights to tenant shopowners with advanced DOOH ad-attribution analytics.
          </p>
          <div className="flex justify-center">
            <Link href="mailto:info@intuitus-ads.com">
              <Button size="lg" variant="secondary" className="cursor-pointer">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        < Footer />
      </footer>
    </div>
  )
}

