/* eslint-disable react/no-unescaped-entities */

"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
     ArrowLeft,
     Search,
     Calendar,
     User,
     ChevronRight,
     Clock,
     Tag,
     BookOpen,
     Eye,
     MessageCircle,
} from "lucide-react";
import Image from "next/image";
import BlogPostCard from "@/Components/blog-post-card-class";
import BlogPostComponent from "@/Components/blog-post";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "@/Images/Is-Search-Engine-Submission-Necessary.png";
import image2 from "@/Images/SEO-link-builder.png";
import image3 from "@/Images/Anchor-Text.jpg";
import image4 from "@/Images/absolutevsrelative.jpg";
import { useParams, useRouter } from "next/navigation";

// Sample blog posts data
const blogPosts = [
     {
          id: "search-engine-submission",
          title: "Is Search Engine Submission Necessary?",
          date: "April 17, 2014",
          excerpt: "The simple answer is no - search engine submission isn't necessary. The majority of search engines nowadays (most notably Google) crawl and index pages by...",
          imageUrl: image1,
          content: `
      <p>The simple answer is no - search engine submission isn't necessary. The majority of search engines nowadays (most notably Google) crawl and index pages by following links. Using that logic, a single inbound link from any already-indexed page will identify your page to the engine.</p>
      
      <p>The engines are limited in how many pages they can explore, so they prioritize their crawling activities. Pages that are known to have new content on a frequent basis are given the highest priority. News sites, active blogs and busy social networking pages are crawled frequently. Pages that are seldom updated, or often return a server error, or have little inbound link activity are assigned a much lower crawling priority.</p>
      
      <h2>Why Manual Submission Isn't Necessary</h2>
      
      <p>In the early days of search engines, manual submission was common practice. Website owners would submit their URLs to search engines to ensure they were indexed. However, search engines have evolved significantly since then.</p>
      
      <p>Modern search engines use sophisticated crawling algorithms that discover new content by following links from existing pages. When a search engine crawler visits a page, it follows all the links on that page to discover new content. This process continues, allowing search engines to discover and index billions of pages across the web.</p>
    `,
          author: "John Smith",
          comments: 0,
          category: "SEO",
          readTime: "5 min read",
     },
     {
          id: "inbound-linking",
          title: "Can Any Inbound Linking Hurt My Ranking?",
          date: "April 17, 2014",
          excerpt: "The answer is simple - inbound linking cannot hurt your search ranking. How is this known for certain? Well, for one, if inbound were...",
          imageUrl: image2,
          content: `
      <p>The answer is simple - inbound linking cannot hurt your search ranking. How is this known for certain? Well, for one, if inbound linking could hurt your rank, your competitors would all be busy linking to your site from link farms. Rather than improving their own rank, they would simply lower yours. Since this is not the case, we can safely assume that inbound linking cannot hurt your ranking.</p>
      
      <p>Google's algorithm focuses on the quality and relevance of inbound links, not just their quantity. High-quality links from reputable websites in your industry can significantly boost your search ranking, while low-quality links from irrelevant or spammy websites may have little to no impact.</p>
      
      <h2>The Value of Natural Link Building</h2>
      
      <p>Natural link building occurs when other websites link to your content because they find it valuable, informative, or interesting. These natural links are highly valued by search engines because they indicate that your content is worthy of reference.</p>
    `,
          author: "Jane Doe",
          comments: 3,
          category: "Link Building",
          readTime: "4 min read",
     },
     {
          id: "anchor-text",
          title: "The Importance of Anchor Text in Back-links",
          date: "April 17, 2014",
          excerpt: "The importance of anchor text with respect to a linking strategy cannot be overstated. Back-links are a huge part of the search engine algorithm. When...",
          imageUrl: image3,
          content: `
      <p>The importance of anchor text with respect to a linking strategy cannot be overstated. Back-links are a huge part of the search engine algorithm. When Google sees a link to your website, it takes into consideration the text that is used in the link, known as the anchor text.</p>
      
      <p>Anchor text provides context about the content of the linked page. For example, if a link to your page uses the anchor text "best SEO practices," search engines will associate your page with that phrase. This helps search engines understand what your page is about and can improve your ranking for relevant searches.</p>
    `,
          author: "Mike Johnson",
          comments: 5,
          category: "Link Building",
          readTime: "6 min read",
     },
     {
          id: "absolute-vs-relative-links",
          title: "Absolute Links vs. Relative Links – SEO Value",
          date: "April 17, 2014",
          excerpt: "The debate between absolute links and relative links continues to live on in the SEO world. The individual significance of each has been contested, but...",
          imageUrl: image4,
          content: `
      <p>The debate between absolute links and relative links continues to live on in the SEO world. The individual significance of each has been contested, but it is widely regarded that absolute links provide better SEO value because of their ability to be indexed by search engines as independent links.</p>
      
      <h2>What's the Difference?</h2>
      
      <p>Absolute links include the entire URL of a page, including the protocol (http or https), domain name, and path. For example: <code>https://www.example.com/page.html</code></p>
      
      <p>Relative links, on the other hand, only include the path relative to the current page. For example: <code>/page.html</code> or <code>../page.html</code></p>
    `,
          author: "Sarah Williams",
          comments: 2,
          category: "Technical SEO",
          readTime: "7 min read",
     },
];

