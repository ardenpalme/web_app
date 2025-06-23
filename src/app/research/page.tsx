import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, Users, Radar, Shield, Zap, BookOpen, Award, Rocket, Brain, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Pioneering the Future of
              <span className="text-blue-600"> Retail Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our research team is building upon cutting-edge academic research in mmWave radar technology,
              privacy-preserving analytics, and edge-AI processing to create the next generation of retail intelligence
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* R&D Status Banner */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-center space-x-4 text-center">
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
            <p className="text-lg font-medium text-amber-800">
              Our products are currently in active R&D phase - Stay tuned for breakthrough innovations
            </p>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our interdisciplinary research spans computer vision, radar signal processing, privacy-preserving AI, and
              edge computing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Radar className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>mmWave Radar Technology</CardTitle>
                <CardDescription>
                  Advanced signal processing and machine learning techniques for high-resolution gait analysis and
                  movement detection using commercial mmWave radar systems.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Privacy-Preserving Analytics</CardTitle>
                <CardDescription>
                  Developing novel approaches to extract valuable insights while maintaining strict privacy compliance
                  and anonymous data processing standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Edge-AI Processing</CardTitle>
                <CardDescription>
                  Optimizing deep learning models for real-time inference on edge devices with minimal power consumption
                  and maximum accuracy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Foundational Research</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key academic research papers that form the foundation of our current R&D efforts and product development
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Paper 1 */}
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3">
                      Research Paper
                    </Badge>
                    <CardTitle className="text-xl mb-2">
                      MmGait-3D: Large-Scale 3D Gait Dataset with mmWave Radar and Depth Camera
                    </CardTitle>
                    <CardDescription className="text-base">
                      This foundational research provides the dataset and methodology framework that our team is
                      leveraging to develop advanced 3D gait analysis capabilities for retail environments.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="MmGait-3D Research Visualization"
                      width={350}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Key Contributions</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>First large-scale dataset combining mmWave radar and depth camera for gait analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Novel multi-modal fusion techniques for improved gait recognition accuracy</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Comprehensive evaluation framework for 3D gait analysis systems</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Biometric Identification</Badge>
                  <Badge variant="outline">Healthcare Monitoring</Badge>
                  <Badge variant="outline">Security Systems</Badge>
                  <Badge variant="outline">Retail Analytics</Badge>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Paper 2 */}
            <Card className="border-2 border-gray-200 hover:border-green-300 transition-colors">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3">
                      Research Paper
                    </Badge>
                    <CardTitle className="text-xl mb-2">
                      Privacy-Preserving Gait Analysis Using Commercial mmWave Radar
                    </CardTitle>
                    <CardDescription className="text-base">
                      This pioneering work in privacy-preserving radar analytics serves as the foundation for our
                      privacy-by-design approach in developing commercial retail intelligence solutions.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Privacy-Preserving Gait Analysis Research"
                      width={350}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Key Contributions</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Privacy-by-design framework for radar-based gait analysis systems</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Anonymous feature extraction techniques maintaining analytical accuracy</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>GDPR and CCPA compliance validation for commercial deployments</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Retail Analytics</Badge>
                  <Badge variant="outline">Smart Buildings</Badge>
                  <Badge variant="outline">Public Spaces</Badge>
                  <Badge variant="outline">Healthcare</Badge>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Paper 3 */}
            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3">
                      Research Paper
                    </Badge>
                    <CardTitle className="text-xl mb-2">
                      Edge-AI Optimization for Real-Time Sensor Fusion in Retail Environments
                    </CardTitle>
                    <CardDescription className="text-base">
                      Advanced techniques for deploying deep learning models on edge devices while maintaining real-time
                      performance and accuracy in multi-sensor retail analytics systems.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Edge-AI Optimization Research"
                      width={350}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Key Contributions</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Novel model compression techniques for edge deployment</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Real-time multi-sensor fusion algorithms for retail analytics</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Power-efficient inference optimization for IoT devices</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Edge Computing</Badge>
                  <Badge variant="outline">Model Optimization</Badge>
                  <Badge variant="outline">IoT Systems</Badge>
                  <Badge variant="outline">Real-time Processing</Badge>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Paper 4 */}
            <Card className="border-2 border-gray-200 hover:border-orange-300 transition-colors">
              <CardHeader className="pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3">
                      Research Paper
                    </Badge>
                    <CardTitle className="text-xl mb-2">
                      Federated Learning for Distributed Retail Analytics with Privacy Guarantees
                    </CardTitle>
                    <CardDescription className="text-base">
                      A comprehensive framework for collaborative machine learning across multiple retail locations
                      while ensuring data privacy and regulatory compliance through advanced federated learning
                      techniques.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=200&width=350"
                      alt="Federated Learning Research"
                      width={350}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Key Contributions</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Differential privacy mechanisms for retail data protection</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Secure aggregation protocols for multi-location learning</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Communication-efficient federated optimization algorithms</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Federated Learning</Badge>
                  <Badge variant="outline">Differential Privacy</Badge>
                  <Badge variant="outline">Distributed Systems</Badge>
                  <Badge variant="outline">Data Protection</Badge>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        < Footer />
      </footer>
    </div>
  )
}

