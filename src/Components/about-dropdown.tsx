import Link from "next/link"
import { Briefcase, FileText, Package2, FileBarChart } from "lucide-react"

export function AboutDropdown() {
  return (
    <div className="grid grid-cols-2 gap-6 px-6 py-6">
      {/* AGENCY Column */}
      <div>
        <h3 className="text-gray-600 font-semibold text-base uppercase mb-1">AGENCY</h3>
        <p className="text-gray-500 text-xs mb-4">Highly experienced team</p>

        <div className="space-y-3">
          <Link href="/about" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Briefcase className="h-4 w-4 inline-block" />
            </span>
            <span>Our Agency</span>
          </Link>

          <Link href="/Services" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <FileText className="h-4 w-4 inline-block" />
            </span>
            <span>Our Services</span>
          </Link>

          <Link href="/pricing" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <Package2 className="h-4 w-4 inline-block" />
            </span>
            <span>Pricing Packages</span>
          </Link>
        </div>
      </div>

      {/* EXPERIENCE Column */}
      <div>
        <h3 className="text-gray-600 font-semibold text-base uppercase mb-1">EXPERIENCE</h3>
        <p className="text-gray-500 text-xs mb-4">Case studies</p>


          <Link href="/project" className="flex items-center text-gray-700 hover:text-blue-600 text-sm">
            <span className="text-gray-400 mr-3 w-5 text-center">
              <FileBarChart className="h-4 w-4 inline-block" />
            </span>
            <span>Case Studies</span>
          </Link>
        </div>
      </div>

  )
}

