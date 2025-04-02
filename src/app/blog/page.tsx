// src/app/blog/page.tsx
import type { Metadata } from "next";
import BlogPageComponent from "@/Components/blog-page";

export const metadata: Metadata = {
  title: "Blog | SEO and Digital Marketing Insights",
  description:
    "Explore our latest articles on search engine optimization, digital marketing strategies, and industry best practices to improve your online presence.",
};

export default function BlogPage() {
  return <BlogPageComponent />;
}
