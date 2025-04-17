/* eslint-disable react/no-unescaped-entities */

"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Calendar,
  User,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import BlogPostCard from "@/Components/blog-post-card-class";
import BlogPostComponent from "@/Components/blog-post";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "@/Images/services-payperclick-alt-colors-optimized.png";
import image2 from "@/Images/services-analytics-alt-colors-optimized.png";
import image3 from "@/Images/seo_specialist_workplace-optimized.png";
import image4 from "@/Images/services-seo-alt-colors-optimized.png";

import { useParams, useRouter } from "next/navigation";

// Sample blog posts data
const blogPosts = [
  {
    id: "search-engine-submission",
    title: "Is Search Engine Submission Necessary?",
    date: "April 17, 2014",
    excerpt:
      "The simple answer is no - search engine submission isn't necessary. The majority of search engines nowadays (most notably Google) crawl and index pages by...",
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
    excerpt:
      "The answer is simple - inbound linking cannot hurt your search ranking. How is this known for certain? Well, for one, if inbound were...",
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
    excerpt:
      "The importance of anchor text with respect to a linking strategy cannot be overstated. Back-links are a huge part of the search engine algorithm. When...",
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
    excerpt:
      "The debate between absolute links and relative links continues to live on in the SEO world. The individual significance of each has been contested, but...",
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
    // Update URL without full page reload
    router.push(`/blog/${id}`, { scroll: false });
    // Scroll to top when a post is selected
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackClick = () => {
    setSelectedPostId(null);
    router.push("/blog", { scroll: false });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription success
    setIsSubscribed(true);
    // Reset form after 3 seconds
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
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white min-h-screen">
        {selectedPost ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={handleBackClick}
              className="mb-6 flex items-center text-[#0084FF] hover:text-[#003C8F] transition-colors group"
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
                relatedPosts[selectedPost.id as keyof typeof relatedPosts]
              }
              onRelatedPostClick={handlePostClick}
            />
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
            >
              <h1 className="text-2xl md:text-3xl text-[#003C8F] font-semibold">
                Latest Company Updates & Industry News
              </h1>
              <button
                onClick={scrollToSubscribe}
                className="text-[#0084FF] hover:text-[#003C8F] text-sm flex items-center group transition-colors"
              >
                Subscribe to email updates
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Search and filter bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 flex flex-col sm:flex-row gap-4"
            >
              <div
                className={`relative flex-1 transition-all duration-300 ${
                  isSearchFocused ? "ring-2 ring-[#0084FF]/50" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedCategory === category
                        ? "bg-[#0084FF] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <AnimatePresence>
              {filteredPosts.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    >
                      <BlogPostCard
                        id={post.id}
                        title={post.title}
                        date={post.date}
                        excerpt={post.excerpt}
                        imageUrl={post.imageUrl}
                        onClick={handlePostClick}
                        category={post.category}
                        readTime={post.readTime}
                        author={post.author}
                        comments={post.comments}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <div className="text-[#0084FF] mb-4">
                    <Search className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-500 mb-6">
                    We couldn't find any posts matching your search criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="px-4 py-2 bg-[#0084FF] text-white rounded-md hover:bg-[#003C8F] transition-colors"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {filteredPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center mt-12 mb-8"
              >
                <nav
                  className="inline-flex rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <button className="px-4 py-2 text-sm font-medium text-white bg-[#0084FF] rounded-l-md hover:bg-[#003C8F] transition-colors">
                    1
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </nav>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Featured posts section */}
      {!selectedPost && (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-[#003C8F] mb-8 text-center"
            >
              Featured Posts
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-[#0084FF] text-white text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2 group-hover:text-[#0084FF] transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-xs mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Subscribe section */}
      <div
        id="subscribe"
        ref={subscribeFormRef}
        className="bg-[#0084FF] text-white py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest blog posts,
              industry news, and exclusive tips directly to your inbox.
            </p>
          </motion.div>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 rounded-lg p-6 text-center max-w-md mx-auto"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#0084FF] mb-4">
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
              <h3 className="text-xl font-medium mb-2">Thank You!</h3>
              <p>You've been successfully subscribed to our newsletter.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubscribe}
              className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto"
            >
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-[#0084FF] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md"
              >
                Subscribe
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </>
  );
}
