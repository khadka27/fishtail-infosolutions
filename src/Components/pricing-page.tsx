// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"
// import { Flag, BarChart2, Zap, Plus, Minus } from "lucide-react"
// import logo1 from "@/Images/logo1.png"
// import logo2 from "@/Images/logo2.png"
// import logo3 from "@/Images/logo3.png"
// import logo4 from "@/Images/logo4.png"
// import logo5 from "@/Images/logo5.png"
// import logo6 from "@/Images/logo-6.png"
// import avatar from "@/Images/avatar-4.png"
// import OrderForm from "./order-form"
// import { QuotePopup } from "./quote-popup"

// // Client logos
// const clientLogos = [
//   { name: "University", image: logo1 },
//   { name: "Academy", image: logo2 },
//   { name: "University", image: logo3 },
//   { name: "Athletics", image: logo4 },
//   { name: "Academy", image: logo5 },
//   { name: "Cross Sport", image: logo6 },
// ]

// // FAQ data
// const faqs = [
//   {
//     question: "Is Search Engine Submission Necessary?",
//     answer:
//       "The simple answer is no, a search engine submission isn't necessary. The majority of search engines, notably Google, crawl and index pages by following links from previously indexed page will identify your page to the engine.",
//   },
//   {
//     question: "What's The Deal With Paid Search Submissions?",
//     answer:
//       "Many SEO companies offer paid search submissions but beware: it doesn't cost a penny to get indexed by the major search engines. In fact, it's completely free. As a matter of fact, you don't even need to submit your site to search engines.",
//   },
//   {
//     question: "Can Any Inbound Linking Hurt My Ranking?",
//     answer:
//       "The answer is simple - inbound linking cannot hurt your search ranking. If inbound were to hurt your rank, your competitors would continually link to your site from link farms. Such a scenario is beyond your control. For this reason, Google cannot penalize your site for any inbound linking.",
//   },
//   {
//     question: "Are Blogs Good for SEO?",
//     answer:
//       "Whether blogs are good for SEO purposes is actually irrelevant; the content is key. Blogs are simply publishing platforms. Having said that, the ability to produce high quality content on an ongoing basis can be made much easier by leveraging blog software - especially for the less technical user.",
//   },
//   {
//     question: "How Do I Make My Site Search Engine Friendly?",
//     answer:
//       "The best way to make your site more search engine friendly is often to simply add more text. The engine's primary goal is to provide relevant search results, so creating content with a variety of keywords and phrases for the search engines to crawl. Think of their terms as 'bait' gateways for the engines - the injection of text will provide new doorways for traffic.",
//   },
//   {
//     question: "More about SEO:",
//     answer:
//       "Inbound linking is very important. In fact, acquiring back-links may be the most important thing in SEO. Nevertheless, a website's content, information architecture and technical SEO if the presented content is interesting, useful, and/or important, there is a natural tendency among web users to share information.",
//   },
// ]

// // Package feature type
// type Feature = {
//   name: string
//   included: boolean
//   description?: string
// }

