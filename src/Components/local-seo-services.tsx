"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
     ArrowRight,
     MapPin,
     Star,
     Building,
     Phone,
     DollarSign,
     Search,
     FileText,
     Users,
     BarChart2,
     Smartphone,
     Globe,
     CheckCircle,
     Link2,
     Sparkles,
     Target,
     TrendingUp,
} from "lucide-react";
import Form from "./form";
import { QuotePopup } from "./quote-popup";
import image1 from "@/Images/services-analytics-alt-colors-optimized.png";

// Simplified local SEO features
const localSeoFeatures = [
     {
          title: "Google Business Profile Optimization",
          description:
               "Comprehensive optimization of your Google Business Profile to improve local visibility and attract nearby customers.",
          icon: Building,
     },
     {
          title: "Local Citation Building",
          description:
               "Strategic creation and management of business listings across directories to strengthen local search presence.",
          icon: Globe,
     },
     {
          title: "Review Management",
          description:
               "Proactive acquisition and management of customer reviews to build trust and improve local rankings.",
          icon: Star,
     },
     {
          title: "Local Content Strategy",
          description:
               "Creation of location-specific content that resonates with local audiences and improves relevance for local searches.",
          icon: FileText,
     },
     {
          title: "Local Link Building",
          description:
               "Development of local backlinks from community organizations, business partners, and local media outlets.",
          icon: Link2,
     },
     {
          title: "Local SEO Analytics",
          description:
               "Comprehensive tracking and analysis of local search performance with actionable insights for continuous improvement.",
          icon: BarChart2,
     },
];

// Simplified process steps
const localSeoSteps = [
     {
          title: "Local SEO Audit",
          description:
               "We analyze your current local search presence, Google Business Profile, citations, and local competitors.",
          icon: Search,
     },
     {
          title: "Google Business Profile Optimization",
          description:
               "We optimize your Google Business Profile with accurate information, compelling descriptions, and engaging photos.",
          icon: Building,
     },
     {
          title: "Citation Building & Cleanup",
          description:
               "We create and correct business listings across directories to ensure consistent NAP information.",
          icon: Globe,
     },
     {
          title: "Review Strategy Implementation",
          description:
               "We implement systems to generate positive reviews and develop strategies to respond to all customer feedback.",
          icon: Star,
     },
     {
          title: "Local Content Development",
          description:
               "We create location-specific content that resonates with your local audience and improves local search relevance.",
          icon: FileText,
     },
     {
          title: "Ongoing Optimization & Reporting",
          description:
               "We continuously monitor performance, make data-driven adjustments, and provide regular reports on your local SEO progress.",
          icon: BarChart2,
     },
];

// Simplified statistics
const statistics = [
     { value: "450+", label: "Local Businesses", color: "text-blue-600" },
     { value: "156%", label: "Avg. Map Views", color: "text-green-600" },
     { value: "12K+", label: "Reviews Generated", color: "text-yellow-600" },
     {
          value: "89%",
          label: "Local Ranking Improvement",
          color: "text-purple-600",
     },
     { value: "18+", label: "Local Industries", color: "text-red-600" },
     { value: "132%", label: "Avg. Call Increase", color: "text-indigo-600" },
];

