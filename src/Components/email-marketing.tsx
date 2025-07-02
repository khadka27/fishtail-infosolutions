"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
     ArrowRight,
     Mail,
     BarChart2,
     Users,
     FileText,
     DollarSign,
     Target,
     Zap,
     Repeat,
     CheckCircle,
     Send,
     Settings,
     TrendingUp,
     Sparkles,
     Award,
     Globe,
     Inbox,
} from "lucide-react";
import Form from "./form";
import { QuotePopup } from "./quote-popup";
import Image from "next/image";
import emailMarketing from "@/Images/email-marketing.png";

// Simplified email services
const emailServices = [
     {
          title: "Email Strategy Development",
          description:
               "Custom email marketing strategies aligned with your business goals and target audience.",
          icon: Target,
     },
     {
          title: "Campaign Management",
          description:
               "End-to-end campaign development, testing, deployment, and performance tracking.",
          icon: Send,
     },
     {
          title: "Automated Sequences",
          description:
               "Strategic automation workflows that deliver personalized messages at the right time.",
          icon: Repeat,
     },
     {
          title: "List Growth & Segmentation",
          description:
               "Grow your email list with engaged subscribers and advanced segmentation strategies.",
          icon: Users,
     },
     {
          title: "A/B Testing & Optimization",
          description:
               "Data-driven testing and optimization to continuously improve email performance.",
          icon: Settings,
     },
     {
          title: "Analytics & Reporting",
          description:
               "Comprehensive tracking with actionable insights and detailed performance reports.",
          icon: BarChart2,
     },
];

// Simplified process steps
const processSteps = [
     {
          title: "Strategy & Planning",
          description:
               "Develop customized email marketing strategy aligned with your business goals.",
          icon: Target,
          features: [
               "Audience research",
               "Strategy development",
               "Goal setting",
          ],
     },
     {
          title: "List Building",
          description:
               "Grow and segment your email list for targeted, effective campaigns.",
          icon: Users,
          features: ["Lead magnets", "Opt-in forms", "List segmentation"],
     },
     {
          title: "Content Creation",
          description:
               "Create compelling email content that drives engagement and conversions.",
          icon: FileText,
          features: ["Email design", "Copywriting", "CTA optimization"],
     },
     {
          title: "Campaign Execution",
          description:
               "Launch optimized campaigns with proper tracking and monitoring.",
          icon: Send,
          features: ["Campaign setup", "Testing", "Deployment"],
     },
];

// Key benefits
const benefits = [
     {
          icon: DollarSign,
          title: "4200% Average ROI",
          description: "Highest ROI among all marketing channels",
     },
     {
          icon: Users,
          title: "4.3B Email Users",
          description: "Reach over half the world's population",
     },
     {
          icon: Target,
          title: "760% More Revenue",
          description: "From segmented email campaigns",
     },
     {
          icon: Zap,
          title: "320% More Revenue",
          description: "From automated email sequences",
     },
];

// Statistics
const stats = [
     { value: "400+", label: "Campaigns Launched" },
     { value: "28%", label: "Average Open Rate" },
     { value: "3.2%", label: "Average Click Rate" },
     { value: "154%", label: "Average ROI" },
];

