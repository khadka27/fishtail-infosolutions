"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
     Users,
     BarChart,
     DollarSign,
     Mail,
     Award,
     Target,
     Settings,
     FileText,
     TrendingUp,
     CheckCircle,
     ArrowRight,
     Calendar,
     Phone,
     Sparkles,
     Zap,
     Globe,
} from "lucide-react";
import Image from "next/image";
import Form from "./form";
import { LeadGenerationPopup } from "./lead-generation-popup";
import leadGeneration from "@/Images/lead-generation.jpg";
import Link from "next/link";

// Simplified services data
const services = [
     {
          icon: <Target className="w-6 h-6" />,
          title: "Strategic Lead Targeting",
          description:
               "Precision targeting of your ideal customer profiles to attract high-quality leads",
     },
     {
          icon: <Mail className="w-6 h-6" />,
          title: "Email Lead Generation",
          description:
               "Sophisticated email campaigns that nurture prospects through personalized journeys",
     },
     {
          icon: <Award className="w-6 h-6" />,
          title: "Content Lead Magnets",
          description:
               "High-value content assets that attract and capture leads through valuable information",
     },
     {
          icon: <Settings className="w-6 h-6" />,
          title: "Lead Capture Optimization",
          description:
               "Conversion-focused design and optimization of landing pages and forms",
     },
     {
          icon: <FileText className="w-6 h-6" />,
          title: "Lead Qualification & Scoring",
          description:
               "Lead scoring systems to identify and prioritize your most valuable prospects",
     },
     {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Lead Nurturing Automation",
          description:
               "Automated workflows that nurture leads through the sales funnel",
     },
];

// Simplified metrics data
const metrics = [
     {
          icon: <DollarSign className="w-8 h-8" />,
          value: "287%",
          label: "Average ROI for our lead gen campaigns",
          color: "from-blue-500 to-blue-600",
     },
     {
          icon: <Users className="w-8 h-8" />,
          value: "8,200+",
          label: "Qualified leads generated monthly",
          color: "from-blue-500 to-blue-600",
     },
     {
          icon: <Mail className="w-8 h-8" />,
          value: "36%",
          label: "Average lead-to-opportunity conversion",
          color: "from-blue-500 to-blue-600",
     },
     {
          icon: <BarChart className="w-8 h-8" />,
          value: "52%",
          label: "Reduction in cost per qualified lead",
          color: "from-blue-500 to-blue-600",
     },
];

