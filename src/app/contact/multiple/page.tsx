import type { Metadata } from "next";
import {
     MapPin,
     Phone,
     Mail,
     Globe,
     Users,
     Clock,
     Sparkles,
} from "lucide-react";
import Link from "next/link";
import MapWrapper from "@/Components/map-wrapper";
import ContactForm from "@/Components/contact-form";
import { officeLocations } from "@/data/locations";

// Add metadata for the multi-address contact page
export const metadata: Metadata = {
     title: "Contact Our Global Offices | Fishtail Info Solutions",
     description:
          "Reach out to Fishtail Info Solutions at our offices in the UK, US, Nepal, and India. Find our contact details, office locations, and send us a message through our contact form.",
};

export default function MultiAddressContactPage() {
     // Use the original locations data for the map
     const mapLocations = [
          {
               name: "East Ham Office",
               country: "United Kingdom",
               coordinates: [51.538, 0.042] as [number, number],
               address: "182-184 High Street North, East Ham, London, E6 2JA",
          },
          {
               name: "Bear Office",
               country: "United States",
               coordinates: [39.5761, -75.611] as [number, number],
               address: "604 Carson Dr CAK-953 Bear, DE 19701-1450",
          },
          {
               name: "Pokhara Office",
               country: "Nepal",
               coordinates: [28.2096, 83.9856] as [number, number],
               address: "Prithivi Chowk, Street 31, Pokhara",
          },
          {
               name: "Delhi Office",
               country: "India",
               coordinates: [28.601, 77.0787] as [number, number],
               address: "Mahavir Enclave, South West Delhi, New Delhi, 110045",
          },
     ];

     // Enhanced locations for display
     const displayLocations = [
          {
               name: "East Ham Office",
               country: "United Kingdom",
               address: "182-184 High Street North, East Ham, London, E6 2JA",
               phone: "+1 (234) 567.892.11",
               email: "uk@fishtailinfosolutions.com",
               hours: "Monday–Friday 9am-6pm",
               color: "from-blue-500 to-blue-600",
          },
          {
               name: "Bear Office",
               country: "United States",
               address: "604 Carson Dr CAK-953 Bear, DE 19701-1450",
               phone: "+1 (801) 987-0424",
               email: "us@fishtailinfosolutions.com",
               hours: "Monday–Friday 9am-6pm",
               color: "from-green-500 to-green-600",
          },
          {
               name: "Pokhara Office",
               country: "Nepal",
               address: "Prithivi Chowk, Street 31, Pokhara",
               phone: "+977 61 123456",
               email: "nepal@fishtailinfosolutions.com",
               hours: "Sunday–Friday 9am-6pm",
               color: "from-purple-500 to-purple-600",
          },
          {
               name: "Delhi Office",
               country: "India",
               address: "Mahavir Enclave, South West Delhi, New Delhi, 110045",
               phone: "+91 11 123456",
               email: "india@fishtailinfosolutions.com",
               hours: "Monday–Friday 9am-6pm",
               color: "from-orange-500 to-orange-600",
          },
     ];

     return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
               {/* Compact Hero Section */}
               <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                         <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
                         <div
                              className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse"
                              style={{ animationDelay: "2s" }}
                         ></div>
                    </div>

                    <div className="container mx-auto max-w-6xl px-4 relative z-10">
                         <div className="text-center mb-12">
                              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6">
                                   <Sparkles className="w-4 h-4" />
                                   Global Presence
                              </div>
                              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
                                   Get in
                                   <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {" "}
                                        Touch
                                   </span>
                              </h1>
                              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                                   Connect with our global team across four
                                   locations. We're here to help your business
                                   succeed worldwide.
                              </p>

                              {/* Quick Stats */}
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md border border-white/50">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                             <Globe className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-800">
                                             4
                                        </div>
                                        <div className="text-sm text-gray-600">
                                             Global Offices
                                        </div>
                                   </div>
                                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md border border-white/50">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                             <Users className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-800">
                                             50+
                                        </div>
                                        <div className="text-sm text-gray-600">
                                             Team Members
                                        </div>
                                   </div>
                                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md border border-white/50">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                             <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-800">
                                             24h
                                        </div>
                                        <div className="text-sm text-gray-600">
                                             Response Time
                                        </div>
                                   </div>
                                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md border border-white/50">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                             <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-800">
                                             500+
                                        </div>
                                        <div className="text-sm text-gray-600">
                                             Happy Clients
                                        </div>
                                   </div>
                              </div>

                              <div className="bg-blue-50 rounded-xl p-4 mb-8">
                                   <p className="text-blue-700 text-sm">
                                        📞 Need immediate assistance? We offer
                                        free consultations across all locations.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Main Content */}
               <section className="py-12">
                    <div className="container mx-auto max-w-6xl px-4">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              {/* Left Column - Office Locations */}
                              <div className="space-y-6">
                                   <div className="text-center lg:text-left mb-8">
                                        <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-2">
                                             Our Global Offices
                                        </h2>
                                        <p className="text-gray-600">
                                             Find the office nearest to you or
                                             reach out to any location for
                                             assistance.
                                        </p>
                                   </div>

                                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                        {displayLocations.map(
                                             (location, index) => (
                                                  <div
                                                       key={location.country}
                                                       className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                                                  >
                                                       {/* Header */}
                                                       <div className="flex items-center gap-3 mb-4">
                                                            <div
                                                                 className={`w-12 h-12 bg-gradient-to-r ${location.color} rounded-full flex items-center justify-center`}
                                                            >
                                                                 <Globe className="w-6 h-6 text-white" />
                                                            </div>
                                                            <div>
                                                                 <h3 className="text-lg font-semibold text-gray-800">
                                                                      {
                                                                           location.country
                                                                      }
                                                                 </h3>
                                                                 <div className="text-sm text-gray-500">
                                                                      {
                                                                           location.name
                                                                      }
                                                                 </div>
                                                            </div>
                                                       </div>

                                                       {/* Contact Details */}
                                                       <div className="space-y-3">
                                                            <div className="flex items-start gap-3">
                                                                 <Phone className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                                                 <div>
                                                                      <p className="text-gray-800 font-medium">
                                                                           {
                                                                                location.phone
                                                                           }
                                                                      </p>
                                                                      <p className="text-xs text-gray-500">
                                                                           {
                                                                                location.hours
                                                                           }
                                                                      </p>
                                                                 </div>
                                                            </div>

                                                            <div className="flex items-start gap-3">
                                                                 <Mail className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                                                 <a
                                                                      href={`mailto:${location.email}`}
                                                                      className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                                                                 >
                                                                      {
                                                                           location.email
                                                                      }
                                                                 </a>
                                                            </div>

                                                            <div className="flex items-start gap-3">
                                                                 <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                                                 <p className="text-gray-700 text-sm">
                                                                      {
                                                                           location.address
                                                                      }
                                                                 </p>
                                                            </div>
                                                       </div>

                                                       {/* Quick Action */}
                                                       <div className="mt-4 pt-4 border-t border-gray-100">
                                                            <Link
                                                                 href="/contact"
                                                                 className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${location.color} text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200 shadow-md`}
                                                            >
                                                                 <Mail className="w-4 h-4" />
                                                                 Contact This
                                                                 Office
                                                            </Link>
                                                       </div>
                                                  </div>
                                             )
                                        )}
                                   </div>

                                   {/* Quick Links */}
                                   <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white mt-8">
                                        <h3 className="text-xl font-semibold mb-4">
                                             Need Specialized Help?
                                        </h3>
                                        <div className="space-y-3">
                                             <Link
                                                  href="/contact/seo"
                                                  className="block bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-all duration-200"
                                             >
                                                  <div className="font-medium">
                                                       SEO Consultation
                                                  </div>
                                                  <div className="text-sm text-blue-100">
                                                       Get a free SEO audit
                                                  </div>
                                             </Link>
                                             <Link
                                                  href="/contact/web-dev-quote"
                                                  className="block bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-all duration-200"
                                             >
                                                  <div className="font-medium">
                                                       Web Development Quote
                                                  </div>
                                                  <div className="text-sm text-blue-100">
                                                       Custom website solutions
                                                  </div>
                                             </Link>
                                             <Link
                                                  href="/contact/digital-ad-quote"
                                                  className="block bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-all duration-200"
                                             >
                                                  <div className="font-medium">
                                                       Digital Marketing Quote
                                                  </div>
                                                  <div className="text-sm text-blue-100">
                                                       Boost your online
                                                       presence
                                                  </div>
                                             </Link>
                                        </div>
                                   </div>
                              </div>

                              {/* Right Column - Map and Contact Form */}
                              <div className="space-y-6">
                                   {/* Interactive Map */}
                                   <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                        <div className="p-4 bg-gray-50 border-b border-gray-100">
                                             <h3 className="text-lg font-semibold text-gray-800">
                                                  Our Global Locations
                                             </h3>
                                             <p className="text-sm text-gray-600">
                                                  Click on markers to view
                                                  office details
                                             </p>
                                        </div>
                                        <div className="h-80">
                                             <MapWrapper
                                                  locations={mapLocations}
                                                  initialZoom={2}
                                                  showLocationTabs={true}
                                             />
                                        </div>
                                   </div>

                                   {/* Contact Form */}
                                   <div>
                                        <ContactForm />
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}
