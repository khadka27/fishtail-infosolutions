"use client"

import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface RelatedPost {
  id: string
  title: string
  imageUrl: any
}

interface BlogPostProps {
  title: string
  date: string
  content: string
  comments: number
  author: string
  relatedPosts: RelatedPost[]
  onRelatedPostClick: (id: string) => void
}

class BlogPostComponent extends React.Component<BlogPostProps> {
  constructor(props: BlogPostProps) {
    super(props)
  }

  renderRelatedPosts() {
    return this.props.relatedPosts.map((relatedPost) => (
      <div
        key={relatedPost.id}
        className="flex gap-4 mb-4 cursor-pointer"
        onClick={() => this.props.onRelatedPostClick(relatedPost.id)}
      >
        <div className="shrink-0">
          <Image
            src={relatedPost.imageUrl || "/placeholder.svg"}
            alt={relatedPost.title}
            width={150}
            height={150}
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <div className="text-m hover:text-blue-500 transition-colors text-sm">{relatedPost.title}</div>
        </div>
      </div>
    ))
  }

  renderBottomRelatedPosts() {
    return this.props.relatedPosts.slice(0, 3).map((post) => (
      <div key={post.id} className="w-full" onClick={() => this.props.onRelatedPostClick(post.id)}>
        <div className="mb-2">
          <Image
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            width={300}
            height={200}
            className="w-full h-32 object-cover rounded-md"
          />
        </div>
        <h3 className="text-sm font-medium mb-1">{post.title}</h3>
        <a className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer">Continue Reading</a>
      </div>
    ))
  }

  render() {
    const { title, date, content, comments, author } = this.props
    const commentsText = comments === 0 ? "No Comments" : comments === 1 ? "1 Comment" : `${comments} Comments`

    return (
      <div className="max-w-5xl mx-auto px-4 py-8 bg-white">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h1 className="text-2xl font-medium text-gray-800 mb-2">{title}</h1>
            <div className="text-xs text-gray-500 mb-6">
              <span>By {author}</span> • <span>{date}</span>
            </div>

            {/* Enhanced blog content with larger text */}
            <div
              className="prose max-w-none text-lg"
              dangerouslySetInnerHTML={{ __html: content }}
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
              }}
            />

            {/* Custom styles for content elements */}
            <style jsx global>{`
              .prose p {
                font-size: 1.125rem;
                line-height: 1.75rem;
                margin-bottom: 1.5rem;
                color: #333;
              }
              
              .prose h1 {
                font-size: 1.875rem;
                line-height: 2.25rem;
                font-weight: 600;
                margin-top: 2rem;
                margin-bottom: 1rem;
              }
              
              .prose h2 {
                font-size: 1.5rem;
                line-height: 2rem;
                font-weight: 600;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
              }
              
              .prose ul, .prose ol {
                font-size: 1.125rem;
                line-height: 1.75rem;
                margin-bottom: 1.5rem;
                padding-left: 1.5rem;
              }
              
              .prose li {
                margin-bottom: 0.5rem;
              }
              
              .prose a {
                color: #3b82f6;
                text-decoration: underline;
              }
              
              .prose a:hover {
                color: #2563eb;
              }
              
              .prose code {
                font-size: 0.875rem;
                background-color: #f3f4f6;
                padding: 0.2rem 0.4rem;
                border-radius: 0.25rem;
              }
            `}</style>

            {/* Bottom Related Posts Section */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium mb-4">More from our Blog</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{this.renderBottomRelatedPosts()}</div>
            </div>

            {/* Comments Section */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium mb-4">{commentsText}</h3>
              {/* Comment form would go here */}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="text-xl font-medium mb-3">About us and this blog</h3>
              <p className="text-lg text-gray-600 mb-3">
                We are a digital marketing company focused on helping businesses grow online through effective SEO and
                content strategies.
              </p>
              <div className="text-m text-blue-500 hover:text-blue-700 inline-flex items-center cursor-pointer">
                Learn more
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="text-xl font-medium mb-3">Request a free quote</h3>
              <p className="text-lg text-gray-600 mb-3">
                Get in touch with our team to discuss your digital marketing needs and how we can help your business
                grow online.
              </p>
              <div className="text-m text-blue-500 hover:text-blue-700 inline-flex items-center cursor-pointer">
                Get started
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-md mb-6">
              <div className="flex justify-center mb-2">
                <div className="bg-white p-2 rounded-full">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">Subscribe to our newsletter</h3>
              <p className="text-m text-gray-600 text-center mb-3">
                Get our latest posts and updates delivered right to your inbox.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 text-xs border rounded-md"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-3 text-xs rounded-md hover:bg-blue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Recent Posts</h3>
              <div className="space-y-4">{this.renderRelatedPosts()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPostComponent

