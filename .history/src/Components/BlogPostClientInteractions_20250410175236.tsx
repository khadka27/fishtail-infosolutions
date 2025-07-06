/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Heart, Bookmark, Share2 } from "lucide-react";

interface BlogPostClientInteractionsProps {
  postId: string;
  title: string;
}

export default function BlogPostClientInteractions({
  postId,
  title,
}: BlogPostClientInteractionsProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(12);
  const [bookmarked, setBookmarked] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);

    // Show feedback message
    if (!bookmarked) {
      const message = document.createElement("div");
      message.className =
        "fixed bottom-4 right-4 bg-[#0084FF] text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in";
      message.textContent = "Post saved to your bookmarks";
      document.body.appendChild(message);

      setTimeout(() => {
        message.classList.add("animate-fade-out");
        setTimeout(() => document.body.removeChild(message), 500);
      }, 3000);
    }
  };

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  const shareVia = (platform: string) => {
    // In a real app, you would implement actual sharing functionality
    console.log(`Sharing via ${platform}`);
    setShowShareOptions(false);

    // Show feedback message
    const message = document.createElement("div");
    message.className =
      "fixed bottom-4 right-4 bg-[#0084FF] text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in";
    message.textContent = `Shared via ${platform}`;
    document.body.appendChild(message);

    setTimeout(() => {
      message.classList.add("animate-fade-out");
      setTimeout(() => document.body.removeChild(message), 500);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-end gap-4 mb-6">
      <button
        onClick={handleLike}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
          liked
            ? "bg-red-100 text-red-500"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        aria-label={liked ? "Unlike this post" : "Like this post"}
      >
        <Heart className={`h-4 w-4 ${liked ? "fill-red-500" : ""}`} />
        <span className="text-sm font-medium">{likeCount}</span>
      </button>

      <button
        onClick={handleBookmark}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
          bookmarked
            ? "bg-[#0084FF]/10 text-[#0084FF]"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        aria-label={bookmarked ? "Remove from bookmarks" : "Save to bookmarks"}
      >
        <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-[#0084FF]" : ""}`} />
        <span className="text-sm font-medium">Save</span>
      </button>

      <div className="relative">
        <button
          onClick={handleShare}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
          aria-label="Share this post"
          aria-expanded={showShareOptions}
        >
          <Share2 className="h-4 w-4" />
          <span className="text-sm font-medium">Share</span>
        </button>

        {showShareOptions && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
            {["Twitter", "Facebook", "LinkedIn", "Email", "Copy Link"].map(
              (platform) => (
                <button
                  key={platform}
                  onClick={() => shareVia(platform)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {platform}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