// // Package features
// const packageFeatures = {
//   free: [
//     {
//       name: "Keyword Research & Selection",
//       included: true,
//       description:
//         "We identify the most valuable and relevant keywords for your business to target, analyzing search volume, competition, and user intent to maximize your visibility.",
//     },
//     {
//       name: "Baseline SEO Ranking Report",
//       included: true,
//       description:
//         "Get a comprehensive analysis of your current search engine rankings, identifying strengths, weaknesses, and opportunities for improvement.",
//     },
//     {
//       name: "On Page Optimization",
//       included: true,
//       description:
//         "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.",
//     },
//     {
//       name: "XML Sitemap Generation & Submission",
//       included: true,
//       description:
//         "We create and submit XML sitemaps to search engines, ensuring all your important pages are properly indexed and crawled.",
//     },
//     {
//       name: "Webmaster Tool Management",
//       included: true,
//       description:
//         "We set up and manage Google Search Console and Bing Webmaster Tools to monitor your site's performance and address any issues that arise.",
//     },
//   ] as Feature[],
//   small: [
//     {
//       name: "Keyword Research & Selection",
//       included: true,
//       description:
//         "We identify the most valuable and relevant keywords for your business to target, analyzing search volume, competition, and user intent to maximize your visibility.",
//     },
//     {
//       name: "Baseline SEO Ranking Report",
//       included: true,
//       description:
//         "Get a comprehensive analysis of your current search engine rankings, identifying strengths, weaknesses, and opportunities for improvement.",
//     },
//     {
//       name: "On Page Optimization",
//       included: true,
//       description:
//         "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.",
//     },
//     {
//       name: "XML Sitemap Generation & Submission",
//       included: true,
//       description:
//         "We create and submit XML sitemaps to search engines, ensuring all your important pages are properly indexed and crawled.",
//     },
//     {
//       name: "Webmaster Tool Management",
//       included: true,
//       description:
//         "We set up and manage Google Search Console and Bing Webmaster Tools to monitor your site's performance and address any issues that arise.",
//     },
//     {
//       name: "Social Media Optimization",
//       included: true,
//       description:
//         "We optimize your social media profiles and content strategy to increase engagement, brand awareness, and drive traffic to your website.",
//     },
//     {
//       name: "Weekly & Monthly Reporting",
//       included: true,
//       description:
//         "Receive detailed reports on your SEO performance, including rankings, traffic, conversions, and recommendations for continued improvement.",
//     },
//     {
//       name: "24/7 Email Support",
//       included: true,
//       description:
//         "Get answers to your questions and concerns at any time with our round-the-clock email support service.",
//     },
//   ] as Feature[],
//   enterprise: [
//     {
//       name: "Keyword Research & Selection",
//       included: true,
//       description:
//         "We identify the most valuable and relevant keywords for your business to target, analyzing search volume, competition, and user intent to maximize your visibility.",
//     },
//     {
//       name: "Baseline SEO Ranking Report",
//       included: true,
//       description:
//         "Get a comprehensive analysis of your current search engine rankings, identifying strengths, weaknesses, and opportunities for improvement.",
//     },
//     {
//       name: "On Page Optimization",
//       included: true,
//       description:
//         "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.",
//     },
//     {
//       name: "XML Sitemap Generation & Submission",
//       included: true,
//       description:
//         "We create and submit XML sitemaps to search engines, ensuring all your important pages are properly indexed and crawled.",
//     },
//     {
//       name: "Webmaster Tool Management",
//       included: true,
//       description:
//         "We set up and manage Google Search Console and Bing Webmaster Tools to monitor your site's performance and address any issues that arise.",
//     },
//     {
//       name: "Social Media Optimization",
//       included: true,
//       description:
//         "We optimize your social media profiles and content strategy to increase engagement, brand awareness, and drive traffic to your website.",
//     },
//     {
//       name: "Weekly & Monthly Reporting",
//       included: true,
//       description:
//         "Receive detailed reports on your SEO performance, including rankings, traffic, conversions, and recommendations for continued improvement.",
//     },
//     {
//       name: "24/7 Email Support",
//       included: true,
//       description:
//         "Get answers to your questions and concerns at any time with our round-the-clock email support service.",
//     },
//     {
//       name: "Online Chat Support",
//       included: true,
//       description:
//         "Enjoy real-time assistance through our live chat support system, providing immediate answers to your questions.",
//     },
//     {
//       name: "Blog Creation & Promotion",
//       included: true,
//       description:
//         "We create high-quality blog content optimized for SEO and promote it across relevant channels to drive traffic and establish thought leadership.",
//     },
//   ] as Feature[],
// }

// // Plan types
// type PlanType = "free" | "small" | "enterprise"

// // Open sections state type
// type OpenSectionsType = {
//   [key in PlanType]: {
//     [featureName: string]: boolean
//   }
// }

// export default function PricingPage() {
//   const [openSections, setOpenSections] = useState<OpenSectionsType>({
//     free: {},
//     small: {},
//     enterprise: {},
//   })

//   const [orderFormOpen, setOrderFormOpen] = useState(false)
//   const [quotePopupOpen, setQuotePopupOpen] = useState(false)
//   const [selectedPlan, setSelectedPlan] = useState<PlanType>("free")

