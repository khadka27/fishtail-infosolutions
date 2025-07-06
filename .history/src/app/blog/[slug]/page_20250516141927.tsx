import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, MessageSquare } from "lucide-react";
import BlogPageComponent from "@/Components/blog-page";
import BlogPostClientInteractions from "@/Components/BlogPostClientInteractions";
import ProgressBar from "@/Components/progress-bar";
// import TableOfContents from "@/Components/table-of-contents";
// import CommentForm from "@/Components/comment-form";
import type { Metadata } from "next";


// Sample blog posts data with enhanced metadata
const blogPosts = [
  {
    id: "search-engine-submission",
    title: "Is Search Engine Submission Necessary?",
    description:
      "Learn why search engine submission isn't necessary in modern SEO and how search engines discover and index your content naturally.",
    date: "April 17, 2023",
    author: "John Smith",
    readTime: "5 min read",
    category: "SEO",    
    image: "/Image/Is-Search-Engine-Submission-Necessary.png",
  },
  {
    id: "inbound-linking",
    title: "Can Any Inbound Linking Hurt My Ranking?",
    description:
      "Discover the truth about inbound linking and how it affects your search ranking. Learn why quality matters more than quantity.",
    date: "May 22, 2023",
    author: "Jane Doe",
    readTime: "4 min read",
    category: "Link Building",
    image: "/Image/Can-Link-Building-Hurt-Your-SEO.webp",
  },
  {
    id: "anchor-text",
    title: "The Importance of Anchor Text in Back-links",
    description:
      "Understand how anchor text in backlinks impacts your SEO strategy and why it's crucial for improving your search engine rankings.",
    date: "June 10, 2023",
    author: "Mike Johnson",
    readTime: "6 min read",
    category: "Link Building",
    image: "/Image/Anchor-Text.jpg",
  },
  {
    id: "absolute-vs-relative-links",
    title: "Absolute Links vs. Relative Links – SEO Value",
    description:
      "Compare absolute and relative links and learn which provides better SEO value for your website's internal linking strategy.",
    date: "July 5, 2023",
    author: "Sarah Williams",
    readTime: "7 min read",
    category: "Technical SEO",
    image: "/Image/absolutevsrelative.png",
  },
];

async function getPost(slug: string) {
  return blogPosts.find((post) => post.id === slug);
}

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const metadata: Metadata = {
    metadataBase: new URL("https://your-domain.com"),
    title: `${post.title} | SEO Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    publisher: "Fishtail Info Solutions",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
      creator: "@yourtwitterhandle",
    },
  };

  return metadata;
}

// Enhanced loading component
function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="w-16 h-16 border-4 border-[#0084FF] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-gray-600 font-medium">Loading blog post...</p>
    </div>
  );
}

// Blog post header component
function BlogPostHeader({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <Link
          href="/blog"
          className="inline-flex items-center text-[#0084FF] hover:text-[#003C8F] transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to all posts
        </Link>
      </div>

      <div className="relative h-[300px] md:h-[400px] mb-6 rounded-xl overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg?height=400&width=800"}
          alt={post.title}
          height={300}
          width={400}
          className="mt-100"
          
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="inline-block px-3 py-1 bg-[#0084FF] text-white text-xs font-medium rounded-full mb-3">
            {post.category}
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center text-gray-500 text-sm gap-x-4 gap-y-2 mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1 text-[#0084FF]" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1 text-[#0084FF]" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1 text-[#0084FF]" />
          <span>{post.readTime}</span>
        </div>
        <div className="flex items-center">
          <MessageSquare className="h-4 w-4 mr-1 text-[#0084FF]" />
          <span>0 comments</span>
        </div>
      </div>

      <div className="bg-[#F5F5F5] p-4 rounded-lg mb-8 text-gray-700 italic">
        {post.description}
      </div>
    </div>
  );
}

// Enhanced blog post content component
function BlogPost({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white min-h-screen">
      {/* Add ProgressBar at the top of the page */}
      <ProgressBar />

      <BlogPostHeader post={post} />

      <div className="flex flex-col lg:flex-row gap-8">
       
        {/* <div className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-8">
            <TableOfContents />
          </div>
        </div> */}

        <div className="flex-1">
          {/* Add BlogPostClientInteractions for like, bookmark, share */}
          <BlogPostClientInteractions postId={post.id} title={post.title} />

          <div className="prose prose-blue max-w-none">
            <BlogPageComponent />
          </div>

          

          
              
        </div>
      </div>
    </div>
  );
}

// Page component
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  return (
    <Suspense fallback={<Loading />}>
      <BlogPost post={post} />
    </Suspense>
  );
}
