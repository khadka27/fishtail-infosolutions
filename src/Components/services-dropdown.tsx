import Link from "next/link"
import {
  FileText,
  Laptop,
  Code,
  Search,  
  Share2,
  Mail,
  DollarSign,
  BarChart2,
  Globe,
  Users,
} from "lucide-react"

export function ServicesDropdown() {
  return (
    <div className="mx-8">
    <div className="grid grid-cols-4 gap-6 px-8">
      {/* WEB DEVELOPMENT Column */}
      <div>
        <h3 className="text-gray-600 font-semibold text-base uppercase mb-1">WEB DEVELOPMENT</h3>
        <p className="text-gray-500 text-xs mb-4">Web Redesign</p>

        <div className="space-y-3">
        <Link
            href="/Services/web-redesign"
            className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
          >
            <span className="text-gray-400 mr-3 w-5 text-center">
              <FileText className="h-4 w-4 inline-block" />
            </span>
            <span>Website Redesign</span>
          </Link>
          <Link
            href="/Services/content-marketing"
            className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
          >
            <span className="text-gray-400 mr-3 w-5 text-center">
              <FileText className="h-4 w-4 inline-block" />
            </span>
            <span>Content Writing/Marketing</span>
          </Link>

          <Link href="/Services/web-design" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Laptop className="h-4 w-4 inline-block" />
            </span>
            <span>Web Design</span>
          </Link>

          <Link
            href="/Services/web-development"
            className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
          >
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Code className="h-4 w-4 inline-block" />
            </span>
            <span>Web Development</span>
          </Link>
          <Link
            href="/Services/online-marketing"
            className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
          >
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Code className="h-4 w-4 inline-block" />
            </span>
            <span>Online Marketing</span>
          </Link>
        </div>
      </div>

      {/* ONLINE MARKETING Column */}
      <div>
        <h3 className="text-gray-600 font-semibold text-base uppercase mb-1">ONLINE MARKETING</h3>
        <p className="text-gray-500 text-xs mb-4">How we can help you to get more sales</p>

        <div className="space-y-3">
          <Link href="/Services/search-engine" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Search className="h-4 w-4 inline-block" />
            </span>
            <span>Search Engine Optimization</span>
          </Link>

          

          <Link href="/Services/social-media" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Share2 className="h-4 w-4 inline-block" />
            </span>
            <span>Social Media Marketing</span>
          </Link>

          <Link
            href="/Services/email-marketing"
            className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
          >
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Mail className="h-4 w-4 inline-block" />
            </span>
            <span>Email Marketing</span>
          </Link>

          <Link href="/Services/ppc-marketing" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <DollarSign className="h-4 w-4 inline-block" />
            </span>
            <span>Pay Per Click (PPC) Management</span>
          </Link>
          
        </div>
      </div>

      {/* SALES OPTIMIZATION Column */}
      <div>
        <h3 className="text-gray-600 font-semibold text-base uppercase mb-1">SALES OPTIMIZATION</h3>
        <p className="text-gray-500 text-xs mb-4">Improve the success of marketing efforts</p>

        <div className="space-y-3">
        <Link
            href="/Services/lead-generation"
            className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
          >
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Globe className="h-4 w-4 inline-block" />
            </span>
            <span>Lead Generation</span>
          </Link>

       
          <Link
            href="/Services/conversion-rate"
            className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
          >
            <span className="text-gray-400 mr-3 w-5 text-center">
              <BarChart2 className="h-4 w-4 inline-block" />
            </span>
            <span>Conversion Rate Optimization</span>
          </Link>

         

          <Link
            href="/Services/affiliate-management"
            className="flex items-center text-gray-700 hover:text-blue-600 text-sm"
          >
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Users className="h-4 w-4 inline-block" />
            </span>
            <span>Affiliate Management</span>
          </Link>
        </div>
      </div>

      {/* Full Service Digital Creative Agency Column */}
      <div>
        <h3 className="text-gray-800 font-bold text-xl mb-3">Full Service Digital Creative Agency</h3>
        <p className="text-gray-600 text-sm">
          We have a strategy, experience and a proven track record in increasing leads for our clients
        </p>
      </div>
    </div>
    </div>
  )
}