//   // Function to toggle a section
//   const toggleSection = (plan: PlanType, featureName: string) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [plan]: {
//         ...prev[plan],
//         [featureName]: !prev[plan][featureName],
//       },
//     }))
//   }

//   // Function to open order form with selected plan
//   const openOrderForm = (plan: PlanType) => {
//     setSelectedPlan(plan)
//     setOrderFormOpen(true)
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       {/* Order Form Modal */}
//       <OrderForm isOpen={orderFormOpen} onClose={() => setOrderFormOpen(false)} selectedPlan={selectedPlan} />

//       {/* Quote Popup */}
//       <QuotePopup isOpen={quotePopupOpen} onClose={() => setQuotePopupOpen(false)} />

//       {/* Pricing Section */}
//       <section className="py-16 md:py-24 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-light mb-6">
//               Digital Marketing Pricing Packages
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Choose the perfect plan for your business needs. All plans include our core SEO services to help you grow
//               your online presence.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
//             {/* Free Package */}
//             <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
//               <div className="bg-gradient-to-br from-lime-400 to-lime-600 text-white p-8 text-center">
//                 <div className="uppercase text-sm font-medium tracking-wider mb-4">Free Trial</div>
//                 <div className="flex justify-center mb-6 bg-white/20 w-20 h-20 rounded-full mx-auto items-center">
//                   <Flag className="h-10 w-10" />
//                 </div>
//                 <div className="text-4xl font-bold mb-2">FREE</div>
//                 <div className="text-sm opacity-90">No hidden fees. No pressure.</div>
//                 <button
//                   className="mt-6 bg-white text-lime-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium shadow-md transition-colors duration-200 w-full"
//                   onClick={() => openOrderForm("free")}
//                 >
//                   Start Now
//                 </button>
//               </div>

//               <div className="p-6 bg-white flex-grow">
//                 <div className="border-b border-gray-100 pb-4">
//                   <div
//                     className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                     onClick={() => toggleSection("free", "Keyword Research & Selection")}
//                   >
//                     <span className="font-medium">Keyword Research & Selection</span>
//                     <div className="bg-lime-100 rounded-full p-1">
//                       {openSections.free["Keyword Research & Selection"] ? (
//                         <Minus className="h-4 w-4 text-lime-600" />
//                       ) : (
//                         <Plus className="h-4 w-4 text-lime-600" />
//                       )}
//                     </div>
//                   </div>

//                   {openSections.free["Keyword Research & Selection"] && (
//                     <div className="py-4 text-sm text-gray-600 pl-4 mt-2 border-l-2 border-lime-200 bg-gray-50 rounded-r-lg p-3">
//                       We identify the most valuable and relevant keywords for your business to target, analyzing search
//                       volume, competition, and user intent to maximize your visibility.
//                     </div>
//                   )}
//                 </div>

//                 {packageFeatures.free.map((feature, index) => (
//                   <div key={index} className="border-b border-gray-100 py-4 last:border-0">
//                     <div
//                       className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                       onClick={() => toggleSection("free", feature.name)}
//                     >
//                       <span className="text-gray-700">{feature.name}</span>
//                       <div className="bg-lime-100 rounded-full p-1">
//                         {openSections.free[feature.name] ? (
//                           <Minus className="h-4 w-4 text-lime-600" />
//                         ) : (
//                           <Plus className="h-4 w-4 text-lime-600" />
//                         )}
//                       </div>
//                     </div>
//                     {openSections.free[feature.name] && (
//                       <div className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-lime-200 bg-gray-50 rounded-r-lg p-3">
//                         {feature.description}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Small Business Package */}
//             <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative">
//               <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold uppercase tracking-wider text-gray-800 px-3 py-1 rounded-bl-lg">
//                 Popular
//               </div>
//               <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-8 text-center">
//                 <div className="uppercase text-sm font-medium tracking-wider mb-4">Small Business</div>
//                 <div className="flex justify-center mb-6 bg-white/20 w-20 h-20 rounded-full mx-auto items-center">
//                   <BarChart2 className="h-10 w-10" />
//                 </div>
//                 <div className="text-4xl font-bold mb-2">£49.99</div>
//                 <div className="text-sm opacity-90">Ideal for Bloggers / Start Ups / Small Businesses</div>
//                 <button
//                   className="mt-6 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium shadow-md transition-colors duration-200 w-full"
//                   onClick={() => openOrderForm("small")}
//                 >
//                   Buy Now
//                 </button>
//               </div>

