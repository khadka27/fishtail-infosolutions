"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
     ArrowRight,
     Code,
     Layout,
     Smartphone,
     Monitor,
     Zap,
     RefreshCw,
     TrendingUp,
     Search,
     Layers,
     MessageSquare,
     DollarSign,
     CheckCircle,
} from "lucide-react";
import Form from "./form";
import redesign from "@/Images/redesign.png";
import { QuotePopup } from "./quote-popup";

// Simplified feature data
const features = [
     {
          title: "Modern UI/UX Design",
          description:
               "Contemporary interfaces that delight users and drive engagement.",
          icon: Layout,
          color: "blue",
     },
     {
          title: "Performance Optimization",
          description:
               "Lightning-fast loading speeds for better user experience.",
          icon: Zap,
          color: "green",
     },
     {
          title: "Mobile-First Responsive",
          description: "Perfect display across all devices and screen sizes.",
          icon: Smartphone,
          color: "purple",
     },
     {
          title: "SEO Preservation",
          description: "Maintain and improve your search engine rankings.",
          icon: Search,
          color: "orange",
     },
];

// Simplified process steps
const processSteps = [
     { title: "Audit & Analysis", icon: Search },
     { title: "Strategy Planning", icon: Layers },
     { title: "Design & Prototype", icon: Monitor },
     { title: "Development", icon: Code },
     { title: "Launch & Optimize", icon: TrendingUp },
];

// Key statistics
const stats = [
     { value: "150%", label: "Avg. Conversion Increase" },
     { value: "65%", label: "Bounce Rate Reduction" },
     { value: "3x", label: "Mobile Engagement" },
     { value: "90%", label: "Client Satisfaction" },
];

