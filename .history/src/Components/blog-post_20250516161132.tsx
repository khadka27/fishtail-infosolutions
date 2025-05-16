/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from "next/image"
import { Calendar, User, MessageSquare } from "lucide-react"
import CommentForm from "./comment-form"

interface RelatedPost {
  id: string
  title: string
  imageUrl: any
}

interface BlogPostComponentProps {
  title: string
  date: string
  content: string
  author: string
  comments: number
  relatedPosts: RelatedPost[]
  onRelatedPostClick: (id: string) => void
  postId: string // Added postId prop
}

export default function BlogPostComponent({
  title,
  date,
  content,
  author,
  comments,
  relatedPosts,
  onRelatedPostClick,
  postId, // Receive postId
}: BlogPostComponentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <User className="h-4 w-4 mr-1" />
          <span>{author}</span>
          <span className="mx-2">•</span>
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>{comments} comments</span>
        </div>

        <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: content }} />

        {/* Comments section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Comments ({comments})</h2>

          {/* Display existing comments here if you have them */}
          {comments === 0 && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-gray-600">No comments yet. Be the first to comment!</p>
            </div>
          )}

          {/* Comment form with EmailJS integration */}
          <CommentForm postId={postId} />
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">About the Author</h3>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 overflow-hidden">
              <Image
                src={`/smiling-golden-retriever-profile.png?height=48&width=48&query=profile picture of ${author}`}
                alt={author}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-800">{author}</p>
              <p className="text-sm text-gray-500">SEO Specialist</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            An experienced SEO specialist with over 10 years of experience in digital marketing and search engine
            optimization.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Posts</h3>
          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-start cursor-pointer group"
                onClick={() => onRelatedPostClick(post.id)}
              >
                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={post.imageUrl || "/placeholder.svg"}
                    alt={post.title}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-800 group-hover:text-[#0084FF] transition-colors">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