//               <div className="p-6 bg-white flex-grow">
//                 <div className="border-b border-gray-100 pb-4">
//                   <div
//                     className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                     onClick={() => toggleSection("small", "Keyword Research & Selection")}
//                   >
//                     <span className="font-medium">Keyword Research & Selection</span>
//                     <div className="bg-blue-100 rounded-full p-1">
//                       {openSections.small["Keyword Research & Selection"] ? (
//                         <Minus className="h-4 w-4 text-blue-600" />
//                       ) : (
//                         <Plus className="h-4 w-4 text-blue-600" />
//                       )}
//                     </div>
//                   </div>

//                   {openSections.small["Keyword Research & Selection"] && (
//                     <div className="py-4 text-sm text-gray-600 pl-4 mt-2 border-l-2 border-blue-200 bg-gray-50 rounded-r-lg p-3">
//                       We identify the most valuable and relevant keywords for your business to target, analyzing search
//                       volume, competition, and user intent to maximize your visibility.
//                     </div>
//                   )}
//                 </div>

//                 {packageFeatures.small.map((feature, index) => (
//                   <div key={index} className="border-b border-gray-100 py-4 last:border-0">
//                     <div
//                       className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                       onClick={() => toggleSection("small", feature.name)}
//                     >
//                       <span className="text-gray-700">{feature.name}</span>
//                       <div className="bg-blue-100 rounded-full p-1">
//                         {openSections.small[feature.name] ? (
//                           <Minus className="h-4 w-4 text-blue-600" />
//                         ) : (
//                           <Plus className="h-4 w-4 text-blue-600" />
//                         )}
//                       </div>
//                     </div>
//                     {openSections.small[feature.name] && (
//                       <div className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-blue-200 bg-gray-50 rounded-r-lg p-3">
//                         {feature.description}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enterprise Package */}
//             <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
//               <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-8 text-center">
//                 <div className="uppercase text-sm font-medium tracking-wider mb-4">Enterprise</div>
//                 <div className="flex justify-center mb-6 bg-white/20 w-20 h-20 rounded-full mx-auto items-center">
//                   <Zap className="h-10 w-10" />
//                 </div>
//                 <div className="text-4xl font-bold mb-2">£129.99</div>
//                 <div className="text-sm opacity-90">For ecommerce and large companies</div>
//                 <button
//                   className="mt-6 bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium shadow-md transition-colors duration-200 w-full"
//                   onClick={() => openOrderForm("enterprise")}
//                 >
//                   Buy Now
//                 </button>
//               </div>

//               <div className="p-6 bg-white flex-grow">
//                 <div className="border-b border-gray-100 pb-4">
//                   <div
//                     className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                     onClick={() => toggleSection("enterprise", "Keyword Research & Selection")}
//                   >
//                     <span className="font-medium">Keyword Research & Selection</span>
//                     <div className="bg-purple-100 rounded-full p-1">
//                       {openSections.enterprise["Keyword Research & Selection"] ? (
//                         <Minus className="h-4 w-4 text-purple-600" />
//                       ) : (
//                         <Plus className="h-4 w-4 text-purple-600" />
//                       )}
//                     </div>
//                   </div>

//                   {openSections.enterprise["Keyword Research & Selection"] && (
//                     <div className="py-4 text-sm text-gray-600 pl-4 mt-2 border-l-2 border-purple-200 bg-gray-50 rounded-r-lg p-3">
//                       We identify the most valuable and relevant keywords for your business to target, analyzing search
//                       volume, competition, and user intent to maximize your visibility.
//                     </div>
//                   )}
//                 </div>

//                 {packageFeatures.enterprise.map((feature, index) => (
//                   <div key={index} className="border-b border-gray-100 py-4 last:border-0">
//                     <div
//                       className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                       onClick={() => toggleSection("enterprise", feature.name)}
//                     >
//                       <span className="text-gray-700">{feature.name}</span>
//                       <div className="bg-purple-100 rounded-full p-1">
//                         {openSections.enterprise[feature.name] ? (
//                           <Minus className="h-4 w-4 text-purple-600" />
//                         ) : (
//                           <Plus className="h-4 w-4 text-purple-600" />
//                         )}
//                       </div>
//                     </div>
//                     {openSections.enterprise[feature.name] && (
//                       <div className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-purple-200 bg-gray-50 rounded-r-lg p-3">
//                         {feature.description}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="text-center text-gray-600 mt-12 max-w-3xl mx-auto">
//             <p className="text-lg">
//               No more page switching to see changes—everything is here in front of you! A new era of content creation
//               has reached WordPress!
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
//             <Link
//               href="/contact"
//               className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
//             >
//               Free SEO Consultation
//             </Link>
//             <button
//               onClick={() => setQuotePopupOpen(true)}
//               className="bg-lime-500 text-white px-8 py-4 rounded-full hover:bg-lime-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
//             >
//               Request a Free Quote
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Client Logos Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 md:px-8 lg:px-16">
//           <h2 className="text-2xl text-center text-gray-700 mb-12 font-light">Trusted by Leading Brands</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center">
//             {clientLogos.map((logo, index) => (
//               <div key={index} className="flex justify-center">
//                 <Image
//                   src={logo.image || "/placeholder.svg"}
//                   alt={logo.name}
//                   width={120}
//                   height={80}
//                   className="opacity-60 hover:opacity-100 transition-opacity max-w-[100px] sm:max-w-[120px] filter grayscale hover:grayscale-0 transition-all duration-300"
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center mt-10">
//             <div className="flex space-x-2">
//               <span className="w-2 h-2 rounded-full bg-gray-300"></span>
//               <span className="w-2 h-2 rounded-full bg-gray-500"></span>
//               <span className="w-2 h-2 rounded-full bg-gray-300"></span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="container mx-auto max-w-5xl px-4">
//           <div className="flex justify-between items-center mb-12">
//             <h2 className="text-2xl md:text-3xl text-gray-800 font-light">Frequently Asked Questions</h2>
//             <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium">
//               Ask a question
//             </Link>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
//               >
//                 <div className="flex items-start mb-4">
//                   <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
//                     ?
//                   </div>
//                   <h3 className="text-gray-800 font-medium text-lg">{faq.question}</h3>
//                 </div>
//                 <div className="ml-12 text-gray-600">{faq.answer}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonial Section */}
//       <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
//         <div className="container mx-auto max-w-4xl px-4">
//           <div className="flex flex-col md:flex-row items-center bg-gray-700/30 p-8 rounded-2xl backdrop-blur-sm">
//             <div className="md:w-3/4 pr-0 md:pr-8">
//               <svg className="h-10 w-10 text-blue-400 mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32">
//                 <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
//               </svg>
//               <p className="text-xl md:text-2xl font-light italic mb-6 leading-relaxed">
//                 &quot;We&apos;ve looked at a lot of SEO solutions but these guys were always the clear favorite. They
//                 have the right strategy and they&apos;ve been awesome to work with.&quot;
//               </p>
//               <div className="flex items-center">
//                 <div className="mr-4">
//                   <div className="font-medium text-lg">Irene Warner</div>
//                   <div className="text-sm text-gray-400">CEO at Acme Inc</div>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-1/4 flex justify-center mt-8 md:mt-0">
//               <div className="relative">
//                 <div className="absolute inset-0 rounded-full bg-blue-400 blur-md opacity-30 transform -rotate-6"></div>
//                 <Image
//                   src={avatar || "/placeholder.svg"}
//                   alt="Irene Warner"
//                   width={100}
//                   height={100}
//                   className="rounded-full border-2 border-white relative z-10"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-center mt-10">
//             <div className="flex space-x-2">
//               <span className="w-2 h-2 rounded-full bg-white"></span>
//               <span className="w-2 h-2 rounded-full bg-gray-500"></span>
//               <span className="w-2 h-2 rounded-full bg-gray-500"></span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Flag,
  BarChart2,
  Zap,
  ArrowRight,
  CheckCircle,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "@/Images/logo1.png";