export default function LocalSEOServices() {
     const formRef = useRef<HTMLDivElement>(null);
     const [showQuotePopup, setShowQuotePopup] = useState(false);

     const scrollToForm = () => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     const toggleQuotePopup = () => {
          setShowQuotePopup((prev) => !prev);
     };

     return (
          <div className="min-h-screen bg-white">
               {/* Hero Section */}
               <section className="relative px-4 py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
                    {/* Background decoration */}
                    <div className="absolute inset-0">
                         <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
                         <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container mx-auto max-w-6xl relative z-10">
                         <div className="flex flex-col lg:flex-row items-center gap-12">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   className="w-full lg:w-1/2"
                              >
                                   <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                                        <Sparkles className="w-4 h-4" />
                                        Local SEO Excellence
                                   </div>
                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Local SEO Services
                                   </h1>
                                   <p className="text-xl text-blue-100 mb-8 max-w-lg">
                                        We help your business{" "}
                                        <span className="font-bold">
                                             dominate local search results
                                        </span>
                                        , attract{" "}
                                        <span className="font-bold">
                                             nearby customers
                                        </span>
                                        , and drive more foot traffic, calls,
                                        and local leads.
                                   </p>
                                   <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                             onClick={scrollToForm}
                                             className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                                        >
                                             Get a Free Local SEO Audit
                                             <ArrowRight className="inline w-5 h-5 ml-2" />
                                        </button>
                                        <button
                                             onClick={toggleQuotePopup}
                                             className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                                        >
                                             Request Local SEO Quote
                                             <DollarSign className="inline w-5 h-5 ml-2" />
                                        </button>
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 20 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   className="w-full lg:w-1/2"
                              >
                                   <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-3"></div>
                                        <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden">
                                             <Image
                                                  src={image1}
                                                  alt="Local SEO Services"
                                                  width={600}
                                                  height={400}
                                                  className="w-full h-auto"
                                                  priority
                                             />
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Features Section */}
               <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="container mx-auto max-w-6xl">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                   Comprehensive Local SEO Solutions
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Our local SEO services are designed to help
                                   your business stand out in local search
                                   results, attract nearby customers, and
                                   outrank local competitors.
                              </p>
                         </motion.div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {localSeoFeatures.map((feature, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                                   >
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white">
                                             <feature.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">
                                             {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                             {feature.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Why Local SEO Matters Section */}
               <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                   Why Local SEO Matters
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Local SEO is essential for businesses that
                                   serve specific geographic areas. Here's why
                                   investing in local search optimization is
                                   crucial for your business growth.
                              </p>
                         </motion.div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {[
                                   {
                                        icon: <MapPin className="w-6 h-6" />,
                                        title: "46% of All Google Searches are Local",
                                        description:
                                             "Nearly half of all Google searches have local intent, with users looking for nearby businesses.",
                                        color: "from-red-500 to-red-600",
                                   },
                                   {
                                        icon: (
                                             <Smartphone className="w-6 h-6" />
                                        ),
                                        title: "76% of Local Searches Result in Store Visits",
                                        description:
                                             "Over three-quarters of people who search for something nearby on their smartphone visit a related business within a day.",
                                        color: "from-green-500 to-green-600",
                                   },
                                   {
                                        icon: <Phone className="w-6 h-6" />,
                                        title: "28% of Local Searches Lead to Purchases",
                                        description:
                                             "More than a quarter of local searches result in a purchase, making local SEO a direct driver of revenue.",
                                        color: "from-yellow-500 to-yellow-600",
                                   },
                                   {
                                        icon: <Star className="w-6 h-6" />,
                                        title: "88% Trust Online Reviews as Much as Personal Recommendations",
                                        description:
                                             "The vast majority of consumers trust online reviews as much as personal recommendations.",
                                        color: "from-blue-500 to-blue-600",
                                   },
                                   {
                                        icon: <Users className="w-6 h-6" />,
                                        title: "97% of Consumers Search Online for Local Businesses",
                                        description:
                                             "Almost all consumers use the internet to find local businesses, making local search visibility essential.",
                                        color: "from-purple-500 to-purple-600",
                                   },
                                   {
                                        icon: <Building className="w-6 h-6" />,
                                        title: "Local Businesses with Complete GBP Get 7x More Clicks",
                                        description:
                                             "Businesses with complete Google Business Profiles receive 7 times more clicks than those with incomplete listings.",
                                        color: "from-indigo-500 to-indigo-600",
                                   },
                              ].map((stat, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                                   >
                                        <div
                                             className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-6 text-white`}
                                        >
                                             {stat.icon}
                                        </div>
                                        <h3 className="text-lg font-bold mb-4 text-gray-900">
                                             {stat.title}
                                        </h3>
                                        <p className="text-gray-600">
                                             {stat.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Process Section */}
               <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="container mx-auto max-w-6xl">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full text-blue-800 text-sm font-semibold mb-6">
                                   <Target className="w-4 h-4" />
                                   Proven Methodology
                              </div>
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                   Our Local SEO Process
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   We follow a proven, data-driven approach to
                                   local SEO that consistently delivers results
                                   for businesses across industries and markets.
                              </p>
                         </motion.div>

                         <div className="relative">
                              <div className="space-y-12 lg:space-y-0">
                                   {localSeoSteps.map((step, index) => (
                                        <motion.div
                                             key={index}
                                             initial={{ opacity: 0, y: 20 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             transition={{
                                                  duration: 0.6,
                                                  delay: index * 0.1,
                                             }}
                                             viewport={{ once: true }}
                                             className={`flex flex-col lg:flex-row items-center gap-8 ${
                                                  index % 2 === 0
                                                       ? "lg:flex-row-reverse"
                                                       : ""
                                             }`}
                                        >
                                             <div className="w-full lg:w-1/2 relative z-10">
                                                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                                                       <div className="flex items-start gap-4 mb-6">
                                                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                                                 {index + 1}
                                                            </div>
                                                            <div>
                                                                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                                      {
                                                                           step.title
                                                                      }
                                                                 </h3>
                                                            </div>
                                                       </div>
                                                       <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                                            {step.description}
                                                       </p>

                                                       {/* Step-specific features */}
                                                       <div className="space-y-3">
                                                            {step.title ===
                                                                 "Local SEO Audit" && (
                                                                 <>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Google
                                                                                Business
                                                                                Profile
                                                                                analysis
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Citation
                                                                                consistency
                                                                                review
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Competitor
                                                                                analysis
                                                                           </span>
                                                                      </div>
                                                                 </>
                                                            )}
                                                            {step.title ===
                                                                 "Google Business Profile Optimization" && (
                                                                 <>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Complete
                                                                                profile
                                                                                setup
                                                                                &
                                                                                optimization
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Professional
                                                                                photos
                                                                                &
                                                                                videos
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Service
                                                                                area
                                                                                &
                                                                                hours
                                                                                optimization
                                                                           </span>
                                                                      </div>
                                                                 </>
                                                            )}
                                                            {step.title ===
                                                                 "Citation Building & Cleanup" && (
                                                                 <>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                NAP
                                                                                consistency
                                                                                across
                                                                                50+
                                                                                directories
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Duplicate
                                                                                listing
                                                                                removal
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Industry-specific
                                                                                directory
                                                                                listings
                                                                           </span>
                                                                      </div>
                                                                 </>
                                                            )}
                                                            {step.title ===
                                                                 "Review Strategy Implementation" && (
                                                                 <>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Review
                                                                                generation
                                                                                system
                                                                                setup
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Review
                                                                                response
                                                                                templates
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Review
                                                                                monitoring
                                                                                &
                                                                                alerts
                                                                           </span>
                                                                      </div>
                                                                 </>
                                                            )}
                                                            {step.title ===
                                                                 "Local Content Development" && (
                                                                 <>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Location-specific
                                                                                landing
                                                                                pages
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Local
                                                                                keyword
                                                                                optimization
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Community-focused
                                                                                content
                                                                           </span>
                                                                      </div>
                                                                 </>
                                                            )}
                                                            {step.title ===
                                                                 "Ongoing Optimization & Reporting" && (
                                                                 <>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Monthly
                                                                                performance
                                                                                reports
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Continuous
                                                                                ranking
                                                                                monitoring
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center gap-3 text-sm text-gray-600">
                                                                           <CheckCircle className="w-4 h-4 text-green-500" />
                                                                           <span>
                                                                                Strategy
                                                                                adjustments
                                                                                &
                                                                                improvements
                                                                           </span>
                                                                      </div>
                                                                 </>
                                                            )}
                                                       </div>
                                                  </div>
                                             </div>

                                             <div className="w-full lg:w-1/2 flex justify-center relative z-10">
                                                  <div className="relative">
                                                       <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl border-4 border-white">
                                                            <step.icon className="w-8 h-8" />
                                                       </div>
                                                       {/* Background decoration */}
                                                       <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-xl opacity-30 -z-10"></div>
                                                  </div>
                                             </div>
                                        </motion.div>
                                   ))}
                              </div>
                         </div>

                         {/* Process summary */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.6 }}
                              viewport={{ once: true }}
                              className="mt-16 text-center"
                         >
                              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
                                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        What to Expect
                                   </h3>
                                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="text-center">
                                             <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                                                  <TrendingUp className="w-6 h-6" />
                                             </div>
                                             <h4 className="font-semibold text-gray-900 mb-2">
                                                  First Results
                                             </h4>
                                             <p className="text-gray-600 text-sm">
                                                  Visible improvements within
                                                  30-60 days
                                             </p>
                                        </div>
                                        <div className="text-center">
                                             <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                                                  <Target className="w-6 h-6" />
                                             </div>
                                             <h4 className="font-semibold text-gray-900 mb-2">
                                                  Full Optimization
                                             </h4>
                                             <p className="text-gray-600 text-sm">
                                                  Complete implementation in
                                                  90-120 days
                                             </p>
                                        </div>
                                        <div className="text-center">
                                             <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                                                  <BarChart2 className="w-6 h-6" />
                                             </div>
                                             <h4 className="font-semibold text-gray-900 mb-2">
                                                  Ongoing Support
                                             </h4>
                                             <p className="text-gray-600 text-sm">
                                                  Continuous monitoring and
                                                  optimization
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Statistics Section */}
               <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                   Our Local SEO Impact
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   We've helped hundreds of local businesses
                                   achieve significant growth through strategic
                                   local search optimization. Here's our track
                                   record of success.
                              </p>
                         </motion.div>

                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                              {statistics.map((stat, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                                   >
                                        <div
                                             className={`text-3xl font-bold mb-2 ${stat.color}`}
                                        >
                                             {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                             {stat.label}
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="container mx-auto max-w-4xl text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                         >
                              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                                   Ready to Dominate Local Search?
                              </h2>
                              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                   Get started with our local SEO services and
                                   watch your business climb to the top of local
                                   search results.
                              </p>
                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={scrollToForm}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                                   >
                                        <MapPin className="inline w-5 h-5 mr-2" />
                                        Get Your Free Local SEO Audit
                                   </button>
                                   <button
                                        onClick={toggleQuotePopup}
                                        className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                                   >
                                        <Building className="inline w-5 h-5 mr-2" />
                                        Boost Your Local Visibility Today
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Benefits Section */}
               <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                                   Benefits of Local SEO
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Investing in local SEO provides numerous
                                   advantages for businesses that serve specific
                                   geographic areas.
                              </p>
                         </motion.div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {[
                                   "Increased Local Visibility",
                                   "More Qualified Traffic",
                                   "Increased Foot Traffic",
                                   "More Phone Calls",
                                   "Enhanced Trust & Credibility",
                                   "Competitive Advantage",
                                   "Higher Conversion Rates",
                                   "Cost-Effective Marketing",
                              ].map((benefit, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                                   >
                                        <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                                             <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                                             <span>{benefit}</span>
                                        </h3>
                                        <p className="text-gray-600">
                                             {benefit ===
                                                  "Increased Local Visibility" &&
                                                  "Appear prominently in local search results, Google Maps, and the local pack when nearby customers search for your products or services."}
                                             {benefit ===
                                                  "More Qualified Traffic" &&
                                                  "Attract visitors who are specifically looking for your products or services in your area, resulting in higher conversion rates."}
                                             {benefit ===
                                                  "Increased Foot Traffic" &&
                                                  "Drive more in-store visits as local searchers are often looking for businesses they can visit immediately or in the near future."}
                                             {benefit === "More Phone Calls" &&
                                                  "Generate more direct phone inquiries as local searchers often call businesses directly from search results."}
                                             {benefit ===
                                                  "Enhanced Trust & Credibility" &&
                                                  "Build trust with potential customers through positive reviews, accurate business information, and prominent local search visibility."}
                                             {benefit ===
                                                  "Competitive Advantage" &&
                                                  "Outrank local competitors in search results, making your business the first choice for potential customers in your area."}
                                             {benefit ===
                                                  "Higher Conversion Rates" &&
                                                  "Convert more visitors into customers as local searchers typically have higher purchase intent and are further along in the buying process."}
                                             {benefit ===
                                                  "Cost-Effective Marketing" &&
                                                  "Achieve a higher return on investment compared to traditional advertising methods by targeting customers who are actively searching for your services."}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Form Section */}
               <section
                    ref={formRef}
                    className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50"
               >
                    <div className="container mx-auto max-w-4xl">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center mb-12"
                         >
                              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                                   Get Your Free Local SEO Audit
                              </h2>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                   Discover how your business is performing in
                                   local search and receive actionable
                                   recommendations to improve your local
                                   visibility and attract more nearby customers.
                              </p>
                         </motion.div>
                         <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                              <Form />
                         </div>
                    </div>
               </section>

               {/* Quote Popup */}
               <QuotePopup isOpen={showQuotePopup} onClose={toggleQuotePopup} />
          </div>
     );
}
