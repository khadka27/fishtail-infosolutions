"use client";
import { useState, useEffect } from "react";
import {
     Shield,
     BarChart3,
     LineChart,
     ArrowRight,
     CheckCircle,
     Sparkles,
     Zap,
     Target,
} from "lucide-react";

export function FeaturesSection() {
     const [hoveredCard, setHoveredCard] = useState(null);
     const [expandedCard, setExpandedCard] = useState(null);
     const [stats, setStats] = useState({
          clients: 0,
          projects: 0,
          satisfaction: 0,
     });
     const [isVisible, setIsVisible] = useState(false);
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

     const features = [
          {
               icon: Shield,
               title: "Web Development",
               description:
                    "We design fast, secure, and scalable websites with intuitive UX, CMS integration, and e-commerce functionality to drive engagement.",
               extendedDescription:
                    "Our full-stack developers leverage modern frameworks (React, Laravel, Shopify) to create custom sites aligned with your brand and business goals.",
               benefits: [
                    "Mobile-First Design",
                    "CMS & E-Commerce",
                    "API Integrations",
                    "Performance Optimization",
               ],
               gradient: "from-blue-500 via-purple-500 to-indigo-600",
               bgGradient: "from-blue-50 to-indigo-50",
               accentColor: "blue-500",
               link: "/Services/web-development",
          },
          {
               icon: BarChart3,
               title: "SEO Services",
               description:
                    "Dominate search rankings with keyword research, on-page SEO, and technical audits to boost organic traffic and authority.",
               extendedDescription:
                    "Our SEO process uses advanced analytics and comprehensive audits to pinpoint optimization opportunities, resulting in measurable improvements in your search visibility and organic traffic.",
               benefits: [
                    "Keyword research & optimization",
                    "On-page SEO improvements",
                    "Technical SEO audits",
                    "Content strategy & marketing",
               ],
               gradient: "from-emerald-500 via-teal-500 to-cyan-600",
               bgGradient: "from-emerald-50 to-teal-50",
               accentColor: "emerald-500",
               link: "/Services/local-seo",
          },
          {
               icon: LineChart,
               title: "Lead Generation",
               description:
                    "Convert prospects into customers with targeted ads, email campaigns, and CRM-driven strategies for steady pipeline growth.",
               extendedDescription:
                    "Gain a competitive edge with our data-driven lead generation system—providing instant access to qualified prospects, conversion optimization, and automated nurturing sequences.",
               benefits: [
                    "Data-driven prospect targeting",
                    "Conversion-focused campaigns",
                    "Automated lead nurturing",
                    "Multi-channel outreach strategies",
               ],
               gradient: "from-orange-500 via-red-500 to-pink-600",
               bgGradient: "from-orange-50 to-pink-50",
               accentColor: "orange-500",
               link: "/Services/lead-generation",
          },
     ];

     const handleCardClick = (index) => {
          if (expandedCard === index) {
               setExpandedCard(null);
          } else {
               setExpandedCard(index);
          }
     };

     const handleMouseMove = (e) => {
          setMousePosition({ x: e.clientX, y: e.clientY });
     };

     // Animate stats when visible
     useEffect(() => {
          if (isVisible) {
               const interval = setInterval(() => {
                    setStats((prev) => {
                         const newStats = { ...prev };
                         if (newStats.clients < 200) newStats.clients += 3;
                         if (newStats.projects < 500) newStats.projects += 7;
                         if (newStats.satisfaction < 98)
                              newStats.satisfaction += 1;

                         if (
                              newStats.clients >= 200 &&
                              newStats.projects >= 500 &&
                              newStats.satisfaction >= 98
                         ) {
                              clearInterval(interval);
                         }
                         return newStats;
                    });
               }, 30);

               return () => clearInterval(interval);
          }
     }, [isVisible]);

     // Check if element is in viewport
     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    if (entries[0].isIntersecting) {
                         setIsVisible(true);
                    }
               },
               { threshold: 0.1 }
          );

          const statsSection = document.getElementById("stats-section");
          if (statsSection) {
               observer.observe(statsSection);
          }

          return () => {
               if (statsSection) {
                    observer.unobserve(statsSection);
               }
          };
     }, []);

     return (
          <section
               className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
               onMouseMove={handleMouseMove}
          >
               {/* Animated background elements */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-200/10 to-pink-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
               </div>

               <div className="container mx-auto relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-12 lg:mb-16">
                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-sm font-medium mb-4 backdrop-blur-sm">
                              <Sparkles className="w-4 h-4" />
                              Our Core Services
                              <Sparkles className="w-4 h-4" />
                         </div>

                         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
                              Elevate Your Digital
                              <br className="hidden sm:block" />
                              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                   Presence
                              </span>
                         </h2>

                         <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                              Transform your business with cutting-edge web
                              solutions, search engine dominance, and
                              laser-focused lead generation—all designed for
                              measurable success.
                         </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
                         {features.map((feature, index) => (
                              <div
                                   key={index}
                                   className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl transition-all duration-500 ease-out cursor-pointer ${
                                        expandedCard === index
                                             ? "lg:col-span-3 bg-white shadow-2xl scale-[1.02]"
                                             : hoveredCard === index
                                             ? "shadow-2xl shadow-blue-500/20 scale-[1.03] -translate-y-2"
                                             : "shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm"
                                   }`}
                                   onMouseEnter={() => setHoveredCard(index)}
                                   onMouseLeave={() => setHoveredCard(null)}
                                   onClick={() => handleCardClick(index)}
                              >
                                   {/* Gradient border */}
                                   <div
                                        className={`absolute inset-0 bg-gradient-to-r ${
                                             feature.gradient
                                        } rounded-2xl lg:rounded-3xl p-[2px] transition-opacity duration-300 ${
                                             hoveredCard === index ||
                                             expandedCard === index
                                                  ? "opacity-100"
                                                  : "opacity-0"
                                        }`}
                                   >
                                        <div className="bg-white rounded-2xl lg:rounded-3xl h-full"></div>
                                   </div>

                                   {/* Card content */}
                                   <div
                                        className={`relative p-6 sm:p-8 lg:p-10 h-full bg-gradient-to-br ${
                                             feature.bgGradient
                                        } ${
                                             expandedCard === index
                                                  ? "lg:flex lg:items-start lg:gap-10"
                                                  : ""
                                        }`}
                                   >
                                        {/* Main content section */}
                                        <div
                                             className={`${
                                                  expandedCard === index
                                                       ? "lg:w-2/5"
                                                       : "text-center"
                                             }`}
                                        >
                                             {/* Icon */}
                                             <div
                                                  className={`relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${
                                                       feature.gradient
                                                  } mb-6 transition-all duration-500 ${
                                                       hoveredCard === index
                                                            ? "rotate-12 scale-110"
                                                            : "group-hover:rotate-6"
                                                  }`}
                                             >
                                                  <feature.icon className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                                                  {hoveredCard === index && (
                                                       <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping"></div>
                                                  )}
                                             </div>

                                             {/* Title and description */}
                                             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-slate-800">
                                                  {feature.title}
                                             </h3>

                                             <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                                                  {feature.description}
                                             </p>

                                             {!expandedCard && (
                                                  <div
                                                       className={`mt-6 transition-all duration-300 ${
                                                            hoveredCard ===
                                                            index
                                                                 ? "opacity-100 translate-y-0"
                                                                 : "opacity-70 translate-y-2"
                                                       }`}
                                                  >
                                                       <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
                                                            <span>
                                                                 Click to
                                                                 explore
                                                            </span>
                                                            <ArrowRight
                                                                 className={`w-4 h-4 transition-transform duration-300 ${
                                                                      hoveredCard ===
                                                                      index
                                                                           ? "translate-x-1"
                                                                           : ""
                                                                 }`}
                                                            />
                                                       </div>
                                                  </div>
                                             )}
                                        </div>

                                        {/* Extended content for expanded cards */}
                                        {expandedCard === index && (
                                             <div className="mt-8 lg:mt-0 lg:w-3/5 lg:pl-8 lg:border-l border-slate-200">
                                                  <div className="flex items-center gap-2 mb-4">
                                                       <Zap className="w-5 h-5 text-blue-600" />
                                                       <h4 className="text-lg sm:text-xl font-semibold text-blue-600">
                                                            How it works
                                                       </h4>
                                                  </div>

                                                  <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
                                                       {
                                                            feature.extendedDescription
                                                       }
                                                  </p>

                                                  <div className="flex items-center gap-2 mb-4">
                                                       <Target className="w-5 h-5 text-slate-700" />
                                                       <h5 className="text-base sm:text-lg font-semibold text-slate-700">
                                                            Key Benefits:
                                                       </h5>
                                                  </div>

                                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                       {feature.benefits.map(
                                                            (benefit, i) => (
                                                                 <div
                                                                      key={i}
                                                                      className="flex items-center gap-3 p-3 bg-white/50 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:scale-105"
                                                                 >
                                                                      <CheckCircle
                                                                           className={`w-5 h-5 text-${feature.accentColor} flex-shrink-0`}
                                                                      />
                                                                      <span className="text-slate-700 text-sm sm:text-base font-medium">
                                                                           {
                                                                                benefit
                                                                           }
                                                                      </span>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>

                                                  <a
                                                       href={feature.link}
                                                       className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${feature.gradient} text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                                                  >
                                                       Learn more
                                                       <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                  </a>
                                             </div>
                                        )}
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* Stats Section */}
                    <div id="stats-section" className="mb-16">
                         <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-1">
                              <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
                                   <div className="text-center mb-8">
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                                             Trusted by Industry Leaders
                                        </h3>
                                        <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto">
                                             Our track record speaks for itself
                                             with measurable results across
                                             hundreds of successful projects.
                                        </p>
                                   </div>

                                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                                        {[
                                             {
                                                  value: stats.clients,
                                                  suffix: "+",
                                                  label: "Happy Clients",
                                                  icon: "👥",
                                             },
                                             {
                                                  value: stats.projects,
                                                  suffix: "+",
                                                  label: "Projects Delivered",
                                                  icon: "🚀",
                                             },
                                             {
                                                  value: stats.satisfaction,
                                                  suffix: "%",
                                                  label: "Client Retention",
                                                  icon: "⭐",
                                             },
                                        ].map((stat, index) => (
                                             <div
                                                  key={index}
                                                  className="text-center group"
                                             >
                                                  <div className="text-4xl mb-2">
                                                       {stat.icon}
                                                  </div>
                                                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2 transition-all duration-300 group-hover:scale-110">
                                                       {stat.value}
                                                       {stat.suffix}
                                                  </div>
                                                  <div className="text-blue-200 font-medium text-sm sm:text-base lg:text-lg">
                                                       {stat.label}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                         <a
                              href="/Services"
                              className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                         >
                              <span>Explore All Services</span>
                              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl"></div>
                         </a>
                    </div>
               </div>
          </section>
     );
}
