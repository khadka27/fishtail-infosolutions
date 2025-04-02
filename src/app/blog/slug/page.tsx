import { notFound } from "next/navigation";
import BlogPageComponent from "@/Components/blog-page";
import { Suspense } from "react";

// Sample blog posts data (simplified for metadata only)
const blogPosts = [
  {
    id: "search-engine-submission",
    title: "Is Search Engine Submission Necessary?",
    description:
      "Learn why search engine submission isn't necessary in modern SEO and how search engines discover and index your content naturally.",
  },
  {
    id: "inbound-linking",
    title: "Can Any Inbound Linking Hurt My Ranking?",
    description:
      "Discover the truth about inbound linking and how it affects your search ranking. Learn why quality matters more than quantity.",
  },
  {
    id: "anchor-text",
    title: "The Importance of Anchor Text in Back-links",
    description:
      "Understand how anchor text in backlinks impacts your SEO strategy and why it's crucial for improving your search engine rankings.",
  },
  {
    id: "absolute-vs-relative-links",
    title: "Absolute Links vs. Relative Links – SEO Value",
    description:
      "Compare absolute and relative links and learn which provides better SEO value for your website's internal linking strategy.",
  },
];

// Get blog post by slug
async function getPost(slug: string) {
  // In a real app, this would be a database or API call
  return blogPosts.find((post) => post.id === slug);
}

// Generate static params to pre-render pages
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | SEO Blog`,
    description: post.description,
  };
}

// Loading component for Suspense
function Loading() {
  return <div className="p-4">Loading blog post...</div>;
}

// Blog post content component
function BlogPost({ post }: { post: (typeof blogPosts)[0] }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.description}</p>
      <BlogPageComponent />
    </div>
  );
}

// Page component
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <BlogPost post={post} />
    </Suspense>
  );
}
