import { Briefcase, Users, Heart, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const CareersPage = () => {
     return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
               {/* Hero Section */}
               <div className="relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
                         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 sm:py-20 lg:py-24">
                         {/* Header */}
                         <div className="text-center mb-12">
                              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                   <Briefcase className="w-4 h-4" />
                                   Join Our Team
                              </div>

                              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                   Grow Your Career
                                   <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        With Us
                                   </span>
                              </h1>

                              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                   We're passionate about digital marketing and
                                   always looking for talented individuals who
                                   share our vision of helping businesses
                                   succeed online.
                              </p>
                         </div>

                         {/* Main Content Card */}
                         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-xl border border-white/20">
                              {/* Status Message */}
                              <div className="text-center mb-8">
                                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-blue-600" />
                                   </div>

                                   <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
                                        Currently Not Hiring
                                   </h2>

                                   <p className="text-gray-600 text-lg max-w-md mx-auto">
                                        We're currently not open for any
                                        positions, but we're always excited to
                                        meet passionate professionals who might
                                        be a great fit for our team in the
                                        future.
                                   </p>
                              </div>

                              {/* Divider */}
                              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>

                              {/* Why Work With Us */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                   <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
                                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                             <Heart className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                             Passionate Team
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                             Work with people who love what they
                                             do and are committed to excellence.
                                        </p>
                                   </div>

                                   <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                             <Briefcase className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                             Growth Opportunities
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                             Continuous learning and career
                                             development in a fast-growing
                                             industry.
                                        </p>
                                   </div>

                                   <div className="text-center p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                                        <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                                             <Users className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                             Collaborative Culture
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                             Supportive environment where your
                                             ideas and contributions are valued.
                                        </p>
                                   </div>
                              </div>

                              {/* Contact Section */}
                              <div className="text-center">
                                   <p className="text-gray-600 mb-6">
                                        Interested in joining our team in the
                                        future? Send us your resume and we'll
                                        keep you in mind for upcoming
                                        opportunities.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                             href="/contact"
                                             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                                        >
                                             <Mail className="w-4 h-4" />
                                             Contact Us
                                        </Link>

                                        <Link
                                             href="/about"
                                             className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-all duration-200"
                                        >
                                             <span>Learn About Us</span>
                                             <ArrowRight className="w-4 h-4" />
                                        </Link>
                                   </div>
                              </div>
                         </div>

                         {/* Footer Note */}
                         <div className="text-center mt-8">
                              <p className="text-sm text-gray-500">
                                   Follow us on social media to stay updated on
                                   future opportunities
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CareersPage;
