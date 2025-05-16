"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/Components/ui/button"
import { Textarea } from "@/Components/ui/textarea"
import { Input } from "@/Components/ui/input"

interface CommentFormProps {
  postId: string
}

export default function CommentForm({ postId }: CommentFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, you would submit to an API
      console.log("Submitting comment for post:", postId, { name, email, comment })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setIsSuccess(true)
      setName("")
      setEmail("")
      setComment("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting comment:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Leave a Comment</h3>

      {isSuccess && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md">
          Your comment has been submitted successfully and is awaiting moderation.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email (will not be published)"
            />
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Comment *
          </label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            placeholder="Your comment"
            rows={5}
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" id="save-info" className="rounded text-[#0084FF]" />
          <label htmlFor="save-info">Save my name and email for the next time I comment</label>
        </div>

        <Button type="submit" disabled={isSubmitting} className="bg-[#0084FF] hover:bg-[#0066CC] text-white">
          {isSubmitting ? "Submitting..." : "Post Comment"}
        </Button>
      </form>
    </div>
  )
}
