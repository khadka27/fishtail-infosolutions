"use client"

import type React from "react"
import { useState } from "react"

interface BlogPostClientInteractionsProps {
  initialBookmarkState: boolean
}

const BlogPostClientInteractions: React.FC<BlogPostClientInteractionsProps> = ({ initialBookmarkState }) => {
  const [bookmarked, setBookmarked] = useState(initialBookmarkState)
  const [showShareOptions, setShowShareOptions] = useState(false)

  const handleBookmark = () => {
    setBookmarked(!bookmarked)

    // Show feedback message
    if (!bookmarked) {
      const message = document.createElement("div")
      message.className =
        "fixed bottom-4 right-4 bg-[#0084FF] text-white px-4 py-2 rounded-lg shadow-lg z-50 opacity-0 transition-opacity duration-300"
      message.textContent = "Post saved to your bookmarks"
      document.body.appendChild(message)

      // Fade in
      setTimeout(() => {
        message.classList.add("opacity-100")
      }, 10)

      // Fade out and remove
      setTimeout(() => {
        message.classList.remove("opacity-100")
        message.classList.add("opacity-0")

        message.addEventListener("transitionend", () => {
          if (document.body.contains(message)) {
            document.body.removeChild(message)
          }
        })
      }, 3000)
    }
  }

  const shareVia = (platform: string) => {
    // In a real app, you would implement actual sharing functionality
    console.log(`Sharing via ${platform}`)
    setShowShareOptions(false)

    // Show feedback message
    const message = document.createElement("div")
    message.className =
      "fixed bottom-4 right-4 bg-[#0084FF] text-white px-4 py-2 rounded-lg shadow-lg z-50 opacity-0 transition-opacity duration-300"
    message.textContent = `Shared via ${platform}`
    document.body.appendChild(message)

    // Fade in
    setTimeout(() => {
      message.classList.add("opacity-100")
    }, 10)

    // Fade out and remove
    setTimeout(() => {
      message.classList.remove("opacity-100")
      message.classList.add("opacity-0")

      message.addEventListener("transitionend", () => {
        if (document.body.contains(message)) {
          document.body.removeChild(message)
        }
      })
    }, 3000)
  }

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions)
  }

  return (
    <div className="flex items-center space-x-4">
      <button onClick={handleBookmark}>{bookmarked ? "Unbookmark" : "Bookmark"}</button>

      <button onClick={toggleShareOptions}>Share</button>

      {showShareOptions && (
        <div className="absolute bottom-12 right-0 bg-white border rounded shadow-md">
          <button onClick={() => shareVia("Facebook")} className="block px-4 py-2 hover:bg-gray-100">
            Facebook
          </button>
          <button onClick={() => shareVia("Twitter")} className="block px-4 py-2 hover:bg-gray-100">
            Twitter
          </button>
          <button onClick={() => shareVia("LinkedIn")} className="block px-4 py-2 hover:bg-gray-100">
            LinkedIn
          </button>
        </div>
      )}
    </div>
  )
}

export default BlogPostClientInteractions
