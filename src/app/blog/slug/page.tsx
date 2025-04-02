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
}): Promise<Metadata> {
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

// Page component without custom type declarations
export default function BlogPostPage({ params }: { readonly params: { readonly slug: string } }) {
  const post = blogPosts.find((post) => post.id === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPageComponent />;
}
