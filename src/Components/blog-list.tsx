"use client";

import { useState } from "react";
import BlogPostCard from "./blog-post-card";
import { Button } from "@/Components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample blog post data
const blogPosts = [
  {
    id: "search-engine-submission",
    title: "Is Search Engine Submission Necessary?",
    date: "April 17, 2014",
    excerpt:
      "The simple answer is no - search engine submission isn't necessary. The majority of search engines nowadays (most notably Google) crawl and index pages by following links.",
    imageUrl:
      "/placeholder.svg?height=300&width=400&text=SEO+Submission&bg=00bcd4",
  },
  {
    id: "inbound-linking",
    title: "Can Any Inbound Linking Hurt My Ranking?",
    date: "April 17, 2014",
    excerpt:
      "The answer is simple - inbound linking cannot hurt your search ranking. How is this known for certain? Well, for one, if inbound were...",
    imageUrl:
      "/placeholder.svg?height=300&width=400&text=Inbound+Links&bg=2c5282",
  },
  {
    id: "anchor-text",
    title: "The Importance of Anchor Text in Back-links",
    date: "April 17, 2014",
    excerpt:
      "The importance of anchor text with respect to a linking strategy cannot be overstated. Back-links are a huge part of the search engine algorithm. When...",
    imageUrl:
      "/placeholder.svg?height=300&width=400&text=Anchor+Text&bg=ff5722",
  },
  {
    id: "absolute-vs-relative-links",
    title: "Absolute Links vs. Relative Links – SEO Value",
    date: "April 17, 2014",
    excerpt:
      "The debate between absolute links and relative links continues to live on in the SEO world. The individual significance of each has been contested, but...",
    imageUrl: "/placeholder.svg?height=300&width=400&text=Links&bg=ffc107",
  },
  {
    id: "seo-friendly-urls",
    title: "SEO-Friendly URL Structure for Better Rankings",
    date: "April 16, 2014",
    excerpt:
      "Creating SEO-friendly URLs is an important aspect of on-page optimization. Well-structured URLs can help search engines understand your content better and improve user experience.",
    imageUrl: "/placeholder.svg?height=300&width=400&text=SEO+URLs&bg=4caf50",
  },
  {
    id: "mobile-seo",
    title: "Mobile SEO: Why It Matters More Than Ever",
    date: "April 16, 2014",
    excerpt:
      "With mobile traffic surpassing desktop traffic, optimizing your website for mobile devices is no longer optional. Mobile SEO ensures your site performs well on smartphones and tablets.",
    imageUrl: "/placeholder.svg?height=300&width=400&text=Mobile+SEO&bg=9c27b0",
  },
  {
    id: "local-seo",
    title: "Local SEO: How to Optimize for Local Search",
    date: "April 15, 2014",
    excerpt:
      "For businesses with physical locations, local SEO is crucial. Learn how to optimize your Google Business Profile and improve your visibility in local search results.",
    imageUrl: "/placeholder.svg?height=300&width=400&text=Local+SEO&bg=e91e63",
  },
  {
    id: "content-marketing",
    title: "Content Marketing and SEO: The Perfect Partnership",
    date: "April 15, 2014",
    excerpt:
      "Content marketing and SEO go hand in hand. High-quality content attracts links and social shares, while SEO ensures your content gets found by the right audience.",
    imageUrl:
      "/placeholder.svg?height=300&width=400&text=Content+Marketing&bg=3f51b5",
  },
];

const POSTS_PER_PAGE = 4;

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">
            Latest company updates and industry news
          </h1>
          <a href="#" className="text-blue-500 hover:underline text-sm">
            Subscribe to email updates
          </a>
        </div>

        <div className="space-y-8">
          {currentPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(index + 1)}
                className="h-8 w-8"
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
