"use client";
import { useState, useRef, useEffect } from "react";
import {
     User,
     Clock,
     Trophy,
     ArrowRight,
     Check,
     Search,
     BarChart,
     Star,
     ChevronRight,
     TrendingUp,
     Target,
     Zap,
     Crown,
     Sparkles,
     Globe,
     Award,
} from "lucide-react";

export function GoogleRankingSection() {
     const [activeFeature, setActiveFeature] = useState(null);
     const [isImageLoaded, setIsImageLoaded] = useState(false);
     const [isVisible, setIsVisible] = useState(false);
     const [currentTab, setCurrentTab] = useState(0);
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
     const sectionRef = useRef<HTMLDivElement>(null);

     const features = [
          {
               icon: Target,
               title: "Pre-Qualified Leads",
               description:
                    "We target users actively searching for your services, ensuring higher conversions and lower customer acquisition costs.",
               color: "from-blue-500 to-cyan-500",
               bgColor: "from-blue-50 to-cyan-50",
          },
          {
               icon: TrendingUp,
               title: "Maximize ROI",
               description:
                    "SEO delivers lasting results at a fraction of traditional ad costs by focusing on high-intent audiences.",
               color: "from-emerald-500 to-teal-500",
               bgColor: "from-emerald-50 to-teal-50",
          },
          {
               icon: Crown,
               title: "10+ Years of Expertise",
               description:
                    "Our certified team has helped 200+ businesses achieve top rankings through scalable, ethical SEO strategies.",
               color: "from-purple-500 to-pink-500",
               bgColor: "from-purple-50 to-pink-50",
          },
     ];

     const tabs = [
          {
               title: "Local SEO",
               icon: Globe,
               content: "Attract nearby customers with Google My Business optimization, local citations, and geo-targeted content that drives foot traffic.",
               stats: { value: "78%", label: "More Local Leads" },
               color: "from-blue-500 to-indigo-500",
          },
          {
               title: "E-commerce SEO",
               icon: BarChart,
               content: "Optimize product pages, fix crawl errors, and leverage schema markup to boost your online store's visibility and sales",
               stats: { value: "143%", label: "More Product Views" },
               color: "from-emerald-500 to-green-500",
          },
          {
               icon: Zap,
               content: "Fix indexing issues, improve Core Web Vitals, and ensure mobile-first crawling to meet Google's strictest standards.",
               stats: { value: "2.1s", label: "Load Speed" },
               color: "from-orange-500 to-red-500",
          },
     ];

     const floatingMetrics = [
          {
               icon: Search,
               text: "+156% Visibility",
               position: "top-6 right-6",
               delay: "0s",
          },
          {
               icon: BarChart,
               text: "Top 3 Rankings",
               position: "bottom-6 left-6",
               delay: "0.5s",
          },
          {
               icon: TrendingUp,
               text: "210% Growth",
               position: "top-1/2 left-4",
               delay: "1s",
          },
     ];

     const handleMouseMove = (e) => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect) {
               setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
               });
          }
     };

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

          if (sectionRef.current) {
               observer.observe(sectionRef.current);
          }

          return () => {
               if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
               }
          };
     }, []);

     // Auto-rotate tabs
     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentTab((prev) => (prev + 1) % tabs.length);
          }, 5000);

          return () => clearInterval(interval);
     }, [tabs.length]);

     return (
          <section
               ref={sectionRef}
               className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
               onMouseMove={handleMouseMove}
          >
               {/* Animated background elements */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-orange-200/15 to-pink-200/15 rounded-full blur-3xl animate-pulse delay-500"></div>
               </div>

               <div className="container mx-auto relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-12 lg:mb-16">
                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-sm font-medium mb-6 backdrop-blur-sm">
                              <Crown className="w-4 h-4" />
                              #1 Google Rankings
                              <Sparkles className="w-4 h-4" />
                         </div>

                         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                              <span className="bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                                   Rank
                              </span>
                              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mx-3">
                                   #1
                              </span>
                              <span className="bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                                   on Google!
                              </span>
                         </h2>

                         <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                              Our SEO experts optimize every pixel and keyword
                              to propel your site to the top—even in cutthroat
                              industries—with white-hat tactics that deliver
                              lasting results.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                         {/* Interactive Dashboard Mockup */}
                         <div
                              className={`relative transition-all duration-1000 ${
                                   isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                              }`}
                         >
                              {/* Main dashboard container */}
                              <div className="relative group">
                                   {/* Glowing border effect */}
                                   <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                                   {/* Dashboard content */}
                                   <div className="relative bg-white rounded-3xl p-6 lg:p-8 shadow-2xl">
                                        {/* Dashboard header */}
                                        <div className="flex items-center justify-between mb-6">
                                             <div className="flex items-center gap-3">
                                                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                                       <BarChart className="w-5 h-5 text-white" />
                                                  </div>
                                                  <div>
                                                       <h3 className="font-semibold text-slate-800">
                                                            SEO Dashboard
                                                       </h3>
                                                       <p className="text-sm text-slate-500">
                                                            Real-time analytics
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className="flex gap-2">
                                                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                             </div>
                                        </div>

                                        {/* Mock chart area */}
                                        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 mb-6 h-48 flex items-end justify-between">
                                             {[...Array(12)].map((_, i) => (
                                                  <div
                                                       key={i}
                                                       className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg transition-all duration-500 hover:scale-110"
                                                       style={{
                                                            height: `${
                                                                 Math.random() *
                                                                      80 +
                                                                 20
                                                            }%`,
                                                            width: "6%",
                                                            animationDelay: `${
                                                                 i * 0.1
                                                            }s`,
                                                       }}
                                                  ></div>
                                             ))}
                                        </div>

                                        {/* Stats grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                             {[
                                                  {
                                                       label: "Organic Traffic",
                                                       value: "+156%",
                                                       icon: TrendingUp,
                                                       color: "from-green-500 to-emerald-500",
                                                  },
                                                  {
                                                       label: "Keywords Ranked",
                                                       value: "1,247",
                                                       icon: Target,
                                                       color: "from-blue-500 to-cyan-500",
                                                  },
                                                  {
                                                       label: "Conversion Rate",
                                                       value: "4.2%",
                                                       icon: Award,
                                                       color: "from-purple-500 to-pink-500",
                                                  },
                                             ].map((stat, index) => (
                                                  <div
                                                       key={index}
                                                       className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-lg transition-all duration-300"
                                                  >
                                                       <div
                                                            className={`w-8 h-8 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-2`}
                                                       >
                                                            <stat.icon className="w-4 h-4 text-white" />
                                                       </div>
                                                       <p className="text-sm text-slate-500">
                                                            {stat.label}
                                                       </p>
                                                       <p className="text-lg font-bold text-slate-800">
                                                            {stat.value}
                                                       </p>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>

                                   {/* Floating metrics */}
                                   {floatingMetrics.map((metric, index) => (
                                        <div
                                             key={index}
                                             className={`absolute ${metric.position} bg-white backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 animate-bounce`}
                                             style={{
                                                  animationDelay: metric.delay,
                                             }}
                                        >
                                             <metric.icon className="w-4 h-4 text-blue-500" />
                                             <span className="text-sm font-medium text-slate-700">
                                                  {metric.text}
                                             </span>
                                        </div>
                                   ))}

                                   {/* Client testimonial */}
                                   <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs border border-slate-100 animate-fadeIn">
                                        <div className="flex items-center mb-2">
                                             <div className="flex">
                                                  {[...Array(5)].map((_, i) => (
                                                       <Star
                                                            key={i}
                                                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
                                                       />
                                                  ))}
                                             </div>
                                        </div>
                                        <p className="text-slate-700 text-sm italic mb-2">
                                             "Our traffic increased by 210% in
                                             just 3 months!"
                                        </p>
                                        <div className="flex items-center gap-2">
                                             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                  <span className="text-white text-xs font-bold">
                                                       JD
                                                  </span>
                                             </div>
                                             <p className="text-slate-500 text-xs">
                                                  John D., E-commerce Owner
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Content Section */}
                         <div
                              className={`transition-all duration-1000 delay-300 ${
                                   isVisible
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 translate-x-8"
                              }`}
                         >
                              {/* Tabs */}
                              <div className="mb-8">
                                   <div className="flex bg-slate-100 rounded-2xl p-1">
                                        {tabs.map((tab, index) => (
                                             <button
                                                  key={index}
                                                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                                                       currentTab === index
                                                            ? "bg-white text-blue-600 shadow-md"
                                                            : "text-slate-600 hover:text-slate-800"
                                                  }`}
                                                  onClick={() =>
                                                       setCurrentTab(index)
                                                  }
                                             >
                                                  <tab.icon className="w-4 h-4" />
                                                  <span className="hidden sm:inline">
                                                       {tab.title}
                                                  </span>
                                             </button>
                                        ))}
                                   </div>

                                   <div className="mt-4 bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                                        <div className="flex items-center justify-between mb-4">
                                             <h3 className="font-semibold text-slate-800 text-lg flex items-center gap-2">
                                                  {(() => {
                                                       const Icon =
                                                            tabs[currentTab]
                                                                 .icon;
                                                       return (
                                                            <Icon className="w-5 h-5 text-blue-500" />
                                                       );
                                                  })()}
                                                  {tabs[currentTab].title}
                                             </h3>
                                             <div
                                                  className={`bg-gradient-to-r ${tabs[currentTab].color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                                             >
                                                  {tabs[currentTab].stats.value}{" "}
                                                  {tabs[currentTab].stats.label}
                                             </div>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed">
                                             {tabs[currentTab].content}
                                        </p>
                                   </div>
                              </div>

                              {/* Features list */}
                              <div className="space-y-4 mb-8">
                                   {features.map((feature, index) => (
                                        <div
                                             key={index}
                                             className={`group relative overflow-hidden rounded-2xl transition-all duration-300 cursor-pointer ${
                                                  activeFeature === index
                                                       ? "bg-white shadow-lg scale-[1.02]"
                                                       : "bg-white/50 hover:bg-white/80 hover:shadow-md"
                                             }`}
                                             onMouseEnter={() =>
                                                  setActiveFeature(index)
                                             }
                                             onMouseLeave={() =>
                                                  setActiveFeature(null)
                                             }
                                        >
                                             {/* Gradient border */}
                                             <div
                                                  className={`absolute inset-0 bg-gradient-to-r ${
                                                       feature.color
                                                  } rounded-2xl p-[2px] transition-opacity duration-300 ${
                                                       activeFeature === index
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                  }`}
                                             >
                                                  <div className="bg-white rounded-2xl h-full"></div>
                                             </div>

                                             <div className="relative p-6 flex items-start gap-4">
                                                  <div
                                                       className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                                            activeFeature ===
                                                            index
                                                                 ? `bg-gradient-to-r ${feature.color} text-white shadow-lg scale-110`
                                                                 : `bg-gradient-to-r ${feature.bgColor} text-slate-600`
                                                       }`}
                                                  >
                                                       <feature.icon className="w-6 h-6" />
                                                  </div>

                                                  <div className="flex-1">
                                                       <h4 className="font-semibold text-slate-800 text-lg mb-2">
                                                            {feature.title}
                                                       </h4>
                                                       <p
                                                            className={`text-slate-600 transition-all duration-300 ${
                                                                 activeFeature ===
                                                                 index
                                                                      ? "opacity-100"
                                                                      : "opacity-70"
                                                            }`}
                                                       >
                                                            {
                                                                 feature.description
                                                            }
                                                       </p>
                                                  </div>

                                                  {activeFeature === index && (
                                                       <Check className="w-6 h-6 text-green-500 animate-bounce" />
                                                  )}
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              {/* CTA buttons */}
                              <div className="flex flex-col sm:flex-row gap-4">
                                   <a
                                        href="/about"
                                        className="group flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                                   >
                                        <span>Learn more about us</span>
                                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                   </a>

                                   <a
                                        href="/contact"
                                        className="group flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                                   >
                                        <span>Get a free SEO audit</span>
                                        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