export default function LeadGeneration() {
     const [isPopupOpen, setIsPopupOpen] = useState(false);
     const contactRef = useRef<HTMLDivElement>(null);

     const scrollToContact = () => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <div className="min-h-screen bg-white">
               {/* Hero Section */}
               <section className="relative px-4 py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
                    {/* Background decoration */}
                    <div className="absolute inset-0">
                         <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
                         <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>
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
                                        Lead Generation Excellence
                                   </div>
                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Transform Visitors into{" "}
                                        <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                                             Valuable Leads
                                        </span>
                                   </h1>
                                   <p className="text-xl text-blue-100 mb-8 max-w-lg">
                                        Strategic lead generation solutions that
                                        capture, nurture, and convert your ideal
                                        prospects into qualified opportunities.
                                   </p>
                                   <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                             onClick={() =>
                                                  setIsPopupOpen(true)
                                             }
                                             className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                             Boost Your Lead Generation
                                        </button>
                                        <Link
                                             href="https://calendly.com/internal-fishtailinfosolutions/30min"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold transition-all duration-300 border border-white/30 text-center"
                                        >
                                             <Calendar className="inline w-5 h-5 mr-2" />
                                             Schedule Consultation
                                        </Link>
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 20 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   className="w-full lg:w-1/2"
                              >
                                   <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl transform rotate-3"></div>
                                        <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden">
                                             <Image
                                                  src={leadGeneration}
                                                  alt="Lead Generation Illustration"
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

               {/* Metrics Section */}
               <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="container mx-auto max-w-6xl">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {metrics.map((metric, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 text-center"
                                   >
                                        <div
                                             className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                                        >
                                             {metric.icon}
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                             {metric.value}
                                        </h3>
                                        <p className="text-gray-600">
                                             {metric.label}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Services Section */}
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
                                   Comprehensive Lead Generation Services
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   End-to-end lead generation solutions that
                                   drive sustainable growth for your business
                              </p>
                         </motion.div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {services.map((service, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                                   >
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                                             {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900">
                                             {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                             {service.description}
                                        </p>
                                        <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                             Learn more{" "}
                                             <ArrowRight className="ml-2 w-4 h-4" />
                                        </button>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="container mx-auto max-w-4xl">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                              className="text-center"
                         >
                              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                                   <Calendar className="w-10 h-10 text-white" />
                              </div>
                              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                                   Ready to Discuss Your Lead Generation
                                   Strategy?
                              </h2>
                              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                   Book a free 30-minute consultation with our
                                   lead generation experts. We'll analyze your
                                   current approach and provide actionable
                                   recommendations.
                              </p>

                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={() => setIsPopupOpen(true)}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                                   >
                                        Get Your Custom Strategy
                                   </button>
                                   <Link
                                        href="https://calendly.com/internal-fishtailinfosolutions/30min"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all duration-300 text-center"
                                   >
                                        <Calendar className="inline w-5 h-5 mr-2" />
                                        Schedule Consultation
                                   </Link>
                              </div>

                              {/* Benefits */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                                   {[
                                        {
                                             icon: (
                                                  <CheckCircle className="w-6 h-6" />
                                             ),
                                             title: "Free Consultation",
                                             desc: "No cost, no obligation",
                                        },
                                        {
                                             icon: (
                                                  <Target className="w-6 h-6" />
                                             ),
                                             title: "Personalized Strategy",
                                             desc: "Tailored recommendations",
                                        },
                                        {
                                             icon: (
                                                  <TrendingUp className="w-6 h-6" />
                                             ),
                                             title: "Actionable Insights",
                                             desc: "Concrete steps to improve",
                                        },
                                   ].map((benefit, index) => (
                                        <div
                                             key={index}
                                             className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                                        >
                                             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto text-green-600">
                                                  {benefit.icon}
                                             </div>
                                             <h3 className="text-lg font-bold mb-2 text-gray-900">
                                                  {benefit.title}
                                             </h3>
                                             <p className="text-gray-600">
                                                  {benefit.desc}
                                             </p>
                                        </div>
                                   ))}
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Contact Section */}
               <section ref={contactRef} className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                              >
                                   <h2 className="text-4xl font-bold mb-6 text-gray-900">
                                        Ready to Transform Your Lead Generation?
                                   </h2>
                                   <p className="text-xl text-gray-600 mb-8">
                                        Whether you're struggling to generate
                                        enough leads or need to improve lead
                                        quality, our team of lead generation
                                        experts is here to help.
                                   </p>

                                   <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
                                        <h3 className="text-xl font-bold mb-4 text-blue-900">
                                             Our Commitment to You:
                                        </h3>
                                        <ul className="space-y-3">
                                             {[
                                                  "Dedicated lead generation strategist for your account",
                                                  "Transparent reporting and performance metrics",
                                                  "Continuous optimization and A/B testing",
                                                  "Integration with your CRM and sales processes",
                                                  "Focus on quality leads that convert to revenue",
                                             ].map((item, index) => (
                                                  <li
                                                       key={index}
                                                       className="flex items-start"
                                                  >
                                                       <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                                                       <span className="text-gray-700">
                                                            {item}
                                                       </span>
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>

                                   <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                             onClick={() =>
                                                  setIsPopupOpen(true)
                                             }
                                             className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300"
                                        >
                                             Get Your Custom Strategy
                                        </button>
                                        <Link
                                             href="https://calendly.com/internal-fishtailinfosolutions/30min"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-semibold transition-all duration-300 text-center"
                                        >
                                             <Calendar className="inline w-5 h-5 mr-2" />
                                             Schedule Consultation
                                        </Link>
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
                              >
                                   <Form />
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Lead Generation Popup */}
               <LeadGenerationPopup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
               />
          </div>
     );
}
