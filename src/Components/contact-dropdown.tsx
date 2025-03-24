import Link from "next/link"
import { MapPin, Globe, Search, CreditCard, Clock, Monitor, BarChart } from "lucide-react"

export function ContactDropdown() {
  return (
    <div className="grid grid-cols-2 gap-6 px-6 py-6">
      {/* CONTACT US Column */}
      <div>
        <h3 className="text-gray-600 font-semibold text-base uppercase mb-1">CONTACT US</h3>
        <p className="text-gray-500 text-xs mb-4">Contact pages with maps, addresses and contact forms.</p>

        <div className="space-y-3">
          <Link href="/contact/single-address" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <MapPin className="h-4 w-4 inline-block" />
            </span>
            <span>Single Address</span>
          </Link>

          <Link
            href="/contact/multiple-addresses"
            className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
          >
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Globe className="h-4 w-4 inline-block" />
            </span>
            <span>Multiply Addresses</span>
          </Link>

          <div className="pt-2">
            <p className="text-gray-600 font-medium text-sm mb-2">Simple Forms:</p>

            <div className="space-y-3 pl-8">
              <Link
                href="/contact/free-seo-analysis"
                className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
              >
                <span className="text-gray-400 mr-3 w-5 text-center">
                  <Search className="h-4 w-4 inline-block" />
                </span>
                <span>Free SEO analysis</span>
              </Link>

              <Link
                href="/contact/paypal-service"
                className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
              >
                <span className="text-gray-400 mr-3 w-5 text-center">
                  <CreditCard className="h-4 w-4 inline-block" />
                </span>
                <span>PayPal Service Order</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* INSTANT QUOTE Column */}
      <div>
        <h3 className="text-gray-600 font-semibold text-base uppercase mb-1">INSTANT QUOTE</h3>
        <p className="text-gray-500 text-xs mb-4">Predefined form templates with instant quote and payment options.</p>

        <div className="space-y-3">
          <Link href="/quote/seo-services" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Clock className="h-4 w-4 inline-block" />
            </span>
            <span>Instant SEO Services Quote</span>
          </Link>

          <Link href="/quote/web-design" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Monitor className="h-4 w-4 inline-block" />
            </span>
            <span>Web Design & Development Quote</span>
          </Link>

          <Link href="/quote/digital-ads" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <BarChart className="h-4 w-4 inline-block" />
            </span>
            <span>Digital Ad Services Quote</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

