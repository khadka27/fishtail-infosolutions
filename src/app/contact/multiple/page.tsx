import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import MapWrapper from "@/Components/map-wrapper"
import ContactForm from "@/Components/contact-form"
import { officeLocations } from "@/data/locations"

export default function MultiAddressContactPage() {
  // Log the officeLocations to verify they're imported correctly
  console.log("MultiAddressPage officeLocations:", officeLocations)

  // Create a local copy of the locations to ensure they're properly defined
  const locations = [
    {
      name: "Cambridge Office",
      country: "United Kingdom",
      coordinates: [52.2429, 0.4026] as [number, number],
      address: "51 Somestreet Cambridge, Cambridgeshire CB4 3AA",
    },
    {
      name: "Toronto Office",
      country: "Canada",
      coordinates: [43.6532, -79.3832] as [number, number],
      address: "10 High Lane, Toronto, Ontario, L6M8M1",
    },
    {
      name: "Pokhara Office",
      country: "Nepal",
      coordinates: [28.2096, 83.9856] as [number, number],
      address: "Prithivi Chowk, Street 31, Pokhara",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-5xl font-light text-gray-700 mb-4 md:mb-0">Get in touch</h1>
          <p className="text-gray-500">Any questions?</p>
        </div>
      </div>

      {/* Contact Message */}
      <div className="py-8 px-4 border-b">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-gray-700 mb-4 md:mb-0">
            Please contact us using the form and we'll get back to you as soon as possible.
          </p>
          <Link href="/quote" className="flex items-center text-blue-500 hover:text-blue-600">
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Request a free quote
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Addresses */}
          <div className="space-y-16">
            {/* United Kingdom Office */}
            <div>
              <h2 className="text-2xl font-light text-[#b5bd00] mb-6">United Kingdom</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium">+1 (234) 567.892.11</p>
                    <p className="text-sm text-gray-500">Monday–Friday 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <p className="text-gray-800">exampleskypename</p>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
                    info@example.com
                  </a>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <div>
                    <p className="text-gray-800">51 Somestreet Cambridge,</p>
                    <p className="text-gray-800">Cambridgeshire CB4 3AA,</p>
                    <p className="text-gray-800 mb-2">United Kingdom</p>
                    <p className="text-sm text-gray-500">Our office is open:</p>
                    <p className="text-sm text-gray-500">Mon to Fri from 8am to 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Canada Office */}
            <div>
              <h2 className="text-2xl font-light text-[#b5bd00] mb-6">Canada</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium">+1 (234) 567.890.11</p>
                    <p className="text-sm text-gray-500">Monday–Friday 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <p className="text-gray-800">exampleskypename</p>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <a href="mailto:info@example.com" className="text-blue-500 hover:underline">
                    info@example.com
                  </a>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <div>
                    <p className="text-gray-800">10 High Lane,Toronto,</p>
                    <p className="text-gray-800">Ontario, L6M8M1</p>
                    <p className="text-gray-800 mb-2">Canada</p>
                    <p className="text-sm text-gray-500">Our office is open:</p>
                    <p className="text-sm text-gray-500">Mon to Fri from 8am to 6pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nepal Office */}
            <div>
              <h2 className="text-2xl font-light text-[#b5bd00] mb-6">Nepal</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <div>
                    <p className="text-gray-800 font-medium">+977 61 123456</p>
                    <p className="text-sm text-gray-500">Monday–Friday 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageSquare className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <p className="text-gray-800">fishtailinfosolutions</p>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <a href="mailto:rahul@fistailinfosolutions" className="text-blue-500 hover:underline">
                    rahul@fistailinfosolutions
                  </a>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1 mr-4" />
                  <div>
                    <p className="text-gray-800">Prithivi Chowk, Street 31,</p>
                    <p className="text-gray-800">Pokhara</p>
                    <p className="text-gray-800 mb-2">Nepal</p>
                    <p className="text-sm text-gray-500">Our office is open:</p>
                    <p className="text-sm text-gray-500">Mon to Fri from 8am to 6pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map and Form */}
          <div className="space-y-8">
            <MapWrapper
              locations={locations}
              initialZoom={5} // Use a lower zoom to see all locations
              height="400px"
              showLocationTabs={true}
            />
            <ContactForm  />
          </div>
        </div>
      </div>
    </div>
  )
}