// Sample related posts for each blog post
const relatedPosts = {
     "search-engine-submission": [
          {
               id: "inbound-linking",
               title: "Can Any Inbound Linking Hurt My Ranking?",
               imageUrl: image2,
          },
          {
               id: "anchor-text",
               title: "The Importance of Anchor Text in Back-links",
               imageUrl: image3,
          },
          {
               id: "absolute-vs-relative-links",
               title: "Absolute Links vs. Relative Links – SEO Value",
               imageUrl: image4,
          },
     ],
     "inbound-linking": [
          {
               id: "search-engine-submission",
               title: "Is Search Engine Submission Necessary?",
               imageUrl: image1,
          },
          {
               id: "anchor-text",
               title: "The Importance of Anchor Text in Back-links",
               imageUrl: image3,
          },
          {
               id: "absolute-vs-relative-links",
               title: "Absolute Links vs. Relative Links – SEO Value",
               imageUrl: image4,
          },
     ],
     "anchor-text": [
          {
               id: "search-engine-submission",
               title: "Is Search Engine Submission Necessary?",
               imageUrl: image1,
          },
          {
               id: "inbound-linking",
               title: "Can Any Inbound Linking Hurt My Ranking?",
               imageUrl: image2,
          },
          {
               id: "absolute-vs-relative-links",
               title: "Absolute Links vs. Relative Links – SEO Value",
               imageUrl: image4,
          },
     ],
     "absolute-vs-relative-links": [
          {
               id: "search-engine-submission",
               title: "Is Search Engine Submission Necessary?",
               imageUrl: image1,
          },
          {
               id: "inbound-linking",
               title: "Can Any Inbound Linking Hurt My Ranking?",
               imageUrl: image2,
          },
          {
               id: "anchor-text",
               title: "The Importance of Anchor Text in Back-links",
               imageUrl: image3,
          },
     ],
};

// Categories for filter
const categories = [
     "All",
     "SEO",
     "Link Building",
     "Technical SEO",
     "Content Marketing",
];

