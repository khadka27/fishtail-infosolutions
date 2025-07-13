"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
     BookOpen,
     FileText,
     Lightbulb,
     Mic,
     FileSpreadsheet,
     FileCheck,
     ArrowRight,
     MessageSquare,
     Users,
     TrendingUp,
     Award,
     Target,
     CheckCircle,
     Sparkles,
} from "lucide-react";
import Form from "@/Components/form";
import content from "@/Images/content-marketing.png";

// Simplified content services
const contentServices = [
     {
          icon: BookOpen,
          title: "Industry News & Insights",
          description:
               "Engaging industry content that educates and entertains your audience.",
          color: "blue",
     },
     {
          icon: FileText,
          title: "Case Studies",
          description:
               "Compelling success stories that showcase your expertise and results.",
          color: "green",
     },
     {
          icon: Lightbulb,
          title: "Content Strategy",
          description:
               "Data-driven content plans aligned with your business objectives.",
          color: "purple",
     },
     {
          icon: Mic,
          title: "Expert Interviews",
          description:
               "Thought leadership content featuring industry experts and insights.",
          color: "orange",
     },
     {
          icon: FileSpreadsheet,
          title: "Press Releases",
          description:
               "Newsworthy content that boosts brand awareness and credibility.",
          color: "pink",
     },
     {
          icon: FileCheck,
          title: "White Papers",
          description:
               "Authoritative content that establishes your industry leadership.",
          color: "teal",
     },
];

// Key benefits
const benefits = [
     "Increased brand awareness and recognition",
     "Higher engagement and social media reach",
     "Improved search engine rankings",
     "Enhanced customer trust and loyalty",
     "Better lead generation and conversion",
     "Strengthened industry authority",
];

// Statistics
const stats = [
     { value: "300%", label: "Avg. Engagement Increase", icon: TrendingUp },
     { value: "85%", label: "Content Success Rate", icon: Award },
     { value: "150+", label: "Happy Clients", icon: Users },
     { value: "500+", label: "Content Pieces Created", icon: Target },
];

