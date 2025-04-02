import type { Metadata } from "next"
import ContentMarketingStrategy from "@/Components/content-marketing"

// Add metadata for the content marketing strategy page
export const metadata: Metadata = {
  title: "Content Marketing Strategy & Services | Drive Engagement & Conversions",
  description: "Elevate your brand with our data-driven content marketing strategies. We create compelling blogs, articles, videos, and social media content that attracts, engages, and converts your target audience.",
}

export default function ContentMarketingPage() {
  return (
    <main>
      <ContentMarketingStrategy />
    </main>
  )
}