export default function BlogPage() {
     const params = useParams();
     const router = useRouter();
     const slugFromUrl = params?.slug as string | undefined;

     const [selectedPostId, setSelectedPostId] = useState<string | null>(
          slugFromUrl || null
     );
     const [searchTerm, setSearchTerm] = useState("");
     const [selectedCategory, setSelectedCategory] = useState("All");
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [isSubscribed, setIsSubscribed] = useState(false);
     const [isSearchFocused, setIsSearchFocused] = useState(false);

     const subscribeFormRef = useRef<HTMLDivElement>(null);

     // Update selectedPostId when URL params change
     useEffect(() => {
          if (slugFromUrl) {
               setSelectedPostId(slugFromUrl);
          }
     }, [slugFromUrl]);

     const handlePostClick = (id: string) => {
          setSelectedPostId(id);
          router.push(`/blog/${id}`, { scroll: false });
          window.scrollTo({ top: 0, behavior: "smooth" });
     };

     const handleBackClick = () => {
          setSelectedPostId(null);
          router.push("/blog", { scroll: false });
     };

     const handleSubscribe = (e: React.FormEvent) => {
          e.preventDefault();
          setIsSubscribed(true);
          setTimeout(() => {
               setIsSubscribed(false);
               setEmail("");
               setName("");
          }, 3000);
     };

     const scrollToSubscribe = () => {
          subscribeFormRef.current?.scrollIntoView({ behavior: "smooth" });
     };

     // Find the selected post
     const selectedPost = selectedPostId
          ? blogPosts.find((post) => post.id === selectedPostId)
          : null;

     // Filter posts based on search term and category
     const filteredPosts = blogPosts.filter((post) => {
          const matchesSearch =
               post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory =
               selectedCategory === "All" || post.category === selectedCategory;
          return matchesSearch && matchesCategory;
     });

     return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
               {selectedPost ? (
                    // Individual Blog Post View
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                         >
                              <button
                                   onClick={handleBackClick}
                                   className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors group font-medium"
                              >
                                   <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                   Back to all posts
                              </button>

                              <BlogPostComponent
                                   title={selectedPost.title}
                                   date={selectedPost.date}
                                   content={selectedPost.content}
                                   comments={selectedPost.comments}
                                   author={selectedPost.author}
                                   relatedPosts={
                                        relatedPosts[
                                             selectedPost.id as keyof typeof relatedPosts
                                        ]
                                   }
                                   onRelatedPostClick={handlePostClick}
                                   postId={selectedPost.id}
                              />
                         </motion.div>
                    </div>
               ) : (
                    // Blog Listing Page
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                         {/* Hero Section */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className="text-center mb-12"
                         >
                              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                   <BookOpen className="w-4 h-4" />
                                   Digital Marketing Insights
                              </div>
                              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                   Our{" "}
                                   <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Blog
                                   </span>
                              </h1>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                   Discover the latest insights, strategies, and
                                   tips from our digital marketing experts
                              </p>
                         </motion.div>

                         {/* Search and Filter Section */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.1 }}
                              className="mb-12"
                         >
                              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                   <div className="flex flex-col lg:flex-row gap-6">
                                        {/* Search */}
                                        <div className="flex-1">
                                             <div className="relative">
                                                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                                  <input
                                                       type="text"
                                                       placeholder="Search articles..."
                                                       value={searchTerm}
                                                       onChange={(e) =>
                                                            setSearchTerm(
                                                                 e.target.value
                                                            )
                                                       }
                                                       onFocus={() =>
                                                            setIsSearchFocused(
                                                                 true
                                                            )
                                                       }
                                                       onBlur={() =>
                                                            setIsSearchFocused(
                                                                 false
                                                            )
                                                       }
                                                       className={`w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                                            isSearchFocused
                                                                 ? "ring-2 ring-blue-500/50"
                                                                 : ""
                                                       }`}
                                                  />
                                             </div>
                                        </div>

                                        {/* Categories */}
                                        <div className="flex flex-wrap gap-2">
                                             {categories.map(
                                                  (category, index) => (
                                                       <motion.button
                                                            key={category}
                                                            initial={{
                                                                 opacity: 0,
                                                                 y: 10,
                                                            }}
                                                            animate={{
                                                                 opacity: 1,
                                                                 y: 0,
                                                            }}
                                                            transition={{
                                                                 duration: 0.3,
                                                                 delay:
                                                                      0.1 +
                                                                      index *
                                                                           0.05,
                                                            }}
                                                            onClick={() =>
                                                                 setSelectedCategory(
                                                                      category
                                                                 )
                                                            }
                                                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                                                 selectedCategory ===
                                                                 category
                                                                      ? "bg-blue-600 text-white shadow-md"
                                                                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                                                            }`}
                                                       >
                                                            {category}
                                                       </motion.button>
                                                  )
                                             )}
                                        </div>
                                   </div>
                              </div>
                         </motion.div>

                         {/* Blog Posts List */}
                         <AnimatePresence>
                              {filteredPosts.length > 0 ? (
                                   <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-8"
                                   >
                                        {filteredPosts.map((post, index) => (
                                             <motion.div
                                                  key={post.id}
                                                  initial={{
                                                       opacity: 0,
                                                       y: 20,
                                                  }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{
                                                       duration: 0.5,
                                                       delay: 0.1 + index * 0.1,
                                                  }}
                                                  className="group cursor-pointer"
                                                  onClick={() =>
                                                       handlePostClick(post.id)
                                                  }
                                             >
                                                  <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                                       <div className="flex flex-col lg:flex-row">
                                                            {/* Image Section */}
                                                            <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
                                                                 <Image
                                                                      src={
                                                                           post.imageUrl
                                                                      }
                                                                      alt={
                                                                           post.title
                                                                      }
                                                                      fill
                                                                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                                 />
                                                                 <div className="absolute top-4 left-4">
                                                                      <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                                           {
                                                                                post.category
                                                                           }
                                                                      </span>
                                                                 </div>
                                                            </div>

                                                            {/* Content Section */}
                                                            <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
                                                                 <div>
                                                                      {/* Meta Info */}
                                                                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 flex-wrap">
                                                                           <div className="flex items-center gap-1">
                                                                                <Calendar className="w-4 h-4" />
                                                                                <span>
                                                                                     {
                                                                                          post.date
                                                                                     }
                                                                                </span>
                                                                           </div>
                                                                           <div className="flex items-center gap-1">
                                                                                <User className="w-4 h-4" />
                                                                                <span>
                                                                                     {
                                                                                          post.author
                                                                                     }
                                                                                </span>
                                                                           </div>
                                                                           <div className="flex items-center gap-1">
                                                                                <Clock className="w-4 h-4" />
                                                                                <span>
                                                                                     {
                                                                                          post.readTime
                                                                                     }
                                                                                </span>
                                                                           </div>
                                                                           <div className="flex items-center gap-1">
                                                                                <MessageCircle className="w-4 h-4" />
                                                                                <span>
                                                                                     {
                                                                                          post.comments
                                                                                     }{" "}
                                                                                     comments
                                                                                </span>
                                                                           </div>
                                                                      </div>

                                                                      {/* Title */}
                                                                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                                                           {
                                                                                post.title
                                                                           }
                                                                      </h2>

                                                                      {/* Excerpt */}
                                                                      <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
                                                                           {
                                                                                post.excerpt
                                                                           }
                                                                      </p>
                                                                 </div>

                                                                 {/* Read More Button */}
                                                                 <div className="flex items-center justify-between">
                                                                      <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold group/btn transition-colors">
                                                                           <span>
                                                                                Read
                                                                                full
                                                                                article
                                                                           </span>
                                                                           <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                                      </button>
                                                                      <div className="flex items-center gap-2 text-sm text-gray-400">
                                                                           <Eye className="w-4 h-4" />
                                                                           <span>
                                                                                Click
                                                                                to
                                                                                read
                                                                           </span>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </article>
                                             </motion.div>
                                        ))}
                                   </motion.div>
                              ) : (
                                   <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="text-center py-16"
                                   >
                                        <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                             <Search className="h-8 w-8 text-gray-400" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                             No articles found
                                        </h3>
                                        <p className="text-gray-600 mb-6 max-w-md mx-auto">
                                             Try adjusting your search terms or
                                             browse all categories
                                        </p>
                                        <button
                                             onClick={() => {
                                                  setSearchTerm("");
                                                  setSelectedCategory("All");
                                             }}
                                             className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm"
                                        >
                                             Clear filters
                                        </button>
                                   </motion.div>
                              )}
                         </AnimatePresence>

                         {/* Newsletter Section */}
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                              className="mt-16"
                         >
                              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
                                   <div className="absolute inset-0 bg-black/10"></div>
                                   <div className="relative z-10 text-center">
                                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                                             Stay Updated
                                        </h2>
                                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                             Get the latest digital marketing
                                             insights and tips delivered to your
                                             inbox
                                        </p>

                                        {isSubscribed ? (
                                             <motion.div
                                                  initial={{
                                                       opacity: 0,
                                                       scale: 0.9,
                                                  }}
                                                  animate={{
                                                       opacity: 1,
                                                       scale: 1,
                                                  }}
                                                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto"
                                             >
                                                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-blue-600 mb-4">
                                                       <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-6 w-6"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                       >
                                                            <path
                                                                 strokeLinecap="round"
                                                                 strokeLinejoin="round"
                                                                 strokeWidth={2}
                                                                 d="M5 13l4 4L19 7"
                                                            />
                                                       </svg>
                                                  </div>
                                                  <h3 className="text-xl font-semibold mb-2">
                                                       Thank you!
                                                  </h3>
                                                  <p className="text-blue-100">
                                                       You've been successfully
                                                       subscribed to our
                                                       newsletter.
                                                  </p>
                                             </motion.div>
                                        ) : (
                                             <motion.form
                                                  initial={{
                                                       opacity: 0,
                                                       y: 20,
                                                  }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{
                                                       duration: 0.5,
                                                       delay: 0.1,
                                                  }}
                                                  onSubmit={handleSubscribe}
                                                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                                             >
                                                  <div className="flex-1">
                                                       <input
                                                            type="email"
                                                            placeholder="Enter your email"
                                                            value={email}
                                                            onChange={(e) =>
                                                                 setEmail(
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                                                            required
                                                       />
                                                  </div>
                                                  <motion.button
                                                       whileHover={{
                                                            scale: 1.02,
                                                       }}
                                                       whileTap={{
                                                            scale: 0.98,
                                                       }}
                                                       type="submit"
                                                       className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-sm"
                                                  >
                                                       Subscribe
                                                  </motion.button>
                                             </motion.form>
                                        )}
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               )}
          </div>
     );
}
