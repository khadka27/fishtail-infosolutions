import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPageComponent from "@/Components/blog-page";

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

// For Next.js App Router, use specific params type
type PageProps = {
  params: {
    slug: string;
  };
};

// Generate metadata for the page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.id === params.slug);

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

// Page component using the same PageProps type
export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((post) => post.id === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPageComponent />;
}
