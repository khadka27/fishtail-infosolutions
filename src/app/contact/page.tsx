import type { Metadata } from "next";
import {
     MapPin,
     Phone,
     Mail,
     MessageSquare,
     Clock,
     Globe,
     Users,
     Sparkles,
} from "lucide-react";
import MapWrapper from "@/Components/map-wrapper";
import ContactForm from "@/Components/contact-form";
import { officeLocations } from "@/data/locations";

// Add metadata for the contact page
export const metadata: Metadata = {
     title: "Contact Fishtail Info Solutions | Get in Touch with Our Team",
     description:
          "Reach out to Fishtail Info Solutions in Pokhara, Nepal. Contact us by phone, email, or visit our office to discuss your digital marketing and technology needs.",
};

export default function ContactPage() {
     const nepalOffice = officeLocations.find((loc) => loc.country === "Nepal");

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
                         <div className="text-center mb-8">
                              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6">
                                   <Sparkles className="w-4 h-4" />
                                   Let's Start a Conversation
                              </div>
                              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
                                   Get in
                                   <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {" "}
                                        Touch
                                   </span>
                              </h1>
                              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                   Ready to transform your digital presence?
                                   We're here to help you succeed.
                              </p>
                         </div>

                         {/* Quick Contact Stats */}
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md border border-white/50">
                                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Users className="w-6 h-6 text-white" />
                                   </div>
                                   <div className="text-2xl font-bold text-gray-800">
                                        500+
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        Happy Clients
                                   </div>
                              </div>
                              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-md border border-white/50">
                                   <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
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
                                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Globe className="w-6 h-6 text-white" />
                                   </div>
                                   <div className="text-2xl font-bold text-gray-800">
                                        Global
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        Reach
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Map Section - Fixed and Enhanced */}
               <section className="mb-8">
                    <div className="container mx-auto max-w-6xl px-4">
                         <div className="text-center mb-6">
                              <h2 className="text-2xl font-medium text-gray-800 mb-2">
                                   Find Our Office
                              </h2>
                              <p className="text-gray-600">
                                   Visit us at our Pokhara location
                              </p>
                         </div>
                         <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                              <div style={{ height: "400px" }}>
                                   <MapWrapper
                                        locations={
                                             nepalOffice
                                                  ? [nepalOffice]
                                                  : officeLocations.filter(
                                                         (loc) =>
                                                              loc.country ===
                                                              "Nepal"
                                                    )
                                        }
                                        initialZoom={15}
                                        height="400px"
                                        showLocationTabs={false}
                                   />
                              </div>
                              {/* Map Info Overlay */}
                              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-100">
                                   <div className="flex items-center gap-3 text-gray-700">
                                        <MapPin className="w-5 h-5 text-blue-600" />
                                        <div>
                                             <div className="font-medium">
                                                  Prithivi Chowk, Street 31,
                                                  Pokhara, Nepal
                                             </div>
                                             <div className="text-sm text-gray-500">
                                                  Open: Sunday to Friday, 9am -
                                                  6pm
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Main Content Section */}
               <section className="py-12">
                    <div className="container mx-auto max-w-6xl px-4">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                              {/* Contact Information */}
                              <div className="space-y-6">
                                   <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                                        <div className="text-center mb-8">
                                             <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-2">
                                                  Contact Information
                                             </h2>
                                             <p className="text-gray-600">
                                                  Multiple ways to reach our
                                                  team
                                             </p>
                                        </div>

                                        <div className="space-y-6">
                                             {/* Phone */}
                                             <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 transition-all duration-200">
                                                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                       <Phone className="w-5 h-5 text-white" />
                                                  </div>
                                                  <div>
                                                       <h3 className="text-lg font-medium text-gray-800">
                                                            Phone
                                                       </h3>
                                                       <p className="text-blue-600 font-medium">
                                                            +910 8771234567
                                                       </p>
                                                       <p className="text-sm text-gray-500">
                                                            Sunday–Friday
                                                            9am-6pm
                                                       </p>
                                                  </div>
                                             </div>

                                             {/* Email */}
                                             <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 transition-all duration-200">
                                                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                       <Mail className="w-5 h-5 text-white" />
                                                  </div>
                                                  <div>
                                                       <h3 className="text-lg font-medium text-gray-800">
                                                            Email
                                                       </h3>
                                                       <a
                                                            href="mailto:rahul@fishtailinfosolutions.com"
                                                            className="text-green-600 font-medium hover:text-green-700 transition-colors"
                                                       >
                                                            rahul@fishtailinfosolutions.com
                                                       </a>
                                                       <p className="text-sm text-gray-500">
                                                            We'll respond within
                                                            24 hours
                                                       </p>
                                                  </div>
                                             </div>

                                             {/* Chat */}
                                             <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200/50 transition-all duration-200">
                                                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                       <MessageSquare className="w-5 h-5 text-white" />
                                                  </div>
                                                  <div>
                                                       <h3 className="text-lg font-medium text-gray-800">
                                                            Live Chat
                                                       </h3>
                                                       <p className="text-purple-600 font-medium">
                                                            fishtailinfosolutions
                                                       </p>
                                                       <p className="text-sm text-gray-500">
                                                            Available during
                                                            business hours
                                                       </p>
                                                  </div>
                                             </div>

                                             {/* Address */}
                                             <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100/50 hover:from-orange-100 hover:to-orange-200/50 transition-all duration-200">
                                                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                       <MapPin className="w-5 h-5 text-white" />
                                                  </div>
                                                  <div>
                                                       <h3 className="text-lg font-medium text-gray-800">
                                                            Visit Us
                                                       </h3>
                                                       <div className="text-gray-700">
                                                            <p className="font-medium">
                                                                 Prithivi Chowk,
                                                                 Street 31
                                                            </p>
                                                            <p>
                                                                 Pokhara, Nepal
                                                            </p>
                                                       </div>
                                                       <div className="mt-2 text-sm text-gray-500">
                                                            <p className="flex items-center gap-1">
                                                                 <Clock className="w-3 h-3" />
                                                                 Sun to Fri: 9am
                                                                 - 6pm
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   {/* Quick Links */}
                                   <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                                        <h3 className="text-xl font-semibold mb-4">
                                             Need Immediate Help?
                                        </h3>
                                        <div className="space-y-3">
                                             <a
                                                  href="/contact/seo"
                                                  className="block bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-all duration-200"
                                             >
                                                  <div className="font-medium">
                                                       SEO Consultation
                                                  </div>
                                                  <div className="text-sm text-blue-100">
                                                       Get a free SEO audit
                                                  </div>
                                             </a>
                                             <a
                                                  href="/contact/web-dev-quote"
                                                  className="block bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-all duration-200"
                                             >
                                                  <div className="font-medium">
                                                       Web Development Quote
                                                  </div>
                                                  <div className="text-sm text-blue-100">
                                                       Custom website solutions
                                                  </div>
                                             </a>
                                             <a
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
                                             </a>
                                        </div>
                                   </div>
                              </div>

                              {/* Contact Form */}
                              <div>
                                   <ContactForm />
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
}