const WebsiteRedesign = () => {
     const formRef = useRef<HTMLDivElement>(null);
     const [showQuotePopup, setShowQuotePopup] = useState(false);

     const scrollToForm = () => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <div className="flex flex-col">
               {/* Hero Section */}
               <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-16 md:py-24 px-4 overflow-hidden">
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
                                        <RefreshCw className="w-4 h-4" />
                                        Expert Redesign Services
                                   </div>

                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        Transform Your
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                                             Digital Presence
                                        </span>
                                   </h1>

                                   <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                                        Modernize your website with data-driven
                                        redesign that increases conversions,
                                        improves user experience, and drives
                                        business growth.
                                   </p>

                                   <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                        <button
                                             onClick={scrollToForm}
                                             className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                             Start Your Redesign
                                             <ArrowRight className="ml-2 h-5 w-5" />
                                        </button>
                                        <button
                                             onClick={() =>
                                                  setShowQuotePopup(true)
                                             }
                                             className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
                                        >
                                             Get Free Quote
                                             <DollarSign className="ml-2 h-5 w-5" />
                                        </button>
                                   </div>

                                   {/* Quick stats */}
                                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {stats.map((stat, index) => (
                                             <div
                                                  key={index}
                                                  className="text-center"
                                             >
                                                  <div className="text-2xl md:text-3xl font-bold text-yellow-300">
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
                                             src={redesign}
                                             alt="Website Redesign Services"
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

               {/* Features Section */}
               <section className="py-16 md:py-24 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                   Why Choose Our Redesign Services?
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   We don't just make websites look better—we
                                   make them perform better. Our strategic
                                   approach delivers measurable results.
                              </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {features.map((feature, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                             duration: 0.5,
                                             delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                                   >
                                        <div
                                             className={`w-12 h-12 rounded-lg bg-${feature.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                             <feature.icon
                                                  className={`w-6 h-6 text-${feature.color}-600`}
                                             />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                             {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                             {feature.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Process Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                    <div className="max-w-7xl mx-auto">
                         <div className="text-center mb-20">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-full text-blue-800 text-sm font-semibold mb-6 shadow-sm"
                              >
                                   <Layers className="w-4 h-4" />
                                   Proven Methodology
                              </motion.div>
                              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                   Our Streamlined{" "}
                                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                        Design Process
                                   </span>
                              </h2>
                              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                                   From initial discovery to successful launch,
                                   we follow a strategic methodology that
                                   ensures your redesign delivers exceptional
                                   results and measurable ROI.
                              </p>
                         </div>

                         <div className="relative">
                              {/* Animated background elements */}
                              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                   <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
                                   <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
                              </div>

                              {/* Desktop Process Flow */}
                              <div className="hidden lg:block relative">
                                   {/* Animated connection path */}
                                   <svg
                                        className="absolute top-24 left-0 w-full h-2 z-0"
                                        viewBox="0 0 1000 20"
                                   >
                                        <defs>
                                             <linearGradient
                                                  id="pathGradient"
                                                  x1="0%"
                                                  y1="0%"
                                                  x2="100%"
                                                  y2="0%"
                                             >
                                                  <stop
                                                       offset="0%"
                                                       stopColor="#3B82F6"
                                                  />
                                                  <stop
                                                       offset="25%"
                                                       stopColor="#8B5CF6"
                                                  />
                                                  <stop
                                                       offset="50%"
                                                       stopColor="#EC4899"
                                                  />
                                                  <stop
                                                       offset="75%"
                                                       stopColor="#F59E0B"
                                                  />
                                                  <stop
                                                       offset="100%"
                                                       stopColor="#10B981"
                                                  />
                                             </linearGradient>
                                        </defs>
                                        <motion.path
                                             d="M50 10 Q250 10 450 10 T950 10"
                                             stroke="url(#pathGradient)"
                                             strokeWidth="4"
                                             fill="none"
                                             strokeLinecap="round"
                                             initial={{
                                                  pathLength: 0,
                                                  opacity: 0,
                                             }}
                                             whileInView={{
                                                  pathLength: 1,
                                                  opacity: 1,
                                             }}
                                             transition={{
                                                  duration: 2,
                                                  ease: "easeInOut",
                                             }}
                                             viewport={{ once: true }}
                                        />
                                   </svg>

                                   <div className="grid grid-cols-5 gap-8 relative z-10">
                                        {processSteps.map((step, index) => {
                                             const colors = [
                                                  {
                                                       bg: "from-blue-500 to-blue-600",
                                                       ring: "ring-blue-200",
                                                       text: "text-blue-600",
                                                  },
                                                  {
                                                       bg: "from-purple-500 to-purple-600",
                                                       ring: "ring-purple-200",
                                                       text: "text-purple-600",
                                                  },
                                                  {
                                                       bg: "from-pink-500 to-pink-600",
                                                       ring: "ring-pink-200",
                                                       text: "text-pink-600",
                                                  },
                                                  {
                                                       bg: "from-amber-500 to-amber-600",
                                                       ring: "ring-amber-200",
                                                       text: "text-amber-600",
                                                  },
                                                  {
                                                       bg: "from-emerald-500 to-emerald-600",
                                                       ring: "ring-emerald-200",
                                                       text: "text-emerald-600",
                                                  },
                                             ];

                                             return (
                                                  <motion.div
                                                       key={index}
                                                       initial={{
                                                            opacity: 0,
                                                            y: 50,
                                                       }}
                                                       whileInView={{
                                                            opacity: 1,
                                                            y: 0,
                                                       }}
                                                       transition={{
                                                            duration: 0.6,
                                                            delay: index * 0.15,
                                                       }}
                                                       viewport={{ once: true }}
                                                       className="relative group"
                                                  >
                                                       {/* Step Card */}
                                                       <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 group-hover:scale-105">
                                                            {/* Icon Container */}
                                                            <div className="relative mb-6">
                                                                 <div
                                                                      className={`w-20 h-20 bg-gradient-to-br ${colors[index].bg} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 ${colors[index].ring} ring-8 ring-opacity-30`}
                                                                 >
                                                                      <step.icon className="w-10 h-10 text-white" />
                                                                 </div>
                                                                 {/* Step number */}
                                                                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-md">
                                                                      {index +
                                                                           1}
                                                                 </div>
                                                            </div>

                                                            {/* Content */}
                                                            <div className="text-center">
                                                                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                                                      {
                                                                           step.title
                                                                      }
                                                                 </h3>
                                                                 <p className="text-gray-600 text-sm leading-relaxed">
                                                                      {step.description ||
                                                                           `Step ${
                                                                                index +
                                                                                1
                                                                           } in our comprehensive redesign process.`}
                                                                 </p>
                                                            </div>

                                                            {/* Hover indicator */}
                                                            <div
                                                                 className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${colors[index].bg} rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-full`}
                                                            ></div>
                                                       </div>

                                                       {/* Floating elements */}
                                                       <div
                                                            className={`absolute -top-3 -left-3 w-6 h-6 ${colors[index].bg} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300 animate-pulse`}
                                                       ></div>
                                                       <div
                                                            className={`absolute -bottom-3 -right-3 w-4 h-4 ${colors[index].bg} rounded-full opacity-0 group-hover:opacity-30 transition-all duration-300 delay-100 animate-pulse`}
                                                       ></div>
                                                  </motion.div>
                                             );
                                        })}
                                   </div>
                              </div>

                              {/* Mobile Process Flow */}
                              <div className="lg:hidden space-y-8">
                                   {processSteps.map((step, index) => {
                                        const colors = [
                                             {
                                                  bg: "from-blue-500 to-blue-600",
                                                  ring: "ring-blue-200",
                                             },
                                             {
                                                  bg: "from-purple-500 to-purple-600",
                                                  ring: "ring-purple-200",
                                             },
                                             {
                                                  bg: "from-pink-500 to-pink-600",
                                                  ring: "ring-pink-200",
                                             },
                                             {
                                                  bg: "from-amber-500 to-amber-600",
                                                  ring: "ring-amber-200",
                                             },
                                             {
                                                  bg: "from-emerald-500 to-emerald-600",
                                                  ring: "ring-emerald-200",
                                             },
                                        ];

                                        return (
                                             <motion.div
                                                  key={index}
                                                  initial={{
                                                       opacity: 0,
                                                       x: -30,
                                                  }}
                                                  whileInView={{
                                                       opacity: 1,
                                                       x: 0,
                                                  }}
                                                  transition={{
                                                       duration: 0.6,
                                                       delay: index * 0.1,
                                                  }}
                                                  viewport={{ once: true }}
                                                  className="relative"
                                             >
                                                  <div className="flex items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                                                       {/* Icon */}
                                                       <div
                                                            className={`w-16 h-16 bg-gradient-to-br ${colors[index].bg} rounded-xl flex items-center justify-center shadow-lg ${colors[index].ring} ring-4 ring-opacity-30 flex-shrink-0`}
                                                       >
                                                            <step.icon className="w-8 h-8 text-white" />
                                                       </div>

                                                       {/* Content */}
                                                       <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                 <span className="text-2xl font-bold text-gray-400">
                                                                      0
                                                                      {index +
                                                                           1}
                                                                 </span>
                                                                 <h3 className="text-lg font-bold text-gray-900">
                                                                      {
                                                                           step.title
                                                                      }
                                                                 </h3>
                                                            </div>
                                                            <p className="text-gray-600 text-sm">
                                                                 {step.description ||
                                                                      `Step ${
                                                                           index +
                                                                           1
                                                                      } in our redesign process.`}
                                                            </p>
                                                       </div>
                                                  </div>

                                                  {/* Connection line for mobile */}
                                                  {index <
                                                       processSteps.length -
                                                            1 && (
                                                       <div className="flex justify-center py-4">
                                                            <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-200 rounded-full"></div>
                                                       </div>
                                                  )}
                                             </motion.div>
                                        );
                                   })}
                              </div>
                         </div>

                         {/* Bottom CTA */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.8 }}
                              viewport={{ once: true }}
                              className="text-center mt-16"
                         >
                              <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-white/50">
                                   <span className="text-gray-700 font-medium">
                                        Ready to get started?
                                   </span>
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
                                   >
                                        Let's Begin
                                        <ArrowRight className="ml-2 h-4 w-4 inline" />
                                   </button>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Benefits Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="max-w-6xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              <motion.div
                                   initial={{ opacity: 0, x: -20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                              >
                                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        The Impact of Professional Redesign
                                   </h2>
                                   <p className="text-lg text-gray-600 mb-8">
                                        A well-executed website redesign isn't
                                        just about aesthetics—it's about
                                        creating a digital experience that
                                        converts visitors into customers and
                                        drives sustainable business growth.
                                   </p>

                                   <div className="space-y-4">
                                        {[
                                             "Improved user experience and engagement",
                                             "Higher conversion rates and sales",
                                             "Better search engine rankings",
                                             "Mobile optimization for all devices",
                                             "Enhanced brand credibility and trust",
                                             "Reduced maintenance and technical issues",
                                        ].map((benefit, index) => (
                                             <div
                                                  key={index}
                                                  className="flex items-center gap-3"
                                             >
                                                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                  <span className="text-gray-700">
                                                       {benefit}
                                                  </span>
                                             </div>
                                        ))}
                                   </div>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, x: 20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6 }}
                                   viewport={{ once: true }}
                                   className="grid grid-cols-2 gap-6"
                              >
                                   <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-blue-600 mb-2">
                                                  150%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Average conversion increase
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-green-600 mb-2">
                                                  65%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Bounce rate reduction
                                             </div>
                                        </div>
                                   </div>
                                   <div className="space-y-6 pt-8">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-purple-600 mb-2">
                                                  3x
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Mobile engagement boost
                                             </div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                             <div className="text-3xl font-bold text-orange-600 mb-2">
                                                  90%
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  Client satisfaction rate
                                             </div>
                                        </div>
                                   </div>
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              viewport={{ once: true }}
                         >
                              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                   Ready to Transform Your Website?
                              </h2>
                              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                   Get a free consultation and discover how a
                                   professional redesign can boost your business
                                   growth and online success.
                              </p>

                              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <button
                                        onClick={scrollToForm}
                                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                                   >
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Get Free Consultation
                                   </button>
                                   <button
                                        onClick={() => setShowQuotePopup(true)}
                                        className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300"
                                   >
                                        <DollarSign className="mr-2 h-5 w-5" />
                                        Get Custom Quote
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
                                   Let's Discuss Your Project
                              </h2>
                              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                   Tell us about your current website and goals.
                                   We'll provide a detailed redesign proposal
                                   and timeline within 24 hours.
                              </p>
                         </div>
                         <Form />
                    </div>
               </section>

               {/* Quote Popup */}
               <QuotePopup
                    isOpen={showQuotePopup}
                    onClose={() => setShowQuotePopup(false)}
               />
          </div>
     );
};

export default WebsiteRedesign;