const EmailMarketing = () => {
     const formRef = useRef<HTMLDivElement>(null);
     const [showQuotePopup, setShowQuotePopup] = useState(false);

     const scrollToForm = () => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <div className="flex flex-col">
               {/* Hero Section */}
               <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className="mb-8"
                         >
                              <div className="relative w-48 h-48 mx-auto mb-8">
                                   <Image
                                        src={emailMarketing}
                                        alt="Email Marketing Services"
                                        width={192}
                                        height={192}
                                        className="object-contain"
                                   />
                                   <div className="absolute -top-2 -right-2 bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        4200% ROI
                                   </div>
                              </div>
                              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                   Email Marketing Services
                              </h1>
                              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                                   Build lasting customer relationships and
                                   drive consistent revenue with strategic email
                                   marketing that delivers results.
                              </p>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="flex flex-col sm:flex-row gap-4 justify-center"
                         >
                              <button
                                   onClick={scrollToForm}
                                   className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                              >
                                   <Mail className="w-5 h-5" />
                                   Get Free Email Audit
                              </button>
                              <button
                                   onClick={() => setShowQuotePopup(true)}
                                   className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                              >
                                   <Sparkles className="w-5 h-5" />
                                   Request Quote
                              </button>
                         </motion.div>
                    </div>
               </section>

               {/* Benefits Section */}
               <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="max-w-7xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Why Email Marketing Works
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Email marketing remains the most effective
                                   digital marketing channel for driving revenue
                                   and building customer relationships.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {benefits.map((benefit, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                   >
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                                             <benefit.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                             {benefit.title}
                                        </h3>
                                        <p className="text-gray-600">
                                             {benefit.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Services Section */}
               <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Our Email Marketing Services
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Comprehensive email marketing solutions
                                   designed to grow your business and maximize
                                   customer lifetime value.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {emailServices.map((service, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                                   >
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                                             <service.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                             {service.title}
                                        </h3>
                                        <p className="text-gray-600">
                                             {service.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Process Section */}
               <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

                    <div className="max-w-7xl mx-auto relative">
                         <div className="text-center mb-20">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full text-blue-800 text-sm font-semibold mb-6 shadow-lg"
                              >
                                   <Sparkles className="w-4 h-4" />
                                   Our Proven Process
                              </motion.div>
                              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                   Our Email Marketing Process
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   A systematic approach that delivers
                                   measurable results and drives consistent
                                   growth for your business.
                              </p>
                         </div>

                         {/* Process Steps */}
                         <div className="relative">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                   {processSteps.map((step, index) => (
                                        <motion.div
                                             key={index}
                                             initial={{ opacity: 0, y: 20 }}
                                             whileInView={{ opacity: 1, y: 0 }}
                                             transition={{
                                                  duration: 0.5,
                                                  delay: index * 0.1,
                                             }}
                                             viewport={{ once: true }}
                                             className="relative"
                                        >
                                             <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                                                  <div className="relative z-10 mb-6">
                                                       <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                                            <step.icon className="w-8 h-8 text-white" />
                                                       </div>
                                                       <div className="text-center">
                                                            <div className="text-sm font-medium text-blue-600 mb-2">
                                                                 Step{" "}
                                                                 {index + 1}
                                                            </div>
                                                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                                 {step.title}
                                                            </h3>
                                                            <p className="text-gray-600 mb-4">
                                                                 {
                                                                      step.description
                                                                 }
                                                            </p>
                                                            <div className="space-y-2">
                                                                 {step.features.map(
                                                                      (
                                                                           feature,
                                                                           featureIndex
                                                                      ) => (
                                                                           <div
                                                                                key={
                                                                                     featureIndex
                                                                                }
                                                                                className="flex items-center justify-center gap-2 text-sm text-gray-500"
                                                                           >
                                                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                                                <span>
                                                                                     {
                                                                                          feature
                                                                                     }
                                                                                </span>
                                                                           </div>
                                                                      )
                                                                 )}
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             {index <
                                                  processSteps.length - 1 && (
                                                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 transform -translate-y-1/2">
                                                       <ArrowRight className="w-6 h-6 text-blue-400" />
                                                  </div>
                                             )}
                                        </motion.div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               {/* Statistics Section */}
               <section className="py-16 px-4 bg-gray-900 text-white">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                   Our Track Record
                              </h2>
                              <p className="text-xl text-gray-300">
                                   Proven results across hundreds of successful
                                   email marketing campaigns
                              </p>
                         </div>

                         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                              {stats.map((stat, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="text-center"
                                   >
                                        <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                                             {stat.value}
                                        </div>
                                        <div className="text-gray-300">
                                             {stat.label}
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                         <h2 className="text-3xl md:text-4xl font-bold mb-6">
                              Ready to Transform Your Email Marketing?
                         </h2>
                         <p className="text-xl mb-8 text-blue-100">
                              Get a free audit of your current email marketing
                              strategy and discover opportunities for growth.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <button
                                   onClick={scrollToForm}
                                   className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                              >
                                   <Mail className="w-5 h-5" />
                                   Get Free Audit
                              </button>
                              <button
                                   onClick={() => setShowQuotePopup(true)}
                                   className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                              >
                                   <TrendingUp className="w-5 h-5" />
                                   Start Growing Today
                              </button>
                         </div>
                    </div>
               </section>

               {/* Form Section */}
               <div ref={formRef} className="bg-gray-50 py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Get Your Free Email Marketing Audit
                              </h2>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                   Discover how to improve your email
                                   performance with actionable insights and
                                   personalized recommendations.
                              </p>
                         </div>
                         <Form />
                    </div>
               </div>

               {/* Quote Popup */}
               <QuotePopup
                    isOpen={showQuotePopup}
                    onClose={() => setShowQuotePopup(false)}
               />
          </div>
     );
};

export default EmailMarketing;
