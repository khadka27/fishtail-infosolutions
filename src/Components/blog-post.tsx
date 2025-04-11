/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageSquare,
  User,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react";

interface RelatedPost {
  id: string;
  title: string;
  imageUrl: any;
}

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  author: string;
  comments: number;
  relatedPosts: RelatedPost[];
  onRelatedPostClick: (id: string) => void;
}

const BlogPostComponent: React.FC<BlogPostProps> = ({
  title,
  date,
  content,
  author,
  comments,
  relatedPosts,
  onRelatedPostClick,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <article className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-500 text-sm gap-x-4 gap-y-2 mb-6 pb-4 border-b border-gray-200">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-[#0084FF]" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1 text-[#0084FF]" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1 text-[#0084FF]" />
              <span>{comments} comments</span>
            </div>
          </div>

          <div
            className="prose prose-blue max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Interactive action buttons */}
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 my-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center gap-1 ${
                  isLiked ? "text-red-500" : "text-gray-500"
                } hover:text-red-500 transition-colors`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500" : ""}`} />
                <span>Like</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShareOptions(!showShareOptions)}
                  className="flex items-center gap-1 text-gray-500 hover:text-[#0084FF] transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>

                {showShareOptions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md p-2 z-10"
                  >
                    <div className="flex gap-2">
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                        <Facebook className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                        <Twitter className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-1 ${
                  isBookmarked ? "text-[#0084FF]" : "text-gray-500"
                } hover:text-[#0084FF] transition-colors`}
              >
                <Bookmark
                  className={`h-5 w-5 ${isBookmarked ? "fill-[#0084FF]" : ""}`}
                />
                <span>Save</span>
              </button>
            </div>

            <div className="text-sm text-gray-500">
              <span>5 min read</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex items-center">
                <span className="text-gray-700 font-medium mr-3">Share:</span>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-gray-700 font-medium mr-3">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                    SEO
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                    Marketing
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                    Digital
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Author bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6 mt-6"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt={author}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">
                {author}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Content Marketing Specialist with over 10 years of experience in
                SEO and digital marketing strategies.
              </p>
              <div className="flex space-x-2">
                <button className="p-1.5 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                  <Twitter className="h-3.5 w-3.5" />
                </button>
                <button className="p-1.5 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                  <Linkedin className="h-3.5 w-3.5" />
                </button>
                <button className="p-1.5 rounded-full bg-gray-100 hover:bg-[#0084FF] hover:text-white transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comments section placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-6 mt-6"
        >
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Comments ({comments})
          </h3>
          {comments > 0 ? (
            <div className="space-y-4">
              {/* Sample comment */}
              <div className="border-b border-gray-100 pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Commenter"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-gray-800">Jane Cooper</h4>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Great article! This information is really helpful for my
                      website optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              No comments yet. Be the first to comment!
            </p>
          )}

          {/* Comment form */}
          <div className="mt-6">
            <h4 className="text-lg font-medium text-gray-800 mb-3">
              Leave a comment
            </h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Your Comment"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-2 bg-[#0084FF] text-white rounded-lg hover:bg-[#003C8F] transition-colors"
              >
                Post Comment
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        {/* Related posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Related Posts
          </h3>
          <div className="space-y-4">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                onClick={() => onRelatedPostClick(post.id)}
              >
                <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-700 hover:text-[#0084FF] transition-colors">
                  {post.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Categories
          </h3>
          <ul className="space-y-2">
            {[
              "SEO",
              "Content Marketing",
              "Social Media",
              "PPC",
              "Email Marketing",
            ].map((category, index) => (
              <motion.li
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                <a
                  href="#"
                  className="flex items-center justify-between text-gray-700 hover:text-[#0084FF] transition-colors py-1"
                >
                  <span>{category}</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                    {Math.floor(Math.random() * 20) + 1}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Popular tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "SEO",
              "Marketing",
              "Content",
              "Social Media",
              "Google",
              "Analytics",
              "PPC",
              "Strategy",
              "Backlinks",
              "Keywords",
            ].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.03 }}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostComponent;
