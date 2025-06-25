import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="LaunchPad Logo" width={24} height={24} className="h-6 w-6" />
              <span className="text-xl font-bold">LaunchPad</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered DOOH analytics platform helping mall owners maximize digital advertising revenue through
              precise audience insights.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                YouTube
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Audience Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Revenue Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Advertiser Reporting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Mall Intelligence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Shopping Malls
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Retail Centers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Outlet Malls
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Mixed-Use Developments
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Implementation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 LaunchPad DOOH Analytics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Data Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