import logo2 from "@/Images/logo2.png";
import logo3 from "@/Images/logo3.png";
import logo4 from "@/Images/logo4.png";
import logo5 from "@/Images/logo5.png";
import logo6 from "@/Images/logo-6.png";
import avatar from "@/Images/avatar-4.png";
import OrderForm from "./order-form";
import { QuotePopup } from "./quote-popup";
import { PricingCard } from "./pricing-card";
import { LogoCarousel } from "./logo-carousel";
import { FAQAccordion } from "./faq-accordion";
import { TestimonialSlider } from "./testimonial-slider";

// Client logos
const clientLogos = [
  { name: "University", image: logo1 },
  { name: "Academy", image: logo2 },
  { name: "University", image: logo3 },
  { name: "Athletics", image: logo4 },
  { name: "Academy", image: logo5 },
  { name: "Cross Sport", image: logo6 },
];

// FAQ data
const faqs = [
  {
    question: "Is Search Engine Submission Necessary?",
    answer:
      "The simple answer is no, a search engine submission isn't necessary. The majority of search engines, notably Google, crawl and index pages by following links from previously indexed page will identify your page to the engine.",
  },
  {
    question: "What's The Deal With Paid Search Submissions?",
    answer:
      "Many SEO companies offer paid search submissions but beware: it doesn't cost a penny to get indexed by the major search engines. In fact, it's completely free. As a matter of fact, you don't even need to submit your site to search engines.",
  },
  {
    question: "Can Any Inbound Linking Hurt My Ranking?",
    answer:
      "The answer is simple - inbound linking cannot hurt your search ranking. If inbound were to hurt your rank, your competitors would continually link to your site from link farms. Such a scenario is beyond your control. For this reason, Google cannot penalize your site for any inbound linking.",
  },
  {
    question: "Are Blogs Good for SEO?",
    answer:
      "Whether blogs are good for SEO purposes is actually irrelevant; the content is key. Blogs are simply publishing platforms. Having said that, the ability to produce high quality content on an ongoing basis can be made much easier by leveraging blog software - especially for the less technical user.",
  },
  {
    question: "How Do I Make My Site Search Engine Friendly?",
    answer:
      "The best way to make your site more search engine friendly is often to simply add more text. The engine's primary goal is to provide relevant search results, so creating content with a variety of keywords and phrases for the search engines to crawl. Think of their terms as 'bait' gateways for the engines - the injection of text will provide new doorways for traffic.",
  },
  {
    question: "More about SEO:",
    answer:
      "Inbound linking is very important. In fact, acquiring back-links may be the most important thing in SEO. Nevertheless, a website's content, information architecture and technical SEO if the presented content is interesting, useful, and/or important, there is a natural tendency among web users to share information.",
  },
];

// Package feature type
type Feature = {
  name: string;
  included: boolean;
  description?: string;
};

