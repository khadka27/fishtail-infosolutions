import type { Metadata } from "next"
import WebDesignServices from "@/Components/web-design-services"

// Add metadata for the web design services page
export const metadata: Metadata = {
  title: "Professional Web Design Services | Custom Website Development",
  description:
    "Transform your online presence with our professional web design services. We create responsive, user-friendly websites tailored to your brand, optimized for performance and conversions.",
}

export default function WebDesignPage() {
  return (
    <main>
      <WebDesignServices />
    </main>
  )
}

