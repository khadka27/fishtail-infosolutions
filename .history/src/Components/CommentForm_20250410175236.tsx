"use client";

import type React from "react";

import { useState } from "react";

interface CommentFormProps {
  postId: string;
}

export default function CommentForm({ postId }: CommentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!comment.trim()) newErrors.comment = "Comment is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Comment submitted:", { postId, name, email, comment });
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form after success
      setName("");
      setEmail("");
      setComment("");

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="mb-12">
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 animate-fade-in">
          <p className="font-medium">Thank you for your comment!</p>
          <p className="text-sm">
            Your comment has been submitted and will appear after moderation.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comment"
              rows={5}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50 ${
                errors.comment ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.comment && (
              <p className="mt-1 text-sm text-red-500">{errors.comment}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="save-info"
              className="h-4 w-4 text-[#0084FF] border-gray-300 rounded focus:ring-[#0084FF]"
            />
            <label htmlFor="save-info" className="ml-2 text-sm text-gray-600">
              Save my name and email for the next time I comment
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-[#0084FF] text-white rounded-lg hover:bg-[#003C8F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0084FF]/50 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Post Comment"}
            </button>
          </div>
        </form>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Recent Comments (0)
        </h3>
        <p className="text-gray-500 italic">
          Be the first to comment on this article!
        </p>
      </div>
    </div>
  );
}