// Package features
const packageFeatures = {
  free: [
    {
      name: "Keyword Research & Selection",
      included: true,
      description:
        "We identify the most valuable and relevant keywords for your business to target, analyzing search volume, competition, and user intent to maximize your visibility.",
    },
    {
      name: "Baseline SEO Ranking Report",
      included: true,
      description:
        "Get a comprehensive analysis of your current search engine rankings, identifying strengths, weaknesses, and opportunities for improvement.",
    },
    {
      name: "On Page Optimization",
      included: true,
      description:
        "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.",
    },
    {
      name: "XML Sitemap Generation & Submission",
      included: true,
      description:
        "We create and submit XML sitemaps to search engines, ensuring all your important pages are properly indexed and crawled.",
    },
    {
      name: "Webmaster Tool Management",
      included: true,
      description:
        "We set up and manage Google Search Console and Bing Webmaster Tools to monitor your site's performance and address any issues that arise.",
    },
  ] as Feature[],
  small: [
    {
      name: "Keyword Research & Selection",
      included: true,
      description:
        "We identify the most valuable and relevant keywords for your business to target, analyzing search volume, competition, and user intent to maximize your visibility.",
    },
    {
      name: "Baseline SEO Ranking Report",
      included: true,
      description:
        "Get a comprehensive analysis of your current search engine rankings, identifying strengths, weaknesses, and opportunities for improvement.",
    },
    {
      name: "On Page Optimization",
      included: true,
      description:
        "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.",
    },
    {
      name: "XML Sitemap Generation & Submission",
      included: true,
      description:
        "We create and submit XML sitemaps to search engines, ensuring all your important pages are properly indexed and crawled.",
    },
    {
      name: "Webmaster Tool Management",
      included: true,
      description:
        "We set up and manage Google Search Console and Bing Webmaster Tools to monitor your site's performance and address any issues that arise.",
    },
    {
      name: "Social Media Optimization",
      included: true,
      description:
        "We optimize your social media profiles and content strategy to increase engagement, brand awareness, and drive traffic to your website.",
    },
    {
      name: "Weekly & Monthly Reporting",
      included: true,
      description:
        "Receive detailed reports on your SEO performance, including rankings, traffic, conversions, and recommendations for continued improvement.",
    },
    {
      name: "24/7 Email Support",
      included: true,
      description:
        "Get answers to your questions and concerns at any time with our round-the-clock email support service.",
    },
  ] as Feature[],
  enterprise: [
    {
      name: "Keyword Research & Selection",
      included: true,
      description:
        "We identify the most valuable and relevant keywords for your business to target, analyzing search volume, competition, and user intent to maximize your visibility.",
    },
    {
      name: "Baseline SEO Ranking Report",
      included: true,
      description:
        "Get a comprehensive analysis of your current search engine rankings, identifying strengths, weaknesses, and opportunities for improvement.",
    },
    {
      name: "On Page Optimization",
      included: true,
      description:
        "We optimize your website's content, meta tags, headings, and internal linking structure to improve relevance and authority for target keywords.",
    },
    {
      name: "XML Sitemap Generation & Submission",
      included: true,
      description:
        "We create and submit XML sitemaps to search engines, ensuring all your important pages are properly indexed and crawled.",
    },
    {
      name: "Webmaster Tool Management",
      included: true,
      description:
        "We set up and manage Google Search Console and Bing Webmaster Tools to monitor your site's performance and address any issues that arise.",
    },
    {
      name: "Social Media Optimization",
      included: true,
      description:
        "We optimize your social media profiles and content strategy to increase engagement, brand awareness, and drive traffic to your website.",
    },
    {
      name: "Weekly & Monthly Reporting",
      included: true,
      description:
        "Receive detailed reports on your SEO performance, including rankings, traffic, conversions, and recommendations for continued improvement.",
    },
    {
      name: "24/7 Email Support",
      included: true,
      description:
        "Get answers to your questions and concerns at any time with our round-the-clock email support service.",
    },
    {
      name: "Online Chat Support",
      included: true,
      description:
        "Enjoy real-time assistance through our live chat support system, providing immediate answers to your questions.",
    },
    {
      name: "Blog Creation & Promotion",
      included: true,
      description:
        "We create high-quality blog content optimized for SEO and promote it across relevant channels to drive traffic and establish thought leadership.",
    },
  ] as Feature[],
};

// Testimonials data
const testimonials = [
  {
    quote:
      "We've looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they've been awesome to work with.",
    name: "Irene Warner",
    title: "CEO at Acme Inc",
    avatar: avatar,
  },
  {
    quote:
      "The team's expertise in SEO has transformed our online presence. Our organic traffic has increased by 150% in just three months!",
    name: "Michael Johnson",
    title: "Marketing Director at TechCorp",
    avatar: avatar,
  },
  {
    quote:
      "Their data-driven approach to SEO has helped us understand exactly what's working and why. Highly recommend their services to any business looking to grow.",
    name: "Sarah Thompson",
    title: "Founder of StyleHub",
    avatar: avatar,
  },
];

