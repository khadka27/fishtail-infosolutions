

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, User, Clock } from "lucide-react";

interface BlogPostCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: any;
  onClick: (id: string) => void;
  category?: string;
  readTime?: string;
  author?: string;
  comments?: number;
}

class BlogPostCard extends React.Component<BlogPostCardProps> {
  state = {
    isHovered: false,
  };

  setIsHovered = (value: boolean) => {
    this.setState({ isHovered: value });
  };

  render() {
    const {
      id,
      title,
      date,
      excerpt,
      imageUrl,
      onClick,
      category = "General",
      readTime = "5 min read",
      author = "Admin",
      comments = 0,
    } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
        onMouseEnter={() => this.setIsHovered(true)}
        onMouseLeave={() => this.setIsHovered(false)}
        onClick={() => onClick(id)}
      >
        <div className="md:w-1/3 relative overflow-hidden">
          <div className="absolute top-2 left-2 z-10 bg-[#0084FF] text-white text-xs px-2 py-1 rounded-full">
            {category}
          </div>
          <motion.div
            className="h-48 ml-10 md:h-40 w-80 relative"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              height={100}
              width={200}
              className="object-cover"
              
              // sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>

        <div className="md:w-2/3 p-5 md:p-6 flex flex-col">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 group-hover:text-[#0084FF] transition-colors">
            {title}
          </h2>

          <div className="flex flex-wrap items-center text-gray-500 text-xs gap-x-3 gap-y-1 mb-3">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-3 w-3 mr-1" />
              <span>{comments} comments</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 flex-grow">{excerpt}</p>

          <div className="inline-flex items-center text-[#0084FF] text-sm font-medium">
            Continue reading
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex ml-2"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPostCard;
