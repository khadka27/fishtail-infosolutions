import { Suspense } from "react";
import BlogPageComponent from "@/Components/blog-page";

// Sample blog posts data

// Categories for filter

// Loading component
function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-16 h-16 border-4 border-[#0084FF] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600 font-medium">Loading blog posts...</p>
    </div>
  );
}

// Blog list component

// Page component
export default function BlogPage() {
  return (
    <Suspense fallback={<Loading />}>
      <BlogPageComponent />
    </Suspense>
  );
}
