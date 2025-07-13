"use client";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
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
     const [activeFeature, setActiveFeature] = useState<number | null>(null);
     const [isVisible, setIsVisible] = useState(false);
     const [currentTab, setCurrentTab] = useState(0);
     const sectionRef = useRef<HTMLDivElement>(null);

     // Memoize static data to prevent re-creation on every render
     const features = useMemo(
          () => [
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
          ],
          []
     );

     const tabs = useMemo(
          () => [
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
                    title: "Technical SEO",
                    icon: Zap,
                    content: "Fix indexing issues, improve Core Web Vitals, and ensure mobile-first crawling to meet Google's strictest standards.",
                    stats: { value: "2.1s", label: "Load Speed" },
                    color: "from-orange-500 to-red-500",
               },
          ],
          []
     );

     const floatingMetrics = useMemo(
          () => [
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
          ],
          []
     );

     const statsData = useMemo(
          () => [
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
          ],
          []
     );

     // Pre-calculate chart bar heights to avoid Math.random() on every render
     const chartBars = useMemo(
          () =>
               Array.from({ length: 12 }, (_, i) => ({
                    height: `${Math.floor(Math.random() * 80 + 20)}%`,
                    delay: `${i * 0.1}s`,
               })),
          []
     );

     // Optimized event handlers
     const handleFeatureEnter = useCallback((index: number) => {
          setActiveFeature(index);
     }, []);

     const handleFeatureLeave = useCallback(() => {
          setActiveFeature(null);
     }, []);

     const handleTabClick = useCallback((index: number) => {
          setCurrentTab(index);
     }, []);

     // Intersection Observer with cleanup
     useEffect(() => {
          const observer = new IntersectionObserver(
               (entries) => {
                    if (entries[0].isIntersecting) {
                         setIsVisible(true);
                         // Stop observing once visible to save resources
                         observer.unobserve(entries[0].target);
                    }
               },
               { threshold: 0.1 }
          );

          const currentRef = sectionRef.current;
          if (currentRef) {
               observer.observe(currentRef);
          }

          return () => {
               if (currentRef) {
                    observer.unobserve(currentRef);
               }
          };
     }, []);

     // Auto-rotate tabs with reduced frequency and cleanup
     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentTab((prev) => (prev + 1) % tabs.length);
          }, 8000); // Increased from 5000ms to reduce frequency

          return () => clearInterval(interval);
     }, [tabs.length]);

     // Memoize current tab data
     const currentTabData = useMemo(() => tabs[currentTab], [tabs, currentTab]);

     return (
          <section
               ref={sectionRef}
               className="relative pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
          >
               {/* Simplified background elements - reduced blur and animation */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/10 to-purple-200/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-emerald-200/10 to-teal-200/10 rounded-full blur-2xl"></div>
               </div>

               <div className="container mx-auto relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-12 lg:mb-16">
                         <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600 text-sm font-medium mb-6">
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                         {/* Dashboard Mockup - Simplified */}
                         <div
                              className={`relative transition-all duration-700 h-full ${
                                   isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                              }`}
                         >
                              <div className="relative group h-full">
                                   {/* Subtle glowing border */}
                                   <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-sm opacity-60 group-hover:opacity-80 transition duration-500"></div>

                                   <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-lg border border-white/50 h-full flex flex-col">
                                        {/* Dashboard header */}
                                        <div className="flex items-center justify-between mb-6">
                                             <div className="flex items-center gap-3">
                                                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-sm">
                                                       <BarChart className="w-5 h-5 text-white" />
                                                  </div>
                                                  <div>
                                                       <h3 className="font-semibold text-slate-800 text-lg">
                                                            SEO Dashboard
                                                       </h3>
                                                       <p className="text-sm text-slate-500">
                                                            Real-time analytics
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className="flex gap-1.5">
                                                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                                                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                                                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                                             </div>
                                        </div>

                                        {/* Enhanced chart area - takes more space */}
                                        <div className="flex-1 bg-gradient-to-br from-slate-50/80 to-blue-50/80 rounded-2xl p-6 mb-6 flex flex-col">
                                             <div className="flex items-center justify-between mb-4">
                                                  <h4 className="text-sm font-medium text-slate-600">
                                                       Organic Traffic Growth
                                                  </h4>
                                                  <div className="flex items-center gap-2">
                                                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                       <span className="text-xs text-slate-500">
                                                            +156%
                                                       </span>
                                                  </div>
                                             </div>

                                             <div className="flex-1 flex items-end justify-between gap-1">
                                                  {chartBars.map((bar, i) => (
                                                       <div
                                                            key={i}
                                                            className="bg-gradient-to-t from-blue-400/80 to-purple-500/80 rounded-t-md transition-all duration-300 hover:from-blue-500 hover:to-purple-600 hover:scale-105 flex-1 max-w-[8%]"
                                                            style={{
                                                                 height: bar.height,
                                                                 animationDelay:
                                                                      bar.delay,
                                                            }}
                                                       ></div>
                                                  ))}
                                             </div>

                                             <div className="flex justify-between text-xs text-slate-400 mt-2">
                                                  <span>Jan</span>
                                                  <span>Mar</span>
                                                  <span>May</span>
                                                  <span>Jul</span>
                                                  <span>Sep</span>
                                                  <span>Nov</span>
                                             </div>
                                        </div>

                                        {/* Streamlined stats grid */}
                                        <div className="grid grid-cols-3 gap-3">
                                             {statsData.map((stat, index) => (
                                                  <div
                                                       key={index}
                                                       className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-white/50 hover:bg-white/80 transition-all duration-200"
                                                  >
                                                       <div
                                                            className={`w-6 h-6 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mb-2`}
                                                       >
                                                            <stat.icon className="w-3 h-3 text-white" />
                                                       </div>
                                                       <p className="text-xs text-slate-500 mb-1">
                                                            {stat.label}
                                                       </p>
                                                       <p className="text-sm font-bold text-slate-800">
                                                            {stat.value}
                                                       </p>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>

                                   {/* Refined floating metrics */}
                                   {floatingMetrics.map((metric, index) => (
                                        <div
                                             key={index}
                                             className={`absolute ${metric.position} bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-2 shadow-sm flex items-center gap-2`}
                                        >
                                             <metric.icon className="w-3 h-3 text-blue-500" />
                                             <span className="text-xs font-medium text-slate-700">
                                                  {metric.text}
                                             </span>
                                        </div>
                                   ))}

                                   {/* Simplified client testimonial */}
                                   <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-sm max-w-48 border border-white/30">
                                        <div className="flex items-center mb-2">
                                             {Array.from({ length: 5 }).map(
                                                  (_, i) => (
                                                       <Star
                                                            key={i}
                                                            className="h-3 w-3 text-yellow-400 fill-yellow-400"
                                                       />
                                                  )
                                             )}
                                        </div>
                                        <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                                             &quot;Fishtail helped us achieve #1
                                             rankings for our most competitive
                                             keywords.&quot;
                                        </p>
                                        <div className="flex items-center gap-2">
                                             <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                  <span className="text-white text-xs font-bold">
                                                       JD
                                                  </span>
                                             </div>
                                             <p className="text-slate-500 text-xs">
                                                  John D., E-commerce
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Content Section */}
                         <div
                              className={`transition-all duration-700 delay-200 ${
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
                                                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                                                       currentTab === index
                                                            ? "bg-white text-blue-600 shadow-md"
                                                            : "text-slate-600 hover:text-slate-800"
                                                  }`}
                                                  onClick={() =>
                                                       handleTabClick(index)
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
                                                  <currentTabData.icon className="w-5 h-5 text-blue-500" />
                                                  {currentTabData.title}
                                             </h3>
                                             <div
                                                  className={`bg-gradient-to-r ${currentTabData.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                                             >
                                                  {currentTabData.stats.value}{" "}
                                                  {currentTabData.stats.label}
                                             </div>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed">
                                             {currentTabData.content}
                                        </p>
                                   </div>
                              </div>

                              {/* Features list */}
                              <div className="space-y-4 mb-8">
                                   {features.map((feature, index) => (
                                        <div
                                             key={index}
                                             className={`group relative overflow-hidden rounded-2xl transition-all duration-200 cursor-pointer ${
                                                  activeFeature === index
                                                       ? "bg-white shadow-lg scale-[1.01]"
                                                       : "bg-white/50 hover:bg-white/80 hover:shadow-md"
                                             }`}
                                             onMouseEnter={() =>
                                                  handleFeatureEnter(index)
                                             }
                                             onMouseLeave={handleFeatureLeave}
                                        >
                                             {/* Gradient border */}
                                             <div
                                                  className={`absolute inset-0 bg-gradient-to-r ${
                                                       feature.color
                                                  } rounded-2xl p-[2px] transition-opacity duration-200 ${
                                                       activeFeature === index
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                  }`}
                                             >
                                                  <div className="bg-white rounded-2xl h-full"></div>
                                             </div>

                                             <div className="relative p-6 flex items-start gap-4">
                                                  <div
                                                       className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                                                            activeFeature ===
                                                            index
                                                                 ? `bg-gradient-to-r ${feature.color} text-white shadow-lg scale-105`
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
                                                            className={`text-slate-600 transition-all duration-200 ${
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
                                                       <Check className="w-6 h-6 text-green-500" />
                                                  )}
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              {/* CTA buttons */}
                              <div className="flex flex-col sm:flex-row gap-4">
                                   <a
                                        href="/about"
                                        className="group flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                                   >
                                        <span>Learn more about us</span>
                                        <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                                   </a>

                                   <a
                                        href="/contact"
                                        className="group flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-2xl font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                                   >
                                        <span>Get a free SEO audit</span>
                                        <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}
