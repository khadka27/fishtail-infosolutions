"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import BlogPostCard from "@/Components/blog-post-card-class"
import BlogPostComponent from "@/Components/blog-post"
import image1 from "@/Images/services-payperclick-alt-colors-optimized.png"
import image2 from "@/Images/services-analytics-alt-colors-optimized.png"
import image3 from "@/Images/seo_specialist_workplace-optimized.png"
import image4 from "@/Images/services-seo-alt-colors-optimized.png"

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
  },
]

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
}

export default function BlogPage() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null)

  const handlePostClick = (id: string) => {
    setSelectedPostId(id)
    // Scroll to top when a post is selected
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBackClick = () => {
    setSelectedPostId(null)
  }

  // Find the selected post
  const selectedPost = selectedPostId ? blogPosts.find((post) => post.id === selectedPostId) : null

  return (
    <>
    <div className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      {selectedPost ? (
        <div>
          <button
            onClick={handleBackClick}
            className="mb-6 flex items-center text-blue-500 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </button>

          <BlogPostComponent
            title={selectedPost.title}
            date={selectedPost.date}
            content={selectedPost.content}
            comments={selectedPost.comments}
            author={selectedPost.author}
            relatedPosts={relatedPosts[selectedPost.id as keyof typeof relatedPosts]}
            onRelatedPostClick={handlePostClick}
          />
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
            <h1 className="text-2xl md:text-3xl text-gray-700 font-medium">Latest company updates and industry news</h1>
            <a href="#subscribe" className="text-blue-500 hover:text-blue-700 text-sm">
              Subscribe to email updates
            </a>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                onClick={handlePostClick}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12 mb-8">
            <nav className="inline-flex">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-l-md hover:bg-blue-600">
                1
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">
                2
              </button>
            </nav>
          </div>

         
        </>
      )}
    </div>
     <div id="subscribe" className="bg-[#55b4e4] text-white py-8 px-4 rounded-md mt-12">
     <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
       <div className="flex items-center">
         <svg
           className="h-8 w-8 mr-3 text-white"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="1.5"
         >
           <rect x="2" y="4" width="20" height="16" rx="2" />
           <path d="M22 7L12 14L2 7" />
         </svg>
         <h2 className="text-xl font-medium">Get new blog posts by email:</h2>
       </div>
       <div className="flex flex-col md:flex-row gap-4 flex-1 max-w-2xl">
         <input
           type="text"
           placeholder="Name"
           className="flex-1 px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-white/80 focus:outline-none"
         />
         <input
           type="email"
           placeholder="Email"
           className="flex-1 px-4 py-2 rounded-md bg-transparent border border-white text-white placeholder-white/80 focus:outline-none"
         />
         <button className="bg-white text-[#55b4e4] px-6 py-2 rounded-md font-medium">Subscribe</button>
       </div>
     </div>
   </div>
   </>
  )
}