const ContentMarketingStrategy = () => {
     const formRef = useRef<HTMLDivElement>(null);
     const [activeService, setActiveService] = useState<number | null>(null);

     const scrollToForm = () => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <div className="flex flex-col">
               {/* Hero Section */}
               <section className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-700 text-white py-16 md:py-24 px-4 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48"></div>

                    <div className="relative max-w-6xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              {/* Content */}
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   className="text-center lg:text-left"
                              >
                                   <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6">
                                        <Sparkles className="w-4 h-4" />
                                        Strategic Content Marketing
                                   </div>

                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Content That
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                                             Converts & Engages
                                        </span>
                                   </h1>

                                   <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                        Transform your brand story into powerful
                                        content that drives engagement, builds
                                        trust, and converts visitors into loyal
                                        customers.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                        <button
                                             onClick={scrollToForm}
                                             className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                             Start Your Strategy
                                             <ArrowRight className="ml-2 h-5 w-5" />
                                        </button>
                                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-700 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300">
                                             View Our Work
                                             <BookOpen className="ml-2 h-5 w-5" />
                                        </button>
                                   </div>

                                   {/* Quick stats */}
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {stats.map((stat, index) => (
                                             <div
                                                  key={index}
                                                  className="text-center group"
                                             >
                                                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 transition-all duration-300">
                                                       <stat.icon className="w-6 h-6 text-white" />
                                                  </div>
                                                  <div className="text-2xl font-bold text-yellow-300">
                                                       {stat.value}
                                                  </div>
                                                  <div className="text-sm text-white/80">
                                                       {stat.label}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </motion.div>

                              {/* Image */}
                              <motion.div
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   animate={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 0.6, delay: 0.2 }}
                                   className="relative"
                              >
                                   <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                        <Image
                                             src={content}
                                             alt="Content Marketing Strategy"
                                             width={500}
                                             height={400}
                                             className="object-contain w-full h-auto"
                                             priority
                                        />
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Benefits Section */}
               <section className="py-16 md:py-24 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Why Content Marketing Matters
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   Strategic content marketing builds
                                   communities, inspires engagement, and drives
                                   measurable business results through valuable
                                   storytelling.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                              >
                                   <div className="space-y-4">
                                        {benefits.map((benefit, index) => (
                                             <motion.div
                                                  key={index}
                                                  initial={{
                                                       opacity: 0,
                                                       x: -20,
                                                  }}
                                                  whileInView={{
                                                       opacity: 1,
                                                       x: 0,
                                                  }}
                                                  transition={{
                                                       duration: 0.5,
                                                       delay: index * 0.1,
                                                  }}
                                                  viewport={{ once: true }}
                                                  className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                                             >
                                                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                                                  <span className="text-gray-700 font-medium">
                                                       {benefit}
                                                  </span>
                                             </motion.div>
                                        ))}
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl"
                              >
                                   <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        Content That Delivers Results
                                   </h3>
                                   <p className="text-gray-700 leading-relaxed mb-6">
                                        Our content marketing approach focuses
                                        on creating valuable, relevant content
                                        that not only engages your audience but
                                        also drives them to take action. We
                                        combine creativity with data-driven
                                        insights to deliver measurable ROI.
                                   </p>
                                   <div className="bg-white p-6 rounded-xl border border-teal-100">
                                        <div className="text-3xl font-bold text-teal-600 mb-2">
                                             87%
                                        </div>
                                        <div className="text-sm text-gray-600">
                                             of our clients see increased
                                             engagement within 30 days
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Services Section */}
               <section className="py-16 md:py-24 px-4">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Our Content Services
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   From strategy to execution, we provide
                                   comprehensive content solutions that drive
                                   engagement and deliver results.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {contentServices.map((service, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className={`group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer ${
                                             activeService === index
                                                  ? `ring-2 ring-${service.color}-500`
                                                  : ""
                                        }`}
                                        onClick={() =>
                                             setActiveService(
                                                  activeService === index
                                                       ? null
                                                       : index
                                             )
                                        }
                                   >
                                        <div
                                             className={`w-12 h-12 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                             <service.icon
                                                  className={`w-6 h-6 text-${service.color}-600`}
                                             />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                             {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                             {service.description}
                                        </p>
                                        {activeService === index && (
                                             <motion.div
                                                  initial={{
                                                       opacity: 0,
                                                       height: 0,
                                                  }}
                                                  animate={{
                                                       opacity: 1,
                                                       height: "auto",
                                                  }}
                                                  exit={{
                                                       opacity: 0,
                                                       height: 0,
                                                  }}
                                                  className="mt-4 pt-4 border-t border-gray-100"
                                             >
                                                  <button
                                                       className={`text-${service.color}-600 text-sm font-medium hover:underline`}
                                                  >
                                                       Learn more about this
                                                       service →
                                                  </button>
                                             </motion.div>
                                        )}
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Process Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Our Content Process
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   A strategic approach that ensures every piece
                                   of content serves your business goals.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {[
                                   {
                                        title: "Research & Strategy",
                                        description:
                                             "Deep dive into your audience and market",
                                        number: "01",
                                   },
                                   {
                                        title: "Content Planning",
                                        description:
                                             "Strategic content calendar and topics",
                                        number: "02",
                                   },
                                   {
                                        title: "Creation & Production",
                                        description:
                                             "High-quality content development",
                                        number: "03",
                                   },
                                   {
                                        title: "Distribution & Analytics",
                                        description:
                                             "Multi-channel promotion and tracking",
                                        number: "04",
                                   },
                              ].map((step, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="relative text-center group"
                                   >
                                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group-hover:scale-105">
                                             <div className="text-4xl font-bold text-teal-600 mb-4">
                                                  {step.number}
                                             </div>
                                             <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                  {step.title}
                                             </h3>
                                             <p className="text-gray-600 text-sm">
                                                  {step.description}
                                             </p>
                                        </div>
                                        {index < 3 && (
                                             <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-teal-200 transform -translate-y-1/2"></div>
                                        )}
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-900 to-teal-900 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                         >
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                   Ready to Transform Your Content Strategy?
                              </h2>
                              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Let&apos;s create content that not only tells
                                   your story but drives real business results.
                                   Get started with a free content audit today.
                              </p>

                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   >
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Start Your Content Journey
                                   </button>
                                   <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300">
                                        <BookOpen className="mr-2 h-5 w-5" />
                                        View Content Samples
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Contact Form Section */}
               <section
                    ref={formRef}
                    className="py-16 md:py-24 px-4 bg-gray-50"
               >
                    <div className="max-w-4xl mx-auto">
                         <div className="text-center mb-12">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Let's Create Something Amazing
                              </h2>
                              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                   Tell us about your content goals and
                                   we&apos;ll create a custom strategy that
                                   drives real results for your business.
                              </p>
                         </div>
                         <Form />
                    </div>
               </section>
          </div>
     );
};

export default ContentMarketingStrategy;