// Plan types
type PlanType = "free" | "small" | "enterprise";

export default function PricingPage() {
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [quotePopupOpen, setQuotePopupOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("free");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePlan, setActivePlan] = useState<PlanType | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  // Function to open order form with selected plan
  const openOrderForm = (plan: PlanType) => {
    setSelectedPlan(plan);
    setOrderFormOpen(true);
  };

  // Handle scroll for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-gray-50 text-gray-800"
      ref={topRef}
    >
      {/* Sticky CTA */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 px-4 flex justify-between items-center ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="text-lg font-semibold text-gray-800">
          Ready to boost your SEO?
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setQuotePopupOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </motion.div>

      {/* Order Form Modal */}
      <OrderForm
        isOpen={orderFormOpen}
        onClose={() => setOrderFormOpen(false)}
        selectedPlan={selectedPlan}
      />

      {/* Quote Popup */}
      <QuotePopup
        isOpen={quotePopupOpen}
        onClose={() => setQuotePopupOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 10 L 40 10 M 10 0 L 10 40"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-light mb-6">
              Digital Marketing Pricing Packages
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include
              our core SEO services to help you grow your online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* Free Package */}
            <PricingCard
              planType="free"
              title="Free Trial"
              price="FREE"
              description="No hidden fees. No pressure."
              icon={<Flag className="h-10 w-10" />}
              features={packageFeatures.free}
              gradientFrom="lime-400"
              gradientTo="lime-600"
              textColor="white"
              accentColor="lime-600"
              accentBgColor="bg-lime-100"
              onBuyClick={openOrderForm}
              isActive={activePlan === "free"}
              onMouseEnter={() => setActivePlan("free")}
              onMouseLeave={() => setActivePlan(null)}
            />

            {/* Small Business Package */}
            <PricingCard
              planType="small"
              title="Small Business"
              price="£49.99"
              description="Ideal for Bloggers / Start Ups / Small Businesses"
              icon={<BarChart2 className="h-10 w-10" />}
              features={packageFeatures.small}
              popular={true}
              gradientFrom="blue-400"
              gradientTo="blue-600"
              textColor="white"
              accentColor="blue-600"
              accentBgColor="bg-blue-100"
              onBuyClick={openOrderForm}
              isActive={activePlan === "small"}
              onMouseEnter={() => setActivePlan("small")}
              onMouseLeave={() => setActivePlan(null)}
            />

            {/* Enterprise Package */}
            <PricingCard
              planType="enterprise"
              title="Enterprise"
              price="£129.99"
              description="For ecommerce and large companies"
              icon={<Zap className="h-10 w-10" />}
              features={packageFeatures.enterprise}
              gradientFrom="purple-400"
              gradientTo="purple-600"
              textColor="white"
              accentColor="purple-600"
              accentBgColor="bg-purple-100"
              onBuyClick={openOrderForm}
              isActive={activePlan === "enterprise"}
              onMouseEnter={() => setActivePlan("enterprise")}
              onMouseLeave={() => setActivePlan(null)}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-600 mt-12 max-w-3xl mx-auto"
          >
            <p className="text-lg">
              No more page switching to see changes—everything is here in front
              of you! A new era of content creation has reached WordPress!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
          >
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 font-medium group"
            >
              Free SEO Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => setQuotePopupOpen(true)}
              className="bg-lime-500 text-white px-8 py-4 rounded-full hover:bg-lime-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 font-medium group"
            >
              Request a Free Quote
              <CheckCircle className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl text-center text-gray-700 mb-12 font-light">
            Trusted by Leading Brands
          </h2>
          <LogoCarousel logos={clientLogos} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl text-gray-800 font-light mb-4 md:mb-0">
              Frequently Asked Questions
            </h2>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium"
            >
              Ask a question
            </Link>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Boost Your Online Presence?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their digital
              marketing strategy with our SEO services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setQuotePopupOpen(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                Get Started Today
              </motion.button>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
