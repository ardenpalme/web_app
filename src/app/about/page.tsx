"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, Lightbulb, Rocket, Zap, Shield, BarChart3 } from "lucide-react"
import Link from "next/link"
import { ContactFormModal } from "@/components/contact-form-modal"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function () {
  return (
    <div className="flex flex-col min-h-screen items-center overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Transforming Retail Intelligence with
              <span className="text-blue-600"> Advanced Analytics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of engineers and researchers dedicated to revolutionizing how retail spaces understand and
              engage with their audiences through cutting-edge AI and sensor technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 bg-white">
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that retail spaces should be intelligent, responsive, and privacy-conscious. Our mission is
                to bridge the gap between advanced academic research and practical commercial applications, bringing
                cutting-edge sensor technology and AI analytics to mall owners and retailers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                By combining expertise in electrical and computer engineering with computational mathematics, we're
                developing solutions that not only maximize revenue but also enhance the shopping experience while
                maintaining the highest standards of privacy protection.
              </p>
	<div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
  <Button className="w-full sm:w-auto">
    Learn About Our Products
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
  <Button variant="outline" className="w-full sm:w-auto">
    View Our Research
  </Button>
</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision 2025</h3>
                <p className="text-gray-600">
                  To become the leading provider of privacy-preserving retail intelligence solutions, empowering mall
                  owners with actionable insights that drive revenue growth and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Background */}
      <section className="w-full py-20 bg-gray-50">
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A multidisciplinary team of engineers and researchers with deep expertise in advanced technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Electrical & Computer Engineering</CardTitle>
                <CardDescription>
                  Our team brings extensive experience in signal processing, embedded systems, and hardware design. With
                  backgrounds spanning radar systems, IoT device development, and edge computing architectures, we
                  understand the complexities of deploying advanced sensor technology in real-world retail environments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Computational Mathematics</CardTitle>
                <CardDescription>
                  Our computational mathematics expertise drives the advanced algorithms behind our analytics platform.
                  From machine learning optimization to statistical modeling and privacy-preserving computation, we
                  apply rigorous mathematical principles to solve complex retail intelligence challenges.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Expertise Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="px-4 py-2">
                Signal Processing
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Machine Learning
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Computer Vision
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Radar Systems
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Edge Computing
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Privacy Engineering
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                IoT Architecture
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Statistical Modeling
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Algorithm Optimization
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 bg-white">
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our research, development, and business practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  We believe that powerful analytics and privacy protection are not mutually exclusive. Every solution
                  we develop is built with privacy-by-design principles, ensuring compliance with global data protection
                  regulations while delivering actionable insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Innovation Through Research</CardTitle>
                <CardDescription>
                  Our commitment to advancing the field drives us to continuously push the boundaries of what's
                  possible. We bridge academic research and commercial applications, turning cutting-edge discoveries
                  into practical solutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Results-Driven</CardTitle>
                <CardDescription>
                  We measure our success by the tangible value we deliver to our clients. From increased advertising
                  revenue to improved operational efficiency, every solution is designed to generate measurable,
                  positive outcomes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we transform complex research into practical, deployable solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research & Development</h3>
              <p className="text-gray-600">
                We start with rigorous academic research, building upon the latest advances in AI, signal processing,
                and privacy-preserving technologies to develop novel solutions for retail intelligence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Implementation</h3>
              <p className="text-gray-600">
                Our engineering expertise allows us to translate complex algorithms into robust, scalable systems that
                can be deployed in real-world retail environments with minimal disruption.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Optimization</h3>
              <p className="text-gray-600">
                We continuously refine our solutions based on real-world performance data and client feedback, ensuring
                that our technology evolves to meet changing market needs and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Location</h2>

            <Card className="border-0 shadow-lg p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">LaunchPad Research Lab</h3>
                <div className="text-gray-600 space-y-2">
                  <p>30 North Gould Street</p>
                  <p>Sheridan, WY 82801</p>
                  <p className="pt-2">contact@intuitus-ads.com</p>
                  <p>(307) 207-5967</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-blue-600">
        <div className="px-4 md:px-6 text-center max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Retail Space?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing retail intelligence. Let's discuss how our advanced analytics solutions can drive
            growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" variant="secondary" className="flex-1">
              Book a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/research" size="lg" variant="secondary" className="flex-1">
              View Our Research
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-16">
        <div className="px-4 md:px-6 max-w-7xl mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
