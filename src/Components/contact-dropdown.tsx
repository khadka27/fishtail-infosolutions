import { MapPin, Users, Search, CreditCard } from "lucide-react"
import Link from "next/link"

export function ContactDropdown() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        {/* CONTACT US Section */}
        <div>
          <h3 className="text-gray-600 font-semibold text-base uppercase mb-1">CONTACT US</h3>
          <p className="text-gray-500 text-xs mb-4">Contact pages with maps, addresses and contact forms.</p>

          <div className="space-y-3">
            <Link href="/contact" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
              <span className="text-gray-400 mr-3 w-5 text-center">
                <MapPin className="h-4 w-4 inline-block" />
              </span>
              <span>Single Address</span>
            </Link>

            <Link href="/contact/multiple" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
              <span className="text-gray-400 mr-3 w-5 text-center">
                <Users className="h-4 w-4 inline-block" />
              </span>
              <span>Multiply Addresses</span>
            </Link>

            <h4 className="text-gray-600 font-semibold text-sm mt-5 mb-2">Simple Forms:</h4>

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

        {/* INSTANT QUOTE Section */}
        <div>
          <h3 className="text-gray-600 font-semibold text-base uppercase mb-1">INSTANT QUOTE</h3>
          <p className="text-gray-500 text-xs mb-4">
            Predefined form templates with instant quote and payment options.
          </p>

          <div className="space-y-3">
            <Link href="/quote/seo-services" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
              <span className="text-gray-400 mr-3 w-5 text-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 inline-block" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                  <path d="M12 8v8M8 12h8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span>Instant SEO Services Quote</span>
            </Link>

            <Link href="/quote/web-design" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
              <span className="text-gray-400 mr-3 w-5 text-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 inline-block" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
                  <path d="M3 9h18M9 21V9" strokeWidth="1.5" />
                </svg>
              </span>
              <span>Web Design & Development Quote</span>
            </Link>

            <Link href="/quote/digital-ad" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
              <span className="text-gray-400 mr-3 w-5 text-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 inline-block" stroke="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
                  <path d="M12 8v8M8 12h8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span>Digital Ad Services Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

